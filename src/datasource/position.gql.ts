import { User } from './../generated/graphql';
import { mas_positionlevel1 } from './../generated/client/index.d';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';



export const positionTypedef = gql`

input CreatedAndUpdatePosition{
  id_Position1: ID
  name_Position1: String
  level_Position1: Int 
  code_position1: String
  masPosition2: [CreatedmasPosition2]    
}


input CreatedmasPosition2{
  id_Position2: ID
  name_Position2: String
  level_Position2: Int 
  code_position2: String
  positionlevel1_id: ID
  masPosition3: [CreatedmasPosition3] 
}


type mas_positionlevel3{
  id: ID!  
  name: String
  level: Int  
  code: String
  type: String
  positionlevel2_id:  String
  Position_user: [Position_user]
}


input CreatedmasPosition3{
  id_Position3: ID
  name_Position3: String
  level_Position3: Int 
  code_position3: String
  positionlevel2_id: String
}

type mas_position{
  id: String  
  name: String
  level: Int     
  CompanyId: String
}


input position {
  id: ID  
  user_id: String
  position1_id: String
  position2_id: String  
  position3_id: String  
  role: String 
  headderId: String 
  date: Date
}

type Position_user {
  id: ID  
  user_id: String
  position1_id: String
  position2_id: String  
  position3_id: String  
  role: String 
  headderId: String 
  date: Date
}

type headderdata{
  headderId: String
  headder_data: Profile
}

type getPositionUser {
  id: ID  
  user: User
  header: User
  position1_id: String
  mas_positionlevel1: mas_positionlevel1
  position2_id: String  
  mas_positionlevel2: mas_positionlevel2
  position3_id: String 
  mas_positionlevel3: mas_positionlevel3 
  role: String 
  date: Date
}
 


type mas_positionlevel2 {
  id: ID!  
  name: String
  level: Int  
  code: String
  type: String
  positionlevel1_id: String
  mas_positionlevel3: [mas_positionlevel3]
  Position_user: [Position_user]
}


type mas_positionlevel1 {
  id: ID!  
  name: String
  level: Int  
  code: String
  type: String
  mas_positionlevel2: [mas_positionlevel2]
  CompanyId: String
  Position_user: [Position_user]
}


type CreatepositionResponseType {
    message: String
    status: Boolean
  }


type Query {
    getMasPositon: [mas_positionlevel1]
    getposition_user(id: ID): [getPositionUser]
    getpositionMe: [getPositionUser]
  }


  type Mutation {
    CreatedPosition(data:[CreatedAndUpdatePosition!]): CreatepositionResponseType
    EditPosition(data:[CreatedAndUpdatePosition!]): CreatepositionResponseType
    createdposition_user(data:position!) :CreatepositionResponseType
  }
`;

export const positionResolvers: Resolvers = {
  Query: {
    async getMasPositon(p, args, ctx) {
      const result = await ctx.prisma.mas_positionlevel1.findMany({
        include: {
          mas_positionlevel2: {
            orderBy: { level: 'asc' },
            include: {
              mas_positionlevel3: {
                orderBy: { level: 'asc' }
              }
            }
          }
        },
        where: {
          CompanyId: ctx.currentUser?.compayId
        },
        orderBy: {
          level: "asc",
        }
        // {
        //   mas_positionlevel2:{
        //     orderBy: {
        //       level: "asc"
        //     },
        //   }
        // }
      });
      return result;
    },

    //---------- ดูตำแหน่งของตัวเอง
    async getpositionMe(p, args, ctx) {
      const resultMebyID = await ctx.prisma.position_user.findMany({
        include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, user: { include: { profile: true } }, header: { include: { profile: true } } },
        where: { user_id: ctx.currentUser?.branchId }
      });
      return resultMebyID;
    },

    //------------- ดูตำแหน่ง companyadmin
    async getposition_user(p, args, ctx) {
      if (args.id) {
        const resultbyID = await ctx.prisma.position_user.findMany({
          include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, user: { include: { profile: true } }, header: { include: { profile: true } } },
          where: { user_id: args.id }
        });
        return resultbyID;
      } else {
        const result = await ctx.prisma.position_user.findMany({
          include: { mas_positionlevel1: true, mas_positionlevel2: true, mas_positionlevel3: true, user: { include: { profile: true } }, header: { include: { profile: true } } },
          where: {
            user: {
              companyBranchId: ctx.currentUser?.branchId
            }
          }
        });
        return result;
      }
    }
  },


  Mutation: {
    /**
     * ?สร้าง role comapny
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    async EditPosition(p, args, ctx) {
      args.data?.forEach(async (e) => {
        if (e.id_Position1) {
          const createdPo_1 = await ctx.prisma.mas_positionlevel1.update({
            // include: { mas_positionlevel2: { include: { mas_positionlevel3: true } } },
            data: {
              name: e.name_Position1 as string,
              level: e.level_Position1 as number,
              code: e.code_position1 as string,
            },
            where: {
              id: e.id_Position1 as string
            }
          })
        } else {
          const createdPo_1 = await ctx.prisma.mas_positionlevel1.create({
            // include: { mas_positionlevel2: { include: { mas_positionlevel3: true } } },
            data: {
              id: v4(),
              CompanyId: ctx.currentUser?.compayId,
              name: e.name_Position1 as string,
              level: e.level_Position1 as number,
              code: e.code_position1 as string,
              type: 'ฝ่าย',
            },
          })
        }
        if (e.masPosition2) {
          e.masPosition2?.forEach(async (a) => {
            if (a?.id_Position2) {
              const CretePo_2 = await ctx.prisma.mas_positionlevel2.update({
                data: {
                  positionlevel1_id: a?.positionlevel1_id,
                  name: a?.name_Position2 as string,
                  level: a?.level_Position2 as number,
                  code: a?.code_position2 as string,
                },
                where: {
                  id: a?.id_Position2 as string
                }
              })
            } else {
              const CretePo_2 = await ctx.prisma.mas_positionlevel2.create({
                data: {
                  id: v4(),
                  positionlevel1_id: a?.positionlevel1_id,
                  CompanyId: ctx.currentUser?.compayId,
                  name: a?.name_Position2 as string,
                  level: a?.level_Position2 as number,
                  code: a?.code_position2 as string,
                  type: 'แผนก',
                }
              })
            }
            if (a?.masPosition3) {
              a?.masPosition3?.forEach(async (b) => {
                if (b?.id_Position3) {
                  const CretePo_3 = await ctx.prisma.mas_positionlevel3.update({
                    data: {
                      positionlevel2_id: b?.positionlevel2_id,
                      name: b?.name_Position3 as string,
                      level: b?.level_Position3 as number,
                      code: b?.code_position3 as string,
                    },
                    where: {
                      id: b?.id_Position3 as string
                    }
                  })
                } else {
                  const CretePo_3 = await ctx.prisma.mas_positionlevel3.create({
                    data: {
                      id: v4(),
                      positionlevel2_id: b?.id_Position3,
                      CompanyId: ctx.currentUser?.compayId,
                      name: b?.name_Position3 as string,
                      level: b?.level_Position3 as number,
                      code: b?.code_position3 as string,
                      type: 'ตำแหน่ง',
                    }
                  })
                }
              })
            }
          })
        }
      })
      return {
        message: 'success',
        status: true,
      };
    },


    async CreatedPosition(p, args, ctx) {
      // const genPo_1id = v4();
      // const genPo_2id = v4();
      // const genPo_3id = v4();
      args.data?.forEach(async (e) => {
        const genPo_1id = v4();
        const createdPo_1 = await ctx.prisma.mas_positionlevel1.create({
          // include: { mas_positionlevel2: { include: { mas_positionlevel3: true } } },
          data: {
            id: genPo_1id,
            CompanyId: ctx.currentUser?.compayId,
            name: e.name_Position1 as string,
            level: e.level_Position1 as number,
            code: e.code_position1 as string,
            type: 'ฝ่าย',
          },
        })
        e.masPosition2?.forEach(async (a) => {
          const CretePo_2 = await ctx.prisma.mas_positionlevel2.create({
            data: {
              id: v4(),
              positionlevel1_id: createdPo_1.id,
              CompanyId: ctx.currentUser?.compayId,
              name: a?.name_Position2 as string,
              level: a?.level_Position2 as number,
              code: a?.code_position2 as string,
              type: 'แผนก',
            }
          })
          a?.masPosition3?.forEach(async (b) => {
            const CretePo_3 = await ctx.prisma.mas_positionlevel3.create({
              data: {
                id: v4(),
                positionlevel2_id: CretePo_2.id,
                CompanyId: ctx.currentUser?.compayId,
                name: b?.name_Position3 as string,
                level: b?.level_Position3 as number,
                code: b?.code_position3 as string,
                type: 'ตำแหน่ง',
              }
            })
          })
        })
      })
      return {
        message: 'success',
        status: true,
      };

    },

    async createdposition_user(p, args, ctx) {
      if (args.data.id) {
        const updated = await ctx.prisma.position_user.update({
          data: {
            user_id: args.data.user_id as string,
            position1_id: args.data.position1_id as string,
            position2_id: args.data.position2_id as string,
            position3_id: args.data.position3_id as string,
            role: args.data.role as string,
            headderId: args.data.headderId as string,
            date: args.data.date as string
          },
          where: {
            id: args.data.id
          }
        })
        return {
          message: 'success',
          status: true,
        };

      } else {
        const created = await ctx.prisma.position_user.create({
          data: {
            id: v4(),
            user_id: args.data.user_id as string,
            position1_id: args.data.position1_id as string,
            position2_id: args.data.position2_id as string,
            position3_id: args.data.position3_id as string,
            role: args.data.role as string,
            headderId: args.data.headderId as string,
            date: args.data.date as string
          }
        })
        return {
          message: 'success',
          status: true,
        };
      }
    }
  }
}




const resolversPosition = {
  'Query.getMasPositon': [authenticate()],
  'Query.getposition_user': [authenticate()],
  'Query.getpositionMe': [authenticate()],
  'Mutation.CreatedPosition': [authenticate()],
  'Mutation.createdposition_user': [authenticate()],
  'Mutation.EditPosition': [authenticate()],
};

export const companyResolvers = composeResolvers(
  positionResolvers,
  resolversPosition,
);




