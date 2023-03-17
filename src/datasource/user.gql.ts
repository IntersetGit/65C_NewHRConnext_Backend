import { Resolvers } from '../generated/graphql';
import { createPassword } from '../utils/passwords';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { GraphQLError } from 'graphql';
import nodemailer from 'nodemailer';

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
    Position_user: [Position_user]
    salary: [salary]
    bookbank_log: [Bookbank_log_type]
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
    masposition1_id: String
    masposition2_id: String
    masposition3_id: String
    mas_positionlevel1: mas_positionlevel1
    mas_positionlevel2: mas_positionlevel2
    mas_positionlevel3: mas_positionlevel3
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
    email: String
    password: String
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
    role_company: ID
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
    contract_companyemail: String
    social_facebook: String
    social_likedin: String
    social_line: String
    social_telegram: String
    main_business_id: String
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
    profile: Profile
    role: Role
    companyBranch: MeCompanyBranch
  }

  type DeleteAccountUserResponseType {
    message: String
    status: Boolean
  }

  type Query {
    users(userid: ID, name: String, position2Id: ID, position3Id: ID): [User]
    verifyCompanycode(companyname: String!): Boolean
    verifyEmail(emails: String!): Boolean
    me: Me
  }

  type Mutation {
    createAccount(data: CreateAccountInput!): CreateCompanyResponseType
    createAccountUser(data: CreateAccountUserInput!): CreateUserResponseType
    deleteAccountUser(id: ID!): DeleteAccountUserResponseType
    editActive( id: ID): DeleteAccountUserResponseType
  }
`;

const resolvers: Resolvers = {
  Query: {
    async users(parent, args, ctx) {
      if (args.userid) {
        const result = await ctx.prisma.user.findMany({
          include: {
            profile: true,
            company: true,
            Role_Company: true,
            companyBranch: true,
            Position_user: {
              include: {
                mas_positionlevel1: true,
                mas_positionlevel2: true,
                mas_positionlevel3: true,
              },
              orderBy: { date: 'desc' },
            },
          },
          where: {
            id: args.userid as string,
          },
        });
        return result;
      } else {
        const filter = args?.name ? args?.name : undefined;
        const filter2 = args?.position2Id ? args?.position2Id : undefined;
        const filter3 = args?.position3Id ? args?.position3Id : undefined;
        const result = await ctx.prisma.user.findMany({
          include: {
            profile: {
              include: {
                mas_positionlevel1: true,
                mas_positionlevel2: true,
                mas_positionlevel3: true,
              },
            },
            company: true,
            Role_Company: true,
            companyBranch: true,
            Position_user: {
              include: {
                mas_positionlevel1: true,
                mas_positionlevel2: true,
                mas_positionlevel3: true,
              },
              orderBy: { date: 'desc' },
            },
          },
          where: {
            companyBranchId: ctx.currentUser?.branchId,
            AND: {
              profile: {
                firstname_th: { contains: filter },
                AND: {
                  masposition2_id: filter2,
                  AND: {
                    masposition3_id: filter3,
                  },
                },
              },
            },
          },
        });
        return result;
      }
    },

    /**
     * ?Me ข้อมูลส่วนตัวผู้ใช้
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
          profile: true,
          role: true,
          companyBranch: true,
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
    /**
     * ?เช็คข้อมูลซ้ำของอีเมล
     * @param p
     * @param args
     * @param ctx
     */
    async verifyEmail(p, args, ctx) {
      const checker = await ctx.prisma.user.findMany({
        where: { email: args.emails, AND: { isOwner: true } },
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
          isActive: false,
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

      const updateUserCom = await ctx.prisma.user.update({
        data:{
          companyBranchId: createBranch.id
        },where:{
          id: createUser.id
        }
      })

      if (createUser) {
        const secretKey = process.env.JWT_SECRET || 'secret';
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          secure: false,
          auth: {
            user: process.env.ADMIN_E_MAIL,
            pass: process.env.ADMIN_PASS
          }
        });
        const token = await jwt.sign({ id: createUser.id }, secretKey, { expiresIn: '15m' })
        const link_confrim = `http://127.0.0.1:5173/confirm?aceesid=${createUser.id}&tokenid=${token}`
        var mailOptions = {
          from: process.env.ADMIN_E_MAIL,
          to: args.data?.email,
          subject: 'Password Reset',
          text: 'เรียนแจ้งให้ทราบว่า email \n\n' + `${createUser.email}` +
            'ได้ทำการลงทะเบียนสมาชิกกับทาง hr connect เพื่อการสมัครสมาชิกที่สมบูรณ์กรูณากดยืนยัน email ของท่านที่ลิงค์ด้านล่าง\n\n' +
            `${link_confrim}` + '\n\n' +
            'ขอบคุณที่สมัครใช้บริการกับ hr connect \n'
        };

        await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        return {
          message: 'ส่ง confrim email สำเร็จ ',
          status: true,
        }
      }
      throw new Error("Email not found")
    },
   //----------------- เปลี่ยนสถานะของ user หลัง confrim email---------------//
   
   async editActive(p, args, ctx) {
      const editActiveCon = await ctx.prisma.user.update({
        data: {
          isActive: true,
        },
        where: {
          id: args.id as string
        }
      })
      return {
        message: 'success',
        status: true
      }
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
      const type = typeof args.data.age
        ? args.data.age
        : args.data.age?.toString();
      if (args.data.id) {
        if (args.data.role_company == 'OWNER_POSITION') {
          const EditUser = await ctx.prisma.user.update({
            data: {
              email: args.data?.email as string,
              password: await createPassword(args.data?.password as string),
              profile: {
                update: {
                  bio: args.data?.bio,
                  firstname_th: args.data?.firstname_th,
                  lastname_th: args.data?.lastname_th,
                  firstname_en: args.data?.firstname_en,
                  lastname_en: args.data?.lastname_en,
                  nickname: args.data?.nickname,
                  blood_type: args.data?.blood_type,
                  employee_status: args.data?.employee_status,
                  start_date_work: args.data?.start_date_work,
                  avatar: args.data?.avatar,
                  dob: new Date(args.data?.dob),
                  age: type,
                  relationship: args.data?.relationship,
                  shirt_size: args.data?.shirt_size,
                  prefix_th: args.data?.prefix_th,
                  prefix_en: args.data?.prefix_en,
                  citizen_id: args.data?.citizen_id,
                  social_id: args.data?.social_id,
                  staff_status: args.data?.staff_status,
                  tel: args.data?.tel,
                  address: args.data?.address,
                  gender: args.data?.gender,
                  staff_code: args.data?.staff_code,
                  religion: args.data?.religion,
                  citizen_addressnumber: args.data?.citizen_addressnumber,
                  citizen_address: args.data?.citizen_address,
                  citizen_country: args.data?.citizen_country,
                  citizen_province: args.data?.citizen_province,
                  citizen_district: args.data?.citizen_district,
                  citizen_state: args.data?.citizen_state,
                  citizen_zipcode: args.data?.citizen_zipcode,
                  citizen_tel: args.data?.citizen_tel,
                  contract_sameCitizen: args.data
                    ?.contract_sameCitizen as boolean,
                  contract_addressnumber: args.data?.contract_addressnumber,
                  contract_address: args.data?.contract_address,
                  contract_country: args.data?.contract_country,
                  contract_province: args.data?.contract_province,
                  contract_district: args.data?.contract_district,
                  contract_state: args.data?.contract_state,
                  contract_zipcode: args.data?.contract_zipcode,
                  contract_email: args.data?.email,
                  contract_companyemail: args.data?.contract_companyemail,
                  social_facebook: args.data?.social_facebook,
                  social_likedin: args.data?.social_likedin,
                  social_line: args.data?.social_line,
                  social_telegram: args.data?.social_telegram,
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
          const EditUser = await ctx.prisma.user.update({
            data: {
              email: args.data?.email as string,
              password: await createPassword(args.data?.password as string),
              RoleCompanyID: args.data?.role_company,
              profile: {
                update: {
                  bio: args.data?.bio,
                  firstname_th: args.data?.firstname_th,
                  lastname_th: args.data?.lastname_th,
                  firstname_en: args.data?.firstname_en,
                  lastname_en: args.data?.lastname_en,
                  nickname: args.data?.nickname,
                  blood_type: args.data?.blood_type,
                  employee_status: args.data?.employee_status,
                  start_date_work: args.data?.start_date_work,
                  avatar: args.data?.avatar,
                  dob: new Date(args.data?.dob),
                  age: type,
                  relationship: args.data?.relationship,
                  shirt_size: args.data?.shirt_size,
                  prefix_th: args.data?.prefix_th,
                  prefix_en: args.data?.prefix_en,
                  citizen_id: args.data?.citizen_id,
                  social_id: args.data?.social_id,
                  staff_status: args.data?.staff_status,
                  tel: args.data?.tel,
                  address: args.data?.address,
                  gender: args.data?.gender,
                  staff_code: args.data?.staff_code,
                  religion: args.data?.religion,
                  citizen_addressnumber: args.data?.citizen_addressnumber,
                  citizen_address: args.data?.citizen_address,
                  citizen_country: args.data?.citizen_country,
                  citizen_province: args.data?.citizen_province,
                  citizen_district: args.data?.citizen_district,
                  citizen_state: args.data?.citizen_state,
                  citizen_zipcode: args.data?.citizen_zipcode,
                  citizen_tel: args.data?.citizen_tel,
                  contract_sameCitizen: args.data
                    ?.contract_sameCitizen as boolean,
                  contract_addressnumber: args.data?.contract_addressnumber,
                  contract_address: args.data?.contract_address,
                  contract_country: args.data?.contract_country,
                  contract_province: args.data?.contract_province,
                  contract_district: args.data?.contract_district,
                  contract_state: args.data?.contract_state,
                  contract_zipcode: args.data?.contract_zipcode,
                  contract_email: args.data?.email,
                  contract_companyemail: args.data?.contract_companyemail,
                  social_facebook: args.data?.social_facebook,
                  social_likedin: args.data?.social_likedin,
                  social_line: args.data?.social_line,
                  social_telegram: args.data?.social_telegram,
                },
              },
            },
            where: { id: args.data.id },
          });
          return {
            message: 'success',
            status: true,
          };
        }
      } else {
        const createUser = await ctx.prisma.user.create({
          data: {
            id: genUserid,
            email: args.data?.email as string,
            password: await createPassword(args.data?.password as string),
            roleId: 'd515bf21-a90e-41e9-b202-8a4d2cdea391',
            isActive: true,
            isOwner: false,
            islogin: false,
            createdAt: new Date(),
            companyBranchId: ctx.currentUser?.branchId,
            RoleCompanyID: args.data?.role_company,
            profile: {
              create: {
                id: genProfileid,
                bio: args.data?.bio,
                firstname_th: args.data?.firstname_th,
                lastname_th: args.data?.lastname_th,
                firstname_en: args.data?.firstname_en,
                lastname_en: args.data?.lastname_en,
                nickname: args.data?.nickname,
                blood_type: args.data?.blood_type,
                employee_status: args.data?.employee_status,
                start_date_work: args.data?.start_date_work,
                avatar: args.data?.avatar,
                dob: new Date(args.data?.dob),
                age: type,
                relationship: args.data?.relationship,
                shirt_size: args.data?.shirt_size,
                prefix_th: args.data?.prefix_th,
                prefix_en: args.data?.prefix_en,
                citizen_id: args.data?.citizen_id,
                social_id: args.data?.social_id,
                staff_status: args.data?.staff_status,
                tel: args.data?.tel,
                address: args.data?.address,
                gender: args.data?.gender,
                staff_code: args.data?.staff_code,
                religion: args.data?.religion,
                citizen_addressnumber: args.data?.citizen_addressnumber,
                citizen_address: args.data?.citizen_address,
                citizen_country: args.data?.citizen_country,
                citizen_province: args.data?.citizen_province,
                citizen_district: args.data?.citizen_district,
                citizen_state: args.data?.citizen_state,
                citizen_zipcode: args.data?.citizen_zipcode,
                citizen_tel: args.data?.citizen_tel,
                contract_sameCitizen: args.data
                  ?.contract_sameCitizen as boolean,
                contract_addressnumber: args.data?.contract_addressnumber,
                contract_address: args.data?.contract_address,
                contract_country: args.data?.contract_country,
                contract_province: args.data?.contract_province,
                contract_district: args.data?.contract_district,
                contract_state: args.data?.contract_state,
                contract_zipcode: args.data?.contract_zipcode,
                contract_email: args.data?.email,
                contract_companyemail: args.data?.contract_companyemail,
                social_facebook: args.data?.social_facebook,
                social_likedin: args.data?.social_likedin,
                social_line: args.data?.social_line,
                social_telegram: args.data?.social_telegram,
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
          userId: args.id,
        },
      });
      const deleteuser = await ctx.prisma.user.delete({
        where: {
          id: args.id,
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
  'Query.users': [authenticate()],
  'Query.me': [authenticate()],
  'Mutation.createAccountUser': [authenticate()],
  'Mutation.deleteAccountUser': [authenticate()],
};

export const userResolvers = composeResolvers(resolvers, resolversComposition);
