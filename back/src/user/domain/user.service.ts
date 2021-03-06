import { CursorConnectionDTO } from '../../common/dto/cursor-connection.dto';
import { CursorConnectionFactory } from '../../common/factory/cursor-connection.factory';
import CursorUtil from '../../common/util/cursor.util';
import { ListUserGetResponseDTO } from '../interfaces/dto/list-user-get-response.dto';
import { ListUserQueryRequestDTO } from '../interfaces/dto/list-user-query-request.dto';
import { ListUserQueryResponseDTO } from '../interfaces/dto/list-user-query-response.dto';
import { IUserRepository } from './user.interface.repository';

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async list(
    query: ListUserQueryRequestDTO
  ): Promise<CursorConnectionDTO<ListUserQueryResponseDTO>> {
    const {
      name,
      cursor,
      limit = parseInt(process.env.LIMIT_PAGE_SIZE ?? '10'),
    } = query;

    let result = null;
    if (!name) {
      result = await this.userRepository.findAll({ cursor, limit });
    } else {
      let regexName;
      const partsName = name.trim().split(' ');
      if (partsName.length > 1) regexName = partsName.join('[^ ]*[ ]+[^ ]*');
      else regexName = `${partsName[0]}.*`;

      result = await this.userRepository.findOneByLikeName(
        new RegExp(`^${regexName}$`, 'i'),
        { cursor, limit }
      );
    }

    return CursorConnectionFactory.of(
      result.list,
      result.total > result.offset + result.limit,
      CursorUtil.toCursorHash(result.offset + result.limit),
      result.total
    );
  }

  public async getById(id: string): Promise<ListUserGetResponseDTO> {
    const user = await this.userRepository.findOneById(id);
    return user ?? ({} as any);
  }
}
