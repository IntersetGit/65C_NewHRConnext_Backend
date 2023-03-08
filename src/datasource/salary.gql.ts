
import { Resolvers, User, CompanyBranch } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import dayjs from 'dayjs';
import { profile } from 'console';
import { expense_company, bookbank_log } from '../generated/client/index';
import { comparePassword } from '../utils/passwords';



export const salaryTypedef = gql`
  input yearsInput {
    id: ID
    name: String
  }

  input chk_pw_input {
    password: String
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
    unix: Int
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
    base_salary: Float
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
    base_salary: Float
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
    unix: Int
  }
  type read_bookbank_log {
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
    unix: Int
    update_by:String
    update_date: Date
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
    unix: Int
    unix_date: Int
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

  type Check_passwordResponseType {
    message: String
    status: Boolean
  }

  type Query {
    salary(userId:String , years: String): data_salary
    salary_inmonthSlip(userId: String, date:Date):[data_salary]
    bookbank_log: [Bookbank_log_type]
    bookbank_log_admin(userId: String): [Bookbank_log_type]
    filter_bookbank_admin(userId: String): [Bookbank_log_type]
    filter_bookbank: [Bookbank_log_type]
    provident_log(userId:String):[provident_log]
    mydata_salary(years: String): data_salary
    # datasalary_mee(years: String): data_salary_me
    # Selfdatasalary: selfsalary
    #Selfdatasalary: selfsalary
    mas_all_collectuser: mas_all_collect
    mas_all_collectadmin(userId: String): [mas_all_collect]
    read_bookbank_log(userId: String):[read_bookbank_log]

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
    Check_password(data: chk_pw_input): Check_passwordResponseType
  }
`;

const resolvers: Resolvers = {
  Query: {
    ////////////////////แสดงเงินเดือนโดยใช่ userid เป็นตัวอ้าง/////////////////////////////
    async salary(parant, args, ctx) {
      let searchyears = args.years ? args.years : undefined
      const getdata = await ctx.prisma.user.findUnique({
        include: {
          //join table profile////
          profile: true,
          //join table salary โดยอ้างจากปี/////
          salary: { where: { years: searchyears?.toString() }, orderBy: { date: 'asc' } },
          //่join table companyBranch และให้ table company join companyBranch/////////
          companyBranch: { include: { expense_company: { take: 1, where: { unix: { gte: dayjs(new Date()).unix() } }, orderBy: { date: 'asc' } }, company: true } },
          /////join table Position_user และให้ table mas_positionlevel3 join Position_user จัดเรียงตาม date มากไปน้อย/////
          Position_user: { include: { mas_positionlevel3: true }, orderBy: { date: 'desc' } },
          // join table bookbank_log และให้ table mas_bank join bookbank_log  จัดเรียงตาม date มากไปน้อย//////
          bookbank_log: { include: { mas_bank: true }, take: 1, orderBy: { accept_date: 'desc' }, where: { unix: { lte: dayjs(new Date()).unix() } } }
        },
        where: {
          //โดยอ้างจาก user id///
          id: args.userId as string
        }
      });
      return getdata;
    },
    ////แสดง ปี โดยใช้ ปี/////
    async show_years(p, args, ctx) {
      let searchY = args.name ? args.name : undefined
      const showYears = await ctx.prisma.mas_years.findMany({
        where: {
          name: searchY
        }
      })
      return showYears
    },
    /////////////////////// แสดง ภาษี ประกันสังคม ของบริษัท//////////
    async expense_company(p, args, ctx) {
      /////ตั้งตัวแปรมา รับค่า date ////
      const date = args?.date
      //แปลงค่า date ให้เหลือแค่เดือน////
      const month = dayjs(date).format('MM')
      //แปลงค่า date ให้เหลือแค่ปี/////
      const years = dayjs(date).format('YYYY')
      //ตั้งตัวแปรมา รับค่าที่ไปหาใน table expense_company///////// 
      const getdata = await ctx.prisma.expense_company.findMany({
        include: {
          ///join table mas_bank///////
          mas_bank: true
        },
        where: {
          //โดยหาจาก branchId จาก token ของ userที่ login เข้ามา///////
          companyBranchId: ctx.currentUser?.branchId,

        },
        //จัดเรียงจากมากไปน้อย อ้างจาก date/////////
        orderBy:
        {
          date: "desc",
        },
      });
      return getdata
    },
    ////////////////// แสดง  ภาษี ประกันสังคม กองทุน ของปัจจุบัน
    async show_pervspUser(p, args, ctx) {
      const date = args?.date ? args?.date : undefined
      const month = dayjs(date).format('MM')
      const years = dayjs(date).format('YYYY')
      const result = await ctx.prisma.user.findMany({
        include: {
          //่join table bookbank_log และให้ table mas_bank join table bookbank_log เอา 1 ตัว จัดเรียงตามวันที่มีผลจากมากไปน้อยโดยอ้างจากวัน วันที่มีผล ให้=< วันปัจจุบัน
          bookbank_log: { include: { mas_bank: true }, take: 1, orderBy: { accept_date: 'desc' }, where: { unix: { lte: dayjs(date).unix() } } },
          //่join table companyBranch และให้ table expense_company join table companyBranch เอา 1 ตัว จัดเรียงตามวันที่มีผลจากมากไปน้อยโดยอ้างจากวัน วันที่มีผล ให้=< วันปัจจุบัน และ อ้างจาก branchId จากtoken ของuserที่ login
          companyBranch: { include: { expense_company: { take: 1, orderBy: { date: 'desc' }, where: { unix_date: { lte: dayjs(date).unix() }, AND: { companyBranchId: ctx.currentUser?.branchId } } } } }
        },
        where: {
          //โดยอ้างจาก userid/////
          id: args.userId as string
        }
      })
      console.log('unix get = ', dayjs(date).unix());

      return result
    },
    //แสดง แบงค์ โดยอ้างจาก idที่ได้รับ/////
    async mas_bank(parant: any, args: any, ctx: any) {
      const result = await ctx.prisma.mas_bank.findMany({
        where: {
          id: args.id,
        },
      });
      return result;
    },
    //////////////////แสดง เงินเดือนของตัวเอง โดยอ้างกจากuser.id จาก tokenที่login และจากการรับค่า ปี   
    async mydata_salary(parant, args, ctx) {
      console.log(ctx.currentUser?.id)
      let searchyears = args.years ? args.years : undefined
      const getmydata = await ctx.prisma.user.findUnique({
        include: {
          //join table profile////
          profile: true,
          //join table salary โดยอ้างจากปี/////
          salary: { where: { years: searchyears?.toString() }, orderBy: { date: 'asc' } },
          //่join table companyBranch และให้ table company join companyBranch/////////
          companyBranch: { include: { expense_company: { take: 1, where: { unix: { gte: dayjs(new Date()).unix() } }, orderBy: { date: 'asc' } }, company: true } },
          /////join table Position_user และให้ table mas_positionlevel3 join Position_user จัดเรียงตาม date มากไปน้อย/////
          Position_user: { include: { mas_positionlevel3: true }, orderBy: { date: 'desc' } },
          // join table bookbank_log และให้ table mas_bank join bookbank_log  จัดเรียงตาม date มากไปน้อย//////
          bookbank_log: { include: { mas_bank: true }, take: 1, orderBy: { accept_date: 'desc' }, where: { unix: { lte: dayjs(new Date()).unix() } } }
        },
        where: {
          //โดยอ้างกจากuser.id
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


    /////แสดง ใบเสร็จพนักงาน โดยอ้างจากการรับค่า userid//////
    async salary_inmonthSlip(parant, args, ctx) { // for admin slip สำหรับให้ user เห็น
      let searchTime = new Date(args.date)
      let fm_years = dayjs(searchTime).format("YYYY")
      let fm_month = dayjs(searchTime).format("MM")
      const data = await ctx.prisma.user.findMany({
        include: {
          //join table profile
          profile: true,
          salary: { where: { month: fm_month, AND: { years: fm_years } } },
          companyBranch: { include: { company: true, expense_company: true } },
          //่join table Position_user และให้ table mas_positionlevel2 และ table mas_positionlevel3 join Position_user จัดเรียงตาม date จากมากไปน้อย 
          Position_user: { include: { mas_positionlevel2: true, mas_positionlevel3: true }, orderBy: { date: 'desc' } },
          bookbank_log: { include: { mas_bank: true }, orderBy: { date: 'desc' } },
          mas_all_collect: true
        },
        where: {
          //โดยอ้างจากการรับค่า userid
          id: args.userId as string,
        }
      });
      return data
    },
    ////แสดง รายได้ สะสม ภาษี สะสม ประกันสังคม สะสม กองทุน สะสมของพนักงาน/////// 
    async mas_all_collectuser(parant: any, args: any, ctx: any) {
      const result = await ctx.prisma.mas_all_collect.findMany({
        where: {
          //โดยอ้างกจากuser.id จาก tokenที่login
          userId: ctx.currentUser?.id,
        },
      });
      for (let i = 0; i < result.length; i++) {
        return result[i];
      }
    },
    ////แสดง รายได้ สะสม ภาษี สะสม ประกันสังคม สะสม กองทุน สะสมของ/////// 
    async mas_all_collectadmin(parant: any, args: any, ctx: any) {
      const result = await ctx.prisma.mas_all_collect.findMany({
        where: {
          //โดยอ้างจากการรับค่า userid
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


    //แสดง ฐานเงินเดือน กองทุนพนักงาน กอนทุนบริษัท  วันที่มีผล bankid numberbank////
    async bookbank_log(parant, args, ctx) {
      // const result = await ctx.prisma.bookbank_log.findMany({
      //   include: {
      //     //join table User <--[(และให้ table profile และ (table Position_user และให้ table mas_positionlevel3 join table Position_user)]---join table User)
      //     User: { include: { profile: true, Position_user: { include: { mas_positionlevel3: true } } } },
      //     //join table mas_bank
      //     mas_bank: true
      //   },
      //   where: {
      //     //โดยอ้างกจากuser.id จาก tokenที่login
      //     userId: ctx.currentUser?.id,
      //   },
      //   orderBy:
      //   {
      //     accept_date: "asc",
      //   },
      // });

      const result = await ctx.prisma.bookbank_log.findMany({
        include: {
          //join table User <--[(และให้ table profile และ (table Position_user และให้ table mas_positionlevel3 join table Position_user)]---join table User)
          User: {
            include: {
              profile: true,
              Position_user: { include: { mas_positionlevel3: true } },
              companyBranch: { include: { expense_company: { take: 1, where: { unix: { gte: dayjs(new Date()).unix() } }, orderBy: { date: 'asc' } } } }
            }
          },
          //join table mas_bank
          mas_bank: true
        },
        where: {
          //โดยอ้างจากการรับค่า userid 
          userId: ctx.currentUser?.id
        },
        //โดยจดเรียงตาม วันที่มีผลจากมากไปหาน้อย
        orderBy:
        {
          accept_date: "asc",
        },
      });

      return result; //แสดงข้อมูลโดยล็อคอินด้วย user
    },

    // async read_bookbank_log(parant, args, ctx) {
    //   // const filter = args?.userId ? args.userId : undefined;
    //   const result = await ctx.prisma.read_bookbank_log.findMany({
    //     include: {
    //       User: true
    //     },
    //     where: {
    //       userId: ctx.currentUser?.id,
    //     },
    //     orderBy:
    //     {
    //       accept_date: "asc",
    //     },
    //   });
    //   return result; //แสดงข้อมูลโดยล็อคอินด้วย user
    // },

    /////////////// แสดงข้อมูล ฐานเงินเดือน กองทุนพนักงาน กอนทุนบริษัท  วันที่มีผล bankid numberbank ปัจจุบัน ของพนักงาน/////
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
          // join table mas_bank
          User: { include: { profile: true, Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true } } } },
          mas_bank: true
          //เลือกเอาแค่ 1ตัว
        }, take: 1,
        where: {
          //โดยอ้างกจากuserid จาก tokenที่login
          userId: ctx.currentUser?.id,
          AND: {
            //และเวลาที่มีผลน้อยกว่าวันปัจจุบัน
            unix: { lte: dayjs(new Date()).unix() }
          }
        },
        //จัดเรียงตาาม วันที่มีผลจาก มากไปน้อย
        orderBy:
        {
          accept_date: "desc",
        },
      });
      return result; //แสดงข้อมูลด้วยการค้นหา user
    },
    /////////////// แสดงข้อมูล ฐานเงินเดือน กองทุนพนักงาน กอนทุนบริษัท  วันที่มีผล bankid numberbank ปัจจุบัน สำหรับแอดมิน////
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
          // join table mas_bank
          mas_bank: true
          //เลือกเอาแค่ 1ตัว
        }, take: 1,
        where: {
          //โดยอ้างกจากการรับค่าuserid 
          userId: args.userId,
          AND: {
            //และเวลาที่มีผลน้อยกว่าวันปัจจุบัน
            unix: { lte: dayjs(new Date()).unix() }
          }
        },
        //จัดเรียงตาาม วันที่มีผลจาก มากไปน้อย
        orderBy:
        {
          accept_date: "desc",
        },
      });
      return result; //แสดงข้อมูลด้วยการค้นหา user
    },

    /////////////// แสดงข้อมูล ฐานเงินเดือน กองทุนพนักงาน กอนทุนบริษัท  วันที่มีผล bankid numberbank  สำหรับแอดมิน////
    async bookbank_log_admin(parant, args, ctx) {
      // const filter = args?.userId ? args.userId : undefined;
      const result = await ctx.prisma.bookbank_log.findMany({
        include: {
          //join table User <--[(และให้ table profile และ (table Position_user และให้ table mas_positionlevel3 join table Position_user)]---join table User)
          User: {
            include: {
              profile: true,
              Position_user: { include: { mas_positionlevel3: true } },
              companyBranch: { include: { expense_company: { take: 1, where: { unix: { gte: dayjs(new Date()).unix() } }, orderBy: { date: 'asc' } } } }
            }
          },
          //join table mas_bank
          mas_bank: true
        },
        where: {
          //โดยอ้างจากการรับค่า userid 
          userId: args.userId
        },
        //โดยจดเรียงตาม วันที่มีผลจากมากไปหาน้อย
        orderBy:
        {
          accept_date: "asc",
        },
      });

      return result; //แสดงข้อมูลด้วยการค้นหา user
    },
    //แสดง กองทุนพนักงาน และ กองทุนบริษัท////
    async provident_log(parant: any, args: any, ctx: any) {
      const filter = args?.userId ? args.userId : undefined;
      const result = await ctx.prisma.provident_log.findMany({
        include: { User: true, mas_all_collect: true },
        where: {
          //โดยอ้างกจากuserid จาก tokenที่login
          userId: ctx.currentUser?.userId,
        },
      });
      return result;
    },
    //แสดง เงินเดือนของแต่ละคน///
    async data_salary(p, args, ctx) { //เงินเดือนของแต่ละคน
      //ถ้ามี ค่า fristname  ให้ใส่ในตัวแปล search1 ไม่มี ให้ใส่ undefined
      const search1 = args.fristname ? args.fristname : undefined
      //ถ้ามี ค่า Position2  ให้ใส่ในตัวแปล search2 ไม่มี ให้ใส่ undefined
      const search2 = args.Position2 ? args.Position2 : undefined
      //ถ้ามี ค่า Position3  ให้ใส่ในตัวแปล search3 ไม่มี ให้ใส่ undefined
      const search3 = args.Position3 ? args.Position3 : undefined
      //เก็บวันที่ปัจจุบันในตัวแปลcurrent_time
      let current_time = new Date()
      // let current_month = "3"
      //นำcurrent_time มาแปลงเป็นเวา unix 
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
              //และโดยอ้างจาก table  Position_user การรับค่า search2 และ 3 หรือ Position2 และ 3
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
          //
          bookbank_log: { include: { mas_bank: true }, take: 1, orderBy: { accept_date: 'desc' }, where: { unix: { lte: dayjs(new Date()).unix() } } },
          companyBranch: { include: { expense_company: { orderBy: { date: 'desc' } } } }
        },///สินสุดการjoin
        where: {
          //โดยอ้างจากbranchId ของ tokenที่login
          companyBranchId: ctx.currentUser?.branchId,
          AND: {
            //และโดยอ้างจาก table  profile การรับค่า search1หรือ fristname
            profile: {
              firstname_th: { contains: search1 }
            },
            //และโดยอ้างจาก table  Position_user การรับค่า search2 และ 3 หรือ Position2 และ 3
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
        //จัดเรียงตามรหัสพนักงาน
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
    ///ตรวจสอบ password เพื่อยืนยันตัวตนในการปรับเปลี่ยน
    async Check_password(p, args, ctx) {
      let pw = ""
      const find_user = await ctx.prisma.user.findMany({
        where: {
          //โดยอ้างจาก userid ของtoken ที่ login
          id: ctx.currentUser?.id
        }
      })
      find_user.forEach((e) => {
        pw = e.password
      })
      // pw = find_user.password
      const decrypt_pw = await comparePassword(args.data?.password as string, pw)
      console.log('รหัสผ่าน = ', decrypt_pw);
      //หากถูกต้อง
      if (decrypt_pw === true) {
        return {
          message: 'ยืนยันรหัสผ่านถูกต้อง',
          status: true,
        }
      }
      //หากไม่ถูกต้อง
      return {
        message: 'รหัสผ่านของคุณไม่ถูกต้อง',
        status: true,
      }
    },
    //สร้างเดือน
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
    //สร้าง ปี
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
    //สร้างและอัพเดท เงินเดือน///
    async Createandupdatesalary(p: any, args: any, ctx: any) {
      //สร้าง log สำหรับเงินเดือนจากนั้นเก็บกองทุนไว้ใน provident log จากนั้นเก็บค่าไว้ใน collect
      /////////////////////// กรณี อัปเดทเงินเดือน /////////////////////////////////////////////
      if (args.data?.id) {
        let date = args.data?.date
        //แปลง date ให้เหลือแค่ปี
        let ThisYear = dayjs(date).format("YYYY")
        //แปลง date ให้เหลือแค่เดือน
        let Thismonth = dayjs(date).format("MM")
        const pro_emp = args.data?.provident_employee
        const pro_com = args.data?.provident_company
        const find_salary = await ctx.prisma.salary.findMany({
          where: {
            //โดยอ้างจากการรับค่า id
            id: args.data?.id
          }
        })
        let provi_log_id = find_salary[0].provident_logId //หา provident log Id เพื่อที่จะทำการเอาไปอ้างอิงในการอัปเดท provident log
        // console.log(find_salary)
        // ทำการเช็คค่าของ mas_all_collect โดยอ้างอิงจาก userId
        const check_all_collect = await ctx.prisma.mas_all_collect.findMany({
          where: {
            userId: args.userId
          }
        })
        console.log(find_salary)
        console.log(check_all_collect)

        // นำค่าต่างๆ ของ mas_all_collect มาลบด้วยค่าเก่าที่เคยมี จากนั้น + ด้วยค่าใหม่ที่ทำการอัปเดทเงินเดือนแล้ว
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

        const update_all_collect = await ctx.prisma.mas_all_collect.update({ //ทำการอัปเดทค่าต่าง ๆ ที่ผ่านการคำนวณแล้วเข้าไปใน mas_all_collect
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

        const updatesalary = await ctx.prisma.salary.update({ // ทำการอัปเดทเงินเดือน 
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
            base_salary: args.data?.base_salary,
          },
          where: {
            id: args.data?.id
          }
        });
        // อัปเดท provident log (กองทุน พนักงาน และ บริษัท)
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

        return {
          message: 'update success',
          status: true,
        }
      }
      ////////////////////////////// ถ้าหากไม่มี id จะทำการสร้างเงินเดือน //////////////////////////////
      // format ค่าวันจาก date ที่รับเข้ามา
      let date = args.data?.date
      let ThisYear = dayjs(date).format("YYYY")
      let Thismonth = dayjs(date).format("MM")
      // เช็ค expense_company ว่าตั้งค่าการคำนวณเงินมีตรงกับวันที่จะคำนวณเงินมั้ย
      const chk_expense = await ctx.prisma.expense_company.findMany({
        where: {
          exp_com_month: Thismonth, AND: {
            exp_com_years: ThisYear
          }
        }
      })
      if(chk_expense.length === 0){
        throw new Error("ไม่สามารถคำนวณเงินเดือนได้ กรุณาตั้งค่าการคำนวณเงินเดือนก่อน "); //ถ้าหากค่า length มีค่า 0 ให้ส่ง error ไปตั้งค่า expense company ก่อน
      }
      //// ในกรณีที่มี expense company สามารถคำนวณเงินได้ตามปกติเลย
      const gensalaryID = v4(); // เจน id ของเงินเดือน
      const genAllCollectID = v4(); // เจน id ของ mas_all_collect
      const providentID = v4() // เจน id ของ provident log

      // 1. เช็คค่าจาก mas_all_collect โดยอิงจาก userId
      const chk_collectLog = await ctx.prisma.mas_all_collect.findMany({
        include: { provident_log: true },
        where: {
          userId: args.data?.userId,
        },
      });


      // 2. เช็คค่าจากเงินเดือนโดยอ้างอิงจาก userId และ ปีจากที่ format มา
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
      // 3. เช็คค่าจาก bookbank_log (ฐานเงินเดือน) โดยอ้างอิงจาก userId และ และ unix(เวลาของวันที่มีผล accept_date) 
      const check_bookbank = await ctx.prisma.bookbank_log.findMany({
        take: 1,
        where: {
          userId: args.data.userId,
          AND: {
            unix: { lte: dayjs(new Date()).unix() } //โดยอ้างอิงจากเวลาปัจจุบัน  เพื่อจะหาค่า ฐานเงินเดือนได้ถูกต้อง
          }
        }, orderBy: {
          date: "desc"
        }
      })
      let bookbank_logId = check_bookbank[0].id //หา bookbank log ของ user คนนั้นจากนั้นให้ insert เข้า salary
      // let Base_salary = check_bookbank[0].base_salary //กำหนดให้ base_salary เท่ากับฐานเดือนของเดือนที่ทำการค้นหา

      let Vat_per = null //กำหนดค่า vat_per เป็น 0
      let SS_per = null//กำหนดค่า SS_per เป็น 0
      const chk_vatByEXP = await ctx.prisma.expense_company.findMany({ //เช็ค expense company ถ้าหากวันที่คำนวณเงินเดือนยังไมถึงวันที่มีผลให้ใช้ expense company เดิม
        take: 1,
        where: {
          companyBranchId: ctx.currentUser?.branchId,
          AND: {
            unix_date: { lte: dayjs(new Date(new Date(args.data.date))).unix() } //โดยอ้างอิงจาก unix_date(เดือนที่มีผล)
          }
        }, orderBy: {
          date: 'desc'
        }
      })
      // ทำการ forEach ค่าของ chk_vatByEXP จากนั้นกำหนดค่าให้ Vat_per และ SS_per
      chk_vatByEXP.forEach((e: any) => {
        Vat_per = e.vat_per
        SS_per = e.ss_per
      })
      console.log(chk_vatByEXP);

      let time
      let result_incomeYears = 0; // กำหนดค่าให้ result_incomeYears เป็น 0
      let result_vatYears = 0; // กำหนดค่าให้ result_vatYears เป็น 0
      let result_sosialYears = 0; // กำหนดค่าให้ result_sosialYears เป็น 0

      if (chk_salaryYears.length === 0) { //เช็คค่าของเงินเดือนในปีนั้น ถ้า user คนนั้นพึ่งสมัครมาครั้งแรกให้เข้าเงื่อนไขนี้
        const pro_emp = args.data?.provident_employee
        const pro_com = args.data?.provident_company
        // 4. ทำการสร้างเงินเดือนขึ้นมา โดยการคำนวณครั้งแรก  front end เป็นฝ่ายคำนวณเงินก่อน
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
            socialYears: 0 + args.data?.social_security, // กรณีนี้คือกรณีที่เงินเดือนเป็นเดือนมกราคม จะทำการล้างค่าประกันสังคม ภาษี รายได้สะสมทั้งหมดให้เป็น 0 แล้ว บวกด้วยค่าที่รับเข้ามา
            vatYears: 0 + args.data?.vat,
            incomeYears: 0 + args.data?.net,
            month: Thismonth,
            years: ThisYear,
            create_by: ctx.currentUser?.id,
            create_date: new Date(),
            // update_by: ctx.currentUser?.userId,
            // update_date: new Date(),
            mas_bankId: args.data?.mas_bankId,
            base_salary: args.data?.base_salary,
            provident_logId: providentID,
            provident_log: { //ทำการสร้าง provident_log เพื่อเก็บค่าของกองทุน พนักงานและบริษัทด้วย เนื่องจากว่า กองทุนทั้ง 2 อย่างจำเป็นที่จะต้องเก็บไว้ทุกเดือน เพื่อสามารถเรียกดูย้อนหลังได้
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
        //5. ทำการเช็ค mas_all_collect ว่าที่เงินเดือนออกแล้ว เขามียอดเงินสะสมทั้งหมดหรือไม่ 
        if (chk_collectLog.length > 0) {
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
          //5.1 ถ้าหากว่าเขามีอยู่แล้ววให้ทำการอัปเดทข้อมูล
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
        } else { //5.2 ถ้าหาก mas_all_collect ไม่มีเลย ให้ทำการสร้างขึ้นมาใหม่
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

      if (Thismonth != "13") { //6. ถ้าเดือนนั้นคือเดือน 2-12 .ให้ทำการสร้างเงินสลิปเงินเดือนขึ้นมา
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
            socialYears: result_sosialYears + args.data?.social_security, //โดยประกันสังคมปี จะบวกเพิ่มไปเรื่อยๆ จนถึงเดือนที่ 12
            vatYears: result_vatYears + args.data?.vat, //โดยภาษีปี จะบวกเพิ่มไปเรื่อยๆ จนถึงเดือนที่ 12
            incomeYears: result_incomeYears + args.data?.net, //โดยยอดรายได้สะสมปี จะบวกเพิ่มไปเรื่อยๆ จนถึงเดือนที่ 12
            month: Thismonth,
            years: ThisYear,
            create_by: ctx.currentUser?.id,
            create_date: new Date(),
            // update_by: ctx.currentUser?.userId,
            // update_date: new Date(),
            mas_bankId: args.data?.mas_bankId,
            provident_logId: providentID,
            base_salary: args.data?.base_salary,
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

      if (chk_collectLog.length > 0) { //6.1 ทำการเช็คถ้าหาก all_collect มี ให้ทำการอัปเดท
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
      } else { //6.2 ถ้าหาก all_collect ไม่มีให้ทำการสร้างขึ้นมาใหม่
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
      const bookbankID = v4(); //เจน id ของ bookbank_log
      const readbookbankID = v4(); //เจน id ของ read_bookbank_log
      let date = args.data?.accept_date //format ค่าเวลาที่รับเข้ามา
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
          take: 1,
          where: {
            unix: { lte: dayjs(new Date()).unix() },
            AND: {
              userId: args.data.userId
            }
          }, orderBy: {
            accept_date: 'desc'
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
            cal_date_salary: 'desc'
          }
        })
        // console.log(chk_payday);
        chk_payday.forEach((e) => {
          let unix_cal_date = e.unix as number //unix_cal_date คือวันที่จ่ายเงิน unix_acp_bb วันที่มีผล
          console.log('วันที่จ่ายเงิน =', unix_cal_date);
          let result = unix_cal_date - unix_acp_bb //เมื่อทำการลบกันแล้ว ค่าที่ติดลบ คือค่าที่เป็นอดีต แต่ถ้า เป็นบวก คือค่าที่เป็นอนาคต 
          console.log(result);
          if (result <= 0) {
            throw new Error("ไม่สามารถอัปเดทข้อมูลได้เนื่องจากเลยวันจ่ายเงินเดือนแล้ว "); //ถ้าหากค่าเป็นติดลบ ให้ส่ง error 
          }
        })
        ///////////////////////////////เงื่อนไขนี้คือการอัปเดท /////////////////////////////////////////////////
        const createbook_bank = await ctx.prisma.bookbank_log.update({ //อัปเดทข้อมูลใน bookbank log
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

        const insert_read_bb_log = await ctx.prisma.read_bookbank_log.create({ //เก็บ log ของการอัปเดทเข้าไปใน read_bookbank_log
          data: {
            id: readbookbankID,
            date: new Date(args.data?.date),
            mas_bankId: args.data?.mas_bankId,
            bank_number: args.data?.bank_number as string,
            all_collectId: args.data?.all_collectId,
            base_salary: args.data?.base_salary as number,
            userId: args.data?.userId,
            accept_date: new Date(Result),
            unix: unix_date_upt,
            accept_month: Acp_month + 1,
            accept_years: Acp_year,
            provident_com: args.data?.provident_com as number, // กองทุนของพนักงาน ตัวเลขเป็น %
            provident_emp: args.data?.provident_emp as number, // กองทุนของบริษัท ตัวเลขเป็น %
            update_by: ctx.currentUser?.id,
            update_date: new Date(),
            bookbank_logId: args.data?.id
          }
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
        ////////////////// กำหนดค่าให้กับทุกค่าที่มีใน base ของ salary //////////////////
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

        // ทำการ loop ค่าเงินเดือนของเดือนนั้นที่มีการเปลี่ยนแปลง bookbank_log เช่นเ คำนวณเงินเดือนเสร็จแล้ว เดือน 2 แต่ต้องการจะเปลี่ยนฐานเงินเดือนเดือน 2 จะต้องทำคำนวณเงินเดือนใหมอีกครั้ง
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
          const chk_bb = await ctx.prisma.bookbank_log.findMany({ //ทำการเช็คค่าของ bookbank_log เพื่อที่จะหา ฐานเงินเดือนล่าสุดของคนนั้นโดยอิงจาก userId และ เดือนที่มีผล โดยอิงจากเวลาปัจจุบัน
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
          // ทำการ forEach เพื่อกำหนดค่าให้ฐานเงินเดือนเป็นเดือนล่าสุด
          chk_bb.forEach((e) => {
            base_salary = e.base_salary
            console.log(base_salary);
          })
          // 1. ทำการเช็คค่าถ้าหากว่ามีการส่ง กองทุนพนักงานและกองทุนบริษัท
          if (New_Pro_emp_per || New_Pro_com_per) {

            ///// calculate function ///////////
            base_salary = args.data.base_salary ? args.data.base_salary : base_salary //ทำการเช็คว่าฐานเงินเดือนมีการเปลี่ยนแปลงมั้ย ถ้าเปลี่ยนให้ใช้ฐานเงินเดือนใหม่คำนวณ
            //////////// cal everything //////////////////////
            if (args.data.base_salary) { // ถ้าหากมีการเปลี่ยนฐานเงินเดือนจะเข้าเงื่อนไขนี้ คือคำนวณเงินเดือนใหม่หมดทุกอย่างทั้ง  ประกันสังคม ภาษี กองทุน รายได้รวม ภาษีสะสม ประกันสังคมสะสม
              ///// cal ss ////
              let cal_ss = (base_salary * ss_per) / 100
              NewSocial_security = cal_ss >= 750 ? 750 : cal_ss // ******* ถ้าหากมีการเปลี่ยนแปลงมากกว่า 750 ให้เปลี่ยนตัวเลขที่นี่ ปัจจุบันรัฐบาลกำหนดให้แค่ 750 ***********

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
              const cv: any = chk_salary[i] // หน้าบ้านจะส่ง ตัว array check_vat มาซึ่งตัว check_vat นี้จะบอกว่าคำนวณภาษีจากอะไรบ้าง ซึ่งจะเก็บผลบวกของทุกอย่างไว้ในตัวแปร cal 
              chk_take_arr.forEach((e) => {
                take_arr = e.check_vat
                take_arr?.forEach((e: any) => {
                  if (!e && !chk_salary[i]) return
                  cal += cv[e]
                })
                console.log(cal)
              })

              // คำนวณค่าภาษี
              let cal_vat = (cal * vat_per) / 100 //cal_vat คือค่าใหม่ ส่วน vat คือค่าเก่า

              ////// cal provident emp and com ///////////////////
              New_Pro_Emp = (base_salary * New_Pro_emp_per) / 100
              New_Pro_Com = (base_salary * New_Pro_com_per) / 100
              ////////////// calculate and update ///////////////////////
              // Total_income คือ คำนวณรายได้รวมใหม่
              Total_income = commission + position_income + ot + bonus + special_income + other_income + travel_income + bursary + welfare_money + base_salary
              // Total_expense คือ คำนวณรายหักรวมใหม่
              Total_expense = NewSocial_security + cal_vat + miss + ra + late + other + New_Pro_Emp + New_Pro_Com
              // Net คือ คำนวณรายได้สุทธิ โดยการเอา รายได้รวม - รายหักรวม
              Net = Total_income - Total_expense
              // ResultSocialYears คือ คำนวณประกันสังคมสะสมรายปี
              ResultSocialYears = (SocialYears - social_security) + NewSocial_security
              // ResultIncomeYears คือ คำนวณรายได้สะสมรายปี
              ResultIncomeYears = (IncomeYears - old_net) + Net
              // ResultVatYears คือ คำนวณภาษีสะสมรายปี
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
                  socialYears: ResultSocialYears,
                  vatYears: ResultVatYears,
                  net: Net
                },
                where: {
                  id: salary_id
                }
              })
              // console.log(upt_salary);


              const chk_provi_log = await ctx.prisma.provident_log.findMany({  //ทำการค้นหา provident_log
                where: {
                  userId: chk_salary[i].userId as string,
                  AND: {
                    salaryId: salary_id
                  }
                }
              })
              const upt_provi_log = await ctx.prisma.provident_log.update({ // จากนั้นทำการอัปเดทค่าใหม่เข้าไปใน provident_log
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

      ////////////////// กรณีที่ไม่มีการอัปเดท แต่ต้องการจะเพิ่มฐานเงินเดือนใหม่ //////////////////
      // if (args.data?.userId) { 
      //   // ทำการเช็ค bookbank_log โดนอิงจาก userID และ วันที่มีผลโดยอิง ฐานเงินเดือนที่มีค่ามากกว่าจากวันที่ที่รับเข้ามา
      //   let baseold = 0
      //   const chk_acp_bb = await ctx.prisma.bookbank_log.findMany({
      //     where: {
      //       userId: args.data?.userId,
      //       AND: {
      //         unix: { gte: dayjs(new Date(args.data.accept_date)).unix() }
      //       }
      //     },
      //     orderBy: {
      //       accept_date: 'desc'
      //     }
      //   })
      //   console.log(chk_acp_bb); 
      //   // ถ้าหากเช็ค bookbank log มันมากกว่าค่าวันที่รับเข้ามา จะส่ง error
      //   if (chk_acp_bb.length > 0) {
      //     throw new Error("ไม่สามารถตั้งค่าฐานเงินเดือนน้อยกว่าเดือนก่อนหน้า ");
      //   }
      // }

      //// ทำการสร้าง bookbank_log 
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

      //// ทำการสร้าง read_bookbank_log 
      const insert_read_bb_log = await ctx.prisma.read_bookbank_log.create({
        data: {
          id: readbookbankID,
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
          update_by: ctx.currentUser?.id,
          update_date: new Date(),
          bookbank_logId: bookbankID
        }
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
      const genExpenseID = v4(); // เจน id ของ expense company
      let date = args.data?.date // format วันที่ที่รับเข้ามา
      let ThisYear = dayjs(date).format("YYYY")
      let Thismonth = dayjs(date).format("MM")
      let Result = dayjs(date).format('YYYY-MM')
      console.log(Result);
      let unix_date_upt = dayjs(new Date(Result)).unix()
      console.log(unix_date_upt);
      let unix_date = dayjs(args.data?.date).unix()
      let unix = dayjs(args.data?.cal_date_salary).unix()
      const take_arr = args.data?.check_vat ? args.data?.check_vat : [] // กำหนดให้ take_arr เท่ากับ check_vat ที่รับเข้ามา ถ้าไม่มีการส่งมากำหนดในเป็น []

      if (args.data?.id) { //ถ้ามีการรับ ID ให้ทำการอัปเดท
        //1. ทำการ update ExpenseCompany
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
        const chk_salary = await ctx.prisma.salary.findMany({ //2. จากนั้นให้ทำการหาา salary ว่าเดือนที่มีการเปลี่ยนแปลง ตรงกับ เงินเดือนมั้ย
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

        for (let i = 0; i < chk_salary.length; i++) { //3. จากนั้น loop ข้อมูลเงินเดือนเพื่อจะเอามาคำนวณในแต่ละเดือน

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

          // ทำการเช็ค bookbank_log 
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
          // forEach เพื่อเอาค่าของฐานเงินเดือนไปเรียกใช้
          chk_bb.forEach((e) => {
            base_salary = e.base_salary
            console.log(base_salary);
          })

          // ถ้าหากมีการเปลี่ยนค่าของ ss_per และ vat_per
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
            NewSocial_security = cal_ss >= 750 ? 750 : cal_ss //************** กรณีที่มีการเปลี่ยนประกันสังคมตาม รัฐบาล ให้แก้ไขตรงตัวเลข 750 นะครับ ***************
            Total_income = commission + position_income + ot + bonus + special_income + other_income + travel_income + bursary + welfare_money + base_salary
            Total_expense = cal_vat + miss + ra + late + other + provident_employee + provident_company + NewSocial_security
            Net = Total_income - Total_expense

            ResultVatYears = (VatYears - vat) + cal_vat
            ResultSocialYears = (SocialYears - social_security) + NewSocial_security
            ResultIncomeYears = (IncomeYears - old_net) + Net

            console.log("ประกันสังคมสะสม = ", ResultSocialYears)
            console.log('ประกันสังคมปัจจุบัน = ', NewSocial_security);

            // ทำการค้นหา mas_all_collect โดยอิงจาก userID ที่ loop มาจาก เช็คเงินเดือน
            const chk_all_collect = await ctx.prisma.mas_all_collect.findMany({
              where: {
                userId: chk_salary[i].userId as string
              }
            })
            console.log(chk_all_collect);
            // ทำการ loop ค่าของ chk_all_collect 
            for (let a = 0; a < chk_all_collect.length; a++) {

              let vat_collect_old = chk_all_collect[0].vat_collect as number
              let vat_collect_new = (vat_collect_old - vat) + cal_vat
              let ss_collect_old = chk_all_collect[0].social_secu_collect as number
              let ss_collect_new = (ss_collect_old - social_security) + NewSocial_security

              // จากนั้นทำการ อัปเดทข้อมูลใหม่ให้กับ mas_all_collect โดยเปลี่ยน vat social_security และ income
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
            // จากนั้นทำการอัปเดท เงินเดือนโดยคำนวณค่าจาก vatper ssper ที่รับเข้ามาใหม่
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
    //ลบ salary และ provident_log และอัพเดทค่า การสะสมใน mas_all_collect
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
    //ลบ Deletebookbank และ read_bookbank_log
    async Deletebookbank(p, args, ctx) {
      let read_bb_ID = null
      const find_by_id = await ctx.prisma.read_bookbank_log.findMany({
        where: {
          //โดยอ้างจาก bookbank_logId ที่ได้รับจากการรับค่า id
          bookbank_logId: args.id
        }
      })
      console.log(find_by_id);
      find_by_id.forEach(async (e) => {
        read_bb_ID = e.id

        const delete_read_bb_log = await ctx.prisma.read_bookbank_log.delete({
          where: {
            id: read_bb_ID,
          }
        })
      })

      const deletebook_bank = await ctx.prisma.bookbank_log.delete({ //ลบ bookbank log ที่เลือกจาก id
        where: {
          id: args.id,
        },
      });

      return {
        message: 'delete bookbank success',
        status: true,
      };
    },
    //ลบ expense_company
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
  'Mutation.Check_password': [authenticate()],
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
