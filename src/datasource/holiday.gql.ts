import { holiday_date } from './../generated/client/index.d';
import { Company } from './../generated/graphql';
import { date, string } from 'zod';
import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import _ from 'lodash';

export const holidayTypedef = gql`

  type holiday_years{
    id: ID!
    day: Int
    month: Int
    year: Int
    holiday_name: String 
  }

  type holiday_date{
    id: ID
    holiday_name: String
    day: Int
    month: Int
    year: Int
    Company: Company
    CompanyId: String
    status: Int
  }

  input CreateHolidayYears{
    id: ID
    day: Int
    month: Int
    year: Int
    holiday_name: String
  }

  input CreateHolidayDate{
    id: ID   
    holiday_name: String
    day: Int
    month: Int
    year: Int
    status: Int
  }

  type CreateHolidayYearResponseType{
    message: String
    status: Boolean
  }

  type CreateHolidayDateResponseType{
    message: String
    status: Boolean
  }

  type DeleteHolidayYearResponseType{
    message: String
    status: Boolean
  }

  type DeleteHolidayDateResponseType{
    message: String
    status: Boolean
  }

  type Query{
    GetHoliDayYear: [holiday_years]
    GetHolidayDate: holiday_date
  }

  type Mutation{
    createHolidayYear(data:[CreateHolidayYears!]): CreateHolidayYearResponseType
    deleteHolidayYear(id: ID!) : DeleteHolidayYearResponseType
    createAndUpdateHolidayDate(data: CreateHolidayDate!) : CreateHolidayDateResponseType
    deleteHolidayDate(id: ID!) : DeleteHolidayDateResponseType
  }
`;

export const holidayResolvers: Resolvers = {
  Query: {
    async GetHoliDayYear(p, args, ctx) {
      const result = await ctx.prisma.holiday_year.findMany({
        orderBy: [{
          year: "asc"
        }, {
          month: "asc"
        }, {
          day: "asc"
        }]
      });
      return result;
    },

    async GetHolidayDate(p, args, ctx) {
      const result = await ctx.prisma.holiday_date.findUnique({
        where: { 
          id: ctx.currentUser?.compayId
        },
        include : {
          Company : true
        }    
      });

      return result;
    }
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
    },

    async createAndUpdateHolidayDate(p, args, ctx) {
      if (args.data.id) {
        const updateHolidayDate = await ctx.prisma.holiday_date.update({
          data: {
            id: v4(),
            holiday_name: args.data.holiday_name as string,
            day: args.data.day as number,
            month: args.data.month as number,
            year: args.data.year as number,
            status: args.data.status as number,
          },
          where: {
            id: args.data.id
          }
        });
        return {
          message: 'success',
          status: true,
        };
      } else {
        const createHolidayDate = await ctx.prisma.holiday_date.create({
          data: {
            id: v4(),
            holiday_name: args.data.holiday_name as string,
            day: args.data.day as number,
            month: args.data.month as number,
            year: args.data.year as number,
            status: args.data.status as number,
            CompanyId: ctx.currentUser?.compayId
          }
        });
        return {
          message: 'success',
          status: true,
        };
      }
    },

    async deleteHolidayDate(p, args, ctx) {
      const deleteHolidayDates = await ctx.prisma.holiday_date.delete({
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
  'Query.GetHoliDayDate': [authenticate()],
  'Mutation.createHolidayYear': [authenticate()],
  'Mutation.deleteHolidayYear': [authenticate()],
  'Mutation.createAndUpdateHolidayDate': [authenticate()],
  'Mutation.deleteHolidayDate': [authenticate()],
};


export const Role_CompanyResolvers = composeResolvers(
  holidayResolvers,
  HolidayComposition
);


