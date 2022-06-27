import {Item, Button} from './ContactListItem.styled'

const ContactListItem = ({contacts, onDelete}) => (contacts.map(({id, name, number}) => (
    <Item key={id}>
        {name}: {number}
        <Button 
            onClick={()=>{
                onDelete(id);
            }}
        >
            Delete
        </Button>
    </Item>
)))

export default ContactListItem;

