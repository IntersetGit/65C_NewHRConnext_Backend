import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';
import { comparePassword } from '../utils/passwords';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import { authenticate } from '../middleware/authenticatetoken';
import { composeResolvers } from '@graphql-tools/resolvers-composition';

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

  type ValidateRoute {
    acess: Boolean
    path: String
  }

  type RefreshtokenResponseType {
    access_token: String
  }

  type Mutation {
    login(data: LoginaInput!): LoginResponse
    validateRoute(args: String!): ValidateRoute
    refreshToken: RefreshtokenResponseType
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers: Resolvers = {
  Mutation: {
    /**
     * ?เข้าสู่ระบบ
     */
    async login(p, args, ctx) {
      const finduser = await ctx.prisma.user.findUnique({
        where: { email: args.data.email },
        select: {
          id: true,
          roleId: true,
          isOwner: true,
          password: true,
          companyBranch: {
            select: {
              id: true,
              company: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
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
        isOwner: finduser.isOwner,
        compayId: finduser.companyBranch?.company?.id,
        branchId: finduser.companyBranch?.id,
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
     */
    async refreshToken(p, args, ctx) {
      const secret = process.env.JWT_SECRET || 'secret';
      const expire = process.env.JWT_EXPIRES_IN || '15m';
      try {
        const tsplit = ctx.token?.split(' ');
        const val = tsplit ? tsplit[1] : '';
        var decoded = jwt.verify(val, secret);
        //console.log('[gql] : refreshToken', decoded);
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
    /**
     * ?Validate company sub path
     */
    async validateRoute(p, { args }, ctx) {
      if (!args)
        throw new GraphQLError('Argument must be valid', {
          extensions: {
            code: 'INVALID_VALUE',
            http: {
              status: 400,
            },
          },
        });
      const result = await ctx.prisma.user.findUnique({
        where: {
          id: ctx.currentUser?.id,
        },
        select: {
          companyBranch: {
            select: {
              company: {
                select: {
                  companyCode: true,
                },
              },
            },
          },
        },
      });

      return {
        acess:
          result?.companyBranch?.company?.companyCode === args ? true : false,
        path: args,
      };
    },
  },
};

const resolversComposition = {
  'Mutation.validateRoute': [authenticate()],
};

export const providerResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
