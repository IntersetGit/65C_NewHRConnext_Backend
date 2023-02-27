import { User } from './../generated/graphql';



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
 user: User            
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

type DeleteleaveResponseType{
    message: String
    status: Boolean
  }

type Query{
  getleavetypedata: [mas_leave_type]
  getleava_datame(dataleaveId: ID): getleaveResponseType
  getleava_alldata(dataleaveId: ID, name: String, position2Id: ID, position3Id: ID): [leave_data] 
  getAllleave(userId: ID, name: String, position2Id: ID, position3Id: ID): getleaveResponseType
}

type Mutation{
 createddata_leave(data: leave) : CreateleaveResponseType
 editstatusleave(data: leave): CreateleaveResponseType
 delete_leve(id: ID!): DeleteleaveResponseType
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
      let cout_hours = 0
      let cout_hours2 = 0
      let cout_hours3 = 0
      let cout_hours4 = 0
      let countleave1 = 0
      let countleave2 = 0
      let countleave3 = 0
      let countleave4 = 0
      if (!args.dataleaveId) {
        const getdataleave_2 = await ctx.prisma.user.findMany({
          include: {
            profile: true,
            Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } }, orderBy:{ date: 'desc'}  },
            data_leave: { include: { mas_leave_type: true } }
          },
          where: {
            id: ctx.currentUser?.id
          },
        })
        const getdataleave = await ctx.prisma.user.findMany({
          include: {
            profile: true,
            Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } }, orderBy:{ date: 'desc'} },
            data_leave: { include: { mas_leave_type: true }, where: { Status: 2 } }
          },
          where: {
            id: ctx.currentUser?.id,
            AND: {
              data_leave: {
                some: {
                  Status: 2
                }
              }
            }
          },
        })
        if (getdataleave) {
          getdataleave.forEach((a) => {
            if (a.data_leave) {
              a.data_leave.forEach((e) => {
                if (e.mas_leave_type.name == "ลาพักร้อน") {
                  cout_hours = cout_hours + e.quantity_hours
                  countleave1 = countleave1 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลากิจ") {
                  cout_hours2 = cout_hours2 + e.quantity_hours
                  countleave2 = countleave2 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลาป่วย") {
                  cout_hours3 = cout_hours3 + e.quantity_hours
                  countleave3 = countleave3 + e.quantity_day

                }
                if (e.mas_leave_type.name == "ลาอื่นๆ") {
                  cout_hours4 = cout_hours4 + e.quantity_hours
                  countleave4 = countleave4 + e.quantity_day
                }
              })
            }
          })
          if (cout_hours >= 8) {
            let a = Math.trunc(cout_hours / 8)
            countleave1 = a + countleave1
            cout_hours = cout_hours - (a * 8)
          }
          if (cout_hours2 >= 8) {
            let a = Math.trunc(cout_hours2 / 8)
            countleave2 = a + countleave2
            cout_hours2 = cout_hours2 - (a * 8)
          }
          if (cout_hours3 >= 8) {
            let a = Math.trunc(cout_hours3 / 8)
            countleave3 = a + countleave3
            cout_hours3 = cout_hours3 - (a * 8)
          }
          if (cout_hours4 >= 8) {
            let b = Math.trunc(cout_hours4 / 8)
            countleave4 = b + countleave4
            cout_hours4 = cout_hours4 - (b * 8)
          }
        }

        let dataCount = {
          name_1: 'ลาพักร้อน ' + countleave1 + ' วัน ' + cout_hours + ' ชั่วโมง',
          count1: countleave1,
          hours1: cout_hours,
          name_2: 'ลากิจ ' + countleave2 + ' วัน ' + cout_hours2 + ' ชั่วโมง',
          count2: countleave2,
          hours2: cout_hours2,
          name_3: 'ลาป่วย ' + countleave3 + ' วัน ' + cout_hours3 + ' ชั่วโมง',
          count3: countleave3,
          hours: cout_hours3,
          name_4: 'ลาอื่นๆ ' + countleave4 + ' วัน ' + cout_hours4 + ' ชั่วโมง',
          count4: countleave4,
          hours4: cout_hours4
        }

        // return getdataleave
        return {
          data_all: getdataleave_2,
          data_count: dataCount
        }
      } else {
        const search = args.dataleaveId ? args.dataleaveId : undefined
        const getdataleave_2 = await ctx.prisma.user.findMany({
          include: {
            profile: true,
            Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } }, orderBy:{ date: 'desc'}  },
            data_leave: { include: { mas_leave_type: true }, where: { id: search } }
          },
          where: {
            data_leave: {
              some: {
                id: search
              }
            }
          },
        })
        const getdataleave = await ctx.prisma.user.findMany({
          include: {
            profile: true,
            Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } }, orderBy:{ date: 'desc'} },
            data_leave: { include: { mas_leave_type: true }, where: { Status: 2, AND: { id: search } } }
          },
          where: {
            data_leave: {
              some: {
                Status: 2,
                AND: {
                  id: search
                }
              }
            }

          },
        })
        if (getdataleave) {
          getdataleave.forEach((a) => {
            if (a.data_leave) {
              a.data_leave.forEach((e) => {
                if (e.mas_leave_type.name == "ลาพักร้อน") {
                  cout_hours = cout_hours + e.quantity_hours
                  countleave1 = countleave1 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลากิจ") {
                  cout_hours2 = cout_hours2 + e.quantity_hours
                  countleave2 = countleave2 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลาป่วย") {
                  cout_hours3 = cout_hours3 + e.quantity_hours
                  countleave3 = countleave3 + e.quantity_day

                }
                if (e.mas_leave_type.name == "ลาอื่นๆ") {
                  cout_hours4 = cout_hours4 + e.quantity_hours
                  countleave4 = countleave4 + e.quantity_day
                }
              })
            }
          })
          if (cout_hours >= 8) {
            let a = Math.trunc(cout_hours / 8)
            countleave1 = a + countleave1
            cout_hours = cout_hours - (a * 8)
          }
          if (cout_hours2 >= 8) {
            let a = Math.trunc(cout_hours2 / 8)
            countleave2 = a + countleave2
            cout_hours2 = cout_hours2 - (a * 8)
          }
          if (cout_hours3 >= 8) {
            let a = Math.trunc(cout_hours3 / 8)
            countleave3 = a + countleave3
            cout_hours3 = cout_hours3 - (a * 8)
          }
          if (cout_hours4 >= 8) {
            let b = Math.trunc(cout_hours4 / 8)
            countleave4 = b + countleave4
            cout_hours4 = cout_hours4 - (b * 8)
          }
        }

        let dataCount = {
          name_1: 'ลาพักร้อน ' + countleave1 + ' วัน ' + cout_hours + ' ชั่วโมง',
          count1: countleave1,
          hours1: cout_hours,
          name_2: 'ลากิจ ' + countleave2 + ' วัน ' + cout_hours2 + ' ชั่วโมง',
          count2: countleave2,
          hours2: cout_hours2,
          name_3: 'ลาป่วย ' + countleave3 + ' วัน ' + cout_hours3 + ' ชั่วโมง',
          count3: countleave3,
          hours: cout_hours3,
          name_4: 'ลาอื่นๆ ' + countleave4 + ' วัน ' + cout_hours4 + ' ชั่วโมง',
          count4: countleave4,
          hours4: cout_hours4
        }
        return {
          data_all: getdataleave_2,
          data_count: dataCount
        }
      }
    },
    //--------- อนุมัติใบลา --------------------//
    async getleava_alldata(p, args, ctx) {
      const filter = args?.name ? args?.name : undefined;
      const filter2 = args?.position2Id ? args?.position2Id : undefined;
      const filter3 = args?.position3Id ? args?.position3Id : undefined;
      if (args.dataleaveId) {
        const alldata_hearderbyId = await ctx.prisma.data_leave.findMany({
          include: {
            user: { include: { profile: true, Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } } }, } },
            mas_leave_type: true
          },
          where: {
            id: args.dataleaveId
          }
        })
        return alldata_hearderbyId
      } else {
        const alldata_hearder = await ctx.prisma.data_leave.findMany({
          include: {
            user: {
              include: {
                profile: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true } },
                Position_user: {
                  include: {
                    mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } }
                  }
                },
              }
            },
            mas_leave_type: true
          },
          where: {
            user: {
              Position_user: {
                some: {
                  headderId: ctx.currentUser?.id,
                }
              },
              AND: {
                profile: {
                  firstname_th: { contains: filter },
                  AND: {
                    masposition2_id: filter2,
                    AND: {
                      masposition3_id: filter3
                    }
                  }
                },
              },
            }
          }
        })
        return alldata_hearder
      }
    },
    //-------------- การลา --------------//
    async getAllleave(p, args, ctx) {
      let cout_hours = 0
      let cout_hours2 = 0
      let cout_hours3 = 0
      let cout_hours4 = 0
      let countleave1 = 0
      let countleave2 = 0
      let countleave3 = 0
      let countleave4 = 0
      const filter = args?.name ? args?.name : undefined;
      const filter2 = args?.position2Id ? args?.position2Id : undefined;
      const filter3 = args?.position3Id ? args?.position3Id : undefined;
      if (args.userId) {
        const getdataAllleavebyId_2 = await ctx.prisma.user.findMany({
          include: {
            profile: true,
            Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } } },
            data_leave: { include: { mas_leave_type: true } }
          },
          where: {
            id: args.userId,
          },
        })

        const getdataAllleavebyId = await ctx.prisma.user.findMany({
          include: {
            profile: true,
            Position_user: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } } },
            data_leave: { include: { mas_leave_type: true }, where: { Status: 2 } }
          },
          where: {
            id: args.userId,
            AND: {
              data_leave: {
                some: {
                  Status: 2
                }
              }
            }
          },
        })
        if (getdataAllleavebyId) {
          getdataAllleavebyId.forEach((a) => {
            if (a.data_leave) {
              a.data_leave.forEach((e) => {
                if (e.mas_leave_type.name == "ลาพักร้อน") {
                  cout_hours = cout_hours + e.quantity_hours
                  countleave1 = countleave1 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลากิจ") {
                  cout_hours2 = cout_hours2 + e.quantity_hours
                  countleave2 = countleave2 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลาป่วย") {
                  cout_hours3 = cout_hours3 + e.quantity_hours
                  countleave3 = countleave3 + e.quantity_day

                }
                if (e.mas_leave_type.name == "ลาอื่นๆ") {
                  cout_hours4 = cout_hours4 + e.quantity_hours
                  countleave4 = countleave4 + e.quantity_day
                }
              })
            }
          })
          if (cout_hours >= 8) {
            let a = Math.trunc(cout_hours / 8)
            countleave1 = a + countleave1
            cout_hours = cout_hours - (a * 8)
          }
          if (cout_hours2 >= 8) {
            let a = Math.trunc(cout_hours2 / 8)
            countleave2 = a + countleave2
            cout_hours2 = cout_hours2 - (a * 8)
          }
          if (cout_hours3 >= 8) {
            let a = Math.trunc(cout_hours3 / 8)
            countleave3 = a + countleave3
            cout_hours3 = cout_hours3 - (a * 8)
          }
          if (cout_hours4 >= 8) {
            let b = Math.trunc(cout_hours4 / 8)
            countleave4 = b + countleave4
            cout_hours4 = cout_hours4 - (b * 8)
          }
        }

        let dataCount = {
          name_1: 'ลาพักร้อน ' + countleave1 + ' วัน ' + cout_hours + ' ชั่วโมง',
          count1: countleave1,
          hours1: cout_hours,
          name_2: 'ลากิจ ' + countleave2 + ' วัน ' + cout_hours2 + ' ชั่วโมง',
          count2: countleave2,
          hours2: cout_hours2,
          name_3: 'ลาป่วย ' + countleave3 + ' วัน ' + cout_hours3 + ' ชั่วโมง',
          count3: countleave3,
          hours: cout_hours3,
          name_4: 'ลาอื่นๆ ' + countleave4 + ' วัน ' + cout_hours4 + ' ชั่วโมง',
          count4: countleave4,
          hours4: cout_hours4
        }
        return {
          data_all: getdataAllleavebyId_2,
          data_count: dataCount
        }

      } else {
        const getdataAllleave_2 = await ctx.prisma.user.findMany({
          include: {
            company: true,
            profile: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true } },
            Position_user: {
              include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } },
              orderBy: { date: 'desc' },
            },
            data_leave: { include: { mas_leave_type: true }}
          },
          where: {
            companyBranch: {
              id: ctx.currentUser?.branchId
            },
            AND: {
              profile: {
                firstname_th: { contains: filter },
                AND: {
                  masposition2_id: filter2,
                  AND: {
                    masposition3_id: filter3
                  }
                }
              },
            }
          }
        })

        const getdataAllleave = await ctx.prisma.user.findMany({
          include: {
            company: true,
            profile: { include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true } },
            Position_user: {
              include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, header: { include: { profile: true } } },
            },
            data_leave: { include: { mas_leave_type: true }, where: { Status: 2 } }
          },
          where: {
            companyBranch: {
              id: ctx.currentUser?.branchId
            },
            AND: {
              data_leave: {
                some: {
                  Status: 2
                }
              },
              AND: {
                profile: {
                  firstname_th: { contains: filter },
                  AND: {
                    masposition2_id: filter2,
                    AND: {
                      masposition3_id: filter3
                    }
                  }
                },

              },
            }
          }
        })

        if (getdataAllleave) {
          getdataAllleave.forEach((a) => {
            if (a.data_leave) {
              a.data_leave.forEach((e) => {
                if (e.mas_leave_type.name == "ลาพักร้อน") {
                  cout_hours = cout_hours + e.quantity_hours
                  countleave1 = countleave1 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลากิจ") {
                  cout_hours2 = cout_hours2 + e.quantity_hours
                  countleave2 = countleave2 + e.quantity_day
                }
                if (e.mas_leave_type.name == "ลาป่วย") {
                  cout_hours3 = cout_hours3 + e.quantity_hours
                  countleave3 = countleave3 + e.quantity_day

                }
                if (e.mas_leave_type.name == "ลาอื่นๆ") {
                  cout_hours4 = cout_hours4 + e.quantity_hours
                  countleave4 = countleave4 + e.quantity_day
                }
              })
            }
          })
          if (cout_hours >= 8) {
            let a = Math.trunc(cout_hours / 8)
            countleave1 = a + countleave1
            cout_hours = cout_hours - (a * 8)
          }
          if (cout_hours2 >= 8) {
            let a = Math.trunc(cout_hours2 / 8)
            countleave2 = a + countleave2
            cout_hours2 = cout_hours2 - (a * 8)
          }
          if (cout_hours3 >= 8) {
            let a = Math.trunc(cout_hours3 / 8)
            countleave3 = a + countleave3
            cout_hours3 = cout_hours3 - (a * 8)
          }
          if (cout_hours4 >= 8) {
            let b = Math.trunc(cout_hours4 / 8)
            countleave4 = b + countleave4
            cout_hours4 = cout_hours4 - (b * 8)
          }
        }
        let dataCount = {
          name_1: 'ลาพักร้อน ' + countleave1 + ' วัน ' + cout_hours + ' ชั่วโมง',
          count1: countleave1,
          hours1: cout_hours,
          name_2: 'ลากิจ ' + countleave2 + ' วัน ' + cout_hours2 + ' ชั่วโมง',
          count2: countleave2,
          hours2: cout_hours2,
          name_3: 'ลาป่วย ' + countleave3 + ' วัน ' + cout_hours3 + ' ชั่วโมง',
          count3: countleave3,
          hours: cout_hours3,
          name_4: 'ลาอื่นๆ ' + countleave4 + ' วัน ' + cout_hours4 + ' ชั่วโมง',
          count4: countleave4,
          hours4: cout_hours4
        }
        return {
          data_all: getdataAllleave_2,
          data_count: dataCount
        }
      }
    }
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
    },


    async editstatusleave(p, args, ctx) {
      const editleave = await ctx.prisma.data_leave.update({
        where: {
          id: args.data?.id as string
        },
        data: {
          Status: args.data?.Status as number
        }
      })
      return {
        message: 'success',
        status: true
      }
    },

    async delete_leve(p, args, ctx) {
      const delete_dataleave = await ctx.prisma.data_leave.deleteMany({
        where: {
          id: args.id
        }
      })
      return {
        message: 'success',
        status: true
      }
    }
  }
}

const resolversleave = {
  'Query.getleavetypedata': [authenticate()],
  'Query.getleava_datame': [authenticate()],
  'Query.getleava_alldata': [authenticate()],
  'Query.getAllleave': [authenticate()],
  'Mutation.createddata_leave': [authenticate()],
  'Mutation.editstatusleave': [authenticate()],
  'Mutation.delete_leve': [authenticate()]
};


export const leavedataResolvers = composeResolvers(
  leaveResolvers,
  resolversleave,
);


