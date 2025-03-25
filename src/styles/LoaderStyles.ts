import styled, {keyframes} from "styled-components";

// 🌀 Animation
export const run = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
    }
`;

export const LoaderWrapper = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Spinner = styled.div`
    border: 3px solid white;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    height: 20px;
    width: 70%;

    background: linear-gradient(90deg, #E6D4DC, #8CD9DA, #E6D4DC);
    background-size: 200% 100%;
    background-repeat: repeat;
    animation: ${run} 1.5s linear reverse infinite;

`;

export const Feedback = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
`;
