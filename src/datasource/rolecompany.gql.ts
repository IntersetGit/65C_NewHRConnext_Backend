
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
    status: Int!
  }

  input UpdateRoleCompanyMangementType {
    id: ID!
    access: [JSON!]!
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

  type DeleteRoleCompanyRespnsetType {
    message: String
    status: Boolean
  }

  type Query {
    getcompanyRole(role_name: String): [Role_Company]
  }

  type Mutation {
    createRoleCompany(data: createRoleCompanyGroup!): CreateRoleCompanyResponseType
    updateRoleCompanyMangement(data: [UpdateRoleCompanyMangementType!]!): CreateRoleCompanyResponseType
    deleteRoleCompany(id: ID!): DeleteRoleCompanyRespnsetType
  }
`;

const resolvers: Resolvers = {
  Query: {
    /**
     * ?สร้าง role comapny
     * @param p
     * @param args
     * @param ctx
     * @returns
     */
    async getcompanyRole(p, args, ctx) {
      const search = args.role_name ? args.role_name : undefined;
      const rolesCompanyget = await ctx.prisma.role_Company.findMany({
        where: {
          companyBranch: {
            companyId: ctx.currentUser?.compayId,
          },
          AND: {
            name: { contains: search },
          },
        },
      });
      return rolesCompanyget;
    },
  },
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
      if (args.data.access == undefined) {
        args.data.access = [];
      }
      if (args.data.id) {
        const updete_RoleCompany = await ctx.prisma.role_Company.update({
          data: {
            name: args.data.name as string,
            access: args.data.access,
            status: args.data.status,
          },
          where: { id: args.data.id },
        });
        return {
          message: 'success',
          status: true,
        };
      } else {
        const create_RoleCompany = await ctx.prisma.role_Company.create({
          data: {
            id: genRoleid,
            name: args.data.name as string,
            access: args.data.access,
            status: args.data.status,
            companyBranchId: ctx.currentUser?.branchId,
          },
        });
        return {
          message: 'success',
          status: true,
        };
      }
    },
    /** อัพเดท จัดการสิทธิ์ ของ Role ทั้งหมด */
    async updateRoleCompanyMangement(_, args, ctx) {
      args.data.forEach(async (e) => {
        const update = await ctx.prisma.role_Company.update({
          data: {
            access: e.access,
          },
          where: { id: e.id },
        });
      });
      return {
        message: 'success',
        status: true,
      };
    },

    async deleteRoleCompany(p, args, ctx) {
      const deleteRole = await ctx.prisma.role_Company.delete({
        where: { id: args.id },
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
  'Mutation.updateRoleCompanyMangement': [authenticate()],
  'Mutation.deleteRoleCompany': [authenticate()],
  'Query.getcompanyRole': [authenticate()],
};

export const Role_CompanyResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
