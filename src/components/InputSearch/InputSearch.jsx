import PropTypes from 'prop-types';
import { Input, Title } from './InputSearch.styled';
export const InputSearch = ({ onChange }) => {
  return (
    <>
      <Title>Enter your search value</Title>
      <Input type="text" onChange={onChange} />
    </>
  );
};

InputSearch.propTypes = {
  onChange: PropTypes.func,
};
