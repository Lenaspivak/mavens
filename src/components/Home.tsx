import {useState} from "react";
import {
    FormWrapper,
    StyledBox,
    MainTitle,
    StyledInput,
    StyledButton,
    FormLabel,
    InnerWrapper,
} from "../styles/HomeStyles.ts";
import ArrowIcon from "../assets/ArrowIcon.tsx";

type HomeProps = {
    setScreen: (screen: "home" | "game" | "leaderboard") => void;
    setUsername: (username: string) => void;
};

const Home = ({setScreen, setUsername}: HomeProps) => {
    const [name, setName] = useState('');

    const createUser = async () => {
        const API_URL = "https://quicktap-backend-219181450324.us-central1.run.app/api/user";
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: name }),
        });

        const data = await response.json();
        console.log("Received user data:", data);

        if (data.userId) {
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("username", name);
            setUsername(name);
            setScreen("game");
        } else {
            console.error("User creation failed:", data);
            alert("Add Username")
        }
    };

    return (
        <FormWrapper>
            <MainTitle>Welcome to Mavens Game</MainTitle>
            <StyledBox>
                <FormLabel>Enter player name</FormLabel>
                <InnerWrapper>
                    <StyledInput
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <StyledButton onClick={createUser}>
                        <ArrowIcon/>
                        Start game</StyledButton>
                </InnerWrapper>
            </StyledBox>
        </FormWrapper>
    );
};

export default Home;