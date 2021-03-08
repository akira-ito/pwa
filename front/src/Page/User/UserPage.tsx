import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useCallback } from 'react';
import { UserListDTO } from '../../model/user-list.dto';
import { LIST_USERS } from '../../service/user-graphql';
import UserListItem from './UserListItem';
import { useQuery } from '../../hooks/useQuery';
import { Container } from '../../components/Layout';
import ResultNotFound from '../../components/Form/ResultNotFound';
import UserList from './UserList';
import Loading from '../../components/Form/Loading';

const UserPage: React.FC = () => {
  const query = useQuery();

  const [
    listUsers,
    { loading, error, data, fetchMore },
  ] = useLazyQuery<UserListDTO>(LIST_USERS);

  useEffect(() => {
    listUsers({
      variables: { name: query.search, limit: 10 },
    });
  }, [query.search, listUsers]);

  const handlerOnLoadMore = useCallback(() => {
    const hasNextPage = data?.list?.pageInfo?.hasNextPage;
    if (hasNextPage && fetchMore) {
      fetchMore({
        variables: {
          name: query.search,
          cursor: data?.list?.pageInfo.endCursor,
        },
      });
    }
  }, [data, fetchMore]);

  if (loading) return <Loading message='Carregando!' />;
  if (error) return <>`Error! ${error}`</>;

  return (
    <UserList
      users={data?.list.edges || []}
      hasNextPage={!!data?.list.pageInfo.hasNextPage}
      handlerOnLoadMore={handlerOnLoadMore}
      loading={loading}
    ></UserList>
  );
};

export default UserPage;
