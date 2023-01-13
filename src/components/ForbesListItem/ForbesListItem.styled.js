import styled from "styled-components";

export const ForbesItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;

    padding: 10px 30px 10px 10px;
    overflow: hidden;
    border-radius: 10px;

    box-shadow: ${({ theme }) => theme.shadows.medium};
    cursor: pointer;

    transition-property: transform, box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: ${({ theme }) => theme.animation.cubicBezier};

    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
        transform: scale(1.02);
        box-shadow: ${({ theme }) => theme.shadows.small};
    }
`

export const Avatar = styled.img`
    width: 60px;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadows.regular};
`

export const Name = styled.h3`
    color: ${({ theme }) => theme.colors.grey};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.large};
  letter-spacing: ${({ theme }) => theme.spacing(0.25)};

  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-bottom: 0;
`

export const Capital = styled.span`
    display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};

  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;

  font-size: ${({ theme }) => theme.spacing(6)};
`