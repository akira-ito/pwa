import { IResolvers } from 'graphql-tools';
import { CursorConnectionDTO } from '../../common/dto/cursor-connection.dto';
import { IGraphQLInterfaces } from '../../common/graphql.interfaces';
import { UserService } from '../domain/user.service';
import { ListUserQueryRequestDTO } from './dto/list-user-query-request.dto';
import { ListUserQueryResponseDTO } from './dto/list-user-query-response.dto';
import { IUserInterfaces } from './user.interface.interfaces';
// export const UserGraphQLInterfaces = (userService: UserService): IResolvers => ()

export class UserGraphQLInterfaces
  implements IUserInterfaces, IGraphQLInterfaces {
  constructor(private readonly userService: UserService) {}

  list(query: ListUserQueryRequestDTO) {
    return this.userService.list(query);
  }

  get(id: string) {
    return this.userService.getById(id);
  }

  graphQL() {
    const self = this;
    return {
      Query: {
        list: (
          _: any,
          args: ListUserQueryRequestDTO
        ): Promise<CursorConnectionDTO<ListUserQueryResponseDTO>> =>
          self.list(args),
        get: (
          _: any,
          args: { id: string }
        ): Promise<ListUserQueryResponseDTO> => self.get(args.id),
      },
    };
  }
}
