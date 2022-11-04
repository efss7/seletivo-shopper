import {
  Box,
  LinearProgress,
  Typography
} from '@mui/material';
import React, { useContext } from 'react';
import CartCard from '../components/cards/CartCard';
import { CartForm } from '../components/forms/CartForm';
import { CartHeader } from '../components/headers/CartHeader';
import { ModalError } from '../components/modals/ModalError';
import { ModalErrorServer } from '../components/modals/ModalErrorServer';
import { ModalSuccess } from '../components/modals/ModalSuccess';
import { State } from '../global/State';


export default function CartPage() {
  const {
    cart,
    isLoading,
    displaySuccessModal,
    displayErrorModal,
    displayServerErrorModal,
  } = useContext(State);
  return (
    <>
      <CartHeader />
      {isLoading && <LinearProgress color="primary" />}
      <CartForm />
      {displaySuccessModal && <ModalSuccess />}
      {displayErrorModal && <ModalError />}
      {displayServerErrorModal && <ModalErrorServer />}
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
