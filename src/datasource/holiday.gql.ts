import { date } from 'zod';
import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import _ from 'lodash';

export const holidayTypedef = gql`

  type holiday_years{
    id: ID
    day: Int
    month: Int
    year: Int
    holiday_name: String 
  }

  input CreateHolidayYears{
    id: ID
    day: Int
    month: Int
    year: Int
    holiday_name: String
  }

  type CreateHolidayYearResponseType{
    message: String
    status: Boolean
  }

  type DeleteHolidayYearResponseType{
    message: String
    status: Boolean
  }

  type Query{
    GetHoliDayYear: [holiday_years]
  }

  type Mutation{
    createHolidayYear(data:[CreateHolidayYears!]): CreateHolidayYearResponseType
    deleteHolidayYear(id: ID!) : DeleteHolidayYearResponseType
  }
`;

export const holidayResolvers: Resolvers = {
  Query: {
    async GetHoliDayYear(p, args, ctx) {
      const result = await ctx.prisma.holiday_year.findMany({
        select: {
          id: true,
          day: true,
          month: true,
          year: true,
          holiday_name: true,
        },
        orderBy: [{
          day: "asc"
        },{
            month: "asc",
          },{
          year: "asc"
        }]
      });
      return result;
    },
  },

  Mutation: {
    async createHolidayYear(p, args, ctx) {
      args.data?.forEach(async (e) => {
        const result = await ctx.prisma.holiday_year.create({
          data: {
            id: v4(),
            day: e.day as number,
            month: e.month as number,
            year: e.year as number,
            holiday_name: e.holiday_name,
          }
        });
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async deleteHolidayYear(p, args, ctx) {
      const deleteHolidayYears = await ctx.prisma.holiday_year.delete({
        where: {
          id: args.id as string
        }
      });
      return {
        message: 'success',
        status: true,
      };
    }
  },
};

const HolidayComposition = {
  'Query.GetHoliDayYear': [authenticate()],
  'Mutation.createHolidayYear': [authenticate()],
  'Mutation.deleteHolidayYear': [authenticate()],
};


export const Role_CompanyResolvers = composeResolvers(
  holidayResolvers,
  HolidayComposition
);


