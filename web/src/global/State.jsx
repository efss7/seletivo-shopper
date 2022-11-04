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
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);
  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [displayServerErrorModal, setDisplayServerErrorModal] = useState(false);
  const [search, handleSearch, clearSearch] = useInput('');
  const [serverMessageError, setServerMessageError] = useState("");

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
      total_price: totalPrice
    };
    ProductList(newOrder, setIsLoading, setDisplaySuccessModal, setDisplayServerErrorModal, setServerMessageError);
  };

  const checkDeliveryDataHasPassed = (deliveryData) => (
      new Date(deliveryData).getTime() >=
      new Date(new Date().toISOString().slice(0, 10)).getTime()
    );

  const checkOrder = () => {
    const isOk =
      form.name &&
      form.date &&
      checkDeliveryDataHasPassed(form.date) &&
      cart.length > 0;
    isOk ? finalizeOrder() : setDisplayErrorModal(true);
  };

  const clearAllData = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    clear();
    setDisplaySuccessModal(false);
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
    displaySuccessModal,
    setDisplaySuccessModal,
    clearAllData,
    displayErrorModal,
    setDisplayErrorModal,
    checkOrder,
    search,
    handleSearch,
    clearSearch,
    displayServerErrorModal,
    setDisplayServerErrorModal,
    serverMessageError,
    setServerMessageError 
  };

  return <State.Provider value={params}>{props.children}</State.Provider>;
}
