import { Resolvers } from '../generated/graphql';
import { createPassword } from '../utils/passwords';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { GraphQLError } from 'graphql';

export const userTypedef = gql`
  type User {
    email: String
    id: ID!
    profile: Profile
    islogin: Boolean!
    isActive: Boolean!
    isOwner: Boolean!
    lastlogin: Date
    createdAt: Date
    roleId: String
    companyId: String
    role: Role
    positionId: String
    Position: Position
    company: [Company]
    companyBranch: CompanyBranch
    companyBranchId: String
  }

  input RegisterProfileInput {
    firstname: String!
    lastname: String!
    dob: String!
  }

  #สร้าง Type ของการสร้าง account
  input CreateAccountInput {
    email: String!
    password: String!
    firstname: String!
    lastname: String!
    companyCode: String!
    tel: String!
    avatar: String
    dob: String!
    userlimit: Int
    company_name: String!
    company_address: String!
    company_city: String!
    company_state: String!
    company_zip: String!
    company_country: String!
    company_phone: String!
    company_icon: String
  }

  type CreateCompanyResponseType {
    message: String
    status: Boolean
  }

  type Me {
    id: ID!
    email: String
    isOwner: Boolean
    Position: MePositionType
    profile: MeprofileType
    role: Role
    companyBranch: MeCompanyBranch
  }

  type Query {
    users(userid: String): [User]
    verifyCompanycode(companyname: String!): Boolean
    me: Me
  }

  type Mutation {
    createAccount(data: CreateAccountInput!): CreateCompanyResponseType
  }
`;

const resolvers: Resolvers = {
  Query: {
    async users(parent, args, ctx) {
      const filter = args?.userid ? args?.userid : undefined;
      const result = await ctx.prisma.user.findMany({
        include: { profile: true, company: true, Position: true },
        where: {
          companyBranchId: ctx.currentUser?.branchId,
          AND : {  
            profile: {
            firstname_th: { contains: filter },
          }
        }
        },

      });
      return result;
    },
    /**
     * ?ดึงข้อมูลส่วนตัวของผู้ใช้
     * @param parant
     * @param args
     * @param ctx
     * @returns
     */
    async me(parant, args, ctx) {
      const result = await ctx.prisma.user.findUnique({
        select: {
          id: true,
          email: true,
          isOwner: true,
          Position: {
            select: {
              id: true,
              access: true,
              name: true,
            },
          },
          profile: {
            select: {
              firstname_th: true,
              firstname_en: true,
              lastname_en: true,
              lastname_th: true,
              prefix_en: true,
              avatar: true,
              prefix_th: true,
              dob: true,
              gender: true,
              bio: true,
              staff_code: true,
              tel: true,
            },
          },
          role: true,
          companyBranch: {
            select: {
              id: true,
              name: true,
              address: true,
              city: true,
              state: true,
              zip: true,
              country: true,
              createdAt: true,
              company: {
                select: {
                  id: true,
                  name: true,
                  companyCode: true,
                  icon: true,
                },
              },
            },
          },
        },
        where: { id: ctx.currentUser?.id },
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

      if (result?.role?.name === 'Owner') {
        result.Position = {
          name: 'Owner',
          id: 'OWNER_POSITION',
          access: [
            {
              action: 'manage',
              subject: 'all',
            },
          ],
        };
      }

      return result;
    },
    /**
     * ?เช็คข้อมูลซ้ำของรหัสหรือชื่อย่อบริษัท
     * @param p
     * @param args
     * @param ctx
     */
    async verifyCompanycode(p, args, ctx) {
      const checker = await ctx.prisma.company.findMany({
        where: { companyCode: args.companyname },
      });
      return checker.length >= 1 ? false : true;
    },
  },
  Mutation: {
    /**
     * ?สร้าง User
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    async createAccount(p, args, ctx) {
      const genCompanyId = v4();
      const genUserid = v4();
      const genProfileid = v4();
      const genbranchid = v4();

      const createUser = await ctx.prisma.user.create({
        data: {
          id: genUserid,
          email: args.data.email,
          password: await createPassword(args.data.password),
          roleId: 'd0bff324-e70c-494e-b4c3-da220cd0d9af',
          isActive: true,
          isOwner: true,
          islogin: false,
          createdAt: new Date(),
          profile: {
            create: {
              id: genProfileid,
              contract_email: args.data.email,
              firstname_th: args.data.firstname,
              lastname_th: args.data.lastname,
              dob: new Date(args.data.dob),
              tel: args.data.tel,
            },
          },
        },
      });


      const createCompany = await ctx.prisma.company.create({
        data: {
          id: genCompanyId,
          name: args.data.company_name,
          companyCode: args.data.companyCode,
          userlimit: args.data.userlimit as number,
          ownerId: createUser.id,
          icon: args.data.company_icon ? args.data.company_icon : '',
        },
      });

      const createBranch = await ctx.prisma.companyBranch.create({
        data: {
          id: genbranchid,
          isMainbranch: true,
          name: 'สาขาใหญ่',
          city: args.data.company_city,
          address: args.data.company_address,
          zip: args.data.company_zip,
          state: args.data.company_state,
          country: args.data.company_country,
          companyId: createCompany.id,
          tel: args.data.company_phone,
        },
      });

      return {
        message: 'success',
        status: true,
      };
    },

  /**
     * ?สร้าง User ธรรมดา 
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    // async createAccountUser(p, args, ctx) {
    //   const genCompanyId = v4();
    //   const genUserid = v4();
    //   const genProfileid = v4();
    //   const genbranchid = v4();

    //   const createUser = await ctx.prisma.user.create({
    //     data: {
    //       id: genUserid,
    //       email: args.data.email,
    //       password: await createPassword(args.data.password),
    //       roleId: 'd0bff324-e70c-494e-b4c3-da220cd0d9af',
    //       isActive: true,
    //       isOwner: true,
    //       islogin: false,
    //       createdAt: new Date(),
    //       profile: {
    //         create: {
    //           id: genProfileid,
    //           contract_email: args.data.email,
    //           firstname_th: args.data.firstname,
    //           lastname_th: args.data.lastname,
    //           dob: new Date(args.data.dob),
    //           tel: args.data.tel,
    //         },
    //       },
    //     },
    //   });


    //   return {
    //     message: 'success',
    //     status: true,
    //   };
    // },
  },
};

const resolversComposition = {
  'Query.me': [authenticate()],
  'Query.users': [authenticate()],
};


export const userResolvers = composeResolvers(resolvers, resolversComposition);
