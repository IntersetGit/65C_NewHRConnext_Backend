import dotenv from 'dotenv';
import { ApolloServer  } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs , resolvers} from './datasource/index';

dotenv.config();

interface ApolloContext {
  token?: String;
}


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
export const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await server.start();

  app.use(
    '/gql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.authorization }),
    }),
  );
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:4000/gql`);

})();
