import { Pagination } from '../../common/repository/pagination';
import { User } from './user.domain';

export interface FindOneByLikeNameOpts {
  cursor?: string;
  limit: number;
}

export interface IUserRepository {
  findAll(opts?: FindOneByLikeNameOpts): Promise<Pagination<User>>;
  findOneByLikeName(
    name: RegExp,
    opts?: FindOneByLikeNameOpts
  ): Promise<Pagination<User>>;
  findOneById(id: string): Promise<User | null>;
}
