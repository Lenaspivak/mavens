import styled from "styled-components";
import {StyledButton} from "./HomeStyles.ts";

export const LeaderTitle = styled.h1`
    text-align: center;
    font-size: 36px;
`;

export const LeaderboardWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding:0 20px;
`;
export const StyledTableContainer = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 17px;
    background-color: white;
    border: 2px solid ${({theme}) => theme.colors.primary};

`;

export const StyledTableRow = styled.tr`
    width: 100%;

    &:last-child td {
        border-bottom: none;

        &:first-child {
            border-left: none;
        }

        &:last-child {
            border-right: none;
        }

    }
`;
export const StyledTableRowBody = styled(StyledTableRow)`
    &:first-child td {
        color: #30A66D;
    }
`
export const StyledTableCellHead = styled.td`
    background-color: #FFE0EE;
    font-size: 24px;
    font-weight: 600;
    padding: 10px;
    border: 1px solid #D8D8D8;
    text-align: center;

    &:first-child {
        border-top-left-radius: 16px;
    }

    &:last-child {
        border-top-right-radius: 16px;
    }
`;

export const StyledTableCell = styled.td`
    border: 1px solid #D8D8D8;
    padding: 20px;
    font-size: 22px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.main || "Arial, sans-serif"};
    width: 33.333%;
`;
export const StyledAgainButton = styled(StyledButton)`
    min-width: 140px;

`