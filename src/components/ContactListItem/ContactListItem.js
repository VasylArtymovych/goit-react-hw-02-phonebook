const ContactListItem = ({contacts, onDelete}) => (contacts.map(({id, name, number}) => (
    <li key={id}>
        {name}: {number}
        <button 
            type="button"
            onClick={()=>{
                onDelete(id);
            }}
        >
            Delete
        </button>
    </li>
)))

export default ContactListItem;