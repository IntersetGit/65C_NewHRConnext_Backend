import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { GraphQLError } from 'graphql';

export const salaryTypedef = gql`
  input yearsInput {
    id: ID
    name: String
  }
  input monthInput {
    id: ID
    month_number: Int
    name: String
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
    userId: User
  }
  type provident_log {
    id: ID!
    userId: String
    date: Date
    pro_employee: Int
    pro_company:  Int
    mas_all_collectId: String
  }
  type bookbank_log {
    id: ID!
    date: Date
    mas_bankId: String
    bank_number: String
    all_collectId: String
    base_salary: Float
    userId: User
  }
  input bookbank_logInput {
    id: ID!
    date: Date
    mas_bankId: String
    bank_number: String
    all_collectId: String
    base_salary: Float
  }
  input salaryInput {
    id: ID!
    mas_monthId: String
    mas_yearsId: String
    commission: Float
    position_income: Float
    ot: Float
    bonus: Float
    special_income: Float
    other_income: Float
    travel_income: Float
    bursary: Float
    welfare_money: Float
    vat: Float
    social_security: Float
    miss: Float
    ra: Float
    late: Float
    other: Float
    provident_employee: Float
    provident_company: Float
    total_income: Float
    total_expense: Float
    net: Float
    userId: String
    bookbank_logId: String
  }
  type salary {
    id: ID!
    mas_monthId: String
    mas_yearsId: String
    commission: Float
    position_income: Float
    ot: Float
    bonus: Float
    special_income: Float
    other_income: Float
    travel_income: Float
    bursary: Float
    welfare_money: Float
    vatper: Float
    ss_per: Float
    vat: Float
    social_security: Float
    miss: Float
    ra: Float
    late: Float
    other: Float
    provident_employee: Float
    provident_company: Float
    total_income: Float
    total_expense: Float
    net: Float
    userId: String
    bookbank_logId: bookbank_log
  }
  type createsalaryResponseType {
    message: String
    status: Boolean
  }
  type createbookbanklogResponseType {
    message: String
    status: Boolean
  }
  type yearsResponseType {
    message: String
    status: Boolean
  }
  type monthResponseType {
    message: String
    status: Boolean
  }
  type Query {
    salary(userId: String, mas_monthId: String, mas_yearsId: String): [salary]
    bookbank_log(id: String): [bookbank_log]
    provident_log(userId:String):[provident_log]
  }
  type Mutation {
    Createsalary(data: salaryInput!): createsalaryResponseType
    Createbookbank(data: bookbank_logInput): createbookbanklogResponseType
    Createyears(data: yearsInput): yearsResponseType
    Createmonth(data: monthInput): monthResponseType
  }
`;

const resolvers: Resolvers = {
    Query: {
        async salary(parant, args, ctx: any) {
            const filter = args?.userId ? args.userId : undefined;
            const result = await ctx.prisma.salary.findMany({
                include: { User: true, mas_month: true, mas_years: true },
                where: {
                    salary: ctx.currentUser?.userId,
                    mas_monthId: { contains: filter },
                    mas_yearsId: { contains: filter },
                },
            });
            return result;
        },

        async bookbank_log(parant: any, args: any, ctx: any) {
            const filter = args?.userId ? args.userId : undefined;
            const result = await ctx.prisma.bookbank_log.findMany({
                include: { User: true, mas_bank: true },
                where: {
                    userId: ctx.currentUser?.userId,
                    AND: {
                        AND: {
                            years: { contains: filter },
                            month: { contains: filter },
                        },
                    },
                },
            });
            return result;
        },
        async provident_log(parant: any, args: any, ctx: any){
            const filter = args?.userId ? args.userId : undefined;
            const result = await ctx.prisma.provident_log.findMany({
                include: { User: true, mas_all_collect: true },
                where:{
                    userId: ctx.currentUser?.userId,
                }
        })
        return result;
    },
 }, //
    Mutation: {
        async Createmonth(p: any, args: any, ctx: any) {
            const genmonthID = v4();
            const createmonth = await ctx.prisma.mas_month.create({
                data: {
                    id: genmonthID,
                    name: args.data?.name as string,
                },
            });
            return {
                message: 'success',
                status: true,
            };
        },

        async Createyears(p: any, args: any, ctx: any) {
            const genyearsID = v4();
            const createyears = await ctx.prisma.mas_years.create({
                data: {
                    id: genyearsID,
                    name: args.data?.name as string,
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
    'Query.provident_log': [authenticate()],
    'Query.salary': [authenticate()],
    'Query.bookbank_log': [authenticate()],
    'Mutation.Createmonth': [authenticate()],
    'Mutation.Createyears': [authenticate()]
    // 'Mutation.deleteAccountUser': [authenticate()],
};

export const salaryResolvers = composeResolvers(
    resolvers,
    resolversComposition,
);
