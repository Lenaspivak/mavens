import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 40px;
    background-color: #212721;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0 5px 16px rgba(12, 12, 12, 0.3);  /* Shadow from image */
    //position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;