import { AddShoppingCart, ShoppingCart, ShoppingCartCheckout } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductCard = (props) => {
  const navigate = useNavigate()
  const { products } = props;
  const { cart, setCart } = useContext(ProductContext);
  console.log(cart)

  function handleClick() {
    navigate(`/carrinho`);
  }
  const addProductToCart = (product) => {
    product.inCart = true
    product.qty_stock = {}
    setCart([...cart, product]);
  };
  const removeProductFromCart = (product) => { 
        product.inCart = false;
    

    setCart(cart.filter((prod) => prod.id !== product.id));
  };
  return (
    <>
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Produto:
              </Typography>
              <Typography variant="h6" component="h2" maxWidth="30%">
                {product.name}
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                Quantidade disponível: {product.qty_stock}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={() =>
                  product.inCart ? removeProductFromCart(product) : addProductToCart(product)
                }
                aria-label="add to cart"
              >
                <AddShoppingCart color={product.inCart ? `primary` : `disabled`} />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default ProductCard;
