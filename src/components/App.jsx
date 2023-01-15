import { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

import { Container } from './Container/Container.styled';
import { Title } from './Title/Title';
import { LoginForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { InputSearch } from './InputSearch/InputSearch';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title />
        <LoginForm />

        <InputSearch />
        <ContactsList />
      </Container>

      <GlobalStyleComponent />
    </ThemeProvider>
  );
};
