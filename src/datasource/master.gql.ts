import { Mutation } from './../generated/graphql';
import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';

export const masterTypedef = gql`
  type Amphoe {
    id: ID!
    name: String
    zipcode: String
  }

  type District {
    id: ID!
    name: String
    amphoe: [Amphoe]
  }

  type Province {
    id: ID!
    name: String
    district: [District]
  }

  type Query {
    getProvince: [Province]
  }

`;

export const masterResolvers: Resolvers = {
  Query: {
    async getProvince(p, args, ctx) {
      const result = await ctx.prisma.province.findMany({
        include: { district: { include: { amphoe: true } } },
      });
      return result;
    },
  },

};
