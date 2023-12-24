import { useNavigate } from 'react-router-dom';
import img3 from '../../assets/img3.jpg';
import ButtonBase from '../../components/ButtonBase/ButtonBase';

import './FirstGiftPage.scss';

const FirstGiftPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="first_gift_page">
            <h1>No to zaczynamy! Po pierwsze...</h1>
            <h2>
                Zapraszam Cię na jednodniowy pobyt w hotelu - przewidziane są
                również atrakcje! Kontynuuj i sama zobacz!
            </h2>
            <img src={img3} alt="img3" />
            <p>Termin do uzgodnienia.</p>
            <div className="first_gift_page-button_wrapper">
                <ButtonBase label="Wróć" onClick={() => navigate(`/`)} />
                <ButtonBase
                    label="Przejdź dalej"
                    onClick={() => navigate(`/contact`)}
                />
            </div>
        </div>
    );
};

export default FirstGiftPage;
