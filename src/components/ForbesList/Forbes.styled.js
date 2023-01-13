import styled from "styled-components";

export const LeaderBoard = styled.div`
    width: ${({ theme }) => theme.spacing(120)};
    border-radius: ${({ theme }) => theme.spacing(3)};

    margin: 0 auto;
    overflow: hidden;
`;

export const BoardHeader = styled.div`
    padding: ${({ theme }) => theme.spacing(12)};
    background-color: ${({ theme }) => theme.colors.accent};

`

export const BoardTitle = styled.h2`
    text-align: right;
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    margin: 0;
`

export const TitleTop = styled.span`
    display: block;
    letter-spacing: ${({ theme }) => theme.spacing(1.6)};
`
export const TitleBottom = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 300;
    letter-spacing: ${({ theme }) => theme.spacing(0.4)};
`
export const LeaderBoardProfiles = styled.ul`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0 0 ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(5)};
    display: grid;
    row-gap: ${({ theme }) => theme.spacing(2)};
`
