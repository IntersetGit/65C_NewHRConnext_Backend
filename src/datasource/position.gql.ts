

import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';



export const positionTypedef = gql`

input CreatedAndUpdatePosition{
  id_Position1: ID!
  name_Position1: String
  level_Position1: Int 
  code_position1: String
  masPosition2: [CreatedmasPosition2]    
}


input CreatedmasPosition2{
  id_Position2: ID!
  name_Position2: String
  level_Position2: Int 
  code_position2: String
  positionlevel1_id: ID
  masPosition3: [CreatedmasPosition3] 
}


input CreatedmasPosition3{
  id_Position3: ID!
  name_Position3: String
  level_Position3: Int 
  code_position3: String
  positionlevel2_id: ID
}

type mas_position{
  id: String  
  name: String
  level: Int     
  CompanyId: String
}

type Position_user {
  id: ID!  
  user_id: String  
  position1_id: String
  position2_id: String  
  position3_id: String  
  role: String 
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
  }


  type Mutation {
    CreatedPosition(data:[CreatedAndUpdatePosition!]): CreatepositionResponseType
    EditPosition(data:[CreatedAndUpdatePosition!]): CreatepositionResponseType
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
      // const genPo_1id = v4();
      // const genPo_2id = v4();
      // const genPo_3id = v4();
      args.data?.forEach(async (e) => {
        const createdPo_1 = await ctx.prisma.mas_positionlevel1.update({
          // include: { mas_positionlevel2: { include: { mas_positionlevel3: true } } },
          data: {
            name: e.name_Position1 as string,
            level: e.level_Position1 as number,
            code: e.code_position1 as string,
          },
          where:{
            id: e.id_Position1
          }
        })
        e.masPosition2?.forEach(async (a) => {
          const CretePo_2 = await ctx.prisma.mas_positionlevel2.update({
            data: {
              positionlevel1_id: a?.positionlevel1_id,
              name: a?.name_Position2 as string,
              level: a?.level_Position2 as number,
              code: a?.code_position2 as string,
            },
            where:{
              id: a?.id_Position2
            }
          })
          a?.masPosition3?.forEach(async (b) => {
            const CretePo_3 = await ctx.prisma.mas_positionlevel3.update({
              data: {
                positionlevel2_id: b?.positionlevel2_id,
                name: b?.name_Position3 as string,
                level: b?.level_Position3 as number,
                code: b?.code_position3 as string,
              },
              where:{
                id: b?.id_Position3
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
  }
}




const resolversPosition = {
  'Query.getMasPositon': [authenticate()],
  'Mutation.CreatedPosition': [authenticate()],
  'Mutation.EditPosition': [authenticate()],
};

export const companyResolvers = composeResolvers(
  positionResolvers,
  resolversPosition,
);




