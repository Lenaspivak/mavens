import styled from "styled-components";
import {StyledButton} from "./HomeStyles.ts";

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    height: 80vh;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 1px solid #BCBDBB;
`;
export const TopGameOver = styled.div`
    width: 100%;
    height: 70px;
    font-size: 24px;
    font-weight: 500;
    box-shadow: 0 5px 16px rgba(12, 12, 12, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentGameOver = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;

`
export const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 22px;
    text-transform: uppercase;
    color: #F04747;
`;

export const FinalScore = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 24px;
`;
export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;`
export const AgainButton = styled(StyledButton)`

`;
export const LeaderButton  = styled(StyledButton)`
    border: 1px solid #D8D8D8;
    background-color: #fff;
    color: #212721;
    &:hover {
        opacity: 0.9;
        background-color: #D8D8D8;
        color: white;
    }
`