import { DeleteButton, Text, NumberText  } from "./ContactCard.styled"

export const ContactCard =
  ({ contact: { id, name, number },
    onDelete,
  }) => {
  return (
    <>
    <Text>
      {name}
      <NumberText>
        {number}
      </NumberText>
      </Text>
      <DeleteButton onClick={()=> onDelete(id)}>Delete</DeleteButton>
    </>
  )
}