import { User } from './../generated/graphql';
import { salary } from './../generated/client/index.d';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

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

  input BankInput {
    id:       ID          
  name:     String

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
    provident_com: Float
    provident_emp: Float
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
    provident_com: Float
    provident_emp: Float
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
    mas_salary_statusId: String      
  provident_date:    Date
  pro_employee:      Float
  pro_company:       Float
  mas_all_collectId: String
            
 
  }
  type salary {
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
    bookbank_logId: String
    bookbank_log: Bookbank_log_type
    mas_income_typeId: String
    date: Date 
    mas_salary_statusId: String
    provident_date:    Date
    pro_employee:      Float
    pro_company:       Float
    mas_all_collectId: String                 
  }

  type Bookbank_log_type { 
  id: ID           
  date:          Date
  mas_bankId:    String
  bank_number:   String         
  all_collectId: String      
  base_salary:   Float
  provident_com: Float           
  provident_emp: Float           
  salary:        [salary] 
  mas_bank:      mas_bank      
  User:          User           
  userId:        String       
  provident_log: [provident_log]
  }

  type mas_month {
    id: ID
    name: String 
    expense_company:[expense_company]
    bookbank_log:[Bookbank_log_type]
    salary:[salary]
  }

  type mas_bank {
    id: ID
    name: String
    expense_company:expense_company
    bookbank_log: Bookbank_log_type
    salary: [salary]
  }

  type expense_company {
    id: ID
    monthId: String
    bankId: String
    date: Date
    vat_per: Float
    social_security:Float
    companyBranchId:String
    salary:[salary]
    Mas_month:mas_month
    mas_bank:mas_bank
    CompanyBranch:CompanyBranch
  }

  type provident_log {
    id: ID
    User: User
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company:Float
    mas_all_collect:mas_all_collect
    mas_all_collectId:String
    bookbank_log:Bookbank_log_type
    bookbank_logId:String
    salary:salary
    salaryId:String
  }

  type mas_all_collect {
    id: ID
    User: User
    userId: String
    date:Date
    income_collect:Float
    vat_collect:Float
    social_secu_collect:Float
    provident_collect_employee:Float
    provident_collect_company:Float
    provident_log:[provident_log]
  }
input ExpenseComInput{
  id: ID           
  bankId:          String         
  date:            Date
  vat_per:         Float
  social_security: Float
  companyBranchId: String     
}

input incometype{
  id:     ID
  name:   String
}

type expense_company {
  id: ID!     
  monthId:         String        
  bankId:          String         
  date:            Date
  vat_per:         Float
  social_security: Float
  companyBranchId: String     
  Salary:          salary
}
type Profile {
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
    user: User
    userId: String
  }
  # type selfsalary{
  #   id: ID!
  #   profile: Profile
  #   base_salary:bookbank_log
  #   salary : salary
  # }

  # type selfsalary{
  #   data_user: User
  #   data_salary: [salary]
  #   base_salary:bookbank_log
  # }


  type data_salary_me{
    email: String
    id: ID!
    profile: Profile
    islogin: Boolean
    isActive: Boolean
    isOwner: Boolean
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
    salary: [salary]
    base_salary:bookbank_log
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
  type SalaryResponseType{
    userId:String
  }
  type book_bank_logResponseType {
    message: String
    status: Boolean
  }
  
  type BankResponseType {
    message: String
    status: Boolean
  }
  type CreateAndUpdateExpenseComResponseType{
    message: String
    status: Boolean
  }

  type incometypeResponseType{
    message: String
    status: Boolean
  }
  
  type Query {
    salary: salary
    bookbank_log(id: String): [bookbank_log]
    provident_log(userId:String):[provident_log]
    datasalary_mee: [data_salary_me]
    # Selfdatasalary: selfsalary
    #Selfdatasalary: selfsalary
    mas_all_collect:mas_all_collect
  }
  type Mutation {
    Createsalary(data: salaryInput): createsalaryResponseType
    Createbookbank(data: bookbank_logInput): createbookbanklogResponseType
    Createyears(data: yearsInput): yearsResponseType
    Createmonth(data: monthInput): monthResponseType
    createBank (data: BankInput) : BankResponseType
    Createincometype(data: incometype) : incometypeResponseType
    CreateAndUpdateExpenseCom(data: ExpenseComInput):CreateAndUpdateExpenseComResponseType

  }
`;

const resolvers: Resolvers = {
  Query: {
    async salary(parant: any, args: any, ctx: any) {      
      const result = await ctx.prisma.salary.findMany({
        include: { User: true, mas_month: true, mas_years: true, bookbank_log: true },
        where: {
          userId: ctx.currentUser?.id,
        },
      });
      return result;
    },


    async datasalary_mee(parant, args, ctx) {
      const getdata = await ctx.prisma.user.findMany({
        include: { profile: true, salary: true },
        where: {
          id: ctx.currentUser?.id
        }
      })
      return getdata
    },



    async mas_all_collect(parant: any,args: any,ctx: any){
      console.log(ctx.currentUser?.id);
      const result = await ctx.prisma.mas_all_collect.findMany({
        where:{
          userId: ctx.currentUser?.id        },
      });
      for (let i = 0; i < result.length; i++) {
        return result[i]
      }

    },

    // async Selfdatasalary(parant, args, ctx) {
    //   const result = await ctx.prisma.user.findUnique({
    //     include: { bookbank_log: true, profile : true, salary:true },
    //     where: {
    //       id: ctx.currentUser?.id
    //     },
    //   });
    //   return result;
    // },

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

    async Createsalary(p: any, args: any, ctx: any) { //สร้าง log สำหรับเงินเดือนจากนั้นเก็บกองทุนไว้ใน provident log จากนั้นเก็บค่าไว้ใน collect
      const gensalaryID = v4()
      const genAllCollectID = v4()

      // const pro_emp = args.data?.provident_employee
      // const pro_com = args.data?.provident_company
      // const createsalary = await ctx.prisma.salary.create({
      //   data: {
      //     id: gensalaryID,
      //     mas_monthId: args.data?.mas_monthId as string,
      //     mas_yearsId: args.data?.mas_yearsId as string,
      //     commission: args.data?.commission as number,
      //     position_income: args.data?.position_income as number,
      //     ot: args.data?.ot as number,
      //     bonus: args.data?.bonus as number,
      //     special_income: args.data?.special_income as number,
      //     other_income: args.data?.other_income as number,
      //     travel_income: args.data?.travel_income as number,
      //     bursary: args.data?.bursary as number,
      //     welfare_money: args.data?.welfare_money as number,
      //     vatper: args.data?.vatper as number,
      //     ss_per: args.data?.ss_per as number,
      //     vat: args.data?.vat as number,
      //     social_security: args.data?.social_security as number,
      //     miss: args.data?.miss as number,
      //     ra: args.data?.ra as number,
      //     late: args.data?.late as number,
      //     other: args.data?.other as number,
      //     provident_employee: pro_emp as number,
      //     provident_company: pro_com as number,
      //     total_income: args.data?.total_income as number,
      //     total_expense: args.data?.total_expense as number,
      //     net: args.data?.net as number,
      //     userId: args.data?.userId,
      //     bookbank_logId: args.data?.bookbank_logId,
      //     mas_income_typeId: args.data?.mas_income_typeId,
      //     date: new Date(args.data?.date),
      //     mas_salary_statusId: args.data?.mas_salary_statusId,
      //     provident_log: {
      //       create : {
      //         id: v4(),
      //         userId: args.data?.userId,
      //         provident_date: new Date(),
      //         pro_employee: pro_emp,
      //         pro_company: pro_com,
      //         mas_all_collectId: args.data?.mas_all_collectId,
      //         // bookbank_logId : bookbankID
      //       }
      //     }

      //   }
      // });
      const chk_collectLog = await ctx.prisma.mas_all_collect.findMany({
        include: { provident_log: true },
        where: {
          userId: args.data?.userId
        },
      });
      if (chk_collectLog.length > 0) {
        console.log(args.data?.userId);
        console.log(args.data)
        
        const UpdateAllCollect = await ctx.prisma.mas_all_collect.update({
          // include: { provident_log: true , User:true },
          data: {
            userId: args.data?.userId,
            date: new Date(args.data?.date),
            income_collect: args.data?.net,
            vat_collect: args.data?.vat,
            social_secu_collect: args.data?.social_security,
            provident_collect_employee: args.data?.provident_employee,
            provident_collect_company: args.data?.provident_company,
          },
          where : {
            id: chk_collectLog[0].id
          },
        });
        return {
          message: 'update success',
          status: true,
        };
      } else {
        // let providentC_emp = args.data?.provident_collect_employee
        const createAllCollect = await ctx.prisma.mas_all_collect.create({
          data: {
            id: genAllCollectID,
            userId: args.data?.userId,
            date: new Date(args.data?.date),
            income_collect: args.data?.net,
            vat_collect: args.data?.vat,
            social_secu_collect: args.data?.social_security,
            provident_collect_employee: args.data?.provident_employee,
            provident_collect_company: args.data?.provident_company,
          }
        })
      }

      return {
        message: 'success',
        status: true,
      };
    },

    async Createbookbank(p: any, args: any, ctx: any) { //สร้าง bookbank 
      const bookbankID = v4();
      // const providentID = v4()
      const createbook_bank = await ctx.prisma.bookbank_log.create({
        data: {
          id: bookbankID,
          date: new Date(args.data?.date),
          mas_bankId: args.data?.mas_bankId,
          bank_number: args.data?.bank_number as number,
          all_collectId: args.data?.all_collectId,
          base_salary: args.data?.base_salary as number,
          userId: args.data?.userId,
          provident_com: args.data?.provident_com, // กองทุนของพนักงาน ตัวเลขเป็น %
          provident_emp: args.data?.provident_emp,// กองทุนของบริษัท ตัวเลขเป็น %
          // provident_log: {
          //   create: {
          //     id: providentID,
          //     userId: args.data?.userId,
          //     provident_date: new Date(args.data?.date),
          //     pro_employee: args.data?.pro_employee as number,
          //     pro_company: args.data?.pro_company as number,
          //     mas_all_collectId: args.data?.mas_all_collectId,
          //     // bookbank_logId : bookbankID
          //   }
          // }
        }
      });
      return {
        message: 'success',
        status: true,
      }
    },

    async createBank(p: any, args: any, ctx: any) { //สร้างธนาคาร
      const genBankID = v4()
      const create_bank = await ctx.prisma.mas_bank.create({
        data: {
          id: genBankID,
          name: args.data?.name as string
        }
      });
      return {
        message: 'success',
        status: true,
      }
    },

    async CreateAndUpdateExpenseCom(p: any, args: any, ctx: any) { //สร้างและอัปเดท expensecom
      const genExpenseID = v4()
      if (args.data?.id) {
        const updateExpenseCom = await ctx.prisma.expense_company.update({
          data: {
            bankId: args.data?.bankId,
            date: new Date(args.data?.date),
            vat_per: args.data?.vat_per as number,
            social_security: args.data?.social_security as number,
            companyBranchId: args.data?.companyBranchId,
          },
          where: { id: args.data.id },
        })
        return {
          message: 'update success',
          status: true,
        }
      }
      const createExpenseCom = await ctx.prisma.expense_company.create({
        data: {
          id: genExpenseID,
          bankId: args.data?.bankId,
          date: new Date(args.data?.date),
          vat_per: args.data?.vat_per as number,
          social_security: args.data?.social_security as number,
          companyBranchId: args.data?.companyBranchId,
        }
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async Createincometype(p: any, args: any, ctx: any) { //สร้างประเภทของรายรับ
      const genIncomeTypeID = v4()
      const createIncomeype = await ctx.prisma.mas_income_type.create({
        data: {
          id: genIncomeTypeID,
          name: args.data?.name
        }
      });
      return {
        message: 'success',
        status: true,
      };
    },

  },
};
const resolversComposition = {
  'Query.salary': [authenticate()],
  'Query.bookbank_log': [authenticate()],
  'Query.mas_all_collect': [authenticate()],
  'Query.datasalary_mee': [authenticate()],
  'Mutation.Createmonth': [authenticate()],
  'Mutation.Createyears': [authenticate()],
  'Mutation.Createsalary': [authenticate()],
  'Mutation.Createbookbank': [authenticate()],
  'Mutation.createBank': [authenticate()],
  'Mutation.CreateAndUpdateExpenseCom': [authenticate()],
  'Mutation.Createincometype': [authenticate()],
  // 'Mutation.deleteAccountUser': [authenticate()],
};

export const salaryResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
