import ContactListItem from "components/ContactListItem";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContactList = ({contacts, onDelete}) => (
    <List>
        <ContactListItem contacts={contacts} onDelete={onDelete}/>
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactList;

const List = styled.ul`
    width: 100%;
    padding: 15px;
    list-style: ordered;
    background: #9A9B9A;
`;