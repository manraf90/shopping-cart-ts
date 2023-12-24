import ButtonBase from '../../components/ButtonBase/ButtonBase';
import { useNavigate } from 'react-router-dom';

import './Homepage.scss';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const goToGiftHandler = () => {
        navigate(`/first-gift`);
    };

    return (
        <div className="HomePage">
            <h1>Witaj skarbie!</h1>
            <h2>
                Życzę Wesołych Świąt i wszystkiego co najlepsze dla Ciebie,
                przede wszystkim spokoju, cierpliwośći, radości, wiele uśmiechu
                oraz okazywanej życzliwości 🙂
            </h2>
            <p>
                Mimo, że czasem ciężkie życia ze mną, pamiętaj, iż bardzo Cię
                kocham i chcę jak najlepiej, mimo, że nie zawsze niestety to
                jest widoczne.
            </p>
            <p>
                Zatem z okazji naszych 15-tych wspólnych Świąt, przygotowałem
                dla Ciebie prezent, więc proszę kliknij w przycisk poniżej, aby
                rozpocząć.
            </p>
            <ButtonBase label="Odbierz prezent" onClick={goToGiftHandler} />
        </div>
    );
};

export default HomePage;
