import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo-graphql';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import Page from './Page/Page';
import Footer from './components/Footer/Footer';
import { themeV1 } from './config/theme';

function App() {
  return (
    <ThemeProvider theme={themeV1}>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Page />
          <Footer />
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
