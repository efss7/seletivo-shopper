import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { State } from '../global/State';
import { FindAll } from '../services/Requests';

export const FeedPage = () => {
  const { setProducts, products, cart, isLoading, setIsLoading } =
    useContext(State);

  useEffect(() => {
    FindAll(setProducts, setIsLoading);
  }, [setProducts]);

  const navigate = useNavigate();

  const cartProduct = cart.length;

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={() => navigate(-1)}
            color="inherit"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Shopper</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={() => navigate('/carrinho')}
              color="inherit"
            >
              <Badge badgeContent={cartProduct} color="neutralColor">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <LinearProgress color="primary" />
      ) : (
        <>
          <SearchBar  />
          {products.length > 0 && <ProductCard products={products} />}
        </>
      )}
    </>
  );
};

export default FeedPage;
