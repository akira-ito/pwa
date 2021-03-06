import styled from 'styled-components';
import { QUERY } from '../../config/media-query';

interface ContainerItemProps {
  span: number;
  spanLg: number;
  spanMd: number;
  spanSm: number;
  padding: number;
  justifyContent: 'initial' | 'center';
}

function condtionQuery(query: string, span: number | null) {
  return span
    ? `
      ${query} {
        grid-column: auto / span ${span}
      }`
    : '';
}

export const ContainerItem = styled.div.attrs<
  ContainerItemProps,
  ContainerItemProps
>((props) => ({
  padding: props.padding ?? 1,
  span: props.span ?? 1,
  spanLg: props.spanLg,
  spanMd: props.spanMd,
  spanSm: props.spanSm,
  justifyContent: props.justifyContent ?? 'initial',
}))`
  display: grid;
  padding: ${(props) => props.padding}px;
  justify-content: ${(props) => props.justifyContent};

  ${(props) => condtionQuery(QUERY.SM, props.spanSm)}
  ${(props) => condtionQuery(QUERY.MD, props.spanMd)}
  ${(props) => condtionQuery(QUERY.LG, props.spanLg)}
  grid-column: auto / span ${(props) => props.span};
`;
