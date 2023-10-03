import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

export const createSchema = async () =>
  await buildSchema({
    resolvers: [UserResolver],
  });
