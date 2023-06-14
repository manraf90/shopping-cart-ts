import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProductListPage from './pages/ProductsListPage/ProductListPage';

import './App.scss';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/store" element={<ProductListPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
