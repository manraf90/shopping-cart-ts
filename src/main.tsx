import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './app/store';
// import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
            <App />
        </BrowserRouter>
        {/* </Provider> */}
    </React.StrictMode>
);
