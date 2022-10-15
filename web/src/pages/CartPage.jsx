import { ArrowBack } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCard } from '../components/CartCard';
import { State } from '../global/State';

export default function CartPage() {
  const navigate = useNavigate();
  const {
    form,
    onChange,
    totalPrice,
    totalQuantity,
    calculeTotalPrice,
    calculeTotalQuantity,
    finalizeOrder
  } = useContext(State);
  console.log(form.date, form.name);
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
        <Typography variant="h6">Produtos comprados: {totalQuantity}</Typography>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          type="submit"
          onClick={() => finalizeOrder()}
        >
          Finalizar Pedido
        </Button>
      </Box>
      <Box paddingTop="1px" bgcolor="black" />
      <CartCard />
    </>
  );
}
