import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs, resolvers } from './datasource/index';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();

export type UsertokenType = {
  id: string;
  roleId: string;
  compayId: string;
};
export interface ApolloContext {
  token?: String;
  currentUser?: UsertokenType;
  prisma: typeof prisma;
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

  const storageAvatar = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'uploads/avatar');
    },
    filename: function (req, file, callback) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      callback(null, file.fieldname + '-' + uniqueSuffix + '.png');
    },
  });

  const uploads = multer({ storage: storageAvatar });
  app.post('/api/upload/avatar', uploads.single('avatar'), (req, res) => {
    res.send(req.file);
  });

  app.use('/api/static', express.static('uploads'));

  app.use(
    '/gql',
    cors<cors.CorsRequest>({
      // origin: 'same-origin',
      // credentials: true,
    }),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        return {
          prisma,
          token: req.headers.authorization,
        };
      },
    }),
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  );

  console.log(`🚀 Server ready at http://localhost:4000/gql`);
})();
