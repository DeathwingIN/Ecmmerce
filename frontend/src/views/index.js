import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Landing from './Landing';
import Cart from './Cart';
import Category from './Category';
import NotFound from './Error';
import Product from './Product';

const Views = () => {
    return (
        <div className="container my-5">
            <Routes>
                <Route
                    path="/"
                    element={<Landing title="Landing Page"/>}
                />
                <Route
                    path="/cart"
                    element={<Cart title="Cart"/>}
                />
                <Route
                    path="*"
                    element={<NotFound title="NotFound"/>}
                />
                <Route
                    path="/product/:id"
                    element={<Product title="Product"/>}
                />
                <Route
                    path="/category/:id"
                    element={<Category title="Category"/>}
                />
            </Routes>
        </div>
    );
}

export default Views;
