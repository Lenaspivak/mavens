import {LoaderWrapper, Spinner, Feedback} from "../styles/LoaderStyles.ts";

type LoaderProps = {
    message: string;
    loading: boolean;
};

const Loader = ({message, loading}: LoaderProps) => {
    return (
        <LoaderWrapper>
            {loading && (
                <>
                    <Spinner/>
                    <Feedback>{message}</Feedback>
                </>
            )}
        </LoaderWrapper>
    );
};

export default Loader;

