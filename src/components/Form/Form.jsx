import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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

export const LoginForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    onAddContact(values);
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
