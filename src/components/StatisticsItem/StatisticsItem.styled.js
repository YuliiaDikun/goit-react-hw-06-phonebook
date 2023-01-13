import styled from 'styled-components';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows.small};

  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(10)};
`;

export const StatisticText = styled.p`
  margin-bottom: 0;

  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;
`;

export const StatisticCounter = styled.span`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.accent};
`;
