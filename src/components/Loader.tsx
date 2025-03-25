import {LoaderWrapper, LoadingDots, Feedback} from "../styles/LoaderStyles.ts";

type LoaderProps = {
    message: string;
    loading: boolean;
};

const Loader = ({message, loading}: LoaderProps) => {
    return (
        <LoaderWrapper>
            {loading && (
                <>
                    <LoadingDots/>
                    <Feedback>{message}</Feedback>
                </>
            )}
        </LoaderWrapper>
    );
};

export default Loader;

