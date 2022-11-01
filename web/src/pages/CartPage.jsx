import {
  Box,
  LinearProgress,
  Typography
} from '@mui/material';
import React, { useContext } from 'react';
import { CartCard } from '../components/CartCard';
import { CartForm } from '../components/forms/CartForm';
import { CartHeader } from '../components/headers/CartHeader';
import { PopUpError } from '../components/popUp/PopUpError';
import { PopUpErrorServer } from '../components/popUp/PopUpErroServer';
import { PopUpSuccess } from '../components/popUp/PopUpSuccess';
import { State } from '../global/State';


export default function CartPage() {
  const {
    cart,
    isLoading,
    displaySuccessPopUp,
    displayErrorPopUp,
    displayServerErrorPopUp,
  } = useContext(State);
  return (
    <>
      <CartHeader />
      {isLoading && <LinearProgress color="primary" />}
      <CartForm />
      {displaySuccessPopUp && <PopUpSuccess />}
      {displayErrorPopUp && <PopUpError />}
      {displayServerErrorPopUp && <PopUpErrorServer />}
      <Box margin={2} paddingTop="1px" bgcolor="black" />
      {cart.length === 0 && (
      <Box sx={{display:"flex", flexDirection:"column", gap: "2rem", textAlign: 'center' }}>
          <Typography variant="h6">
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
