import dotenv from 'dotenv';
import express from 'express';
import * as http from 'http';

dotenv.config();

export const app = express();


import './appmodules';
import logger from './utils/winston';

const API_PORT: string | undefined = process.env.PORT || '8000';

app.set('port', API_PORT);
let server: http.Server = http.createServer(app);
server.listen(API_PORT);
server.on('listening', () => {
    logger.info(`Listening @ ${API_PORT}`);
});

server.on('error', (error) => {
  throw error;
});

app.get('/', (req, res) => {
  res.status(200).json({title : 'Backend api' , ownner : 'CALLMEBOB' , status : 200});
});

