import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { debounce } from 'lodash';
import { useQuery } from '../../hooks/useQuery';
import { Container, ContainerItem } from '../Layout';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled(Container)`
  padding: 16px;
`;

const HeaderLogoSection = styled.div.attrs(() => ({}))`
  grid-template: auto / auto auto;
  display: grid;
  align-items: center;
`;

const Header: React.FC = () => {
  const history = useHistory();
  const query = useQuery();
  const [search, setSearch] = useState('');

  const handlerOnChange = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      const search = event.target.value;
      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify({ ...query, search }),
      });
    }, 300),
    [query, history]
  );

  useEffect(() => {
    setSearch(query.search ?? '');
  }, [query.search, setSearch]);

  return (
    <HeaderContainer>
      <ContainerItem justifyContent='center'>
        <Link to='/'>
          <HeaderLogoSection>
            <img src={logo} alt='Logo' width='34px' />
            <strong>MySocial</strong>
          </HeaderLogoSection>
        </Link>
      </ContainerItem>
      <div>
        <input
          type='text'
          placeholder='search'
          name='search'
          onChange={(event) => {
            handlerOnChange(event);
            setSearch(event.target.value);
          }}
          value={search}
        ></input>
      </div>
    </HeaderContainer>
  );
};

export default Header;
