export interface Pagination<MODEL> {
  total: number;
  list: Array<MODEL>;
  limit: number;
  offset: number;
}

export class PaginationUtil {
  static of<MODEL>(
    total: number,
    list: Array<MODEL>,
    limit: number,
    offset: number
  ) {
    return { total, list, limit, offset } as Pagination<MODEL>;
  }
}
