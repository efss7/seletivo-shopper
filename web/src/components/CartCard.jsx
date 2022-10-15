import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { State } from '../global/State';

export const CartCard = (props) => {
  const {
    cart,
    products,
    setCart,
    quantity,
    handleQuantity,
    clearInput,
    setProducts,
    calculeTotalPrice,
    calculeTotalQuantity,
  } = useContext(State);
  const removeItem = (product) => {
    const newCart = cart.filter((prod) => prod.id !== product.id);
    setCart(newCart);
    calculeTotalPrice(newCart);
    calculeTotalQuantity(newCart);
  };
  const openInput = (product) => {
    product.input = true;
    setCart(cart.map((prod) => (prod.id === product.id ? product : prod)));
  };
  const changeQuantity = (product) => {
    product.quantity = quantity;
    product.input = false;
    const newCart = cart.map((prod) =>
      prod.id === product.id ? product : prod
    );
    setCart(newCart);
    calculeTotalPrice(newCart);
    calculeTotalQuantity(newCart);
  };

  return (
    <>
      {cart.length > 0 &&
        cart.map((product) => {
          return (
            <Card
              key={product.id}
              sx={{
                display: { xs: 'flex', md: 'grid' },
                flexDirection: { xs: 'row', md: 'row' },
                margin: 1,
              }}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produto:
                </Typography>
                <Typography variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography color="textSecondary">
                  Quantidade selecionada: {product.quantity}
                </Typography>
                <Typography color="textSecondary">Preço:R$ {product.price}</Typography>
                <Box display="flex" justifyContent="space-between">
                  {product.input && (
                    <FormControl fullWidth variant="standard">
                      <InputLabel>Quantidade</InputLabel>
                      <Select
                        id="quantidade"
                        value={quantity}
                        label="Quantity"
                        onChange={handleQuantity}
                        placeholder="Selecione a quantidade desejada"
                      >
                        {Array.from(
                          { length: product.qty_stock },
                          (_, index) => index + 1
                        ).map((quantity) => {
                          return (
                            <MenuItem key={quantity} value={quantity}>
                              {quantity}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  )}
                  <IconButton
                    size="small"
                    onClick={() =>
                      product.input
                        ? changeQuantity(product)
                        : openInput(product)
                    }
                    color="primary"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    display="flex"
                    size="small"
                    onClick={() => removeItem(product)}
                    color="primary"
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};

export default CartCard;
