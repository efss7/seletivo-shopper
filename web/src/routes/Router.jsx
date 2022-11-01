import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';



export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
