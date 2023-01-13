import styled from 'styled-components';
export const Input = styled.input`
  width: ${({ theme }) => theme.spacing(122)};
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid white;
  font-size: ${({ theme }) => theme.spacing(4)};
  background-color: transparent;
  color: white;
  background-color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  &:focus {
    outline: 1px solid white;
  }
`;
export const Title = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)};
`;
