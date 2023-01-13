import styled from 'styled-components';
export const Title = styled.h2`
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.spacing(10)};
  font-weight: 700;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
`;
export const Item = styled.li`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const Contact = styled.span`
  font-size: ${({ theme }) => theme.spacing(6)};
`;
export const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  font: inherit;
  padding: ${({ theme }) => theme.spacing(2)};

  cursor: pointer;
`;

export const Warning = styled.p`
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.spacing(6)};
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;
