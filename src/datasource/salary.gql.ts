
import { Resolvers, User, CompanyBranch } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import dayjs from 'dayjs';
import { profile } from 'console';
import { expense_company, bookbank_log } from '../generated/client/index';
import { string } from 'zod';



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
    id: ID
    name: String
    bank_code: String
  }

  input provident_logInput {
    id: ID
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company: Float
    mas_all_collectId: String
    salaryId: String
  }

  type provident_log {
    id: ID
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company: Float
    mas_all_collectId: String
    salaryId: String
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
    pro_company: Float
    mas_all_collectId: String
    provident_com: Float
    provident_emp: Float
    accept_date: Date
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
    month: String
    year: String
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
    provident_date: Date
    pro_employee: Float
    pro_company: Float
    mas_all_collectId: String
    socialYears:         Float
    vatYears:            Float
    incomeYears:         Float
    mas_bankId: String
    create_by: String  
    create_date: Date     
    update_by: String                  
    update_date: Date
  }
  type salary {
    id: ID
    month: String
    years: String
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
    provident_date: Date
    pro_employee: Float
    pro_company: Float
    mas_all_collectId: String
    socialYears:Float
    vatYears:Float
    incomeYears: Float
    mas_bankId: String
    mas_bank: mas_bank
  }

  type Bookbank_log_type {
    id: ID
    date: Date
    mas_bankId: String
    bank_number: String
    all_collectId: String
    base_salary: Float
    provident_com: Float
    provident_emp: Float
    salary: [salary]
    mas_bank: mas_bank
    User: User
    userId: String
    accept_month:   Int
    accept_years:   Int
    provident_log: [provident_log]
    accept_date: Date
  }

  type mas_month {
    id: ID
    name: String
    expense_company: [expense_company]
    bookbank_log: [Bookbank_log_type]
    salary: [salary]
  }

  type mas_years {
    id:   ID
    name: String
  }

  type mas_bank {
    id: ID
    name: String
    bank_code: String
    expense_company: expense_company
    bookbank_log: Bookbank_log_type
    salary: [salary]
  }

  type expense_company {
    id: ID
    monthId: String
    bankId: String
    date: Date
    vat_per: Float
    ss_per: Float
    companyBranchId: String
    salary: [salary]
    Mas_month: mas_month
    mas_bank: mas_bank
    CompanyBranch: CompanyBranch
  }
  type show_pervsp {
    id: ID
    monthId: String
    bankId: String
    date: Date
    vat_per: Float
    ss_per: Float
    companyBranchId: String
    salary: [salary]
    Mas_month: mas_month
    mas_bank: mas_bank
    CompanyBranch: CompanyBranch
    bookbank_log:[Bookbank_log_type]

  }
  type provident_log {
    id: ID
    User: User
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company: Float
    mas_all_collect: mas_all_collect
    mas_all_collectId: String
    bookbank_log: Bookbank_log_type
    bookbank_logId: String
    salary: salary
    salaryId: String
  }

  type mas_all_collect {
    id: ID
    User: User
    userId: String
    date: Date
    income_collect: Float
    vat_collect: Float
    social_secu_collect: Float
    provident_collect_employee: Float
    provident_collect_company: Float
    provident_log: [provident_log]
  }
  input ExpenseComInput {
    id: ID
    bankId: String
    date: Date
    vat_per: Float
    ss_per: Float
    check_vat: [String]
    exp_com_month: String
    exp_com_years: String
    companyBranchId: String
    cal_date_salary: Date
  }

  input incometype {
    id: ID
    name: String
  }

  type slipresolvers {
    message: String
    status: Boolean!
}

  type expense_company {
    id: ID!
    monthId: String
    bankId: String
    date: Date
    vat_per: Float
    ss_per: Float
    exp_com_month: String
    exp_com_years: String
    check_vat: [String]
    social_security: Float
    companyBranchId: String
    Salary: salary
    cal_date_salary: Date
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

  type data_salary_me {
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
    mas_bank: mas_bank
    bookbank_log: [Bookbank_log_type]
  }

  type mas_salary_status {
  id: ID
  no: Int
  name: String
  salary: [salary]
  }

  input salary_status_input {
  id: ID
  no: Int
  name: String
  }

  type data_salary {
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
    bookbank_log: [Bookbank_log_type]
    Position_user: [Position_user]
    expense_company: [expense_company]
  }
    type position_userr {
    id:ID!
    name:String
    position1_id:String
    position2_id:String
    position3_id:String
    role:String
    user_id:String
    }

  type show_pervspuser {
    base_salary: Float
    vat_per: Float
    ss_per: Float
    provident_emp: Float
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
  type SalaryResponseType {
    userId: String
  }
  type book_bank_logResponseType {
    message: String
    status: Boolean
  }

  type BankResponseType {
    message: String
    status: Boolean
  }
  type CreateAndUpdateExpenseComResponseType {
    message: String
    status: Boolean
  }

  type incometypeResponseType {
    message: String
    status: Boolean
  }

  type DeleteSalaryResponseType {
    message: String
    status: Boolean
  }

  type SalaryStatusResponseType {
    message: String
    status: Boolean
  }

  type DeletebookbankResponseType {
    message: String
    status: Boolean
  }

  type DeleteExpensecomResponseType {
    message: String
    status: Boolean
  }
  type Query {
    salary(userId:String , years: String): data_salary
    salary_inmonthSlip(userId: String, month: String, years: String):[data_salary]
    bookbank_log: [Bookbank_log_type]
    bookbank_log_admin(userId: String): [Bookbank_log_type]
    filter_bookbank_admin(userId: String): [Bookbank_log_type]
    filter_bookbank(userId: String): [Bookbank_log_type]
    provident_log(userId:String):[provident_log]
    mydata_salary(years: String): data_salary
    # datasalary_mee(years: String): data_salary_me
    # Selfdatasalary: selfsalary
    #Selfdatasalary: selfsalary
    mas_all_collectuser: mas_all_collect
    mas_all_collectadmin(userId: String): [mas_all_collect]

    mas_bank(id: String): [mas_bank]
    data_salary(fristname: String ,Position2: String ,Position3: String):[data_salary]
    expense_company(date:String):[expense_company]
    show_pervspUser(date:String , userId: String):[User]
    show_years(name:String):[mas_years]
  }

  type Mutation {
    Createandupdatesalary(data: salaryInput): createsalaryResponseType
    Createandupdatebookbank(data: bookbank_logInput): createbookbanklogResponseType
    Createyears(data: yearsInput): yearsResponseType
    Createmonth(data: monthInput): monthResponseType
    createBank(data: BankInput): BankResponseType
    Createincometype(data: incometype): incometypeResponseType
    CreateAndUpdateExpenseCom(
      data: ExpenseComInput
    ): CreateAndUpdateExpenseComResponseType
    DeleteSalary( salaryid: ID! , userId: String!): DeleteSalaryResponseType
    DeleteExpensecom(id: ID!): DeleteExpensecomResponseType
    Deletebookbank(id: ID!): DeletebookbankResponseType
    CreateSalaryStatus(data: salary_status_input ): SalaryStatusResponseType
  }
`;

const resolvers: Resolvers = {
  Query: {
    async salary(parant: any, args: any, ctx: any) {

      let searchyears = args.years ? args.years : undefined
      const getdata = await ctx.prisma.user.findUnique({
        include: {
          profile: true,
          salary: { where: { years: searchyears } },
          // company: { include: { branch: true } },
          companyBranch: { include: { company: true } },
          Position_user: { include: { mas_positionlevel3: true }, orderBy: { date: 'desc' } },
          // bookbank_log: true
          bookbank_log: { include: { mas_bank: true }, orderBy: { date: 'desc' } }
        },
        where: {
          id: args.userId
        },
      });
      return getdata;
    },

    async show_years(p, args, ctx) {
      let searchY = args.name ? args.name : undefined
      const showYears = await ctx.prisma.mas_years.findMany({
        where: {
          name: searchY
        }
      })
      return showYears
    },

    async expense_company(p, args, ctx) {
      // console.log(ctx.currentUser?.id)
      const date = args?.date
      const month = dayjs(date).format('MM')
      const years = dayjs(date).format('YYYY')
      const getdata = await ctx.prisma.expense_company.findMany({
        include: {
          mas_bank: true
        },
        where: {
          companyBranchId: ctx.currentUser?.branchId,

        },
        orderBy:
        {
          date: "desc",
        },
      });
      return getdata
    },

    async show_pervspUser(p, args, ctx) {
      const date = args?.date ? args?.date : undefined
      const month = dayjs(date).format('MM')
      const years = dayjs(date).format('YYYY')
      const result = await ctx.prisma.user.findMany({
        include: {
          bookbank_log: { include: { mas_bank: true }, take: 1, orderBy: { accept_date: 'desc' }, where: { unix: { lte: dayjs(date).unix() } } },
          companyBranch: { include: { expense_company: { take: 1, orderBy: { date: 'desc' }, where: { unix_date: { lte: dayjs(date).unix() }, AND: { id: ctx.currentUser?.branchId } } } } }
        },
        where: {
          id: args.userId as string
        }
      })
      console.log('unix get = ', dayjs(date).unix());

      return result
    },

    async mas_bank(parant: any, args: any, ctx: any) {
      const result = await ctx.prisma.mas_bank.findMany({
        where: {
          id: args.id,
        },
      });
      return result;
    },

    async mydata_salary(parant, args, ctx) {
      console.log(ctx.currentUser?.id)
      let searchyears = args.years ? args.years : undefined
      const getmydata = await ctx.prisma.user.findUnique({
        include: {
          profile: true,
          salary: { where: { years: searchyears } },
          // company: { include: { branch: true } },
          companyBranch: { include: { company: true } },
          Position_user: { include: { mas_positionlevel3: true }, orderBy: { date: 'desc' } },
          // bookbank_log: true
          bookbank_log: { include: { mas_bank: true }, orderBy: { accept_date: 'desc' } }
        },
        where: {
          id: ctx.currentUser?.id
        },
      });
      return getmydata;
    },

    // async datasalary_mee(p:any, args:any, ctx:any) {  //เรียกดูตามปี
    //   let searchyears = args.years ? args.years : undefined
    //   const getdata = await ctx.prisma.user.findMany({
    //     include: { salary: { where: { years: searchyears }, include: { bookbank_log: true, mas_bank: true, } }, profile: true },
    //     where: {
    //       id: ctx.currentUser?.id,
    //     },
    //   });
    //   return getdata;
    // },

    async salary_inmonthSlip(parant, args, ctx) { // for admin slip สำหรับให้ user เห็น
      const data = await ctx.prisma.user.findMany({
        include: {
          profile: true,
          salary: { where: { month: args.month, AND: { years: args.years } } },
          companyBranch: { include: { company: true, expense_company: true } },
          Position_user: { include: { mas_positionlevel2: true, mas_positionlevel3: true }, orderBy: { date: 'desc' } },
          bookbank_log: { include: { mas_bank: true }, orderBy: { date: 'desc' } },
          mas_all_collect: true
        },
        where: {
          id: args.userId as string,
        }
      });
      return data
    },

    async mas_all_collectuser(parant: any, args: any, ctx: any) {
      const result = await ctx.prisma.mas_all_collect.findMany({
        where: {
          userId: ctx.currentUser?.id,
        },
      });
      for (let i = 0; i < result.length; i++) {
        return result[i];
      }
    },
    async mas_all_collectadmin(parant: any, args: any, ctx: any) {
      const result = await ctx.prisma.mas_all_collect.findMany({
        where: {
          userId: args.userId as string,
        },
      });
      return result

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

    async bookbank_log(parant, args, ctx) {
      // const filter = args?.userId ? args.userId : undefined;
      const result = await ctx.prisma.bookbank_log.findMany({
        include: {
          User: { include: { profile: true, Position_user: { include: { mas_positionlevel3: true } } } },
          mas_bank: true
        },
        where: {
          userId: ctx.currentUser?.id,
        },
        orderBy:
        {
          accept_date: "asc",
        },
      });
      return result; //แสดงข้อมูลโดยล็อคอินด้วย user
    },

    async filter_bookbank(parant, args, ctx) {
      // const filter = args?.userId ? args.userId : undefined;
      let current_time = new Date()
      let current_month = dayjs(current_time).format("MM")
      let current_year = dayjs(current_time).format("YYYY")
      let bb_acp_month = ""
      let bb_acp_year = ""
      let get_bb_before = ""
      const result = await ctx.prisma.bookbank_log.findMany({
        include: {
          mas_bank: true
        }, take: 1,
        where: {
          userId: ctx.currentUser?.id,
          AND: {
            unix: { lte: dayjs(new Date()).unix() }
          }
        },
        orderBy:
        {
          accept_date: "desc",
        },
      });
      return result; //แสดงข้อมูลด้วยการค้นหา user
    },

    async filter_bookbank_admin(parant, args, ctx) {
      // const filter = args?.userId ? args.userId : undefined;
      let current_time = new Date()
      let current_month = dayjs(current_time).format("MM")
      let current_year = dayjs(current_time).format("YYYY")
      let bb_acp_month = ""
      let bb_acp_year = ""
      let get_bb_before = ""
      const result = await ctx.prisma.bookbank_log.findMany({
        include: {
          mas_bank: true
        }, take: 1,
        where: {
          userId: args.userId,
          AND: {
            unix: { lte: dayjs(new Date()).unix() }
          }
        },
        orderBy:
        {
          accept_date: "desc",
        },
      });
      return result; //แสดงข้อมูลด้วยการค้นหา user
    },


    async bookbank_log_admin(parant, args, ctx) {
      // const filter = args?.userId ? args.userId : undefined;
      const result = await ctx.prisma.bookbank_log.findMany({
        include: {
          User: { include: { profile: true, Position_user: { include: { mas_positionlevel3: true } } } },
          mas_bank: true
        },
        where: {
          userId: args.userId,
        },
        orderBy:
        {
          accept_date: "asc",
        },
      });
      return result; //แสดงข้อมูลด้วยการค้นหา user
    },

    async provident_log(parant: any, args: any, ctx: any) {
      const filter = args?.userId ? args.userId : undefined;
      const result = await ctx.prisma.provident_log.findMany({
        include: { User: true, mas_all_collect: true },
        where: {
          userId: ctx.currentUser?.userId,
        },
      });
      return result;
    },

    async data_salary(p, args, ctx) { //เงินเดือนของแต่ละคน
      const search1 = args.fristname ? args.fristname : undefined
      const search2 = args.Position2 ? args.Position2 : undefined
      const search3 = args.Position3 ? args.Position3 : undefined
      let current_time = new Date()
      // let current_month = "3"
      let unix_current = dayjs(current_time).unix()
      console.log('วันปัจจุบัน = ', unix_current);
      let bb_acp_date
      let bb_id = ""

      const getdata = await ctx.prisma.user.findMany({
        include: {
          profile: true,
          role: true,
          Position_user: {
            include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true },
            where: {
              mas_positionlevel2: {
                id: search2
              }, AND: {
                mas_positionlevel3: {
                  id: search3
                }
              }
            },
            orderBy: { date: 'desc' }
          },
          salary: true,
          bookbank_log: { include: { mas_bank: true }, take: 1, orderBy: { accept_date: 'desc' }, where: { unix: { lte: dayjs(new Date()).unix() } } },
          companyBranch: { include: { expense_company: { orderBy: { date: 'desc' } } } }
        },
        where: {
          companyBranchId: ctx.currentUser?.branchId,
          AND: {
            profile: {
              firstname_th: { contains: search1 }
            },
            AND: {
              Position_user: {
                some: {
                  mas_positionlevel2: { id: search2 },
                  AND: { mas_positionlevel3: { id: search3 } }
                },
              },
            },
          },
        },
        orderBy: {
          profile: { staff_code: 'asc' }
        }
      })
      return getdata;

    },
  }, //
  Mutation: {
    /**
     * ?สร้าง User
     * @param p
     * @param args
     * @param ctx
     * @returns
     */


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

    async Createandupdatesalary(p: any, args: any, ctx: any) {
      //สร้าง log สำหรับเงินเดือนจากนั้นเก็บกองทุนไว้ใน provident log จากนั้นเก็บค่าไว้ใน collect

      if (args.data?.id) {
        let date = args.data?.date
        let ThisYear = dayjs(date).format("YYYY")
        let Thismonth = dayjs(date).format("MM")
        const pro_emp = args.data?.provident_employee
        const pro_com = args.data?.provident_company
        const find_salary = await ctx.prisma.salary.findMany({
          where: {
            id: args.data?.id
          }
        })
        // console.log(find_salary)
        let provi_log_id = find_salary[0].provident_logId

        const updatesalary = await ctx.prisma.salary.update({
          data: {
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
            provident_employee: pro_emp as number,
            provident_company: pro_com as number,
            total_income: args.data?.total_income as number,
            total_expense: args.data?.total_expense as number,
            net: args.data?.net as number,
            userId: args.data?.userId,
            bookbank_logId: args.data?.bookbank_logId,
            mas_income_typeId: args.data?.mas_income_typeId,
            date: new Date(args.data?.date),
            mas_salary_statusId: "765d31b6-ab63-11ed-afa1-0242ac120002",
            socialYears: 0 + args.data?.social_security,
            vatYears: 0 + args.data?.vat,
            incomeYears: 0 + args.data?.net,
            month: Thismonth,
            years: ThisYear,
            // create_by: ctx.currentUser?.id,
            // create_date: new Date(),
            update_by: ctx.currentUser?.id,
            update_date: new Date(),
            mas_bankId: args.data?.mas_bankId,
          },
          where: {
            id: args.data?.id
          }
        });

        const updatepro_log = await ctx.prisma.provident_log.update({
          data: {
            pro_employee: pro_emp,
            pro_company: pro_com,
            mas_all_collectId: args.data?.mas_all_collectId,
          },
          where: {
            id: provi_log_id
          }
        })

        const check_all_collect = await ctx.prisma.mas_all_collect.findMany({
          where: {
            userId: args.userId
          }
        })
        console.log(find_salary)
        console.log(check_all_collect)

        let new_income_collet = (check_all_collect[0].income_collect - find_salary[0].net) + args.data?.net
        console.log(new_income_collet)
        let new_vat_collect = (check_all_collect[0].vat_collect - find_salary[0].vat) + args.data?.vat
        console.log(new_vat_collect)
        let new_social_secu = (check_all_collect[0].social_secu_collect - find_salary[0].social_security) + args.data?.social_security
        console.log(new_social_secu)
        let new_pro_emp = (check_all_collect[0].provident_collect_employee - find_salary[0].provident_employee) + pro_emp
        console.log(new_pro_emp);
        let new_pro_com = (check_all_collect[0].provident_collect_company - find_salary[0].provident_company) + pro_com
        console.log(new_pro_com);

        const update_all_collect = await ctx.prisma.mas_all_collect.update({
          data: {
            date: new Date(),
            income_collect: new_income_collet,
            vat_collect: new_vat_collect,
            social_secu_collect: new_social_secu,
            provident_collect_employee: new_pro_emp,
            provident_collect_company: new_pro_com,
          },
          where: {
            userId: args.data.userId,
          },
        });
        return {
          message: 'update success',
          status: true,
        }
      }

      //ถ้าหากไม่มีการส่ง id มาจะให้เป็นการสร้างใหม่
      const gensalaryID = v4();
      const genAllCollectID = v4();
      const providentID = v4()

      // let now = dayjs()
      // console.log(now.format("MM-DD"));

      const chk_collectLog = await ctx.prisma.mas_all_collect.findMany({
        include: { provident_log: true },
        where: {
          userId: args.data?.userId,
        },
      });

      let date = args.data?.date
      let ThisYear = dayjs(date).format("YYYY")
      let Thismonth = dayjs(date).format("MM")
      const chk_salaryYears = await ctx.prisma.salary.findMany({
        include: { provident_log: true },
        where: {
          userId: args.data?.userId,
          AND: {
            years: ThisYear
          }
        },
        orderBy:
        {
          years: "desc",
        },
      });

      const check_bookbank = await ctx.prisma.bookbank_log.findMany({
        take: 1,
        where: {
          userId: args.data.userId,
          AND: {
            unix: { lte: dayjs(new Date()).unix() }
          }
        }, orderBy: {
          date: "desc"
        }
      })
      let bookbank_logId = check_bookbank[0].id //หา bookbank log ของ user คนนั้นจากนั้นให้ insert เข้า salary
      let Base_salary = check_bookbank[0].base_salary
      // const check_user_ex = await ctx.prisma.User.findMany({
      //   where: {
      //     id: args.data.userId

      //   }
      // })
      // const cb = check_user_ex[0].companyBranchId
      // const check_combra = await ctx.prisma.expense_company.findMany({
      //   where: {
      //     companyBranchId: cb
      //   }, orderBy: {
      //     date: "desc"
      //   }
      // })
      // let vat_per = check_combra[0].vat_per ? check_combra[0].vat_per : 0
      // let ss_per = check_combra[0].ss_per ? check_combra[0].ss_per : 0
      // console.log(vat_per);
      // console.log(ss_per);
      let Vat_per = null
      let SS_per = null
      const chk_vatByEXP = await ctx.prisma.expense_company.findMany({ //เช็ค expense company ถ้าหากวันที่คำนวณเงินเดือนยังไมถึงวันที่มีผลให้ใช้ expense company เดิม
        take: 1,
        where: {
          companyBranchId: ctx.currentUser?.branchId,
          AND: {
            unix_date: { lte: dayjs(new Date()).unix() }
          }
        }, orderBy: {
          date: 'desc'
        }
      })

      chk_vatByEXP.forEach((e: any) => {
        Vat_per = e.vat_per
        SS_per = e.ss_per
      })
      console.log(chk_vatByEXP);

      let time
      let result_incomeYears = 0;
      let result_vatYears = 0;
      let result_sosialYears = 0;

      if (chk_salaryYears.length === 0) { //เช็คค่าของเงินเดือนในปีนั้น ถ้า user คนนั้นพึ่งสมัครมาครั้งแรกให้เข้าเงื่อนไขนี้
        const pro_emp = args.data?.provident_employee
        const pro_com = args.data?.provident_company
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
            vatper: Vat_per, // เรียก vat จากปัจจุบันอัตโนมัติ
            ss_per: SS_per,
            vat: args.data?.vat as number,
            social_security: args.data?.social_security as number,
            miss: args.data?.miss as number,
            ra: args.data?.ra as number,
            late: args.data?.late as number,
            other: args.data?.other as number,
            provident_employee: pro_emp as number,
            provident_company: pro_com as number,
            total_income: args.data?.total_income as number,
            total_expense: args.data?.total_expense as number,
            net: args.data?.net as number,
            userId: args.data?.userId,
            bookbank_logId: bookbank_logId,
            mas_income_typeId: args.data?.mas_income_typeId,
            date: new Date(args.data?.date),
            mas_salary_statusId: "765d31b6-ab63-11ed-afa1-0242ac120002",
            socialYears: 0 + args.data?.social_security,
            vatYears: 0 + args.data?.vat,
            incomeYears: 0 + args.data?.net,
            month: Thismonth,
            years: ThisYear,
            create_by: ctx.currentUser?.id,
            create_date: new Date(),
            // update_by: ctx.currentUser?.userId,
            // update_date: new Date(),
            mas_bankId: args.data?.mas_bankId,
            base_salary: Base_salary,
            provident_logId: providentID,
            provident_log: {
              create: {
                id: providentID,
                userId: args.data?.userId,
                provident_date: new Date(),
                pro_employee: pro_emp,
                pro_company: pro_com,
                mas_all_collectId: args.data?.mas_all_collectId,
                // salaryId: 1
                // bookbank_logId : bookbankID
              }
            }

          }
        });
        if (chk_collectLog.length > 0) { //ถ้าหากว่า all_collect มีอยู่แล้วให้ทำการอัปเดท
          console.log(args.data?.userId);
          console.log(args.data);
          let total_income = chk_collectLog[0].income_collect + args.data?.net;
          let total_vat = chk_collectLog[0].vat_collect + args.data?.vat;
          let total_socialS = chk_collectLog[0].social_secu_collect + args.data?.social_security;
          let total_pro_emp = chk_collectLog[0].provident_collect_employee + args.data?.provident_employee;
          let total_pro_com = chk_collectLog[0].provident_collect_company + args.data?.provident_company;
          console.log(
            total_income,
            total_vat,
            total_socialS,
            total_pro_emp,
            total_pro_com,
          );

          const UpdateAllCollect = await ctx.prisma.mas_all_collect.update({
            // include: { provident_log: true , User:true },
            data: {
              userId: args.data?.userId,
              date: new Date(args.data?.date),
              income_collect: total_income,
              vat_collect: total_vat,
              social_secu_collect: total_socialS,
              provident_collect_employee: total_pro_emp,
              provident_collect_company: total_pro_com,
            },
            where: {
              id: chk_collectLog[0].id,
            },
          });
          return {
            message: 'update success',
            status: true,
          };
        } else { //ถ้าหาก all_collect ไม่มีเลย ให้ทำการสร้างขึ้นมาใหม่
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
            },
          });
        }
        return {
          message: 'create salary',
          status: true,
        };
      }

      for (let i = 0; i < chk_salaryYears.length; i++) { // ทำการ loop ค่า เพื่อเช็คยอดเงินประจำปี รายรับรวม ภาษีรวม ประกันสังคมรวม
        // time = dayjs(chk_salaryYears[i].date).format("MM")
        result_incomeYears += chk_salaryYears[i].net
        result_vatYears += chk_salaryYears[i].vat
        result_sosialYears += chk_salaryYears[i].social_security
      }
      // console.log(time)
      console.log(result_incomeYears) // เงินได้สะสม
      console.log(result_vatYears) //ภาษีสะสม
      console.log(result_sosialYears) //ประกันสังคมสะสม

      if (Thismonth != "13") { //ถ้าเดือนนั้นคือเดือน 2-12 .ให้ทำการสร้างเงินสลิปเงินเดือนขึ้นมา
        const pro_emp = args.data?.provident_employee
        const pro_com = args.data?.provident_company
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
            vatper: Vat_per,
            ss_per: SS_per,
            vat: args.data?.vat as number,
            social_security: args.data?.social_security as number,
            miss: args.data?.miss as number,
            ra: args.data?.ra as number,
            late: args.data?.late as number,
            other: args.data?.other as number,
            provident_employee: pro_emp as number,
            provident_company: pro_com as number,
            total_income: args.data?.total_income as number,
            total_expense: args.data?.total_expense as number,
            net: args.data?.net as number,
            userId: args.data?.userId,
            bookbank_logId: bookbank_logId,
            mas_income_typeId: args.data?.mas_income_typeId,
            date: new Date(args.data?.date),
            mas_salary_statusId: "765d31b6-ab63-11ed-afa1-0242ac120002",
            socialYears: result_sosialYears + args.data?.social_security,
            vatYears: result_vatYears + args.data?.vat,
            incomeYears: result_incomeYears + args.data?.net,
            month: Thismonth,
            years: ThisYear,
            create_by: ctx.currentUser?.id,
            create_date: new Date(),
            // update_by: ctx.currentUser?.userId,
            // update_date: new Date(),
            mas_bankId: args.data?.mas_bankId,
            provident_logId: providentID,
            base_salary: Base_salary,
            provident_log: {
              create: {
                id: providentID,
                userId: args.data?.userId,
                provident_date: new Date(),
                pro_employee: pro_emp,
                pro_company: pro_com,
                mas_all_collectId: args.data?.mas_all_collectId,
                // salaryId: 1
                // bookbank_logId : bookbankID
              }
            }

          }
        })
      }

      if (chk_collectLog.length > 0) { //ทำการเช็คถ้าหาก all_collect มี ให้ทำการอัปเดท
        console.log(args.data?.userId);
        console.log(args.data);
        let total_income = chk_collectLog[0].income_collect + args.data?.net;
        let total_vat = chk_collectLog[0].vat_collect + args.data?.vat;
        let total_socialS = chk_collectLog[0].social_secu_collect + args.data?.social_security;
        let total_pro_emp = chk_collectLog[0].provident_collect_employee + args.data?.provident_employee;
        let total_pro_com = chk_collectLog[0].provident_collect_company + args.data?.provident_company;
        console.log(
          total_income,
          total_vat,
          total_socialS,
          total_pro_emp,
          total_pro_com,
        );

        const UpdateAllCollect = await ctx.prisma.mas_all_collect.update({
          // include: { provident_log: true , User:true },
          data: {
            userId: args.data?.userId,
            date: new Date(args.data?.date),
            income_collect: total_income,
            vat_collect: total_vat,
            social_secu_collect: total_socialS,
            provident_collect_employee: total_pro_emp,
            provident_collect_company: total_pro_com,
          },
          where: {
            id: chk_collectLog[0].id,
          },
        });
        return {
          message: 'update success',
          status: true,
        };
      } else { //ถ้าหาก all_collect ไม่มีให้ทำการสร้างขึ้นมาใหม่
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
          },
        });
      }

      return {
        message: 'success',
        status: true,
      };
    },

    async Createandupdatebookbank(p, args, ctx) {
      //สร้าง bookbank
      const bookbankID = v4();
      let date = args.data?.accept_date
      let Acp_year = dayjs(date).year()
      let Acp_month = dayjs(date).month()
      let find_year = dayjs(date).format("YYYY")
      let find_month = dayjs(date).format("MM")
      let Result = dayjs(date).format('YYYY-MM')
      console.log(Result);
      let unix_date_upt = dayjs(new Date(Result)).unix()
      console.log(unix_date_upt);


      // let b = dayjs(New_date).set('D', 1).set('h', 0).set('m', 0).set('s', 0).set('ms', 0)
      // let _date = new Date(b)
      // const providentID = v4()
      if (args.data?.id) {
        // เช็คถ้าหาก วันที่จ่ายเงินมากกว่าวันที่ที่จะอัปเดท ไม่สามารถแก้ไข bookbank log ของเดือนนั้นได้ให้ทำการ Throw Error 
        let unix_acp_bb = 0
        const chk_acp_bb = await ctx.prisma.bookbank_log.findMany({
          where: {
            id: args.data.id,
            AND: {
              unix: { lte: dayjs(new Date()).unix() }
            }
          }
        })
        chk_acp_bb.forEach((e) => {
          unix_acp_bb = e.unix as number
        })
        console.log('วันที่มีผล =', unix_acp_bb);


        const chk_payday = await ctx.prisma.expense_company.findMany({
          take: 1,
          where: {
            companyBranchId: ctx.currentUser?.branchId,
            AND: {
              unix: { gte: dayjs(new Date()).unix() }
            }
          }, orderBy: {
            cal_date_salary: 'asc'
          }
        })
        // console.log(chk_payday);
        chk_payday.forEach((e) => {
          let unix_cal_date = e.unix as number
          console.log('วันที่จ่ายเงิน =', unix_cal_date);
          let result = unix_cal_date - unix_acp_bb
          console.log(result);
          if (result <= 0) {
            throw new Error("ไม่สามารถอัปเดทข้อมูลได้เนื่องจากเลยวันจ่ายเงินเดือนแล้ว ");
          }
        })
        ///////////////////////////////เงื่อนไขนี้คือการอัปเดท /////////////////////////////////////////////////
        const createbook_bank = await ctx.prisma.bookbank_log.update({
          data: {
            date: new Date(args.data?.date),
            mas_bankId: args.data?.mas_bankId,
            bank_number: args.data?.bank_number as string,
            all_collectId: args.data?.all_collectId,
            base_salary: args.data?.base_salary as number,
            userId: args.data?.userId,
            accept_date: new Date(Result),
            accept_month: Acp_month + 1,
            accept_years: Acp_year,
            unix: unix_date_upt,
            provident_com: args.data?.provident_com as number, // กองทุนของพนักงาน ตัวเลขเป็น %
            provident_emp: args.data?.provident_emp as number, // กองทุนของบริษัท ตัวเลขเป็น %
          },
          where: {
            id: args.data?.id,
          },
        });
        const chk_salary = await ctx.prisma.salary.findMany({ //จากนั้นให้ทำการหาา salary ว่าเดือนที่มีการเปลี่ยนแปลง ตรงกับ เงินเดือนมั้ย
          include: {
            User: { include: { companyBranch: true, bookbank_log: { orderBy: { accept_date: 'desc' } } } },
          },
          where: {
            month: find_month,
            AND: {
              years: find_year,
            }
          }
        });
        console.log(chk_salary);

        let New_Pro_emp_per = args.data.provident_emp as number
        let New_Pro_com_per = args.data.provident_com as number
        let New_Pro_Emp = 0
        let New_Pro_Com = 0
        let Total_income = 0
        let Total_expense = 0
        let SocialYears = 0
        let old_net = 0
        let Net = 0
        let IncomeYears = 0
        let VatYears = 0
        ///////////////////////////////
        let base_salary = 0
        let commission = 0
        let position_income = 0
        let ot = 0
        let bonus = 0
        let special_income = 0
        let other_income = 0
        let travel_income = 0
        let bursary = 0
        let welfare_money = 0
        let old_pro_emp = 0
        let old_pro_com = 0
        //EXPENSE
        let social_security = 0 //Social security อันเก่า
        let vat_per = 0
        let ss_per = 0
        let vat = 0
        let miss = 0
        let ra = 0
        let late = 0
        let other = 0
        let NewSocial_security = 0
        let provident_employee = 0
        let provident_company = 0
        let ResultSocialYears = 0
        let ResultIncomeYears = 0
        let ResultVatYears = 0
        let take_arr = []

        for (let i = 0; i < chk_salary.length; i++) {

          let salary_id = chk_salary[i].id
          let user_id = chk_salary[i].userId
          let bb = chk_salary[i].User?.bookbank_log
          commission = chk_salary[i].commission as number
          position_income = chk_salary[i].position_income as number
          ot = chk_salary[i].ot as number
          bonus = chk_salary[i].bonus as number
          special_income = chk_salary[i].special_income as number
          other_income = chk_salary[i].other_income as number
          travel_income = chk_salary[i].travel_income as number
          bursary = chk_salary[i].bursary as number
          welfare_money = chk_salary[i].welfare_money as number
          social_security = chk_salary[i].social_security as number
          SocialYears = chk_salary[i].socialYears as number
          IncomeYears = chk_salary[i].incomeYears as number
          VatYears = chk_salary[i].vatYears as number
          old_pro_emp = chk_salary[i].provident_employee as number
          old_pro_com = chk_salary[i].provident_company as number
          old_net = chk_salary[i].net as number
          //////////////////////////// vat per and ss per //////////////////////////
          vat_per = chk_salary[i].vatper as number
          ss_per = chk_salary[i].ss_per as number
          //////////////////////////////////////////////////////////////////////////
          vat = chk_salary[i].vat as number
          miss = chk_salary[i].miss as number
          ra = chk_salary[i].ra as number
          late = chk_salary[i].late as number
          other = chk_salary[i].other as number
          provident_employee = chk_salary[i].provident_employee as number
          provident_company = chk_salary[i].provident_company as number
          const chk_bb = await ctx.prisma.bookbank_log.findMany({
            take: 1,
            where: {
              userId: user_id,
              AND: {
                unix: { lte: dayjs(new Date()).unix() }
              }
            },
            orderBy: {
              accept_date: 'desc'
            }
          })

          chk_bb.forEach((e) => {
            base_salary = e.base_salary
            console.log(base_salary);
          })

          if (New_Pro_emp_per || New_Pro_com_per) {

            ///// calculate function ///////////
            base_salary = args.data.base_salary ? args.data.base_salary : base_salary //ทำการเช็คว่าฐานเงินเดือนมีการเปลี่ยนแปลงมั้ย ถ้าเปลี่ยนให้ใช้ฐานเงินเดือนใหม่คำนวณ
            //////////// cal everything //////////////////////
            if (args.data.base_salary) {
              ///// cal ss ////
              let cal_ss = (base_salary * ss_per) / 100
              NewSocial_security = cal_ss >= 750 ? 750 : cal_ss // ถ้าหากมีการเปลี่ยนแปลงมากกว่า 750 ให้เปลี่ยนตัวเลขที่นี่

              ////////// cal vat /////
              let cal = 0 //คำนวณค่าจาก array ทั้งหมดจากนั้นนำค่ามาใส่ในตัวแปร cal
              const chk_take_arr = await ctx.prisma.expense_company.findMany({
                take: 1,
                where: {
                  unix_date: { lte: dayjs(new Date()).unix() },
                  AND: {
                    companyBranchId: ctx.currentUser?.branchId
                  }
                }
              })
              const cv: any = chk_salary[i]
              chk_take_arr.forEach((e) => {
                take_arr = e.check_vat
                take_arr?.forEach((e: any) => {
                  if (!e && !chk_salary[i]) return
                  cal += cv[e]
                })
                console.log(cal)
              })

              let cal_vat = (cal * vat_per) / 100 //cal_vat คือค่าใหม่ ส่วน vat คือค่าเก่า

              ////// cal provident emp and com ///////////////////
              New_Pro_Emp = (base_salary * New_Pro_emp_per) / 100
              New_Pro_Com = (base_salary * New_Pro_com_per) / 100
              ////////////// calculate and update ///////////////////////
              Total_income = commission + position_income + ot + bonus + special_income + other_income + travel_income + bursary + welfare_money + base_salary
              Total_expense = NewSocial_security + cal_vat + miss + ra + late + other + New_Pro_Emp + New_Pro_Com
              Net = Total_income - Total_expense
              ResultSocialYears = (SocialYears - social_security) + NewSocial_security
              ResultIncomeYears = (IncomeYears - old_net) + Net
              ResultVatYears = (VatYears - vat) + cal_vat

              const chk_all_collect = await ctx.prisma.mas_all_collect.findMany({ //ทำการค้นหา all_collect ของแต่ละคนจาก ID 
                where: {
                  userId: chk_salary[i].userId as string
                }
              })
              console.log(chk_all_collect);

              for (let a = 0; a < chk_all_collect.length; a++) { //ทำการอัปเดทค่าใน mas_all_collect ให้เป็นค่าปัจจุบันที่คำนวณมาแล้ว
                let income_collect = chk_all_collect[0].income_collect as number
                let ss_collect_old = chk_all_collect[0].social_secu_collect as number
                let pro_col_emp = chk_all_collect[0].provident_collect_employee as number
                let pro_col_com = chk_all_collect[0].provident_collect_company as number
                let vat_collect_old = chk_all_collect[0].vat_collect as number
                let vat_collect_new = (vat_collect_old - vat) + cal_vat
                let ss_collect_new = (ss_collect_old - social_security) + NewSocial_security
                let ResultPro_col_emp = (pro_col_emp - old_pro_emp) + New_Pro_Emp //คำนวณผลลัพธ์ของ provident_collect ของพนักงานใหม่
                let ResultPro_col_com = (pro_col_com - old_pro_com) + New_Pro_Com //คำนวณผลลัพธ์ของ provident_collect ของพนักงานใหม่
                let ResultIncome_col = (income_collect - old_net) + Net
                // let pro_col_com = chk_all_collect[0].provident_collect_company as number
                // let ss_collect_new = (ss_collect_old - social_security) + NewSocial_security
                const upt_all_collect = await ctx.prisma.mas_all_collect.update({
                  data: {
                    vat_collect: vat_collect_new,
                    social_secu_collect: ss_collect_new,
                    provident_collect_employee: ResultPro_col_emp,
                    provident_collect_company: ResultPro_col_com,
                    income_collect: ResultIncome_col

                  },
                  where: {
                    userId: chk_salary[i].userId as string
                  }
                })
                console.log('ค่าใหม่ = ', upt_all_collect);

              }
              const upt_salary = await ctx.prisma.salary.update({ //ทำการ update เงินเดือนให้เป็นปัจจุบันจากการคำนวณล่าสุด
                data: {
                  base_salary: base_salary,
                  vat: cal_vat,
                  social_security: NewSocial_security,
                  provident_employee: New_Pro_Emp,
                  provident_company: New_Pro_Com,
                  total_income: Total_income,
                  total_expense: Total_expense,
                  incomeYears: ResultIncomeYears,
                  net: Net
                },
                where: {
                  id: salary_id
                }
              })
              // console.log(upt_salary);


              const chk_provi_log = await ctx.prisma.provident_log.findMany({
                where: {
                  userId: chk_salary[i].userId as string,
                  AND: {
                    salaryId: salary_id
                  }
                }
              })
              const upt_provi_log = await ctx.prisma.provident_log.update({
                data: {
                  pro_employee: New_Pro_Emp as number,
                  pro_company: New_Pro_Com as number
                },
                where: {
                  id: chk_provi_log[0].id
                }
              })

              return {
                message: 'update success',
                status: true,
              };
            }
            ////////////////// ถ้าหากไม่มีการเปลี่ยนฐานเงินเดือนให้ใช้ฐานเงินเดือนเดิม ///////////////////////////////////////////
            New_Pro_Emp = (base_salary * New_Pro_emp_per) / 100
            New_Pro_Com = (base_salary * New_Pro_com_per) / 100
            Total_income = commission + position_income + ot + bonus + special_income + other_income + travel_income + bursary + welfare_money + base_salary
            Total_expense = social_security + vat + miss + ra + late + other + New_Pro_Emp + New_Pro_Com
            Net = Total_income - Total_expense
            ResultIncomeYears = (IncomeYears - old_net) + Net

            const chk_all_collect = await ctx.prisma.mas_all_collect.findMany({ //ทำการค้นหา all_collect ของแต่ละคนจาก ID 
              where: {
                userId: chk_salary[i].userId as string
              }
            })
            console.log(chk_all_collect);

            for (let a = 0; a < chk_all_collect.length; a++) { //ทำการอัปเดทค่าใน mas_all_collect ให้เป็นค่าปัจจุบันที่คำนวณมาแล้ว
              let income_collect = chk_all_collect[0].income_collect as number
              let ss_collect_old = chk_all_collect[0].social_secu_collect as number
              let pro_col_emp = chk_all_collect[0].provident_collect_employee as number
              let pro_col_com = chk_all_collect[0].provident_collect_company as number
              let ResultPro_col_emp = (pro_col_emp - old_pro_emp) + New_Pro_Emp //คำนวณผลลัพธ์ของ provident_collect ของพนักงานใหม่
              let ResultPro_col_com = (pro_col_com - old_pro_com) + New_Pro_Com //คำนวณผลลัพธ์ของ provident_collect ของพนักงานใหม่
              let ResultIncome_col = (income_collect - old_net) + Net
              // let pro_col_com = chk_all_collect[0].provident_collect_company as number
              // let ss_collect_new = (ss_collect_old - social_security) + NewSocial_security
              const upt_all_collect = await ctx.prisma.mas_all_collect.update({
                data: {
                  provident_collect_employee: ResultPro_col_emp,
                  provident_collect_company: ResultPro_col_com,
                  income_collect: ResultIncome_col

                },
                where: {
                  userId: chk_salary[i].userId as string
                }
              })
              console.log('ค่าใหม่ = ', upt_all_collect);

            }

            const upt_salary = await ctx.prisma.salary.update({ //ทำการ update เงินเดือนให้เป็นปัจจุบันจากการคำนวณล่าสุด
              data: {
                provident_employee: New_Pro_Emp,
                provident_company: New_Pro_Com,
                total_income: Total_income,
                total_expense: Total_expense,
                incomeYears: ResultIncomeYears,
                net: Net
              },
              where: {
                id: salary_id
              }
            })
            // console.log(upt_salary);


            const chk_provi_log = await ctx.prisma.provident_log.findMany({
              where: {
                userId: chk_salary[i].userId as string,
                AND: {
                  salaryId: salary_id
                }
              }
            })
            const upt_provi_log = await ctx.prisma.provident_log.update({
              data: {
                pro_employee: New_Pro_Emp as number,
                pro_company: New_Pro_Com as number
              },
              where: {
                id: chk_provi_log[0].id
              }
            })

          }
        };
        return {
          message: 'update success',
          status: true,
        };
      }
      // console.log(chk_payday);

        let baseold = 0
      if(args.data?.userId){
        const chk_acp_bb = await ctx.prisma.bookbank_log.findMany({
          where: {
            userId: args.data?.userId,
          },
          orderBy: {
            accept_date: 'desc'
          }
        })
      chk_acp_bb.forEach((e) => {
        baseold = e.base_salary as number
        let basenew= args.data?.base_salary?args.data?.base_salary:0
        console.log('ฐานเงินเดือน =', basenew);
        let result =basenew-baseold
        console.log(result);
        if (result <0 ) {
          // if(args.data?.accept_date){
          //   let chk_acp_b=0
          //   const chk_acp_bbb = await ctx.prisma.bookbank_log.findMany({
          //     where: {
          //       userId: args.data?.userId,
          //     },
          //     orderBy: {
          //       accept_date: 'desc'
          //     }
          //   })
          //   chk_acp_bbb.forEach((e)=>{
          //     chk_acp_b=e.unix as number
          //     let ac=dayjs(new Date(args.data?.accept_date)).unix()
          //     let result =ac-chk_acp_b
          //     console.log(result);
          //     if(result <0){
          //     }
          //   })}
          throw new Error("ไม่สามารถต้องค่าฐานเงินเดือนน้อยกว่าเดือนก่อนหน้า ");
        }
    })}
      
      
      const createbook_bank = await ctx.prisma.bookbank_log.create({
        data: {
          id: bookbankID,
          date: new Date(args.data?.date),
          mas_bankId: args.data?.mas_bankId,
          bank_number: args.data?.bank_number as string,
          all_collectId: args.data?.all_collectId,
          base_salary: args.data?.base_salary as number,
          userId: args.data?.userId,
          accept_date: new Date(args.data?.accept_date),
          unix: dayjs(new Date(args.data?.accept_date)).unix(),
          accept_month: Acp_month + 1,
          accept_years: Acp_year,
          provident_com: args.data?.provident_com as number, // กองทุนของพนักงาน ตัวเลขเป็น %
          provident_emp: args.data?.provident_emp as number, // กองทุนของบริษัท ตัวเลขเป็น %
        },
      });
      return {
        message: 'success',
        status: true,
      };
    },



    async createBank(p, args, ctx) {
      //สร้างธนาคาร
      const genBankID = v4();
      const create_bank = await ctx.prisma.mas_bank.create({
        data: {
          id: genBankID,
          name: args.data?.name as string,
          bank_code: args.data?.bank_code as string,

        },
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async CreateAndUpdateExpenseCom(p, args, ctx) {
      //สร้างและอัปเดท expensecom
      const genExpenseID = v4();
      let date = args.data?.date
      let ThisYear = dayjs(date).format("YYYY")
      let Thismonth = dayjs(date).format("MM")
      let Result = dayjs(date).format('YYYY-MM')
      console.log(Result);
      let unix_date_upt = dayjs(new Date(Result)).unix()
      console.log(unix_date_upt);
      let unix_date = dayjs(args.data?.date).unix()
      let unix = dayjs(args.data?.cal_date_salary).unix()
      const take_arr = args.data?.check_vat ? args.data?.check_vat : []

      if (args.data?.id) { //ถ้ามีการรับ ID ให้ทำการอัปเดท
        const updateExpenseCom = await ctx.prisma.expense_company.update({
          data: {
            bankId: args.data?.bankId as string,
            date: new Date(Result),
            vat_per: args.data?.vat_per as number,
            ss_per: args.data?.ss_per as number,
            exp_com_month: Thismonth,
            exp_com_years: ThisYear,
            check_vat: take_arr as string[],
            cal_date_salary: args.data?.cal_date_salary,
            unix: unix,
            unix_date: unix_date_upt,
            companyBranchId: args.data?.companyBranchId,
          },
          where: { id: args.data.id },
        });
        const chk_salary = await ctx.prisma.salary.findMany({ //จากนั้นให้ทำการหาา salary ว่าเดือนที่มีการเปลี่ยนแปลง ตรงกับ เงินเดือนมั้ย
          include: {
            User: { include: { companyBranch: true, bookbank_log: { orderBy: { accept_date: 'desc' } } } },
          },
          where: {
            month: Thismonth,
            AND: {
              years: ThisYear
            }
          }
        });
        console.log(chk_salary);

        let VaT_per = 0//กำหนดค่า ให้ค่าที่ต้องการคำนวณเริ่มต้นให้เป็น 0
        let Ss_per = 0
        let NewSocial_security = 0 //Social security อันใหม่
        ///////////////////////////////
        let Total_income = 0
        let Total_expense = 0
        let VatYears = 0
        let SocialYears = 0
        let old_net = 0
        let Net = 0
        let IncomeYears = 0
        ///////////////////////////////
        let base_salary = 0
        let commission = 0
        let position_income = 0
        let ot = 0
        let bonus = 0
        let special_income = 0
        let other_income = 0
        let travel_income = 0
        let bursary = 0
        let welfare_money = 0
        //EXPENSE
        let social_security = 0 //Social security อันเก่า
        let vat = 0
        let miss = 0
        let ra = 0
        let late = 0
        let other = 0
        let provident_employee = 0
        let provident_company = 0
        let ResultSocialYears = 0
        let ResultVatYears = 0
        let ResultIncomeYears = 0

        for (let i = 0; i < chk_salary.length; i++) { //จากนั้น loop ข้อมูลเงินเดือนเพื่อจะเอามาคำนวณในแต่ละเดือน

          let salary_id = chk_salary[i].id
          let user_id = chk_salary[i].userId
          commission = chk_salary[i].commission as number
          position_income = chk_salary[i].position_income as number
          ot = chk_salary[i].ot as number
          bonus = chk_salary[i].bonus as number
          special_income = chk_salary[i].special_income as number
          other_income = chk_salary[i].other_income as number
          travel_income = chk_salary[i].travel_income as number
          bursary = chk_salary[i].bursary as number
          welfare_money = chk_salary[i].welfare_money as number
          social_security = chk_salary[i].social_security as number
          provident_employee = chk_salary[i].provident_employee as number
          provident_company = chk_salary[i].provident_company as number
          VatYears = chk_salary[i].vatYears as number
          SocialYears = chk_salary[i].socialYears as number
          IncomeYears = chk_salary[i].incomeYears as number
          old_net = chk_salary[i].net as number
          vat = chk_salary[i].vat as number
          miss = chk_salary[i].miss as number
          ra = chk_salary[i].ra as number
          late = chk_salary[i].late as number
          other = chk_salary[i].other as number
          VaT_per = chk_salary[i].vatper as number
          Ss_per = chk_salary[i].ss_per as number


          const chk_bb = await ctx.prisma.bookbank_log.findMany({
            take: 1,
            where: {
              userId: user_id,
              AND: {
                unix: { lte: dayjs(new Date()).unix() }
              }
            },
            orderBy: {
              accept_date: 'desc'
            }
          })

          chk_bb.forEach((e) => {
            base_salary = e.base_salary
            console.log(base_salary);
          })


          if (Ss_per || VaT_per) {

            //calculate the new salary update !
            /////////////////////////////// cal vat////////////////////////////////
            const chk_vat = await ctx.prisma.salary.findUnique({
              where: {
                id: salary_id
              }
            })
            const cv: any = chk_vat
            let cal = 0 //คำนวณค่าจาก array ทั้งหมดจากนั้นนำค่ามาใส่ในตัวแปร cal
            take_arr?.forEach((e: any) => {
              if (!e && !chk_vat) return
              cal += cv[e]
            })
            console.log(cal)
            let cal_vat = (cal * VaT_per) / 100 //cal_vat คือค่าใหม่ ส่วน vat คือค่าเก่า
            /////////////// cal ss ////////////////////////////////////////////
            let cal_ss = (base_salary * Ss_per) / 100
            console.log('ประกันสังคมใหม่', NewSocial_security);
            NewSocial_security = cal_ss >= 750 ? 750 : cal_ss //กรณีที่มีการเปลี่ยนประกันสังคมตาม รัฐบาล ให้แก้ไขตรงตัวเลข 750 นะครับ
            Total_income = commission + position_income + ot + bonus + special_income + other_income + travel_income + bursary + welfare_money + base_salary
            Total_expense = cal_vat + miss + ra + late + other + provident_employee + provident_company + NewSocial_security
            Net = Total_income - Total_expense

            ResultVatYears = (VatYears - vat) + cal_vat
            ResultSocialYears = (SocialYears - social_security) + NewSocial_security
            ResultIncomeYears = (IncomeYears - old_net) + Net

            console.log("ประกันสังคมสะสม = ", ResultSocialYears)
            console.log('ประกันสังคมปัจจุบัน = ', NewSocial_security);

            const chk_all_collect = await ctx.prisma.mas_all_collect.findMany({
              where: {
                userId: chk_salary[i].userId as string
              }
            })
            console.log(chk_all_collect);

            for (let a = 0; a < chk_all_collect.length; a++) {

              let vat_collect_old = chk_all_collect[0].vat_collect as number
              let vat_collect_new = (vat_collect_old - vat) + cal_vat
              let ss_collect_old = chk_all_collect[0].social_secu_collect as number
              let ss_collect_new = (ss_collect_old - social_security) + NewSocial_security
              const upt_all_collect = await ctx.prisma.mas_all_collect.update({
                data: {
                  vat_collect: vat_collect_new,
                  social_secu_collect: ss_collect_new,
                  income_collect: ResultIncomeYears

                },
                where: {
                  userId: chk_salary[i].userId as string
                }
              })
              console.log('ค่าใหม่ = ', upt_all_collect);

            }
            const upt_salary = await ctx.prisma.salary.update({
              data: {
                vat: cal_vat,
                vatper: VaT_per,
                social_security: NewSocial_security,
                ss_per: Ss_per,
                total_income: Total_income,
                total_expense: Total_expense,
                socialYears: ResultSocialYears,
                vatYears: ResultVatYears,
                net: Net,
                incomeYears: ResultIncomeYears
              },
              where: {
                id: salary_id
              }
            })
          }
        }


        return {
          message: 'update success',
          status: true,
        };
      }
      const createExpenseCom = await ctx.prisma.expense_company.create({
        data: {
          id: genExpenseID,
          bankId: args.data?.bankId as string,
          date: new Date(args.data?.date),
          vat_per: args.data?.vat_per as number,
          ss_per: args.data?.ss_per as number,
          check_vat: take_arr as string[],
          exp_com_month: Thismonth,
          exp_com_years: ThisYear,
          cal_date_salary: new Date(args.data?.cal_date_salary),
          unix: unix,
          unix_date: unix_date,
          companyBranchId: args.data?.companyBranchId,
        },
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async Createincometype(p: any, args: any, ctx: any) {
      //สร้างประเภทของรายรับ
      const genIncomeTypeID = v4();
      const createIncomeype = await ctx.prisma.mas_income_type.create({
        data: {
          id: genIncomeTypeID,
          name: args.data?.name,
        },
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async DeleteSalary(p: any, args: any, ctx: any) {
      const find_salary = await ctx.prisma.salary.findMany({ //ทำการคำนวณยอดเงินใน mas_collect ใหม่
        where: {
          id: args.salaryid
        }
      })
      console.log(find_salary)
      let provi_log_id = find_salary[0].provident_logId
      const check_all_collect = await ctx.prisma.mas_all_collect.findMany({
        where: {
          userId: args.userId
        }
      })
      console.log(check_all_collect)
      let new_income_collet = check_all_collect[0].income_collect - find_salary[0].net
      console.log(new_income_collet)
      let new_vat_collect = check_all_collect[0].vat_collect - find_salary[0].vat
      console.log(new_vat_collect)
      let new_social_secu = check_all_collect[0].social_secu_collect - find_salary[0].social_security
      console.log(new_social_secu)
      let new_pro_emp = check_all_collect[0].provident_collect_employee - find_salary[0].provident_employee
      console.log(new_pro_emp);
      let new_pro_com = check_all_collect[0].provident_collect_company - find_salary[0].provident_company
      console.log(new_pro_com);

      const new_collect = await ctx.prisma.mas_all_collect.update({
        data: {
          date: new Date(),
          income_collect: new_income_collet,
          vat_collect: new_vat_collect,
          social_secu_collect: new_social_secu,
          provident_collect_employee: new_pro_emp,
          provident_collect_company: new_pro_com,
        },
        where: { userId: args.userId },
      })

      const deletesalary = await ctx.prisma.salary.delete({
        where: {
          id: args.salaryid,
        },

      });

      const delete_pro_log = await ctx.prisma.provident_log.delete({
        where: {
          id: provi_log_id,
        },
      });

      return {
        message: 'delete salary success',
        status: true,
      };
    },

    async Deletebookbank(p: any, args: any, ctx: any) {
      const deletebook_bank = await ctx.prisma.bookbank_log.delete({
        where: {
          id: args.id,
        },
      });
      return {
        message: 'delete bookbank success',
        status: true,
      };
    },

    async DeleteExpensecom(p, args, ctx) {
      const delete_expense_com = await ctx.prisma.expense_company.delete({
        where: {
          id: args.id
        }
      });
      return {
        message: 'delete Expensecompany success',
        status: true,
      };
    }

  },
};






const resolversComposition = {
  'Query.expense_company': [authenticate()],
  'Query.salary': [authenticate()],
  'Query.bookbank_log': [authenticate()],
  'Query.mas_all_collectuser': [authenticate()],
  'Query.mas_all_collectadmin': [authenticate()],
  'Query.data_salary': [authenticate()],
  'Query.mydata_salary': [authenticate()],
  'Query.show_pervspUser': [authenticate()],
  'Query.show_years': [authenticate()],
  'Query.filter_bookbank_admin': [authenticate()],
  'Query.filter_bookbank': [authenticate()],
  'Mutation.Createmonth': [authenticate()],
  'Mutation.Createyears': [authenticate()],
  'Mutation.Createandupdatesalary': [authenticate()],
  'Mutation.Createandupdatebookbank': [authenticate()],
  'Mutation.createBank': [authenticate()],
  'Mutation.CreateAndUpdateExpenseCom': [authenticate()],
  'Mutation.Createincometype': [authenticate()],
  'Mutation.Deletebookbank': [authenticate()],
  'Mutation.DeleteSalary': [authenticate()],
  'Mutation.DeleteExpensecom': [authenticate()],
};

export const salaryResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
