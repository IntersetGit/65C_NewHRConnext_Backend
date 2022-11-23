import gql from 'graphql-tag';
import { GraphQLScalarType, Kind } from 'graphql';

export const dateTypedef = gql`
  scalar Date
`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom date scarlar type.',
  serialize(value) {
    const date : Date = value as Date
    return date.getTime();
  },
  parseValue(value) {
    const dateParse : number = value as number
    return new Date(dateParse);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});

export const dateResolvers = {
    Date: dateScalar
};
