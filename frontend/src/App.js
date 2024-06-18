import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store/index';
import Header from '../src/components/shared/Header';
import Views from './views/index';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/*" element={<Views />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
