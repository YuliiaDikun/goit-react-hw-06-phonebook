import styled from 'styled-components';

export const StatisticTitle = styled.h3`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing(2)};
`;
