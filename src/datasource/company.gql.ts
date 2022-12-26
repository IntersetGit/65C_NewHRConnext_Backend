import { composeResolvers } from '@graphql-tools/resolvers-composition';
import gql from 'graphql-tag';
import { Resolvers } from 'src/generated/graphql';
import { authenticate } from '../middleware/authenticatetoken';

export const companyTypedef = gql`
  type Company {
    id: ID!
    name: String
    companyCode: String
    userlimit: Int
    company_registration_id: String
    company_vat_id: String
    icon: String
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
    address_2: String
    city: String
    state: String
    zip: String
    country: String
    tel: String
    fax: String
    website: String
    lat: String
    lng: String
    email: String
    email_2: String
    company_type: String
    sub_company_type: String
    registeredamount: String
    social_facebook: String
    social_likedin: String
    social_instragram: String
    social_line: String
    createdAt: Date
    updatedAt: Date
    company: Company
    companyId: String
    users: [User]
    positions: [Position]
  }

  type CountInsideBranch {
    positions: Int
    users: Int
  }

  type CountBranch {
    branch: Int
  }

  type ResponseCompany_Branch {
    id: ID!
    name: String
    address: String
    address_2: String
    city: String
    state: String
    zip: String
    country: String
    tel: String
    fax: String
    website: String
    lat: String
    lng: String
    email: String
    email_2: String
    company_type: String
    sub_company_type: String
    registeredamount: String
    social_facebook: String
    social_likedin: String
    social_instragram: String
    social_line: String
    createdAt: Date
    updatedAt: Date
    company: Company
    companyId: String
    users: [User]
    positions: [Position]
    _count: CountInsideBranch
  }

  type ResponseCompany {
    id: ID!
    name: String
    companyCode: String
    userlimit: Int
    company_registration_id: String
    company_vat_id: String
    icon: String
    createdAt: Date
    updatedAt: Date
    users: [User]
    ownerId: String
    owner: User
    branch: [ResponseCompany_Branch]
    _count: CountBranch
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
    company(name: String): ResponseCompany
    getownCompany: GetOwncompanytype
  }
`;

const resolvers: Resolvers = {
  Query: {
    async company(p, args, ctx) {
      const result = await ctx.prisma.company.findUnique({
        include: {
          _count: true,
          branch: {
            include: { _count: true },
          },
        },
        where: { id: ctx.currentUser?.compayId },
      });
      console.log(result?.branch[0]._count.positions);
      return result;
    },
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
  'Query.company': [authenticate()],
};

export const companyResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
