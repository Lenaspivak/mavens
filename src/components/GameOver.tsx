import {
    Wrapper,
    TopGameOver,
    ContentGameOver,
    Title,
    FinalScore,
    ButtonsWrapper,
    AgainButton,
    LeaderButton
} from "../styles/GameOverStyles.ts"

import type {GameScreen} from "../types";

type GameOverProps = {
    username: string | null;
    score: number;
    onRestart: () => void;
    setScreen: React.Dispatch<React.SetStateAction<GameScreen>>;
};

const GameOver = ({username, score, onRestart, setScreen}: GameOverProps) => {
    return (
        <Wrapper>
            <TopGameOver>User: {username}</TopGameOver>
            <ContentGameOver>
                <div>
                    <Title>Game Over</Title>
                    <FinalScore>Your Score: {score}</FinalScore>
                    <ButtonsWrapper>
                        <AgainButton onClick={onRestart}>Play Again</AgainButton>
                        <LeaderButton onClick={() => setScreen("leaderboard")}>LeaderBoard</LeaderButton>
                    </ButtonsWrapper>
                </div>
            </ContentGameOver>
        </Wrapper>
    );
};

export default GameOver;
