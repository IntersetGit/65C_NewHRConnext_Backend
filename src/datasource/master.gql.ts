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

  type holiday_year {
    id: ID!
    date: Date              
    holiday_name: String     
  }

  type Query {
    getProvince: [Province]
    getHoliday: [holiday_year]
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

    // async getHoliday(p, args, ctx) {
    //   const result = await ctx.prisma.holiday_year.findMany({
    //     include: { }
    //   });
    //   return result
    // }
  },
};
