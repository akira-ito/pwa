import { User } from '../domain/user.domain';
import {
  FindOneByLikeNameOpts,
  IUserRepository,
} from '../domain/user.interface.repository';
import db from './db';
import CursorUtil from '../../common/util/cursor.util';
import { PaginationUtil } from '../../common/repository/pagination';

export class UserMockRepository implements IUserRepository {
  db: User[];

  constructor() {
    this.db = db;
  }

  public async findAll(opts: FindOneByLikeNameOpts) {
    const { cursor, limit } = opts;

    const result: User[] = [];
    let total = 0;
    const offset = cursor ? CursorUtil.fromCursorHash(cursor) : 0;
    for (const user of this.db) {
      if (total >= offset && total < offset + limit) {
        result.push(user);
      }
      total++;
    }
    return PaginationUtil.of(total, result, limit, offset);
    // return this.db;
  }

  public async findOneByLikeName(name: RegExp, opts: FindOneByLikeNameOpts) {
    const { cursor, limit } = opts;
    const result: User[] = [];

    let total = 0;
    const offset = cursor ? CursorUtil.fromCursorHash(cursor) : 0;
    for (const user of this.db) {
      if (!name.test(user.name)) continue;

      if (total >= offset && total < offset + limit) {
        result.push(user);
      }
      total++;
    }

    return PaginationUtil.of(total, result, limit, offset);
    // return this.db.filter((user) => name.test(user.name));
  }

  public async findOneById(id: string) {
    return this.db.find((user) => id === user._id) ?? null;
  }
}
