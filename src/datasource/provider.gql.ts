import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';
import { comparePassword } from '../utils/passwords';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

export const providerTypedef = gql`
  input LoginaInput {
    email: String!
    password: String!
  }

  type LoginResponse {
    access_token: String
    refresh_token: String
    status: Boolean
  }

  type RefreshtokenResponseType {
    access_token: String
  }

  type Mutation {
    login(data: LoginaInput!): LoginResponse
    refreshToken: RefreshtokenResponseType
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const providerResolvers: Resolvers = {
  Mutation: {
    /**
     * ?เข้าสู่ระบบ
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    async login(p, args, ctx) {
      const finduser = await ctx.prisma.user.findUnique({
        where: { email: args.data.email },
      });

      if (!finduser) {
        throw new GraphQLError('User not found.', {
          extensions: {
            code: 'USER_NOT_FOUND',
            argumentName: 'email',
          },
        });
      }
      const isMatch = await comparePassword(
        args.data.password,
        finduser.password,
      );
      if (!isMatch) {
        throw new GraphQLError('Wrong password.', {
          extensions: {
            code: 'WRONG_PASSWORD',
            argumentName: 'password',
          },
        });
      }

      const credential = {
        id: finduser.id,
        roleId: finduser.roleId,
        compayId: finduser.companyId,
      };

      const secret = process.env.JWT_SECRET || 'secret';
      const expire = process.env.JWT_EXPIRES_IN || '15m';
      const access_token = await jwt.sign(credential, secret, {
        expiresIn: expire,
      });
      const refresh_token = await jwt.sign(credential, secret, {
        expiresIn: '7d',
      });

      return {
        access_token,
        refresh_token,
        status: true,
      };
    },
    /**
     * ?รีเฟรชโทเค็น
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    async refreshToken(p, args, ctx) {
      const secret = process.env.JWT_SECRET || 'secret';
      const expire = process.env.JWT_EXPIRES_IN || '15m';
      try {
        const tsplit = ctx.token?.split(' ');
        const val = tsplit ? tsplit[1] : '';
        var decoded = jwt.verify(val, secret);
        console.log('[gql] : refreshToken', decoded);
      } catch (error) {
        throw new GraphQLError('Session expired', {
          extensions: {
            code: 'SESSION_EXPIRED',
            http: {
              status: 401,
            },
          },
        });
      }

      const creadential = _.omit(decoded as object, ['iat', 'exp']);

      const access_token = jwt.sign(creadential, secret, {
        expiresIn: expire,
      });

      return {
        access_token,
      };
    },
  },
};
