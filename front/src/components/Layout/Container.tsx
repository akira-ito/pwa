import styled from 'styled-components';

interface ContainerProps {
  justifyContent: 'initial' | 'center';
}

export const Container = styled.div.attrs<ContainerProps, ContainerProps>(
  (props) => ({
    justifyContent: props.justifyContent ?? 'initial',
  })
)`
  display: grid;
  grid-template: auto / auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-gap: 0px;
  margin-right: auto;
  margin-left: auto;
  justify-content: ${(props) => props.justifyContent};

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  & + & {
    grid-column-start: 1;
  }
`;
