import { useQuery } from '@apollo/client';
import React from 'react';
import { ContainerItem } from '../../components/Layout';
import { UserListDTO } from '../../model/user-list.dto';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { User } from '../../model/user.model';

const UserCard = styled.div.attrs((props) => ({}))`
  border: 1px solid;
  border-radius: 9px;
  padding: 16px;
`;

interface UserListItProps {
  user: Partial<User>;
}

const UserListItem: React.FC<UserListItProps> = ({ user }) => {
  return (
    <ContainerItem span={3} spanLg={3} spanMd={4} spanSm={5} padding={6}>
      <Link to={`/users/${user._id}`}>
        <UserCard>
          <img src={user.picture} alt={user.name} />
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Age:</strong> {user.age}
          </div>
          <div>
            <strong>EyeColor:</strong> {user.eyeColor}
          </div>
          <div>
            <strong>Company:</strong> {user.company}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
        </UserCard>
      </Link>
    </ContainerItem>
  );
};

export default UserListItem;
