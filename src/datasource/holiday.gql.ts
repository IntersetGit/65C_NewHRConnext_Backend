import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import _ from 'lodash';

export const holidayTypedef = gql`

  type holiday_year{
    id: ID
    day: Int
    month: Int
    year: Int
    holiday_name: String!  
  }

  input createHolidayYear{
    id: ID
    day: Int
    month: Int
    year: Int
    holiday_name: String?
  }

  type CreateHolidayYearResponseType{
    message: String
    status: Boolean
  }

  type Query{
    GetHoliDayYear: [holiday_year]
  }

  type Mutation{
    createHoliday: (data: createHolidayYear) : CreateHolidayYearResponseType
  }

`;

export const holidayResolvers: Resolvers = {
  Query: {
    /**
     * ?สร้าง role comapny
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    async GetHoliDayYear(p, args, ctx) {
      const rolesCompanyget = await ctx.prisma.holiday_year.findMany();
      return rolesCompanyget;
    },
  },
};

const HolidayComposition = {
  // 'Mutation.createRoleCompany': [authenticate()],
  // 'Mutation.updateRoleCompanyMangement': [authenticate()],
  // 'Mutation.deleteRoleCompany': [authenticate()],
  'Query._getHoliDayYear': [authenticate()],
};


export const Role_CompanyResolvers = composeResolvers(
  holidayResolvers,
  HolidayComposition
);


