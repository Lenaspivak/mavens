import styled, {keyframes} from "styled-components";

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
    font-weight: 500;
    font-size: 14px;
    position: absolute;
    bottom: 20px;
    background-color: white;
    border: 1px solid #BCBDBB;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    padding: 11px 20px;
    min-width: 40%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;

    &.feedback-correct {
        color: #30A66D;
    }

    &.feedback-wrong {
        color: #F04747;
    }
`;
