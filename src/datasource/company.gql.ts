import { composeResolvers } from '@graphql-tools/resolvers-composition';
import gql from 'graphql-tag';
import { Resolvers } from 'src/generated/graphql';
import { authenticate } from '../middleware/authenticatetoken';

export const companyTypedef = gql`
  type Company {
    id: ID!
    name: String
    companyCode: String
    address: String
    city: String
    state: String
    zip: String
    country: String
    icon: String
    phone: String
    website: String
    createdAt: Date
    updatedAt: Date
    users: [User]
    ownerId: String
    owner: User
    branch: [CompanyBranch]
  }

  type CompanyBranch {
    id: ID!
    name: String
    address: String
    city: String
    state: String
    zip: String
    country: String
    createdAt: Date
    updatedAt: Date
    company: Company
    companyId: String
    users: [User]
    positions: [Position]
  }

  type MeCompanyBranch {
    id: ID!
    name: String
    address: String
    city: String
    state: String
    zip: String
    country: String
    createdAt: Date
    updatedAt: Date
    company: MecompanyType
    companyId: String
  }

  type MecompanyType {
    id: ID!
    name: String
    companyCode: String
    icon: String
  }

  type GetCompanyAccessType {
    name: String
  }

  type OwnCompanyType {
    id: String
    name: String
    icon: String
    companyCode: String
  }

  type GetOwncompanytype {
    isOwner: Boolean
    redirect: Boolean
    companies: [OwnCompanyType]
    company: OwnCompanyType
  }

  type Query {
    getownCompany: GetOwncompanytype
  }
`;

const resolvers: Resolvers = {
  Query: {
    async getownCompany(p, args, ctx) {
      const fetchCompany = await ctx.prisma.user.findUnique({
        where: { id: ctx.currentUser?.id },
        select: {
          isOwner: true,
          company: {
            select: {
              id: true,
              name: true,
              icon: true,
              companyCode: true,
            },
          },
          companyBranch: {
            select: {
              company: {
                select: {
                  id: true,
                  name: true,
                  icon: true,
                  companyCode: true,
                },
              },
            },
          },
        },
      });

      if (fetchCompany?.isOwner) {
        return {
          isOwner: fetchCompany?.isOwner,
          redirect: false,
          companies: fetchCompany.company,
        };
      } else {
        return {
          isOwner: fetchCompany?.isOwner,
          redirect: true,
          company: fetchCompany?.companyBranch?.company,
        };
      }
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
