
import gql from 'graphql-tag';
import { Resolvers } from '../generated/graphql';
import { v4 } from 'uuid';
import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import _ from 'lodash';


export const roleCompanyTypedef = gql`
  type Role_Company {
    id: ID!
    name: String
    access: JSON
    status: Int
    companyBranchId: String
    companyBranch: CompanyBranch
    users: [User]
  }

  input createRoleCompanyGroup {
    id: ID
    name: String
    access: JSON
    companyBranchId: String
    status: Int!
  }

  type MePositionType {
    id: ID!
    access: JSON
    name: String
  }

  type CreateRoleCompanyResponseType {
    message: String
    status: Boolean
  }

  # type Query {
  #   users(userid: String): [User]
  #   verifyCompanycode(companyname: String!): Boolean
  #   me: Me
  # }

  type Mutation {
    createRoleCompany(data: createRoleCompanyGroup!):  
 
  }
`;


const resolvers: Resolvers = {
  Mutation: {
    /**
     * ?สร้าง role comapny
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    async createRoleCompany(p, args, ctx) {
      const genRoleid = v4();
      const create_RoleCompany = await ctx.prisma.role_Company.create({
        data: {
          id: genRoleid,
          name : args.data.name as string ,
          access: args.data.access,
          status: args.data.status,
          companyBranchId: ctx.currentUser?.branchId
        },
      });
      return {
        message: 'success',
        status: true,
      };
    },   
  },
};



const resolversComposition = {
  'Mutation.createRoleCompany': [authenticate()],
};

export const Role_CompanyResolvers = composeResolvers(resolvers, resolversComposition);