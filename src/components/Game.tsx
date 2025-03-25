import { useState, useEffect, useRef, useCallback } from "react";
import Loader from "./Loader.tsx";
import type { GameScreen } from "../types";
import { GameWrapper, GameInnerStyle, Shape, ShapeWrapper, TimeOutBar } from "../styles/GameStyles.ts";

type GameProps = {
    setScreen: React.Dispatch<React.SetStateAction<GameScreen>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    username: string | null;
};

const Game = ({ setScreen, setScore }: GameProps) => {
    const [gameState, setGameState] = useState("waiting");
    const [position, setPosition] = useState<"left" | "right" | null>(null);
    const [message, setMessage] = useState("");
    const timeoutRef = useRef<number | null>(null);
    const positionRef = useRef<"left" | "right" | null>(null);
    const gameStateRef = useRef(gameState);

    useEffect(() => {
        gameStateRef.current = gameState;
    }, [gameState]);

    // Handle early key press detection
    const handleEarlyPress = () => {
        if (gameStateRef.current === "waiting") {
            setMessage("Too Soon!");
            setGameState("feedback");
            setTimeout(handleGameOver, 1000);
        }
    };

    // Start the reaction window
    const startReactionWindow = () => {
        const newPosition = Math.random() < 0.5 ? "left" : "right";
        setPosition(newPosition);
        positionRef.current = newPosition;
        setGameState("showing");

        timeoutRef.current = window.setTimeout(() => {
            if (gameStateRef.current === "showing") {
                setMessage("Too Late!");
                setGameState("feedback");
                setTimeout(handleGameOver, 1010);
            }
        }, 1000);
    };

    useEffect(() => {
        if (gameState === "idle") {
            setGameState("waiting");
        }

        if (gameState === "waiting") {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            const delay = Math.random() * (5000 - 2000) + 2000;
            window.addEventListener("keydown", handleEarlyPress);

            timeoutRef.current = window.setTimeout(() => {
                window.removeEventListener("keydown", handleEarlyPress);
                startReactionWindow();
            }, delay);
        }

        if (gameState === "feedback") {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setPosition(null);
        }
    }, [gameState]);

    useEffect(() => {
        positionRef.current = position;
    }, [position]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (gameState !== "showing" || positionRef.current === null) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if ((event.key === "a" && positionRef.current === "left") || (event.key === "d" && positionRef.current === "right")) {
            setMessage("Correct!");
            setScore((prev) => prev + 10);
            setPosition(null);
            setGameState("waiting");
        } else {
            setMessage("Wrong key!");
            setGameState("feedback");
            setTimeout(handleGameOver, 2010);
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
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId, score: currentScore }),
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
                <GameInnerStyle>
                    <TimeOutBar>
                        <div />
                    </TimeOutBar>
                    <ShapeWrapper style={{ justifyContent: position === "left" ? "left" : "right" }}>
                        <Shape />
                    </ShapeWrapper>
                </GameInnerStyle>
            )}
            <Loader message={message} loading={gameState === "waiting" || gameState === "feedback"} />
        </GameWrapper>
    );
};

export default Game;