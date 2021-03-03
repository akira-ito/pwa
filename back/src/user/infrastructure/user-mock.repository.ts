import { User } from '../domain/user.domain';
import { IUserRepository } from '../domain/user.interface.repository';
import db from './db';

export class UserMockRepository implements IUserRepository {
  db: User[];

  constructor() {
    this.db = db;
  }

  public async findAll() {
    return this.db;
  }

  public async findOneByLikeName(name: RegExp) {
    return this.db.filter((user) => name.test(user.name));
  }
}
