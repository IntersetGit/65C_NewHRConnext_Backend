import gql from 'graphql-tag';

export const positionTypedef = gql`
  type Position {
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
