import { date } from 'zod';
import { Profile, User } from './../generated/graphql';
import { Resolvers } from '../generated/graphql';
import { createPassword } from '../utils/passwords';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { GraphQLError } from 'graphql';
import { createContext } from 'vm';
import { argsToArgsConfig } from 'graphql/type/definition';


export const userTypedef = gql`
type MeCompanyBranch {
    id: ID!
    name: String
    address: String
    city: String
    state: String
    zip: String
    country: String
    createdAt: Date
    updatedAt: Date
    company: MecompanyType
    companyId: String
}

  type User {
    email: String!
    password: String!
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
    RoleCompanyID: String
    Role_Company: Role_Company
    company: [Company]
    companyBranch: CompanyBranch
    companyBranchId: String
  }

  input RegisterProfileInput {
    firstname: String!
    lastname: String!
    dob: String!
  }

  type Profile {
    bio: String
    firstname_th: String
    lastname_th: String
    firstname_en: String
    lastname_en: String
    avatar: String
    dob: Date
    age: String
    relationship: String
    shirt_size: String
    prefix_th: String
    prefix_en: String
    citizen_id: String
    social_id: String
    staff_status: String
    tel: String
    address: String
    gender: String
    staff_code: String
    religion: String
    citizen_addressnumber: String
    citizen_address: String
    citizen_country: String
    citizen_province: String
    citizen_district: String
    citizen_state: String
    citizen_zipcode: String
    citizen_tel: String
    contract_sameCitizen: Boolean
    contract_addressnumber: String
    contract_address: String
    contract_country: String
    contract_province: String
    contract_district: String
    contract_state: String
    contract_zipcode: String
    contract_email: String
    contract_companyemail: String
    social_facebook: String
    social_likedin: String
    social_line: String
    social_telegram: String
    user: User
    userId: String
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

  input CreateAccountUserInput {
    id: ID
    email: String!
    password: String!
    bio: String
    firstname_th: String
    lastname_th: String
    firstname_en: String
    lastname_en: String
    nickname: String
    blood_type: String
    employee_status: String
    start_date_work: Date
    avatar: String
    dob: Date
    age: String
    relationship: String
    shirt_size: String
    prefix_th: String
    prefix_en: String
    citizen_id: String
    social_id: String
    staff_status: String
    tel: String
    address: String
    gender: String
    staff_code: String
    religion: String
    citizen_addressnumber: String
    citizen_address: String
    citizen_country: String
    citizen_province: String
    citizen_district: String
    citizen_state: String
    citizen_zipcode: String
    citizen_tel: String
    contract_sameCitizen: Boolean!
    contract_addressnumber: String
    contract_address: String
    contract_country: String
    contract_province: String
    contract_district: String
    contract_state: String
    contract_zipcode: String
    contract_companyemail: String
    social_facebook: String
    social_likedin: String
    social_line: String
    social_telegram: String
  }

  type CreateCompanyResponseType {
    message: String
    status: Boolean
  }

  type CreateUserResponseType {
    message: String
    status: Boolean
  }

  type Me {
    id: ID!
    email: String
    isOwner: Boolean
    Role_Company: MePositionType
    profile: MeprofileType
    role: Role
    companyBranch: MeCompanyBranch
  }

  type DeleteAccountUserResponseType {
    message: String
    status: Boolean
  }

  type Query {
    users(userid: String): [User]
    verifyCompanycode(companyname: String!): Boolean
    me: Me
  }

  type Mutation {
    createAccount(data: CreateAccountInput!): CreateCompanyResponseType
    createAccountUser(data: CreateAccountUserInput!): CreateUserResponseType
    deleteAccountUser(id: ID!) : DeleteAccountUserResponseType
  }
`;

const resolvers: Resolvers = {
  Query: {
    async users(parent, args, ctx) {
      const filter = args?.userid ? args?.userid : undefined;
      const result = await ctx.prisma.user.findMany({
        include: { profile: true, company: true, Role_Company: true },
        where: {
          companyBranchId: ctx.currentUser?.branchId,
          AND: {
            profile: {
              firstname_th: { contains: filter },
            },
          },
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
          Role_Company: {
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
        result.Role_Company = {
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
          name: 'สำนักงานใหญ่',
          company_type: 'สำนักงานใหญ่',
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
    async createAccountUser(p, args, ctx) {
      const genUserid = v4();
      const genProfileid = v4();
      if (args.data.id) {
        const EditUser = await ctx.prisma.user.update({
          data: {
            email: args.data.email,
            password: await createPassword(args.data.password),
            profile: {
              update: {
                bio: args.data.bio,
                firstname_th: args.data.firstname_th,
                lastname_th: args.data.lastname_th,
                firstname_en: args.data.firstname_en,
                lastname_en: args.data.lastname_en,
                avatar: args.data.avatar,
                dob: new Date(args.data.dob),
                age: args.data.age,
                relationship: args.data.relationship,
                shirt_size: args.data.shirt_size,
                prefix_th: args.data.prefix_th,
                prefix_en: args.data.prefix_en,
                citizen_id: args.data.citizen_id,
                social_id: args.data.social_id,
                staff_status: args.data.staff_status,
                tel: args.data.tel,
                address: args.data.address,
                gender: args.data.gender,
                staff_code: args.data.staff_code,
                religion: args.data.religion,
                citizen_addressnumber: args.data.citizen_addressnumber,
                citizen_address: args.data.citizen_address,
                citizen_country: args.data.citizen_country,
                citizen_province: args.data.citizen_province,
                citizen_district: args.data.citizen_district,
                citizen_state: args.data.citizen_state,
                citizen_zipcode: args.data.citizen_zipcode,
                citizen_tel: args.data.citizen_tel,
                contract_sameCitizen: args.data.contract_sameCitizen,
                contract_addressnumber: args.data.contract_addressnumber,
                contract_address: args.data.contract_address,
                contract_country: args.data.contract_country,
                contract_province: args.data.contract_province,
                contract_district: args.data.contract_district,
                contract_state: args.data.contract_state,
                contract_zipcode: args.data.contract_zipcode,
                contract_email: args.data.email,
                contract_companyemail: args.data.contract_companyemail,
                social_facebook: args.data.social_facebook,
                social_likedin: args.data.social_likedin,
                social_line: args.data.social_line,
                social_telegram: args.data.social_telegram,
              },
            },
          },
          where: { id: args.data.id },
        });
        return {
          message: 'success',
          status: true,
        };
      } else {
        const createUser = await ctx.prisma.user.create({
          data: {
            id: genUserid,
            email: args.data.email,
            password: await createPassword(args.data.password),
            roleId: 'd515bf21-a90e-41e9-b202-8a4d2cdea391',
            isActive: true,
            isOwner: false,
            islogin: false,
            createdAt: new Date(),
            companyBranchId: ctx.currentUser?.branchId,
            profile: {
              create: {
                id: genProfileid,
                bio: args.data.bio,
                firstname_th: args.data.firstname_th,
                lastname_th: args.data.lastname_th,
                firstname_en: args.data.firstname_en,
                lastname_en: args.data.lastname_en,
                avatar: args.data.avatar,
                dob: new Date(args.data.dob),
                age: args.data.age,
                relationship: args.data.relationship,
                shirt_size: args.data.shirt_size,
                prefix_th: args.data.prefix_th,
                prefix_en: args.data.prefix_en,
                citizen_id: args.data.citizen_id,
                social_id: args.data.social_id,
                staff_status: args.data.staff_status,
                tel: args.data.tel,
                address: args.data.address,
                gender: args.data.gender,
                staff_code: args.data.staff_code,
                religion: args.data.religion,
                citizen_addressnumber: args.data.citizen_addressnumber,
                citizen_address: args.data.citizen_address,
                citizen_country: args.data.citizen_country,
                citizen_province: args.data.citizen_province,
                citizen_district: args.data.citizen_district,
                citizen_state: args.data.citizen_state,
                citizen_zipcode: args.data.citizen_zipcode,
                citizen_tel: args.data.citizen_tel,
                contract_sameCitizen: args.data.contract_sameCitizen,
                contract_addressnumber: args.data.contract_addressnumber,
                contract_address: args.data.contract_address,
                contract_country: args.data.contract_country,
                contract_province: args.data.contract_province,
                contract_district: args.data.contract_district,
                contract_state: args.data.contract_state,
                contract_zipcode: args.data.contract_zipcode,
                contract_email: args.data.email,
                contract_companyemail: args.data.contract_companyemail,
                social_facebook: args.data.social_facebook,
                social_likedin: args.data.social_likedin,
                social_line: args.data.social_line,
                social_telegram: args.data.social_telegram,
              },
            },
          },
        });
        return {
          message: 'success',
          status: true,
        };
      }
    },
    async deleteAccountUser(p, args, ctx) {
      const deleteProfile = await ctx.prisma.profile.delete({
        where: {
          userId : args.id,
        }
      }
      );
      const deleteuser = await ctx.prisma.user.delete({
        where: {
          id: args.id,
        }
      })
      return {
        message: 'success',
        status: true,
      };
    },
  },
};

const resolversComposition = {
  'Query.users': [authenticate()],
  'Query.me': [authenticate()],
  'Mutation.createAccountUser': [authenticate()],
  'Mutation.deleteAccountUser': [authenticate()],
};

export const userResolvers = composeResolvers(resolvers, resolversComposition);
