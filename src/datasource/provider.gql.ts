import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';
import { comparePassword } from '../utils/passwords';
import { GraphQLError } from 'graphql';
import { createPassword } from '../utils/passwords';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import { authenticate } from '../middleware/authenticatetoken';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { prisma } from 'src/generated/client';
import { update } from 'lodash';

export const providerTypedef = gql`
  input LoginaInput {
    email: String!
    password: String!
  }
  input changepasswordinput {
    password: String
    newpassword: String
  }
  type changepasswordresponsetype {
    message: String
    status: Boolean
  }
  type LoginResponse {
    access_token: String
    refresh_token: String
    status: Boolean
  }

  type ResponseBranchValidateRouteType {
    companyId: String
    companyName: String
    branchId: String
    branchName: String
  }

  type ValidateRoute {
    acess: Boolean
    path: String
    currentBranch: ResponseBranchValidateRouteType
    reAccess: String
    reFresh: String
  }

  type RefreshtokenResponseType {
    access_token: String
  }

  type Mutation {
    login(data: LoginaInput!): LoginResponse
    validateRoute(args: String!, branch: String): ValidateRoute
    refreshToken: RefreshtokenResponseType
    Changeselfpassword(data: changepasswordinput): changepasswordresponsetype
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
      const finduser = await ctx.prisma.user.findMany({
        take: 1,
        where: { email: args.data.email },
        select: {
          id: true,
          roleId: true,
          isOwner: true,
          password: true,
          companyBranch: {
            select: {
              id: true,
              photo_link: true,
              company: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (finduser.length <= 0) {
        throw new GraphQLError('User not found.', {
          extensions: {
            code: 'USER_NOT_FOUND',
            argumentName: 'email',
          },
        });
      }
      const isMatch = await comparePassword(
        args.data.password,
        finduser[0].password,
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
        id: finduser[0].id,
        roleId: finduser[0].roleId,
        isOwner: finduser[0].isOwner,
        compayId: finduser[0].companyBranch?.company?.id,
        branchId: finduser[0].companyBranch?.id,
        photoLink: finduser[0].companyBranch?.photo_link,
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
    //เปลี่ยนpasswordตัวเอง
    async Changeselfpassword(p, args, ctx) {
      let pw = '';
      const find_user = await ctx.prisma.user.findMany({
        where: {
          //โดยอ้างจาก userid ของtoken ที่ login
          id: ctx.currentUser?.id,
        },
      });
      find_user.forEach((e) => {
        pw = e.password;
      });
      // pw = find_user.password
      const decrypt_pw = await comparePassword(
        args.data?.password as string,
        pw,
      );
      console.log('รหัสผ่าน = ', decrypt_pw);
      //หากถูกต้อง
      if (decrypt_pw === true) {
        const newpassword = await createPassword(
          args.data?.newpassword as string,
        );
        const changepassword = await ctx.prisma.user.update({
          data: {
            password: newpassword as string,
          },
          where: {
            id: ctx.currentUser?.id,
          },
        });
        return {
          message: 'เปลี่ยนรหัสผ่านเรียบร้อย',
          status: true,
        };
      }
      //หากไม่ถูกต้อง
      return {
        message: 'รหัสผ่านของคุณไม่ถูกต้อง',
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
    async validateRoute(p, { args, branch }, ctx) {
      if (!args)
        throw new GraphQLError('Argument must be valid', {
          extensions: {
            code: 'INVALID_VALUE',
            http: {
              status: 400,
            },
          },
        });
      const branchfilter = branch ? branch : null;
      let result = await ctx.prisma.user.findUnique({
        where: {
          id: ctx.currentUser?.id,
        },
        select: {
          id: true,
          roleId: true,
          isOwner: true,
          company: {
            select: {
              id: true,
              name: true,
              companyCode: true,
              branch: {
                select: {
                  id: true,
                  name: true,
                  photo_link: true,
                  isMainbranch: true,
                },
                // where: { isMainbranch: true },
                // take: 1,
              },
            },
            where: { companyCode: args },
          },
          companyBranch: {
            select: {
              id: true,
              name: true,
              photo_link: true,
              company: {
                select: {
                  id: true,
                  name: true,
                  companyCode: true,
                },
              },
            },
          },
        },
      });

      if (!result) {
        throw new GraphQLError('User not found', {
          extensions: {
            code: 'USER_NOT_FOUND',
            http: {
              status: 404,
            },
          },
        });
      }

      // let comp_sort = result.company[0].branch.sort((a,b) => Number(b.isMainbranch) -  Number(a.isMainbranch))

      /**
       * ?Set token ใหม่
       */
      const branchSearch = branchfilter
        ? result.company[0].branch.find((e) => e.id === branchfilter)
        : undefined;
      const credential = {
        id: result?.id,
        roleId: result?.roleId,
        isOwner: result?.isOwner,
        compayId: result?.isOwner
          ? result.company[0].id
          : result?.companyBranch?.company?.id,
        branchId: result?.isOwner
          ? branchSearch
            ? branchSearch.id
            : result.company[0].branch.sort(
                (a, b) => Number(b.isMainbranch) - Number(a.isMainbranch),
              )[0].id
          : result?.companyBranch?.id,
        photoLink: result?.companyBranch?.photo_link,
      };

      const secret = process.env.JWT_SECRET || 'secret';
      const expire = process.env.JWT_EXPIRES_IN || '15m';
      const access_token = await jwt.sign(credential, secret, {
        expiresIn: expire,
      });
      const refresh_token = await jwt.sign(credential, secret, {
        expiresIn: '7d',
      });
      // console.log(result?.company[0].branch[0]);
      return {
        acess: result?.isOwner
          ? result?.company.length > 0
          : result?.companyBranch?.company?.companyCode === args
          ? true
          : false,
        path: args,
        currentBranch: result?.isOwner
          ? {
              branchId: branchSearch
                ? branchSearch.id
                : result.company[0].branch.sort(
                    (a, b) => Number(b.isMainbranch) - Number(a.isMainbranch),
                  )[0].id,
              branchName: branchSearch
                ? branchSearch.name
                : result.company[0].branch.sort(
                    (a, b) => Number(b.isMainbranch) - Number(a.isMainbranch),
                  )[0].name,
              companyName: result.company[0].name,
              companyId: result.company[0].id,
            }
          : {
              branchId: result.companyBranch?.id,
              branchName: result.companyBranch?.name,
              companyId: result.companyBranch?.company?.id,
              companyName: result.companyBranch?.company?.name,
            },
        reAccess: access_token,
        reFresh: refresh_token,
      };
    },
  },
};

const resolversComposition = {
  'Mutation.validateRoute': [authenticate()],
  'Mutation.Changeselfpassword': [authenticate()],
};

export const providerResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
