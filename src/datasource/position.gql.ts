import { string } from 'zod';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';

export const positionTypedef = gql`


input createdandupdate {
  name: String
  level: Int 
  masPosition1: [masPosition1 ]   
}


input masPosition1{
  name: String
  level: Int 
  masPosition2: [masPosition2]    
}


input masPosition2{
  name: String
  level: Int  
  masPosition3: [masPosition3 ]  
}


input masPosition3{
  name: String
  level: Int     
}

type mas_position{
  id: String  
  name: String
  level: Int     
  CompanyId: String
  mas_positionlevel1: [mas_positionlevel1]
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
  Position_user: [Position_user]
}


type mas_positionlevel2 {
  id: ID!  
  name: String
  level: Int  
  mas_positionlevel3: [mas_positionlevel3]
  Position_user: [Position_user]
}


type mas_positionlevel1 {
  id: ID!  
  name: String
  level: Int  
  mas_positionlevel2: [mas_positionlevel2]
  CompanyId: String
  Position_user: [Position_user]
}


type CreatepositionResponseType {
    message: String
    status: Boolean
  }


type Query {
    getMasPositon: [mas_position]
  }


  type Mutation {
    createdandEditposition(data:[createdandupdate!]): [CreatepositionResponseType]
  }
`;

export const positionResolvers: Resolvers = {
    Query: {
      async getMasPositon(p, args, ctx) {
        const result = await ctx.prisma.mas_position.findMany({
          include:{mas_positionlevel1: {include:{ mas_positionlevel2: { include: { mas_positionlevel3: true } }}}},
          where: {
             CompanyId : ctx.currentUser?.compayId
            },
          orderBy: {
            level: "asc"
          }
        });
        return result;
      },
    },
  };





  const resolversPosition = {
    'Query.getMasPositon': [authenticate()],
  };
  
  export const companyResolvers = composeResolvers(
    positionResolvers,
    resolversPosition,
  );
  
  


  