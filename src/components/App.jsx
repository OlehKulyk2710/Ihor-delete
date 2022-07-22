import style from './App.module.scss';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    if (names.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    this.handleAddContact(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filterContacts = this.getFilterContact();
    return (
      <Container>
        <p style={{ color: 'red' }}>Hello World!!!</p>
        <h1 className={style.titlePrimary}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={style.titleSecondary}>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />

        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
