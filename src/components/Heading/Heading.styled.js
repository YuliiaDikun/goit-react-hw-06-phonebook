import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.grey};

  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};

  position: relative;

  &:after {
    display: block;
    content: '';

    position: absolute;
    left: 50%;
    bottom: -${({ theme }) => theme.spacing(4)};
    transform: translateX(-50%);

    width: 50%;
    height: ${({ theme }) => theme.spacing(0.5)};
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
