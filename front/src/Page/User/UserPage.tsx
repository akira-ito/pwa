import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useMemo } from 'react';
import { UserListDTO } from '../../model/user-list.dto';
import { LIST_USERS } from '../../service/user-graphql';
import UserListItem from './UserListItem';
import { useQuery } from '../../hooks/useQuery';
import { Container } from '../../components/Layout';
import ResultNotFound from '../../components/Form/ResultNotFound';

const UserPage: React.FC = () => {
  const query = useQuery();

  const [listUsers, { loading, error, data }] = useLazyQuery<UserListDTO>(
    LIST_USERS
  );

  useEffect(() => {
    listUsers({
      variables: { name: query.search },
    });
  }, [query.search, listUsers]);

  if (loading) return <>'loading'</>;
  if (error) return <>`Error! ${error}`</>;

  return (
    <>
      <Container>
        {data?.list.map((user) => (
          <UserListItem user={user} key={user._id} />
        ))}
      </Container>
      {data?.list.length === 0 && (
        <ResultNotFound message='Usuario não encontrado!'></ResultNotFound>
      )}
    </>
  );
};

export default UserPage;
