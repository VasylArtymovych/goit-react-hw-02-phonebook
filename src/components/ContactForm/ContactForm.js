import React, {Component} from "react";
import { nanoid } from "nanoid";

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
            <form onSubmit={this.submitHandler}>
                <label htmlFor={this.inputNameId}>Name</label>
                <input
                id={this.inputNameId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.inputChangeHandler}
                />

                <label htmlFor={this.inputNumberId}>Number</label>
                <input
                id={this.inputNumberId}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.inputChangeHandler}
                />

                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;