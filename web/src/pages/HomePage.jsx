import { ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  Pagination,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopUp } from '../components/popUp/PopUp';
import ProductCard from '../components/ProductCard';
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
      <PopUp />
      <AppBar position="static" color="primary">
        <Toolbar>
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
              <Badge badgeContent={cartProduct} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isLoading ? (
        <LinearProgress color="primary" />
      ) : (
        <>{products.length > 0 && <ProductCard products={products} />}</>
      )}

      {/* <Pagination
        page={page}
        count={Math.ceil(50 / 5)}
        onChange={(_, newPage) =>
          setSearchParams(
            { products, page: newPage.toString() },
            { replace: true }
          )
        }
      /> */}
    </>
  );
};

export default FeedPage;
