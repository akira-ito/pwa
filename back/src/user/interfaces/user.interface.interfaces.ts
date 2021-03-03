import { ListUserQueryRequestDTO } from './dto/list-user-query-request.dto';
import { ListUserQueryResponseDTO } from './dto/list-user-query-response.dto';

export interface IUserInterfaces {
  list(query: ListUserQueryRequestDTO): Promise<ListUserQueryResponseDTO[]>;
}
