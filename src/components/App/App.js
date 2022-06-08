import React, {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactLIst";
import Filter from "components/Filter";

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
      <Global/>
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
}

export default App;

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  padding: 20px;
  background: #6B9275;
`;

const Title = styled.h2`
  font-size: 30px;
  font-waight: 700;
  text-align: center;
  margin-bottom: 15px;
`;