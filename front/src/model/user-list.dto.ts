import { User } from './user.model';

export interface UserListDTO {
  list: Array<Partial<User>>;
}
