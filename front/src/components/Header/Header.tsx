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

const HeaderContainer = styled(Container)``;

const HeaderLogoSection = styled.div.attrs(() => ({}))`
  grid-template: auto / auto auto;
  display: grid;
  align-items: center;
`;

const HeaderInput = styled.input`
  border-radius: 7px;
  padding: 8px;
`;

const Header: React.FC = () => {
  const history = useHistory();
  const query = useQuery();
  const [search, setSearch] = useState('');

  const handlerSubmitting = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      // const search = event.target.value;
      history.push({
        pathname: '/', //history.location.pathname,
        search: queryString.stringify({ ...query, search }),
      });
    }, 300),
    [query, history, search]
  );

  useEffect(() => {
    setSearch(query.search ?? '');
  }, [query.search, setSearch]);

  const handerOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handlerSubmitting(event);
    },
    [handlerSubmitting]
  );

  const handleChange = useCallback(
    (event) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  return (
    <HeaderContainer>
      <ContainerItem justifyContent='center'>
        <Link to='/'>
          <HeaderLogoSection>
            <img src={logo} alt='Logo' width='34px' />
            <h1>MySocial</h1>
          </HeaderLogoSection>
        </Link>
      </ContainerItem>
      <ContainerItem justifyContent='start' alignItems='center'>
        <form onSubmit={handerOnSubmit}>
          <HeaderInput
            type='text'
            placeholder='search'
            name='search'
            onChange={(event) => {
              // handlerOnChange(event);
              // setSearch(event.target.value);
              handleChange(event);
            }}
            value={search}
          ></HeaderInput>
        </form>
      </ContainerItem>
    </HeaderContainer>
  );
};

export default Header;
