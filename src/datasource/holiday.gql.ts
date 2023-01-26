import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';

export const holidayTypedef = gql`
  type holiday_year {
    id: ID!
    day: Int
    month: Int
    year: Int
    holiday_name: String?    
  }

  input createHolidayYear {
    id: ID
    day: Int
    month: Int
    year: Int
    holiday_name: String?
  }

  type CreateHolidayYearResponseType {
    message: String
    status: Boolean
  }

  type Query {
    getHolidayYear: [holiday_year]
  }

  type Mutation {
    createHoliday: (data: createHolidayYear) : CreateHolidayYearResponseType
  }

`;

export const holidayResolvers: Resolvers ={
  Query:{
    // async getHolidayYear (p, args, ctx) {
    //   const result = await ctx.prisma.holiday_year.



  Mutation:{


