import {useState, useEffect} from "react";
import type {GameScreen} from "../types";
import ArrowIcon from "../assets/ArrowIcon.tsx"
import {
    LeaderTitle,
    LeaderboardWrapper,
    StyledTableContainer,
    StyledTableRowBody,
    StyledTableRow,
    StyledTableCellHead,
    StyledTableCell,
    StyledAgainButton
} from "../styles/LeaderBoardStyles.ts";

type LeaderboardUser = {
    userId: string;
    username: string;
    score: number;
};

type LeaderboardProps = {
    setScreen: React.Dispatch<React.SetStateAction<GameScreen>>;
    onRestart: () => void;
};

function formatRank(n: number): string {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return `${n}${suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]}`;
}

const Leaderboard = ({setScreen}: LeaderboardProps) => {
    const [users, setUsers] = useState<LeaderboardUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const API_URL = "https://quicktap-backend-219181450324.us-central1.run.app/api/leaderboard";
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("API Response:", data);

                if (data.leaderboards && Array.isArray(data.leaderboards)) {
                    setUsers(data.leaderboards.sort((a: LeaderboardUser, b: LeaderboardUser) => b.score - a.score));
                } else {
                    throw new Error("Invalid API response format");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <LeaderboardWrapper>
            <LeaderTitle>HIGHSCORES TABLE</LeaderTitle>
            <StyledTableContainer>
                <thead>
                <StyledTableRow>
                    <StyledTableCellHead>POS</StyledTableCellHead>
                    <StyledTableCellHead>Player name</StyledTableCellHead>
                    <StyledTableCellHead>Score</StyledTableCellHead>
                </StyledTableRow>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <StyledTableRowBody key={user.userId || index}>
                        <StyledTableCell>{formatRank(index + 1)}</StyledTableCell>
                        <StyledTableCell>{user.username}</StyledTableCell>
                        <StyledTableCell>{user.score}</StyledTableCell>
                    </StyledTableRowBody>
                ))}
                </tbody>
            </StyledTableContainer>

            <StyledAgainButton onClick={() => setScreen("game")}>
                <ArrowIcon/>
                Play Again</StyledAgainButton>
        </LeaderboardWrapper>
    );
};

export default Leaderboard;
