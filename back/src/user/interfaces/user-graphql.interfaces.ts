import { IResolvers } from 'graphql-tools';
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
    return this.userService.list(query.name);
  }

  graphQL() {
    const self = this;
    return {
      Query: {
        list(
          _: any,
          args: ListUserQueryRequestDTO,
          __: any
        ): Promise<ListUserQueryResponseDTO[]> {
          return self.list(args);
        },
      },
    };
  }
}
