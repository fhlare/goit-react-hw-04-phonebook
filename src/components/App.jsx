import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

const localStorageKey = 'contacts-book';
const getContacts = () => {
  const savedContacts = window.localStorage.getItem(localStorageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const updateFilter = contactName => setFilter(contactName);

  const deleteContact = contactId =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );

  const addContact = newContact => {
    const sameContact = contacts.some(
      contact => contact.name === newContact.name
    );
    if (sameContact) {
      alert(`${newContact.name} is alredy contact`);
    } else {
      setContacts(prevState => [...prevState, { id: nanoid(), ...newContact }]);
    }
  };

  const visibleContacts = contacts.filter(contact => {
    const hasContact = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());

    return hasContact;
  });

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onUpdateFilter={updateFilter} />
      {contacts.length > 0 && (
        <ContactList items={visibleContacts} deleteContact={deleteContact} />
      )}
      <GlobalStyle />
    </Container>
  );
};
