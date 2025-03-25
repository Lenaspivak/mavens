import styled, { keyframes } from "styled-components";

export const GameWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: calc(90vh - 80px);
    height: calc(100vh - 80px);
    background: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 1px solid #BCBDBB;
    position: relative;
`
export const GameInnerStyle = styled.div`
display: flex;
flex-direction: column;
    justify-content: space-around;
gap: 100px`
export const ShapeWrapper = styled.div`
    display: flex;
    width: 60%;
    margin: 0 auto;`
export const Shape = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 7px solid white;
    box-shadow: 0px 0px 20.5px rgba(0, 0, 0, 0.15);
    background-color: ${({theme}) => theme.colors.primary}
`
const shrink = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const TimeOutBar = styled.div`
    border: 3px solid white;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    height: 20px;
    width: 90%;
    margin: 10px auto;
    background-color: #ddd;
    overflow: hidden;

    & > div {
        height: 100%;
        background: #8CD9DA;
        border-radius: 20px;
        animation: ${shrink} 1.10s linear forwards;
    }
`;
