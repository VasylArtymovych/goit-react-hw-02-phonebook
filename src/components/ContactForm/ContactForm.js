import React, {Component} from "react";
import { nanoid } from "nanoid";
import {Form, Label, Input, Button} from './ContactForm.styled';

const INITIAL_STATE = {
    name: '',
    number: ''
};

class ContactForm extends Component {
    state = {...INITIAL_STATE}

    inputNameId = nanoid(12);
    inputNumberId = nanoid(12);

    inputChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const contact = {id: nanoid(), name: this.state.name, number: this.state.number};
        this.props.addContact(contact);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            ...INITIAL_STATE
        })
    }

    render(){
        const {name, number} = this.state;

        return (
            <Form onSubmit={this.submitHandler}>
                <Label htmlFor={this.inputNameId}>Name</Label>
                <Input
                id={this.inputNameId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.inputChangeHandler}
                placeholder='full name'
                />

                <Label htmlFor={this.inputNumberId}>Number</Label>
                <Input
                id={this.inputNumberId}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.inputChangeHandler}
                placeholder="tellephone number"
                />

                <Button>Add contact</Button>
            </Form>
        )
    }
};

export default ContactForm;