
import { ContactCard } from "components/ContactCard/ContactCard"
import { List, ListItem } from "./ContactList.styled"

export const ContactList = ({items, deleteContact}) => {
  return (
    <List>
      {items.map(item =>
      (
        <ListItem key={item.id}>
          <ContactCard contact={item} onDelete={deleteContact} />
        </ListItem>
        ))}
    </List>
    
  )
}