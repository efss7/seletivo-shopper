import { LinearProgress } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import ProductCard from '../components/cards/ProductCard';
import { HomeHeader } from '../components/headers/HomeHeader';
import SearchBar from '../components/SearchBar';
import { State } from '../global/State';
import { FindAll } from '../services/Requests';

export function FeedPage() {
  const { setProducts, products, isLoading, setIsLoading } =
    useContext(State);

  useEffect(() => {
    FindAll(setProducts, setIsLoading);
  }, [setProducts]);
  
  return (
    <>
      <HomeHeader />
      {isLoading ? (
        <LinearProgress color="primary" />
      ) : (
        <>
          <SearchBar />
          {products.length > 0 && <ProductCard products={products} />}
        </>
      )}
    </>
  );
}

export default FeedPage;
