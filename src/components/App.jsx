import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const dataFromLS = localStorage.getItem('Contacts_Local_Storage');

    if (dataFromLS) {
      setContacts(JSON.parse(dataFromLS));
    }
  }, []);

  const addNewName = (name, number) => {
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(name))
      return alert(`${name} is alredy in contacts`);

    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const showFilteredContacts = () =>
    contacts.filter(showContact =>
      showContact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const handleFilterChange = newValue => setFilter(newValue);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewName} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactList contacts={showFilteredContacts()} onClick={deleteContact} />
    </div>
  );
};
