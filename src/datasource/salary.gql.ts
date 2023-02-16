
import { Resolvers, User, CompanyBranch } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import dayjs from 'dayjs';
import { includes, orderBy } from 'lodash';
import { profile } from 'console';
import { expense_company } from '../generated/client/index';



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
  }

  type provident_log {
    id: ID
    userId: String
    provident_date: Date
    pro_employee: Float
    pro_company: Float
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
    pro_company: Float
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
    provident_log: [provident_log]
  }

  type mas_month {
    id: ID
    name: String
    expense_company: [expense_company]
    bookbank_log: [Bookbank_log_type]
    salary: [salary]
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
    companyBranchId: String
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
    social_security: Float
    companyBranchId: String
    Salary: salary
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

  type Query {
    salary(userId:String , years: String): data_salary
    salary_inmonthSlip(userId: String, month: String, years: String):[data_salary]
    bookbank_log: [Bookbank_log_type]
    bookbank_log_admin(userId: String): [Bookbank_log_type]
    provident_log(userId:String):[provident_log]
    mydata_salary(years: String): data_salary
    # datasalary_mee(years: String): data_salary_me
    # Selfdatasalary: selfsalary
    #Selfdatasalary: selfsalary
    mas_all_collect: mas_all_collect
    mas_bank(id: String): [mas_bank]
    data_salary(fristname: String ,Position2: String ,Position3: String):[data_salary]
    expense_company:[expense_company]
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

    async expense_company(p,args,ctx){
      // console.log(ctx.currentUser?.id)
      const getdata = await ctx.prisma.expense_company.findMany({
        include: {
          mas_bank: true
        },
        where: {
          companyBranchId: ctx.currentUser?.branchId
        },
        orderBy:
        {
          date: "desc",
        },
      });
      return getdata;
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
          bookbank_log: { include: { mas_bank: true }, orderBy: { date: 'desc' } }
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

    async mas_all_collect(parant: any, args: any, ctx: any) {
      console.log(ctx.currentUser?.id);
      const result = await ctx.prisma.mas_all_collect.findMany({
        where: {
          userId: ctx.currentUser?.id,
        },
      });
      for (let i = 0; i < result.length; i++) {
        return result[i];
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
          date: "desc",
        },
      });
      return result; //แสดงข้อมูลโดยล็อคอินด้วย user
    },

    // async bookbank_log(parant: any, args: any, ctx: any) {
    //   const filter = args?.userId ? args.userId : undefined;
    //   const result = await ctx.prisma.bookbank_log.findMany({
    //     include: { User: true, mas_bank: true },
    //     where: {
    //       userId: ctx.currentUser?.userId,
    //       AND: {
    //         AND: {
    //           years: { contains: filter },
    //           month: { contains: filter },
    //         },
    //       },
    //     },
    //   });
    //   return result;
    // },

    async bookbank_log_admin(parant: any, args: any, ctx: any) {
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
          date: "desc",
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

      const getdata = await ctx.prisma.user.findMany({
        include: {
          profile: true,
          role: true,
          Position_user: {
            include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true },
            where: {
              mas_positionlevel2: {
                name: { contains: search2 }
              }, AND: {
                mas_positionlevel3: {
                  name: { contains: search3 }
                }
              }
            },
            orderBy: { date: 'desc' }
          },
          salary: true,
          bookbank_log: { include: { mas_bank: true }, orderBy: { date: 'desc' } },
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
                  mas_positionlevel2: { name: { contains: search2 } },
                  AND: { mas_positionlevel3: { name: { contains: search3 } } }
                }, //
              },
            },
          },
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
        where: {
          userId: args.data.userId
        }, orderBy: {
          date: "desc"
        }
      })
      let bookbank_logId = check_bookbank[0].id //หา bookbank log ของ user คนนั้นจากนั้นให้ insert เข้า salary

      const check_user_ex = await ctx.prisma.User.findMany({
        where: {
          id: args.data.userId

        }
      })
      const cb = check_user_ex[0].companyBranchId
      const check_combra = await ctx.prisma.expense_company.findMany({
        where: {
          companyBranchId: cb
        }, orderBy: {
          date: "desc"
        }
      })
      let vat_per = check_combra[0].vat_per ? check_combra[0].vat_per : 0
      let ss_per = check_combra[0].ss_per ? check_combra[0].ss_per : 0
      // console.log(vat_per);
      // console.log(ss_per);


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
            vatper: vat_per as number,
            ss_per: ss_per as number,
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

    async Createandupdatebookbank(p: any, args: any, ctx: any) {
      //สร้าง bookbank
      const bookbankID = v4();
      // const providentID = v4()
      if (args.data?.id) {
        const createbook_bank = await ctx.prisma.bookbank_log.update({
          data: {
            date: new Date(args.data?.date),
            mas_bankId: args.data?.mas_bankId,
            bank_number: args.data?.bank_number as number,
            all_collectId: args.data?.all_collectId,
            base_salary: args.data?.base_salary as number,
            userId: args.data?.userId,
            provident_com: args.data?.provident_com, // กองทุนของพนักงาน ตัวเลขเป็น %
            provident_emp: args.data?.provident_emp, // กองทุนของบริษัท ตัวเลขเป็น %
          },
          where: {
            id: args.data?.id,
          },
        });
        return {
          message: 'update success',
          status: true,
        };
      }
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
          provident_emp: args.data?.provident_emp, // กองทุนของบริษัท ตัวเลขเป็น %
        },
      });
      return {
        message: 'success',
        status: true,
      };
    },



    async createBank(p: any, args: any, ctx: any) {
      //สร้างธนาคาร
      const genBankID = v4();
      const create_bank = await ctx.prisma.mas_bank.create({
        data: {
          id: genBankID,
          name: args.data?.name as string,
          bank_code: args.data?.bank_code,

        },
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async CreateAndUpdateExpenseCom(p: any, args: any, ctx: any) {
      //สร้างและอัปเดท expensecom
      const genExpenseID = v4();
       const take_arr = args.data?.check_vat
      if (args.data?.id) {
        const updateExpenseCom = await ctx.prisma.expense_company.update({
          data: {
            bankId: args.data?.bankId as string,
            date: new Date(args.data?.date),
            vat_per: args.data?.vat_per as number,
            ss_per: args.data?.ss_per as number,
            companyBranchId: args.data?.companyBranchId,
          },
          where: { id: args.data.id },
        });
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
          check_vat : take_arr,
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
      const find_salary = await ctx.prisma.salary.findMany({
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
  },
};




const resolversComposition = {
  'Query.expense_company': [authenticate()],
  'Query.salary': [authenticate()],
  'Query.bookbank_log': [authenticate()],
  'Query.mas_all_collect': [authenticate()],
  'Query.data_salary': [authenticate()],
  'Query.mydata_salary': [authenticate()],
  'Mutation.Createmonth': [authenticate()],
  'Mutation.Createyears': [authenticate()],
  'Mutation.Createandupdatesalary': [authenticate()],
  'Mutation.Createandupdatebookbank': [authenticate()],
  'Mutation.createBank': [authenticate()],
  'Mutation.CreateAndUpdateExpenseCom': [authenticate()],
  'Mutation.Createincometype': [authenticate()],
  'Mutation.Deletebookbank': [authenticate()],
  'Mutation.DeleteSalary': [authenticate()],
};

export const salaryResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
