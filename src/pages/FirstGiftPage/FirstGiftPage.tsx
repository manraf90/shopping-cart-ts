import paris from '../../assets/paris.jpg';
import parisDescription from '../../assets/paris_description.jpg';

import './FirstGiftPage.scss';

const FirstGiftPage: React.FC = () => {
    return (
        <div className="first_gift_page">
            <h1>Merry Christmas !!! :)</h1>
            <img src={paris} alt="paris" />
            <img src={parisDescription} alt="paris-description" />
            {/* <div className="first_gift_page-button_wrapper">
                <ButtonBase label="Wróć" onClick={() => navigate(`/`)} />
                <ButtonBase
                    label="Przejdź dalej"
                    onClick={() => navigate(`/contact`)}
                />
            </div> */}
        </div>
    );
};

export default FirstGiftPage;
