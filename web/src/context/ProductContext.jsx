import React, { useState } from 'react';

export const ProductContext = React.createContext();

export function GlobalState(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])


  const params = {
    products,
    setProducts,
    cart,
    setCart
  };

  return (
    <ProductContext.Provider value={params}>
      {props.children}
    </ProductContext.Provider>
  );
}
