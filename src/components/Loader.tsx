import {LoaderWrapper, Spinner, Feedback} from "../styles/LoaderStyles.ts";
import CorrectIcon from "../assets/CorrectIcon";
import WrongIcon from "../assets/WrongIcon";

type LoaderProps = {
    message: string;
    loading: boolean;
    status?: "correct" | "wrong" | null;
};


const Loader = ({message, loading, status}: LoaderProps) => {
    const Icon =
        status === "correct"
            ? <CorrectIcon />
            : status === "wrong"
                ? <WrongIcon />
                : null;
    return (
        <LoaderWrapper>
            {loading && (
                <>
                    <Spinner />
                    {message &&
                        <Feedback className={status ? `feedback-${status}` : ""}>
                            {Icon}
                            <span>{message}</span>
                        </Feedback>
                    }
                </>
            )}
        </LoaderWrapper>
    );
};

export default Loader;
