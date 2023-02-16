import { composeResolvers } from '@graphql-tools/resolvers-composition';
import gql from 'graphql-tag';
import { Resolvers } from 'src/generated/graphql';
import { authenticate } from '../middleware/authenticatetoken';
import { v4 } from 'uuid';





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
    regis_vat: String
    regiscomnumber: String
    users: [User]
    expense_company: [expense_company]
    Role_Company: [Role_Company]
  }

  input createCompanyBranch {
    id: ID
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
    companyId: String
    regis_vat: String
    regiscomnumber: String
  }


  type CountInsideBranch {
    Role_Company: Int
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
    regis_vat: String
    regiscomnumber: String
    social_line: String
    createdAt: Date
    updatedAt: Date
    company: Company
    companyId: String
    users: [User]
    Role_Company: [Role_Company]
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

  # type GetAllcompanyRes {
  #   company: OwnCompanyType
  #   CompanyBranch: 
  # }

  type CreateComapnyBranchResponseType {
    message: String
    status: Boolean
  }



  type Query {
    company(name: String): ResponseCompany
    getAllcompany(name: String): [CompanyBranch]
    getownCompany: GetOwncompanytype
  }

  type DeleteComapnyBranchResponseType{
    message: String
    status: Boolean
  }

  type Mutation  {
    createAndUpdateComBarance(data: createCompanyBranch!): CreateComapnyBranchResponseType
    deleteComBarance(id: ID!) : DeleteComapnyBranchResponseType
  }
`;

const resolvers: Resolvers = {
  Query: {
    async company(p, args, ctx) {
      const name_filter = args.name ? args.name : undefined;
      const result = await ctx.prisma.company.findUnique({
        include: {
          _count: true,
          branch: {
            include: { _count: true },
            where: { name: { contains: name_filter } },
          },
        },
        where: { id: ctx.currentUser?.compayId },
      });
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

    async getAllcompany(p, args, ctx) {
      const search = args.name ? args.name : undefined
      const rolesCompanyget = await ctx.prisma.companyBranch.findMany({
        include: { company: true },
        where: {
          companyId: ctx.currentUser?.compayId,
          AND: {
            name: { contains: search }
          }
        },
        orderBy:
        {
          company_type: "desc",
        },
      });
      return rolesCompanyget;
    }
  },

  Mutation: {
    async createAndUpdateComBarance(p, args, ctx) {
      const genComBranchid = v4();
      if (args.data?.id) {
        const createBranch = await ctx.prisma.companyBranch.update({
          data: {
            name: 'สาขา',
            address: args.data?.address as string,
            address_2: args.data?.address_2 as string,
            city: args.data?.city as string,
            state: args.data?.state as string,
            zip: args.data?.zip as string,
            country: args.data?.country,
            tel: args.data?.tel,
            fax: args.data?.fax,
            website: args.data?.website,
            lat: args.data?.lat,
            lng: args.data?.lng,
            email: args.data?.email,
            email_2: args.data?.email_2,
            company_type: 'สาขา',
            sub_company_type: args.data?.sub_company_type,
            registeredamount: args.data?.registeredamount,
            social_facebook: args.data?.social_facebook,
            social_likedin: args.data?.social_likedin,
            social_instragram: args.data?.social_facebook,
            social_line: args.data?.social_line,
            createdAt: new Date(),
            companyId: ctx.currentUser?.compayId,
            regis_vat: args.data?.regis_vat ,
            regiscomnumber: args.data.regiscomnumber
          },
          where: {
            id: args.data.id as string
          }
        });
        return {
          message: 'success',
          status: true,
        };
      } else {
        const createBranch = await ctx.prisma.companyBranch.create({
          data: {
            id: genComBranchid,
            name: 'สาขา',
            address: args.data?.address as string,
            address_2: args.data?.address_2,
            city: args.data?.city as string,
            state: args.data?.state as string,
            zip: args.data?.zip as string,
            country: args.data?.country,
            tel: args.data?.tel,
            fax: args.data?.fax,
            website: args.data?.website,
            lat: args.data?.lat,
            lng: args.data?.lng,
            email: args.data?.email,
            email_2: args.data?.email_2,
            company_type: 'สาขา',
            sub_company_type: args.data?.sub_company_type,
            registeredamount: args.data?.registeredamount,
            social_facebook: args.data?.social_facebook,
            social_likedin: args.data?.social_likedin,
            social_instragram: args.data?.social_facebook,
            social_line: args.data?.social_line,
            createdAt: new Date(),
            companyId: ctx.currentUser?.compayId,
            regis_vat: args.data?.regis_vat ,
            regiscomnumber: args.data.regiscomnumber
          },
        });

        return {
          message: 'success',
          status: true,
        };
      }
    },

    async deleteComBarance(p, args, ctx) {
      const deleteid = args.id ? args.id : undefined
      const deleteCompany = await ctx.prisma.companyBranch.delete({
        where: {
          id: args.id as string
        }
      });

      //const deleteCompanyHead = await ctx.prisma.company.delete({
      // where: { 

      // }
      //});
      return {
        message: 'success',
        status: true,
      }
    }
  }

};

const resolversComposition = {
  'Query.getownCompany': [authenticate()],
  'Query.company': [authenticate()],
  'Query.getAllcompany': [authenticate()],
  'Mutation.createAndUpdateComBarance': [authenticate()],
  'Mutation.deleteComBarance': [authenticate()],
};

export const companyResolvers = composeResolvers(
  resolvers,
  resolversComposition,
);
