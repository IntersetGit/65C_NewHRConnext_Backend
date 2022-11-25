import gql from 'graphql-tag';

export const providerTypedef = gql`

    type Book {
        title: String
        author: String
    }
    type Query {
        me: Int
        books: [Book]
    }

`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  // Resolvers define the technique for fetching the types defined in the
  // schema. This resolver retrieves books from the "books" array above.
export const providerResolvers = {
    Query: {
      books: () => books,
      me : () => 1
    }
  };
