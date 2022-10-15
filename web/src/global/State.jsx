import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useInput } from '../hooks/useInput';
import { ProductList } from '../services/Requests';

export const State = React.createContext();

export function GlobalState(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [quantity, handleQuantity, clearInput] = useInput('');
  const { form, onChange, clear } = useForm({
    name: '',
    date: '',
  });
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [displaySuccessPopUp, setDisplaySuccessPopUp] = useState(false);
  const [displayErrorPopUp, setDisplayErrorPopUp] = useState(false);
  const [search, handleSearch, clearSearch] = useInput('');

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
  const finalizeOrder = () => {
    const newOrder = {
      name: form.name,
      dlr_date: form.date,
      products_id: cart.map((product) => product.id),
      product_qty: cart.map((product) => product.quantity),
    };
    ProductList(newOrder, setIsLoading, setDisplaySuccessPopUp);
  };

  const checkDeliveryDataHasPassed = (deliveryData) => {
    return (
      new Date(deliveryData).getTime() >=
      new Date(new Date().toISOString().slice(0, 10)).getTime()
    );
  };

  const checkOrder = () => {
    const isOk =
      form.name &&
      form.date &&
      checkDeliveryDataHasPassed(form.date) &&
      cart.length > 0;
    isOk ? finalizeOrder() : setDisplayErrorPopUp(true);
  };

  const clearAllData = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    clear();
    setDisplaySuccessPopUp(false);
  };

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
    form,
    onChange,
    clear,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
    setTotalPrice,
    calculeTotalPrice,
    calculeTotalQuantity,
    finalizeOrder,
    displaySuccessPopUp,
    setDisplaySuccessPopUp,
    clearAllData,
    displayErrorPopUp,
    setDisplayErrorPopUp,
    checkOrder,
    search,
    handleSearch,
    clearSearch,
  };

  return <State.Provider value={params}>{props.children}</State.Provider>;
}
