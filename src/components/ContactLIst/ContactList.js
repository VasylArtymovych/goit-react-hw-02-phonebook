import ContactListItem from "components/ContactListItem";

const ContactList = ({contacts, onDelete}) => (
    <ul>
        <ContactListItem contacts={contacts} onDelete={onDelete}/>
    </ul>
)

export default ContactList;