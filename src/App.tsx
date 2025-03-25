import {useState} from "react";
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import UserBar from "./components/UserBar";
import Header from "./components/Header.tsx";
import GameOver from "./components/GameOver.tsx";
import {GlobalStyles} from "./styles/GlobalStyles";
import {AppWrapper} from "./styles/AppWrapper";
import type {GameScreen} from "./types";

export default function App() {
    const [screen, setScreen] = useState<GameScreen>("home");
    const [username, setUsername] = useState<string | null>(null);
    const [score, setScore] = useState<number>(0);

    const restartGame = () => {
        setScore(0);
        setScreen("game");
    };

    return (
        <>
            <GlobalStyles/>
            <Header/>
            <AppWrapper>
                    {screen === "game" && <UserBar username={username} score={score}/>}
                    {screen === "home" && <Home setScreen={setScreen} setUsername={setUsername}/>}
                    {screen === "game" && <Game setScreen={setScreen} username={username} setScore={setScore}/>}
                    {screen === "gameover" && <GameOver
                        username={username}
                        score={score}
                        onRestart={restartGame}
                        setScreen={setScreen}
                    />}
                    {screen === "leaderboard" &&
                        <Leaderboard
                            setScreen={setScreen}
                            onRestart={restartGame}/>
                    }
            </AppWrapper>
        </>
    )
        ;
}