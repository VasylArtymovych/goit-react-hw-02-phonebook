import React, {Component} from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const INITIAL_STATE = {
    name: '',
    number: ''
};

export default class ContactForm extends Component {
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    background: #57695B;
    color: #fff;
    border-radius: 10px;
`;

const Label = styled.label`
    margin-bottom: 10px;
    width: 85%;
`;

const Input = styled.input.attrs((props) => ({
    type: props.type,
}))`
    width: 85%;
    margin-bottom: 15px;
    padding: 7px 5px;
    font-size: 18px;
    background: #9A9B9A;
    outline: none;
    &::placeholder {
        color: #464D48;
    }
`;

const Button = styled.button.attrs({type: "submit"})`
    width: 110px;
    height: 35px;
    background: linear-gradient(to right, #0A4918, #53725A);
    color: #fff;
    border: 2px solid grey;
    border-radius: 20px;
    cursor: pointer;
    &:hover,
    &:focus {
        background: grey;
        color: #13411D;
        box-shadow: 0px 0px 7px #fff;
    };
`;