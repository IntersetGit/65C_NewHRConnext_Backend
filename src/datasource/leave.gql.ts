


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
 quantity_hours: Int
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
 id: ID            
 leavetype_id: String            
 mas_leave_type: mas_leave_type   
 start_date: Date
 end_date: Date
 quantity_day: Int
 quantity_hours: Int
 detail_leave: String 
 Status: Int                
 user_id: String                 
}

type mas_leave_type{
  id: String 
  name: String
  orderby: Int       
}

type CreateleaveResponseType{
  message: String
  status: Boolean
}



type getleaveResponseType{
  data_all: [getdataaboutleave]
  data_count: getcount
}

type getcount{
   name_1: String,
   count1: Int,
   name_2: String,
   count2: Int,
   name_3: String,
   count3: Int,
   name_4: String,
   count4: Int
}

type Query{
  getleavetypedata: [mas_leave_type]
  getleava_datame: getleaveResponseType
}

type Mutation{
 createddata_leave(data: leave) : CreateleaveResponseType
}

`

export const leaveResolvers: Resolvers = {
  Query: {
    async getleavetypedata(p, args, ctx) {
      const gettypeleave = await ctx.prisma.mas_leave_type.findMany({
        orderBy: { orderby: 'asc' }
      })
      return gettypeleave
    },

    async getleava_datame(p, args, ctx) {

      let countleave1 = 0
      let countleave2 = 0
      let countleave3 = 0
      let countleave4 = 0
      const getdataleave = await ctx.prisma.user.findMany({
        include: {
          profile: true,
          Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true } },
          data_leave: { include: { mas_leave_type: true } }
        },
        where: {
          id: ctx.currentUser?.id
        },
      })
      if (getdataleave) {
        getdataleave.forEach((a) => {
          if (a.data_leave) {
            a.data_leave.forEach((e) => {
              if (e.mas_leave_type.name == "ลาพักร้อน") {
                countleave1 = countleave1 + e.quantity_day
              }
              if (e.mas_leave_type.name == "ลากิจ") {
                countleave2 = countleave2 + e.quantity_day
              }
              if (e.mas_leave_type.name == "ลาป่วย") {
                countleave3 = countleave3 + e.quantity_day
              }
              if (e.mas_leave_type.name == "ลาอื่นๆ") {
                countleave4 = countleave4 + e.quantity_day
              }
            })
          }
        })
      }

      let dataCount = {
        name_1: 'ลาพักร้อน ' + countleave1,
        count1: countleave1,
        name_2: 'ลาป่วย ' + countleave2,
        count2: countleave2,
        name_3: 'ลากิจ ' + countleave3,
        count3: countleave3,
        name_4: 'ลาอื่นๆ ' + countleave4,
        count4: countleave4
      }
      // return getdataleave
      return {
        data_all: getdataleave,
        data_count: dataCount
      }
      // return {
      //   // data_all: getdataleave ,
      //   data_count: dataCount
      // };
    }
    // const countQuantityDay = 


  },

  Mutation: {

    async createddata_leave(p, args, ctx) {
      if (args.data?.id) {
        const updatedLeavdData = await ctx.prisma.data_leave.update({
          data: {
            leavetype_id: args.data?.leavetype_id as string,
            start_date: args.data?.start_date,
            end_date: args.data?.end_date,
            quantity_day: args.data?.quantity_day as number,
            quantity_hours: args.data.quantity_hours as number,
            detail_leave: args.data?.detail_leave as string,
            Status: args.data.Status as number,
            user_id: args.data?.user_id as string
          },
          where: {
            id: args.data.id
          }
        })
        return {
          message: 'success',
          status: true,
        }

      } else {
        const addLeavdData = await ctx.prisma.data_leave.create({
          data: {
            id: v4(),
            leavetype_id: args.data?.leavetype_id as string,
            start_date: args.data?.start_date,
            end_date: args.data?.end_date,
            quantity_hours: args.data?.quantity_hours as number,
            quantity_day: args.data?.quantity_day as number,
            detail_leave: args.data?.detail_leave as string,
            Status: 1,
            user_id: args.data?.user_id as string
          }
        })
        return {
          message: 'success',
          status: true,
        }
      }
    }

  }

}

const resolversleave = {
  'Query.getleavetypedata': [authenticate()],
  'Query.getleava_datame': [authenticate()],
  'Mutation.createddata_leave': [authenticate()]
};

export const leavedataResolvers = composeResolvers(
  leaveResolvers,
  resolversleave,
);


