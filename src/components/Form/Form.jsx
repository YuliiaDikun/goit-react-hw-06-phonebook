import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/phoneSlice';
import { useState } from 'react';
import { Label, Input, Wrapper, ErrorMess, Button } from './Forms.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorMess>{message}</ErrorMess>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

const phoneSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  
const inputNameChange = event => {
    setNameValue(event.target.value);
  };
  const inputPhoneChange = event => {
    setNumberValue(event.target.value);
  };


  const handleSubmit = (values, { resetForm }) => {
   
    const isAtList = contacts.find(contact => contact.name === nameValue);
    if (isAtList) {
      alert('Already in list!');
      return;
    }
    const contact = {
      name: nameValue,
      phone: numberValue,
      id: nanoid(),
    };
    const action = addContact(contact);    
    dispatch(action);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={phoneSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Wrapper>
          <Input
            key={nanoid()}
            type="text"
            name="name"
            id="name"
            placeholder=" "
            onChange={inputNameChange}
          />
          <Label htmlFor="name"> Name</Label>
          <FormError name="name" />
        </Wrapper>
        <Wrapper>
          <Input
            key={nanoid()}
            type="tel"
            name="number"
            id="number"
            placeholder=" "
            onChange={inputPhoneChange}
          />
          <Label htmlFor="number"> Number</Label>
          <FormError name="number" />
        </Wrapper>

        <Wrapper>
          <Button type="submit">Add contact</Button>
        </Wrapper>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  onAddContact: PropTypes.func,
};
