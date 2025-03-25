import styled from "styled-components";

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
`
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