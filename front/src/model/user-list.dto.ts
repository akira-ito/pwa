import { CursorConnectionDTO } from './cursor-connection.dto';
import { User } from './user.model';

export interface UserListDTO {
  list: CursorConnectionDTO<Partial<User>>;
}
