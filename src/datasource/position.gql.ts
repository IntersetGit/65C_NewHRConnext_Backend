

import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';



export const positionTypedef = gql`

input CreatedAndUpdatePosition{
  name_Position1: String
  level_Position1: Int 
  code_position1: String
  masPosition2: [CreatedmasPosition2]    
}


input CreatedmasPosition2{
  name_Position2: String
  level_Position2: Int 
  code_position2: String
  masPosition3: [CreatedmasPosition3] 
}


input CreatedmasPosition3{
  name_Position3: String
  level_Position3: Int 
  code_position3: String
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
  leader: String 
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
    CreatedAndEditPosition(data:[CreatedAndUpdatePosition!]): CreatepositionResponseType
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
    async CreatedAndEditPosition(p, args, ctx) {
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
  'Mutation.CreatedAndEditPosition': [authenticate()],
};

export const companyResolvers = composeResolvers(
  positionResolvers,
  resolversPosition,
);




