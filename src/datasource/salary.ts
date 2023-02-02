import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { GraphQLError } from 'graphql';


export const salaryTypedef = gql`
input yearsInput{
    id:ID!
    name:String
}
input monthInput{
    id:ID!
    name:String
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
      userId :User
  }
  type bookbank_log {
  id:ID!
  date:DateTime
  mas_bankId:String  
  bank_number:String   
  all_collectId:String 
  base_salary:Float
  userId:User
  }
input bookbank_logInput {
  id:ID!
  date:DateTime
  mas_bankId:String  
  bank_number:String   
  all_collectId:String 
  base_salary:Float
  }
input salaryInput{
    id:ID!
    mas_monthId:String
    mas_yearsId:String
    commission:Float
    position_income:Float
    ot:Float
    bonus:Float
    special_income:Float
    other_income:Float
    travel_income:Float
    bursary:Float
    welfare_money:Float
    vat:Float
    social_security:Float
    miss:Float
    ra:Float
    late:Float
    other:Float
    provident_employee:Float
    provident_company:Float
    total_income:Float
    total_expense:Float
    net:Float
    userId:String
    bookbank_logId:String
    }
type salary {
    id:ID!
    mas_monthId:month
    mas_yearsId:years
    commission:Float
    position_income:Float
    ot:Float
    bonus:Float
    special_income:Float
    other_income:Float
    travel_income:Float
    bursary:Float
    welfare_money:Float
    vat:Float
    social_security:Float
    miss:Float
    ra:Float
    late:Float
    other:Float
    provident_employee:Float
    provident_company:Float
    total_income:Float
    total_expense:Float
    net:Float
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
    salary(userId: String): [salary]
    bookbank_log(id:String):[bookbank_log]
}
type Mutation{
    createsalary(data:salaryInput!):createsalaryResponseType
    createbookbank(data:bookbank_logInput):createbookbanklogResponseType
    createyears(data:yearsInput):yearsResponseType
    createmonth(data:monthInput):monthResponseType
}
`;

const resolvers:Resolvers ={
    Query: {
        async salary(parant:any, args:any, ctx:any){
            const filter=args?.userId?args.userId:undefined;
            const result=await ctx.prisma.salary.findMany({
                include:{User:true,mas_month:true,mas_years:true},
                where:{
                    userId:ctx.currentUser?.userId,
                    AND:{
                        years:{contains:filter},
                        month:{contains:filter}
                    },
                },
            });
            return result;
        },



     async bookbank_log(parant:any,args:any,ctx:any) {
        const filter=args?.userId?args.userId:undefined;
        const result=await ctx.prisma.bookbank_log.findMany({
            include:{User:true,mas_bank:true},
            where:{
                userId:ctx.currentUser?.userId,
                AND:{
                    AND:{
                        years:{contains:filter},
                        month:{contains:filter}
                },
            },
        },
    });
    return result;
},
    },
Mutation:{
    
}
}