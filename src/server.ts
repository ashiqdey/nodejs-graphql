import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { createSchema } from './schema';

const main = async () => {
  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await createSchema(),
  });

  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
};

main().catch((error) => {
  console.error('Error starting server:', error);
});
