import React, {Component} from "react";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactLIst";
import Filter from "components/Filter";
import {Container, Title} from './App.styled';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (newContact) => {
    const contactNames = this.state.contacts.map(contact => contact.name);

    if(contactNames.includes(newContact.name)){
      alert(`${newContact.name} is already in contacts.`)
    }else {
      this.setState(({contacts}) => ({
        contacts: [newContact, ...contacts]
      }))
    }
  }

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  inputChangeHandler = (event) => {
  const { name, value } = event.target;
  this.setState({
      [name]: value
    })
  }

  filterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  }


  render() {
    const filteredContacts = this.filterContacts();

    return (
      <>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact}/>

        <Title>Contacts</Title>
        <Filter onChange={this.inputChangeHandler}/>
        <ContactList contacts={filteredContacts} onDelete={this.deleteContact}/> 
      </Container>
      </>
    )
  }
};

export default App;

