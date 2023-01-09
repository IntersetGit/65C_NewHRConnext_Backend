import gql from 'graphql-tag';

export const positionTypedef = gql`
  type Role_Company {
    id: ID!
    name: String
    access: JSON
    companyBranchId: String
    companyBranch: CompanyBranch
    users: [User]
  }

  type MePositionType {
    id: ID!
    access: JSON
    name: String
  }
`;
