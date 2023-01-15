import PropTypes from 'prop-types';
import { filterContacts } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { Input, Title } from './InputSearch.styled';
export const InputSearch = ({ onChange }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Title>Enter your search value</Title>
      <Input
        type="text"
        onChange={e => {
          const action = filterContacts(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};

InputSearch.propTypes = {
  onChange: PropTypes.func,
};
