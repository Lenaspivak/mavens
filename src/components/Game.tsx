import {useState, useEffect, useRef, useCallback} from "react";
import Loader from "./Loader.tsx";
import type { GameScreen } from "../types";
import {GameWrapper, Shape, ShapeWrapper} from "../styles/GameStyles.ts";

type GameProps = {
    setScreen: React.Dispatch<React.SetStateAction<GameScreen>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    username: string | null;
};

const Game = ({setScreen, setScore}: GameProps) => {
    const [gameState, setGameState] = useState("waiting");
    const [position, setPosition] = useState<"left" | "right" | null>(null);
    const [message, setMessage] = useState("");
    const timeoutRef = useRef<number | null>(null);
    const positionRef = useRef<"left" | "right" | null>(null);
    const gameStateRef = useRef(gameState);

    useEffect(() => {
        gameStateRef.current = gameState;
    }, [gameState]);

    const handleTooSoon = useCallback(() => {
        if (gameStateRef.current === "waiting") {
            setMessage("Too Soon!");
            setGameState("feedback");
            setTimeout(() => {
                handleGameOver();
            }, 1000);
        }
    }, []);

    const handleTooLate = useCallback(() => {
        if (gameStateRef.current === "showing") {
            setMessage("Too Late!");
            setGameState("feedback");
            setTimeout(() => {
                handleGameOver();
            }, 1000);
        }
    }, []);

    useEffect(() => {
        if (gameState === "idle") {
            setGameState("waiting");
        }

        if (gameState === "waiting") {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = null;

            const delay = Math.random() * (5000 - 2000) + 2000;
            timeoutRef.current = window.setTimeout(() => {
                const newPosition = Math.random() < 0.5 ? "left" : "right";
                setPosition(newPosition);
                positionRef.current = newPosition;
                setGameState("showing");

                window.addEventListener("keydown", handleTooSoon);

                const lateTimeout = window.setTimeout(handleTooLate, 1000);
                return () => {
                    clearTimeout(lateTimeout);
                    window.removeEventListener("keydown", handleTooSoon);
                };
            }, delay);
        }

        if (gameState === "feedback") {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setPosition(null);
        }
    }, [gameState, handleTooSoon, handleTooLate]);

    useEffect(() => {
        positionRef.current = position;
    }, [position]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (gameState !== "showing" || positionRef.current === null) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        console.log("Pressed:", event.key, "Position:", positionRef.current);
        if ((event.key === "a" || event.key === "ש") && positionRef.current === "left" || (event.key === "d" || event.key === "ג") && positionRef.current === "right") {
            setMessage("Correct!");
            setScore(prev => prev + 10);
            setPosition(null);
            setGameState("waiting");
        } else {
            setMessage("Wrong key!");
            setGameState("feedback");
            setTimeout(() => {
                handleGameOver();
            }, 1000);
        }
    }, [gameState]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);

    async function handleGameOver() {
        const userId = localStorage.getItem("userId");
        const currentScore = parseInt(localStorage.getItem("score") || "0", 10);

        if (userId) {
            try {
                const response = await fetch("https://quicktap-backend-219181450324.us-central1.run.app/api/saveScore", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({userId, score: currentScore}),
                });
                const result = await response.json();
                console.log("Score saved:", result);
            } catch (err) {
                console.error("Error saving score:", err);
            }
        }

        setTimeout(() => {
            setScreen("gameover");
        }, 2000);
    }

    return (
        <GameWrapper>
            <h1>{gameState === "waiting" ? "" : ""}</h1>
            {gameState === "showing" && (
                <ShapeWrapper style={{justifyContent: position === "left" ? "left" : "right"}}><Shape/></ShapeWrapper>
            )}
            <Loader
                message={message}
                loading={gameState === "waiting" || gameState === "feedback"}
                status={
                    message === "Correct!" ? "correct" :
                    message === "Wrong key!" || message === "Too Soon!" || message === "Too Late!" ? "wrong" :
                    null
                }
            />
        </GameWrapper>
    );
};
export default Game;