import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Logo from '../../assets/shopper-logo.png';
import { State } from '../../global/State';
import { ContainerModal, Content } from './styles';

export function ModalError() {
  const { setDisplayErrorModal } = useContext(State);
  const twoFunctions = () => {
    setDisplayErrorModal(false)
  };
  return (
    <ContainerModal>
      <Content >
        <img width="300px" src={Logo} alt='Logo Shopper' />
        <Typography color="error" variant="h6">
          Infelizmente algo deu errado na compra... :-(
        </Typography>
        <Typography>
          Verifique se o seu <b>carrinho</b> não está vazio
        </Typography>
        <Typography padding={0}>
          ou se passou as informações corretas
        </Typography>
        <Box padding={5}>
          <Button
            variant="contained"
            color="primary"
            margin="normal"
            type="submit"
            onClick={() => twoFunctions()}
          >
            Tentar novamente
          </Button>
        </Box>
      </Content>
    </ContainerModal>
  );
}