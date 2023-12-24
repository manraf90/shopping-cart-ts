import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/ButtonBase/ButtonBase';
import img4 from '../../assets/img4.jpg';

import './LastGiftPage.scss';

const LastGiftPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="last_gift_page">
            <h2>Na sam koniec... Wspomnienie</h2>
            <img src={img4} alt="img4" />
            <h3>Mam nadzieję, że się podobało, kocham Cię ❤️</h3>
            <div className="last_gift_page-button_wrapper">
                <ButtonBase label="Wróć" onClick={() => navigate(`/dinner`)} />
                <ButtonBase
                    label="Do strony głównej"
                    onClick={() => navigate(`/`)}
                />
            </div>
        </div>
    );
};

export default LastGiftPage;
