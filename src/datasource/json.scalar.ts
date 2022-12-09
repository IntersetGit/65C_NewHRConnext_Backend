import gql from 'graphql-tag';
import GraphQLJSON from 'graphql-type-json';

export const jsonTypedef = gql`
  scalar JSON
`;

export const josnResolvers = {
  JSON: GraphQLJSON,
};
