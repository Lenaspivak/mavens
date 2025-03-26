import styled, {keyframes} from "styled-components";

// 🌀 Animation

export const dots = keyframes`
    33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
    50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
    66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
`

export const LoaderWrapper = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const LoadingDots = styled.div`
    width: 60px;
    aspect-ratio: 4;
    --_g: no-repeat radial-gradient(circle closest-side,#8CD9DA 90%,#0000);
    background:
            no-repeat radial-gradient(circle closest-side, #E6D4DC 90%, #0000) 0%   50%,
            no-repeat radial-gradient(circle closest-side, #8CD9DA 90%, #0000) 50%  50%,
            no-repeat radial-gradient(circle closest-side, #E6D4DC 90%, #0000) 100% 50%;
    background-size: calc(100%/3) 100%;
    animation: ${dots} 1s infinite linear;
    
`;

export const Feedback = styled.div`
    position: absolute;
    bottom: 10px;
    width: 50%;
    background-color: #fff;
    text-align: center;
    font-size: 20px;
    padding: 10px 20px;
    font-weight: 500;

`;
