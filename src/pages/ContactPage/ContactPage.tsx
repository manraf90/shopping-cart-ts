import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/img1.jpg';
import ButtonBase from '../../components/ButtonBase/ButtonBase';

import './ContactPage.scss';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="contact_page">
            <h2>Po drugie ...</h2>
            <p>
                Wiem, że ostatnio jesteś przemęczona, więc przyda się mały
                relaks.
            </p>
            <img src={img1} alt="img1" />
            <h3>
                Terapia z kozim mlekiem i liczi. Przyjemny, luksusowy zabieg
                zapewnia natychmiastowe uczucie ukojenia, nawilżenia i
                długotrwałego komfortu.
            </h3>
            <div className="contact_page-list_wrapper">
                <h3>PAKIET UKOJENIE I REGENERACJA zawiera:</h3>
                <ul>
                    <li>Delikatny mleczny peeling cukrowy całego ciała</li>
                    <li>Odżywczo - nawilżająca kremowa maska na ciało</li>
                    <li>
                        Nawilżający masaż na odżywczym maśle z mlekiem i liczi
                    </li>
                    <li>Nieograniczony dostęp do strefy wellness & fitness</li>
                </ul>
            </div>
            <div className="contact_page-button_wrapper">
                <ButtonBase
                    label="Wróć"
                    onClick={() => navigate(`/first-gift`)}
                />
                <ButtonBase
                    label="Przejdź dalej"
                    onClick={() => navigate(`/dinner`)}
                />
            </div>
        </div>
    );
};

export default ContactPage;
