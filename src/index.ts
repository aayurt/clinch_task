import express, { NextFunction, Request, Response } from 'express';
import { createServer } from 'http';
import config from './config/index.js';
import db from './models/index.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './gql/typeDefs/user.js';
import resolvers from './gql/resolvers/index.js';

const app = express();

interface IError extends Error {
  status?: number;
}

app.use((error: IError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  console.error(error);
  res.send({
    status: false,
    message: config.app.ENV === 'dev' ? error.message : 'server error',
    error: config.app.ENV === 'dev' ? error : '',
  });
  return;
});

db.on('error', console.error.bind(console, 'MongoDB connection error.'));
db.on('close', function () {
  console.log('DB connection is close');
});
db.once('open', function () {
  console.log('Connected to MongoDB database.');
});

// API
app.use('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('API running...');
});

const PORT = parseInt(process.env.PORT);
//API END

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });

console.log(`🚀 Server listening at: ${url}`);
