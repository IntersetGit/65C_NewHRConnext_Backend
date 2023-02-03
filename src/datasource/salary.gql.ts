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

  input provident_logInput {
    id: ID
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company:  Float
    mas_all_collectId: String
  }

  type provident_log {
    id: ID
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company:  Float
    mas_all_collectId: String
  }

  input bookbank_logInput {
    id: ID
    date: Date
    mas_bankId: String
    bank_number: String
    all_collectId: String
    base_salary: Float
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company:  Float
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
    Salary: salary
  }

  input salaryInput {
    id: ID
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
    mas_income_typeId: String
    date: Date 
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
    mas_income_typeId: String
    date: Date 
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
  type book_bank_logResponseType {
    message: String
    status: Boolean
  }
  type Query {
    salary(userId: String, mas_monthId: String, mas_yearsId: String): [salary]
    bookbank_log(id: String): [bookbank_log]
    provident_log(userId:String):[provident_log]
  }
  type Mutation {
    Createsalary(data: salaryInput): createsalaryResponseType
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
    async provident_log(parant: any, args: any, ctx: any) {
      const filter = args?.userId ? args.userId : undefined;
      const result = await ctx.prisma.provident_log.findMany({
        include: { User: true, mas_all_collect: true },
        where: {
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
          month_number: args.data?.month_number as number,
          name: args.data?.name as string,
        },
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async Createsalary(p: any, args: any, ctx: any) {
      const gensalaryID = v4()
      const createsalary = await ctx.prisma.salary.create({
        data: {
          id: gensalaryID,
          mas_monthId: args.data?.mas_monthId as string,
          mas_yearsId: args.data?.mas_yearsId as string,
          commission: args.data?.commission as number,
          position_income: args.data?.position_income as number,
          ot: args.data?.ot as number,
          bonus: args.data?.bonus as number,
          special_income: args.data?.special_income as number,
          other_income: args.data?.other_income as number,
          travel_income: args.data?.travel_income as number,
          bursary: args.data?.bursary as number,
          welfare_money: args.data?.welfare_money as number,
          vatper: args.data?.vatper as number,
          ss_per: args.data?.ss_per as number,
          vat: args.data?.vat as number,
          social_security: args.data?.social_security as number,
          miss: args.data?.miss as number,
          ra: args.data?.ra as number,
          late: args.data?.late as number,
          other: args.data?.other as number,
          provident_employee: args.data?.provident_employee as number,
          provident_company: args.data?.provident_company as number,
          total_income: args.data?.total_income as number,
          total_expense: args.data?.total_expense as number,
          net: args.data?.net as number,
          userId: args.data?.userId,
          bookbank_logId: args.data?.bookbank_logId,
          mas_income_typeId: args.data?.mas_income_typeId,
          date: new Date(args.data?.date)

        }
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async Createbookbank(p: any, args: any, ctx: any) {
      const bookbankID = v4();
      const providentID = v4()
      const createbook_bank = await ctx.prisma.bookbank_log.create({
        data: {
          id: bookbankID,
          date: new Date(args.data?.date),
          mas_bankId: args.data?.mas_bankId,
          bank_number: args.data?.bank_number as number,
          all_collectId: args.data?.all_collectId,
          base_salary: args.data?.base_salary as number,
          userId: args.data?.userId,
          provident_log: {
            create: {
              id : providentID,
              userId: args.data?.userId,
              provident_date: new Date(args.data?.date),
              pro_employee: args.data?.pro_employee as number,
              pro_company: args.data?.pro_company as number,
              mas_all_collectId: args.data?.mas_all_collectId,
              // bookbank_logId : bookbankID
            }
          }
        }
      });
      return {
        message: 'success',
        status: true,
      }
    }

  },
};
const resolversComposition = {
  'Query.salary': [authenticate()],
  'Query.bookbank_log': [authenticate()],
  'Mutation.Createmonth': [authenticate()],
  'Mutation.Createyears': [authenticate()],
  'Mutation.Createsalary': [authenticate()],
  // 'Mutation.deleteAccountUser': [authenticate()],
};

export const salaryResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
