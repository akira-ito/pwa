import React, { memo } from 'react';
import styled from 'styled-components';
import alertPNG from '../../assets/alert.png';
import { Container, ContainerItem } from '../Layout';

const ResultNotFoundContainer = styled(Container)`
  grid-template-columns: auto;
`;

const OpsText = styled.div`
  font-weight: bolder;
  font-size: 24px;
  text-align: center;
`;

interface ResultNotFoundProps {
  message: string;
}
const ResultNotFound: React.FC<ResultNotFoundProps> = (props) => {
  const { message } = props;

  return (
    <ResultNotFoundContainer>
      <ContainerItem justifyContent='center'>
        <img src={alertPNG} alt='Aviso' width='150px' />
      </ContainerItem>
      <ContainerItem justifyContent='center'>
        <OpsText>Ops!</OpsText>
        {message}
      </ContainerItem>
    </ResultNotFoundContainer>
  );
};

export default memo(ResultNotFound);
