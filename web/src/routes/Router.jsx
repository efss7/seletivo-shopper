import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';



export function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
