import { merge } from 'lodash';
import { companyResolvers, companyTypedef } from './company.gql';
import { dateResolvers, dateTypedef } from './date.scalar';
import { josnResolvers, jsonTypedef } from './json.scalar';
import { masterResolvers, masterTypedef } from './master.gql';
import { profileTypedef } from './profile.gql';
import { providerResolvers, providerTypedef } from './provider.gql';
import { roleTypedef } from './role.gql';
import { positionTypedef,positionResolvers } from './position.gql';
import { userTypedef, userResolvers } from './user.gql';
import {Role_CompanyResolvers,roleCompanyTypedef} from './rolecompany.gql'

/**
 * ? Add Typedef Here
 */

export const typeDefs = [
  dateTypedef,
  profileTypedef,
  roleTypedef,
  roleCompanyTypedef,
  masterTypedef,
  companyTypedef,
  providerTypedef,
  positionTypedef,
  userTypedef,
  jsonTypedef,
];

/**
 * ? Add Resolvers Here
 */

export const resolvers = merge(
  dateResolvers,
  masterResolvers,
  providerResolvers,
  userResolvers,
  Role_CompanyResolvers,
  positionResolvers,
  companyResolvers,
  josnResolvers,
);

// console.log(resolvers);
