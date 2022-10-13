import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';

export const State = React.createContext();

export function GlobalState(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')  
  const [ quantity ,handleQuantity, clearInput] = useInput('');


  const params = {
    products,
    setProducts,
    cart,
    setCart,
    quantity,
    handleQuantity,
    clearInput,
    isLoading,
    setIsLoading,
    name,
    setName,
    date,
    setDate
  };

  return (
    <State.Provider value={params}>
      {props.children}
    </State.Provider>
  );
}
