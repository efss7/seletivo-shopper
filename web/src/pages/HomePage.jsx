import { ShoppingCart } from '@mui/icons-material';
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
import { ProductContext } from '../context/ProductContext';
import { FindAll } from '../services/Requests';

export const FeedPage = () => {
  const { setProducts, products } = useContext(ProductContext);
  useEffect(() => {
    FindAll(setProducts);
  }, [setProducts]);
  const navigate = useNavigate();
  return (
    <>
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
              <Badge>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
        <LinearProgress color="primary" />
      </AppBar>
      {products.length > 0 && <ProductCard products={products} />}
    </>
  );
};

export default FeedPage;
