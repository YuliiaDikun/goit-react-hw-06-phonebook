import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/phoneSlice';
import { useDispatch } from 'react-redux';
import {
  Title,
  List,
  Item,
  Contact,
  Button,
  Warning,
} from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const visibleTodos = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Title>Contacts 📃</Title>
      {visibleTodos.length ? (
        <List>
          {visibleTodos.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <Contact>
                  {name} {number}
                </Contact>

                <Button
                  onClick={() => {
                    const action = deleteContact(id);
                    dispatch(action);
                  }}
                  type="button"
                >
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
