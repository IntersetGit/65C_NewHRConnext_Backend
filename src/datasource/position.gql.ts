import gql from 'graphql-tag';

export const positionTypedef = gql`
  interface PositionInterface {
    id: ID!
  }

  type PositionWithNameandAccess implements PositionInterface {
    id: ID!
    name: String
    access: String
  }

  type PositionfullQuery implements PositionInterface {
    id: ID!
    name: String
    access: String
    companyId: String
    company: SimpleCompanyQuery
    users: [User]
  }
`;
