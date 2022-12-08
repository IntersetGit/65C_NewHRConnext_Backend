import { composeResolvers } from '@graphql-tools/resolvers-composition';
import gql from 'graphql-tag';
import { GetowmComoanyType, Resolvers } from 'src/generated/graphql';
import { authenticate } from '../middleware/authenticatetoken';

export const companyTypedef = gql`
  interface SimpleCompanyQuery {
    id: ID!
    name: String
    companyCode: String
    icon: String
  }

  type FullCompanyQuery implements SimpleCompanyQuery {
    id: ID!
    name: String
    address: String
    city: String
    state: String
    zip: String
    country: String
    icon: String
    phone: String
    website: String
    parentId: String
    companyCode: String
    parent: FullCompanyQuery
    children: [FullCompanyQuery]
    createdAt: Date
    updatedAt: Date
    users: [User]
    positions: [FullprofileQuery]
  }

  type GetCompanyAccessType {
    name: String
  }

  type GetowmComoanyType {
    id: String
    name: String
    icon: String
    codeCompany: String
    companyType: String
  }

  type Query {
    getownCompany: [GetowmComoanyType]
  }
`;

const resolvers: Resolvers = {
  Query: {
    async getownCompany(p, args, ctx) {
      const fetchCompany = await ctx.prisma.company.findUnique({
        where: { id: ctx.currentUser?.compayId },
        include: { children: true },
      });
      const companyArr: GetowmComoanyType[] = [];
      if (!fetchCompany) return [];
      companyArr.push({
        name: fetchCompany.name,
        codeCompany: fetchCompany.companyCode,
        companyType: 'บริษัทใหญ่',
        icon: fetchCompany.icon,
        id: fetchCompany.id,
      });
      fetchCompany.children?.forEach((e) => {
        companyArr.push({
          name: e.name,
          codeCompany: e.companyCode,
          companyType: 'บริษัทย่อย',
          icon: e.icon,
          id: e.id,
        });
      });
      return companyArr;
    },
  },
};

const resolversComposition = {
  'Query.getownCompany': [authenticate()],
};

export const companyResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
