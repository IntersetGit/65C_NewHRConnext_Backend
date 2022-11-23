import { dateResolvers, dateTypedef } from './date.scalar';
import { providerResolvers, providerTypedef } from './provider.gql';
import { userTypedef, userResolvers } from './user.gql';


export const typeDefs = [dateTypedef, providerTypedef, userTypedef];
export const resolvers = {
  ...dateResolvers,
  ...providerResolvers,
  ...userResolvers,
};
