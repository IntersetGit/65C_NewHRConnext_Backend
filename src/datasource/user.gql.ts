import { Resolvers } from '../generated/graphql';
import { createPassword } from '../utils/passwords';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';

export const userTypedef = gql`
  type User {
    email: String
    id: ID!
    profile: Profile
    islogin: Boolean!
    lastlogin: Date
    createdAt: Date
    roleId: String
    companyId: String
    role: Role
    positionId: String
    position: Position
    company: Company
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

  type Query {
    users(userid: String): [User]
    verifyCompanycode(companyname: String!): Boolean
    me: User
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
        include: { profile: true, company: true, position: true },
        where: { id: filter },
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
          position: {
            select: {
              id: true,
              access: true,
              name: true,
            },
          },
          profile: {
            select: {
              firstname: true,
              lastname: true,
              avatar: true,
              prefix: true,
              dob: true,
              gender: true,
              bio: true,
              staff_code: true,
              tel: true,
            },
          },
          role: true,
          company: {
            select: {
              id: true,
              name: true,
              companyCode: true,
              icon: true,
            },
          },
        },
        where: { id: ctx.currentUser?.id },
      });
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
      const createCompany = await ctx.prisma.company.create({
        data: {
          id: genCompanyId,
          name: args.data.company_name,
          companyCode: args.data.companyCode,
          city: args.data.company_city,
          address: args.data.company_address,
          zip: args.data.company_zip,
          state: args.data.company_state,
          phone: args.data.company_phone,
          country: args.data.company_country,
          icon: args.data.company_icon ? args.data.company_icon : '',
        },
      });

      const createUser = await ctx.prisma.user.create({
        data: {
          id: genUserid,
          email: args.data.email,
          password: await createPassword(args.data.password),
          roleId: 'd0bff324-e70c-494e-b4c3-da220cd0d9af',
          islogin: false,
          companyId: createCompany.id,
          createdAt: new Date(),
          profile: {
            create: {
              id: genProfileid,
              firstname: args.data.firstname,
              lastname: args.data.lastname,
              dob: new Date(args.data.dob),
            },
          },
        },
      });

      return {
        message: 'success',
        status: true,
      };
    },
  },
};

const resolversComposition = {
  'Query.me': [authenticate()],
};

export const userResolvers = composeResolvers(resolvers, resolversComposition);
