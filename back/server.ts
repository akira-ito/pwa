import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import cors from 'cors';
import schemaModule from './src/schema.module';
import morgan, { StreamOptions } from 'morgan';
import Logger from './src/common/logger';
dotenv.config();

const app = express();
const server = new ApolloServer({
  schema: schemaModule,
  validationRules: [depthLimit(5)],
});

const logMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message: any) => Logger.http(message),
    },
  }
);
app.use(logMiddleware);

app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  Logger.info(`Server is running at PORT: ${PORT}`);
});
