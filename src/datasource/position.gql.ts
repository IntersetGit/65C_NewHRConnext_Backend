import gql from 'graphql-tag';

export const positionTypedef = gql`
  type Position {
    id: ID!
    name: String
    access: String
    companyId: String
    company: Company
    users: [User]
  }

  type MePositionType {
    id: ID!
    access: String
    name: String
  }
`;
