import ContactListItem from "components/ContactListItem";
import styled from "styled-components";

const ContactList = ({contacts, onDelete}) => (
    <List>
        <ContactListItem contacts={contacts} onDelete={onDelete}/>
    </List>
)

export default ContactList;

const List = styled.ul`
    width: 100%;
    padding: 15px;
    list-style: ordered;
    background: #9A9B9A;
`;