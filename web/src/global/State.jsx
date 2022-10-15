import { PriceChange } from '@mui/icons-material';
import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useInput } from '../hooks/useInput';
import { ProductList } from '../services/Requests';

export const State = React.createContext();

export function GlobalState(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [quantity, handleQuantity, clearInput] = useInput('');
  const { form, onChange, clear } = useForm({
    name: '',
    date: '',
  });
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculeTotalPrice = (newCart) => {
    const price = newCart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalPrice(price);
  };
  const calculeTotalQuantity = (newCart) => {
    const quantityPurchased = newCart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setTotalQuantity(quantityPurchased);
  };
  const finalizeOrder=()=>{
    const newOrder = {
      name:form.name,
      dlr_date:form.date,
      products_id: cart.map((product)=> product.id),
      product_qty: cart.map((product)=> product.quantity)
    }
    ProductList(newOrder)
    console.log(newOrder)
  }

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
    setDate,
    form,
    onChange,
    clear,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
    setTotalPrice,
    calculeTotalPrice,
    calculeTotalQuantity,
    finalizeOrder
  };

  return <State.Provider value={params}>{props.children}</State.Provider>;
}
