import { Routes, Route } from 'react-router-dom';

import ContactPage from './pages/ContactPage/ContactPage';
// import ProductListPage from './pages/ProductsListPage/ProductListPage';
import DinnerPage from './pages/DinnerPage/DinnerPage';
import LastGiftPage from './pages/LastGiftPage/LastGiftPage';
import FirstGiftPage from './pages/FirstGiftPage/FirstGiftPage';

import './App.scss';

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="/" element={<FirstGiftPage />} />
                    {/* <Route path="/store" element={<ProductListPage />} /> */}
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/dinner" element={<DinnerPage />} />
                    <Route path="/last-gift" element={<LastGiftPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
