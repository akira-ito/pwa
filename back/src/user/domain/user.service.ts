import { ListUserQueryResponseDTO } from '../interfaces/dto/list-user-query-response.dto';
import { IUserRepository } from './user.interface.repository';

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async list(name?: string): Promise<ListUserQueryResponseDTO[]> {
    if (!name) return this.userRepository.findAll();

    let regexName;
    const partsName = name.trim().split(' ');
    if (partsName.length > 1) regexName = partsName.join('[^ ]*[ ]+[^ ]*');
    else regexName = `${partsName[0]}.*`;

    return this.userRepository.findOneByLikeName(
      new RegExp(`^${regexName}$`, 'i')
    );
  }
}
