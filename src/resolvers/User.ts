import { Resolver, Query } from 'type-graphql';
import { User } from '../entities/User';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await User.find();
  }
}
