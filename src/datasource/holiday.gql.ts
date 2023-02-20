import { CreateHolidayDate } from './../generated/graphql';
import { createPassword } from './../utils/passwords';

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

  type GetHolidayYearResponseType {
    dataAll: [holiday_date!]
    countYaer: Int
    year: Int
    
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
    GetHoliDayYear(year: Int): [holiday_years]
    GetHolidayDate(year: Int): GetHolidayYearResponseType
  }

  type Mutation{
    createHolidayYear(data:[CreateHolidayYears!]): CreateHolidayYearResponseType
    deleteHolidayYear(id: ID!) : DeleteHolidayYearResponseType
    createAndUpdateHolidayDate(data: [CreateHolidayDate!]): CreateHolidayDateResponseType
    deleteHolidayDate(id: ID!) : DeleteHolidayDateResponseType
  }
`;

export const holidayResolvers: Resolvers = {
  Query: {
    async GetHoliDayYear(p, args, ctx) {
      const search = args.year as number ? args.year : undefined;
      const result = await ctx.prisma.holiday_year.findMany({
        where: {
          year: search as number
        },
        orderBy: [
          {
            year: "asc"
          }, {
            month: "asc"
          }, {
            day: "asc"
          }
        ],
      });
      return result
    },

    async GetHolidayDate(p, args, ctx) {
      let count = 0
      let yaer = 0
      const search = args.year as number ? args.year : undefined;
      const result = await ctx.prisma.holiday_date.findMany({
        include: { Company: true },
        where: {
          CompanyId: ctx.currentUser?.compayId,
          AND: { year: search as number }
        },
        orderBy: [
          {
            year: "asc"
          }, {
            month: "asc"
          }, {
            day: "asc"
          }
        ],
      });

      if (result && result.length >= 1)
        result.forEach(async (e) => {
          if (e.status === 1) {
            count = count + e.status
          }
          if (e.year === e.year) {
            yaer = e.year
          }
        })
      return {
        dataAll: result,
        countYaer: count,
        year: yaer
      };
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
      args.data?.forEach(async (e) => {
        if (e.id) {
          const update = await ctx.prisma.holiday_date.update({
            data: {
              holiday_name: e.holiday_name as string,
              day: e.day as number,
              month: e.month as number,
              year: e.year as number,
              status: e.status as number,
            },
            where: {
              id: e.id as string
            }
          })
        } else {
          const check = await ctx.prisma.holiday_date.findMany({
            where: {
              AND:
                [
                  {
                    day: e.day as number
                  },
                  {
                    month: e.month as number
                  },
                  {
                    year: e.year as number
                  }
                ]
            }
          });

          if (check.length >= 1 ? false : true) {
            const createHolidayDate = await ctx.prisma.holiday_date.create({
              data: {
                id: v4(),
                holiday_name: e.holiday_name as string,
                day: e.day as number,
                month: e.month as number,
                year: e.year as number,
                status: 1 as number,
                CompanyId: ctx.currentUser?.compayId
              },
            })
          }
        }
      })
      return {
        message: 'success',
        status: true,
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
    },


  },
};

const HolidayComposition = {
  'Query.GetHoliDayYear': [authenticate()],
  'Query.GetHolidayDate': [authenticate()],
  'Mutation.createHolidayYear': [authenticate()],
  'Mutation.deleteHolidayYear': [authenticate()],
  'Mutation.createAndUpdateHolidayDate': [authenticate()],
  'Mutation.deleteHolidayDate': [authenticate()],
};


export const Role_CompanyResolvers = composeResolvers(
  holidayResolvers,
  HolidayComposition
);


