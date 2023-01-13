import styled from 'styled-components';

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const THead = styled.thead`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.dark};
`;
