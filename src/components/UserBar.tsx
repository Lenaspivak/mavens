import { UserBarContainer, UserName, UserScore } from "../styles/UserBarStyles";

type UserBarProps = {
    username: string | null;
    score: number;
};

const UserBar = ({username, score}: UserBarProps) => (
    <UserBarContainer>
        <UserName>Player: {username || "Guest"}</UserName>
        <UserScore>Score: <strong>{score}</strong></UserScore>
    </UserBarContainer>
);

export default UserBar;
