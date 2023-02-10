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
import { PrismaClient } from './generated/client';
import routes from './uploadFiles';
import path from 'path'
import fs, { stat } from 'fs'

const prisma = new PrismaClient();

dotenv.config();

export type UsertokenType = {
  id: string;
  roleId: string;
  isOwner: boolean;
  compayId: string;
  branchId: string;
};
export interface ApolloContext {
  token?: String;
  currentUser?: UsertokenType;
  prisma: typeof prisma;
}
//ลบสลิปเงินเดือนอัตโนมัติ
let pdf_slip = `./public/assets/payment/`
let read_slip = fs.readdirSync(pdf_slip)
for (let i = 0; i < read_slip.length; i++) {
  let stat = fs.stat(path.join(pdf_slip , read_slip[i]) , function(err,stat){
    let path_name = path.join(pdf_slip , read_slip[i])
    let now = new Date().getTime()
    // let endTime1 = new Date(stat.ctime).getTime() + 10000;
    let endTime = new Date(stat.ctime).getTime() +  (60000 * 60 * 24);
    console.log(now);
    console.log(endTime);
    if(now > endTime){
      fs.rmSync(path_name, { recursive: true, force: true })
      console.log('delete successfully');
    }
    // console.log(`endtime with 36000` , endTime);
  })
  console.log(read_slip[i]);
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
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(path.join(__dirname, 'public/index.html')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })
  app.use(cors());
  app.use('/api/upload', routes);
  app.use('/api/uploads', express.static('uploads'));

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
