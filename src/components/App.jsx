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
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts, filter])

  const addContact = newContact => {
    const isInList = contacts.some(
      contact => contact.name === newContact.name
    );
    if (isInList) {
      alert('Already in list!');
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const filterContacts = () => {
    return contacts.filter(contact => contact.name.includes(filter));
  };
  const contactsToMarkUp = filterContacts();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title />
        <LoginForm onAddContact={addContact} />

        <InputSearch
          onChange={e => setFilter(e.target.value)}
        />
        <ContactsList
          contacts={contactsToMarkUp}
          deleteContact={deleteContact}
        />
      </Container>

      <GlobalStyleComponent />
    </ThemeProvider>
  );
}
