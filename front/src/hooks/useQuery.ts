import { useMemo } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { QueryModel } from '../model/query.model';

export const useQuery = (): QueryModel => {
  const location = useLocation();

  return useMemo(() => queryString.parse(location.search), [location.search]);
};
