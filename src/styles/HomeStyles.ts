import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const StyledBox = styled.div`
    background-color: white;
    
    width: 470px;
    border-radius: 12px;
    padding: 23px 33px;
`;
export const FormLabel = styled.div`
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 20px;
`;
export const InnerWrapper = styled.div`
    display: flex;
    gap: 10px;`
export const StyledInput = styled.input`
    width: 80%;
    padding: 10px;
    border: 1px solid #969894;
    border-radius: 5px;
    font-size: 12px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: ${({theme}) => theme.colors.primary};
        box-shadow: 0 0 5px ${({theme}) => theme.colors.primary};
    }
`;
export const StyledButton = styled.div`
    background-color: #212721;
    display: flex;
    white-space: nowrap;
    gap: 11px;
    color: white;
    border-radius: 8px;
    padding: 8px 13px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.3s;
    font-size: 16px;
    border: none;
    
    &:hover {
        opacity: 0.9;
        background-color: ${({theme}) => theme.colors.primary};
    }
    svg{
        transition: transform 0.3s ease;

    }
    &:hover svg{
        transform: translateX(5px);
    }
`

export const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 40px;
    font-family: ${({theme}) => theme.fonts.main || "Arial, sans-serif"};
`;