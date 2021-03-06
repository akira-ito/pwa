import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useMemo } from 'react';
import { GET_USER } from '../../service/user-graphql';
import UserListItem from './UserListItem';
import { useQuery } from '../../hooks/useQuery';
import { useParams } from 'react-router';
import { UserGetDTO } from '../../model/user-get.dto';
import { Container, ContainerItem } from '../../components/Layout';
import ResultNotFound from '../../components/Form/ResultNotFound';
import styled from 'styled-components';

interface UserDetailProps {}
const UserDetail: React.FC<UserDetailProps> = () => {
  const query = useQuery();
  let { id } = useParams<{ id: string }>();

  const [getUser, { loading, error, data }] = useLazyQuery<UserGetDTO>(
    GET_USER
  );

  useEffect(() => {
    getUser({
      variables: { id },
    });
  }, [id, getUser]);

  if (loading) return <>'loading'</>;
  if (error) return <>`Error! ${error}`</>;

  return (
    <>
      {data?.get.name && (
        <>
          <Container>
            <ContainerItem span={1} padding={0}>
              <img src={data.get.picture} alt={data.get.name} />
            </ContainerItem>
            <ContainerItem>
              <div>
                <div>
                  <strong>Name:</strong> {data.get.name}
                </div>
                <div>
                  <strong>Age:</strong> {data.get.age}
                </div>
                <div>
                  <strong>EyeColor:</strong> {data.get.eyeColor}
                </div>
                <div>
                  <strong>Company:</strong> {data.get.company}
                </div>
                <div>
                  <strong>Email:</strong> {data.get.email}
                </div>
              </div>
            </ContainerItem>
          </Container>
          <Container>
            <h2>Friends:</h2>
          </Container>
          <Container>
            {data?.get.friends?.map((friend) => (
              <UserListItem user={friend} />
            ))}
          </Container>
        </>
      )}
      {!data?.get.name && (
        <ResultNotFound message='Usuario não encontrado!'></ResultNotFound>
      )}
    </>
  );
};

export default UserDetail;
