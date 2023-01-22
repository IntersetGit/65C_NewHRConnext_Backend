import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';

export const positionTypedef = gql`

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
  Position_user: [Position_user]
}


type mas_positionlevel2 {
  id: ID!  
  name: String
  mas_positionlevel3: [mas_positionlevel3]
  Position_user: [Position_user]
}


type mas_positionlevel1 {
  id: ID!  
  name: String
  mas_positionlevel2: [mas_positionlevel2]
  CompanyId: String
  Position_user: [Position_user]
}


type Query {
    MasPositon: [mas_positionlevel1]
  }

`;

export const positionResolvers: Resolvers = {
    Query: {
      async MasPositon(p, args, ctx) {
        const result = await ctx.prisma.mas_positionlevel1.findMany({
          include: { mas_positionlevel2: { include: { mas_positionlevel3: true } }},
          where: {
            CompanyId : ctx.currentUser?.compayId
          }
        });
        return result;
      },
    },
  };


  const resolversPosition = {
    'Query.MasPositon': [authenticate()],
  };
  
  export const companyResolvers = composeResolvers(
    positionResolvers,
    resolversPosition,
  );
  
  


  