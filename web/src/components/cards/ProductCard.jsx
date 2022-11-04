import { AddShoppingCart } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { State } from '../../global/State';

function ProductCard(props) {
  const { products } = props;
  const {
    cart,
    setCart,
    quantity,
    handleQuantity,
    clearInput,
    setProducts,
    calculeTotalPrice,
    calculeTotalQuantity,
    search
  } = useContext(State);
  const addProductToCart = (product) => {
    if (quantity > 0) {
      product.inCart = true;
      product.quantity = quantity;
      product.input = false;
      setCart([...cart, product]);
      clearInput();
      calculeTotalPrice([...cart, product]);
      calculeTotalQuantity([...cart, product]);
    } else {
      alert('Por favor, selecione uma quantidade!');
    }
  };
  const removeProductFromCart = (product) => {
    product.inCart = false;
    const newCart = cart.filter((prod) => prod.id !== product.id)
    setCart(newCart);
    calculeTotalPrice(newCart);
    calculeTotalQuantity(newCart);
  };

  const openInput = (product) => {
    const newProduct = products.map((prod) =>
      prod.id === product.id ? { ...prod, input: true } : prod
    );
    setProducts(newProduct);
  };

  return (
    <Grid container>
      {products
        .filter((product) =>
          product.name.toUpperCase().includes(search.toUpperCase())
        )
        .map((product) => (
          <Grid item xs={12} sm={6}>
            <Card
              key={product.id}
              sx={{margin: 1}}
              >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produto:
                </Typography>
                <Typography variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography color="textSecondary">Preço:</Typography>
                <Typography variant="h6">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </Typography>
                <Typography color="textSecondary">
                  Quantidade disponível:
                </Typography>
                <Typography variant="h6">
                  {product.qty_stock}
                </Typography>
              </CardContent>
              <CardActions>
                {product.input && (
                  <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-label">
                      Quantidade
                    </InputLabel>
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
                      ).map((quantity) => (
                          <MenuItem key={quantity} value={quantity}>
                            {quantity}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                )}
                <IconButton
                  onClick={() =>
                    product.inCart
                    ? removeProductFromCart(product)
                      : product.input
                      ? addProductToCart(product)
                      : openInput(product)
                    }
                    aria-label="add to cart"
                    >
                  <AddShoppingCart
                    color={product.inCart ? `primary` : `disabled`}
                    />
                </IconButton>
              </CardActions>
            </Card>
            </Grid>
          ))}
    </Grid>
  );
}

export default ProductCard;
