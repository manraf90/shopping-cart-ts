import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
    return (
        <section className="header_wrapper">
            <header className="header">
                <div className="header-nav_wrapper">
                    <nav className="header-nav">
                        <div className="header-link_wrapper">
                            <NavLink to="/">Strona główna</NavLink>
                            <NavLink to="/store">Sklep</NavLink>
                            <NavLink to="/contact">Kontakt</NavLink>
                        </div>
                        <button className="header-shopping_cart">
                            <FaShoppingCart />
                            <div className="header-qty">3</div>
                        </button>
                    </nav>
                </div>
            </header>
        </section>
    );
};

export default Header;
