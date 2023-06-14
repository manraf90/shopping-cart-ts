import { CSSProperties } from 'react';
import HashLoader from 'react-spinners/HashLoader';

type Props = {
    loading: boolean;
};

const override: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

const Loader = ({ loading }: Props) => {
    return (
        <HashLoader
            color="#0a31a5"
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={override}
            size={70}
        />
    );
};

export default Loader;
