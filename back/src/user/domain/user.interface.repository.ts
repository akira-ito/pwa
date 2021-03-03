import { User } from './user.domain';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findOneByLikeName(name: RegExp): Promise<User[]>;
}
