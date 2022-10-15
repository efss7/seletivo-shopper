import { ArrowBack } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  LinearProgress,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../components/CartCard';
import {PopUpError} from '../components/popUp/PopUpError';
import { PopUpSuccess } from '../components/popUp/PopUpSuccess';
import { State } from '../global/State';


export default function CartPage() {
  const navigate = useNavigate();
  const {
    form,
    onChange,
    totalPrice,
    totalQuantity,
    cart,
    isLoading,
    displaySuccessPopUp,
    displayErrorPopUp,
    checkOrder
  } = useContext(State);
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
        </Toolbar>
      </AppBar>
      {isLoading && <LinearProgress color="primary" />}
      <Typography color="primary " margin={2} align="center" variant="h4">
        Dados da compra
      </Typography>
      <Box margin={4}>
        <Typography variant="h6">Nome do Cliente:</Typography>
        <TextField
          name="name"
          value={form.name}
          onChange={onChange}
          label="Nome"
          variant="outlined"
          fullWidth
          placeholder="Ex: Ana, João..."
          margin="normal"
          required
          type="name"
        />
        <Typography variant="h6">Data de entrega:</Typography>
        <Typography color="textSecondary">
          Obs: só serão válidas datas atuais e futuras
        </Typography>
        <TextField
          name="date"
          value={form.date}
          onChange={onChange}
          label=""
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="date"
          min={new Date().toISOString().slice(0, 10)}
        />
        <Typography variant="h6">
          Valor total da compra: R$ {totalPrice}
        </Typography>
        <Typography variant="h6">
          Produtos comprados: {totalQuantity}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          type="submit"
          onClick={() => checkOrder()}
        >
          Finalizar Pedido
        </Button>
      </Box>
      {displaySuccessPopUp && <PopUpSuccess />}
      {displayErrorPopUp && <PopUpError />}

      <Box paddingTop="1px" bgcolor="black" />
      {cart.length === 0 && (
        <Box textAlign="center">
          <Typography margin={2} variant="h6">
            Você ainda não possui produtos no seu carrinho
          </Typography>
          <Typography color="textSecondary">
            Para adicionar volte para página anterior
          </Typography>
        </Box>
      )}
      <CartCard />
    </>
  );
}
