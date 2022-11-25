import { merge } from 'lodash';
import { companyTypedef } from './company.gql';
import { dateResolvers, dateTypedef } from './date.scalar';
import { masterResolvers, masterTypedef } from './master.gql';
import { positionTypedef } from './position.gql';
import { profileTypedef } from './profile.gql';
import { providerResolvers, providerTypedef } from './provider.gql';
import { roleTypedef } from './role.gql';
import { userTypedef, userResolvers } from './user.gql';

/**
 * ? Add Typedef Here
 */

export const typeDefs = [
  dateTypedef,
  profileTypedef,
  roleTypedef,
  positionTypedef,
  masterTypedef,
  companyTypedef,
  providerTypedef,
  userTypedef,
];

/**
 * ? Add Resolvers Here
 */

export const resolvers = merge(
  dateResolvers,
  masterResolvers,
  providerResolvers,
  userResolvers,
);

// console.log(resolvers);
