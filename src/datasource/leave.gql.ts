

import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import { v4 } from 'uuid';

export const leaveTypedef = gql`
input leave{
 id: String            
 leavetype_id: String             
 start_date: Date
 end_date: Date
 quantity_day: Int
 detail_leave: String 
 Status: Int                
 user_id: String
}

type getdataaboutleave{
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
    data_leave: [leave_data]
}

type leave_data{
 id: String            
 leavetype_id: String            
 leave_type: [leave_type]    
 start_date: Date
 end_date: Date
 quantity_day: Int
 detail_leave: String 
 Status: Int                
 user_id: String                 
}

type leave_type{
  id: String 
  name: String
  orderby: Int       
}

type CreateleaveResponseType{
  message: String
  status: Boolean
}

type Query{
  getleavetypedata: [leave_type]
  getleava_data: [getdataaboutleave]
}

type Mutation{
 createddata_leave(data: leave) : CreateleaveResponseType
}

`

export const leaveResolvers: Resolvers = {
  Query: {

    async getleavetypedata(p, args, ctx) {
      const gettypeleave = await ctx.prisma.mas_leave_type.findMany({
        orderBy:{orderby: 'asc'}
      })
      return gettypeleave
    },

    async getleava_data(p, args, ctx) {
      const getdataleave = await ctx.prisma.user.findMany({
        include: {
          profile: true,
          Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true } },
          data_leave: {include: {leave_type:true}}
        }
      })
      return getdataleave
    }
  },
  Mutation: {

    async createddata_leave(p, args, ctx){
      if(args.data?.id){
        const updatedLeavdData = await ctx.prisma.data_leave.update({
          data:{
            leavetype_id: args.data?.leavetype_id as string,             
            start_date: args.data?.start_date,
            end_date: args.data?.end_date,
            quantity_day: args.data?.quantity_day as number,
            detail_leave: args.data?.detail_leave as string ,
            Status: args.data.Status as number,               
            user_id: args.data?.user_id as string
          },
          where :{
            id : args.data.id
          }
        })
        return{
          message: 'success',
          status: true,
        }

      }else{
        const addLeavdData = await ctx.prisma.data_leave.create({
          data:{
            id: v4(),
            leavetype_id: args.data?.leavetype_id as string,             
            start_date: args.data?.start_date,
            end_date: args.data?.end_date,
            quantity_day: args.data?.quantity_day as number,
            detail_leave: args.data?.detail_leave as string ,
            Status: 1,                
            user_id: args.data?.user_id as string
          }
        })
        return{
          message: 'success',
          status: true,
        }
      }
    }

  }

}

const resolversleave = {
  'Query.getleavetypedata': [authenticate()],
  'Query.getleava_data': [authenticate()],

};

export const leavedataResolvers = composeResolvers(
  leaveResolvers,
  resolversleave,
);


