import styled from "styled-components";

export const UserBarContainer = styled.div`
    width: 90%;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #BCBDBB;
    border-bottom: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 1;
    box-shadow: 0 5px 16px rgba(12, 12, 12, 0.1);
`;

export const UserName = styled.div`
    font-size: 24px;
`;

export const UserScore = styled.div`
    color: ${({ theme }) => theme.colors.primary};
`;