import './ButtonBase.scss';

type Props = {
    onClick?: () => void;
    label: string;
    mods?: string;
};

const ButtonBase = ({ onClick, label, mods }: Props) => {
    const isMods = mods ? `-${mods}` : '';

    return (
        <button className={`button${isMods}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default ButtonBase;
