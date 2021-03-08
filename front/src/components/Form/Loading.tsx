import React, { memo } from 'react';
import styled from 'styled-components';
import alertPNG from '../../assets/alert.png';
import { Container, ContainerItem } from '../Layout';

const LoadingContainer = styled(Container)`
  grid-template-columns: auto;
`;

interface LoadingProps {
  message: string;
}
const Loading: React.FC<LoadingProps> = (props) => {
  const { message } = props;

  return <LoadingContainer>{message}</LoadingContainer>;
};

export default memo(Loading);
