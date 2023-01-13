import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white};
`;

export const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const CardPoster = styled.img`
  object-fit: cover;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)};
`;
export const Tag = styled.span`
  align-self: flex-start;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.tagBackground};
`;

export const CardTitle = styled.h2`
  font-family: Poppins;
  font-size: ${({ theme }) => theme.spacing(6)};
  text-transform: capitalize;

  margin-bottom: 0;
`;
export const CardText = styled.p`
  font-weight: 200;
  letter-spacing: ${({ theme }) => theme.spacing(0.2)};

  margin-bottom: 0;
`;

export const CardFooter = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-top: auto;
`;
export const UserBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}; ;
`;
export const Avatar = styled.img`
  border-radius: 50%;
`;
export const UserInfo = styled.div`
  position: relative;
`;
export const UserName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.small};

  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
export const Date = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`;
