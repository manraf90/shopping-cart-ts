import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/ButtonBase/ButtonBase';
import img2 from '../../assets/img2.jpg';

import './DinnerPage.scss';

const DinnerPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="dinner_page">
            <h2>Po trzecie ... na prawie sam koniec 🙂</h2>
            <p className="description">
                Po relaksie i odpoczynku zapraszam na wieczorną kolację przy
                lapmce wina oraz przepysznym menu.
            </p>
            <img src={img2} alt="img2" />
            <h2 className="summary">
                Mam nadzieję, że będzie smakowało! Enjoy!
            </h2>
            <div className="dinner_page-button_wrapper">
                <ButtonBase label="Wróć" onClick={() => navigate(`/contact`)} />
                <ButtonBase
                    label="Koniec"
                    onClick={() => navigate(`/last-gift`)}
                />
            </div>
        </div>
    );
};

export default DinnerPage;
