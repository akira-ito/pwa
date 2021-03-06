import { CursorConnectionDTO } from '../dto/cursor-connection.dto';

export class CursorConnectionFactory {
  static of<DTO>(
    edges: Array<DTO>,
    hasNextPage: boolean,
    endCursor: string,
    total: number
  ): CursorConnectionDTO<DTO> {
    return {
      edges,
      pageInfo: {
        hasNextPage,
        endCursor,
        total,
      },
    };
  }
}
