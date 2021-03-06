export interface CursorConnectionDTO<DTO> {
  edges: Array<DTO>;
  pageInfo: PageInfoDTO;
}

export interface PageInfoDTO {
  hasNextPage: boolean;
  endCursor: string;
  total: number;
}
