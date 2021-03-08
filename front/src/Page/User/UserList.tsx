import React from 'react';
import UserListItem from './UserListItem';
import { Container } from '../../components/Layout';
import ResultNotFound from '../../components/Form/ResultNotFound';
import { User } from '../../model/user.model';

interface UserListProps {
  users: Partial<User>[];
  loading: boolean;
  hasNextPage: boolean;
  handlerOnLoadMore: () => void;
}
const UserList: React.FC<UserListProps> = (props) => {
  const { users, loading, hasNextPage, handlerOnLoadMore } = props;

  return (
    <>
      <Container>
        {users.map((user) => (
          <UserListItem user={user} key={user._id} />
        ))}
      </Container>
      {!loading && users.length === 0 && (
        <ResultNotFound message='Usuario não encontrado!'></ResultNotFound>
      )}
      {hasNextPage && (
        <Container justifyContent='center'>
          <button onClick={handlerOnLoadMore}>Carregar Mais</button>
        </Container>
      )}
    </>
  );
};

export default UserList;
