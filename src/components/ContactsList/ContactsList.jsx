import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Title,
  List,
  Item,
  Contact,
  Button,
  Warning,
} from './ContactsList.styled';

export const ContactsList = ({deleteContact }) => {
  const contacts = useSelector(state => state.contacts);
  return (
    <>
      <Title>Contacts 📃</Title>
      {contacts.length ? (
        <List>
          {contacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <Contact>
                  {name} {number}
                </Contact>

                <Button onClick={() => deleteContact(id)} type="button">
                  ❌
                </Button>
              </Item>
            );
          })}
        </List>
      ) : (
        <Warning>No results...</Warning>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};
