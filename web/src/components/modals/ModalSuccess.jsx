import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/shopper-logo.png';
import { State } from '../../global/State';
import { ContainerModal, Content } from './styles';

export function ModalSuccess() {
  const navigate = useNavigate();
  const { clearAllData } = useContext(State);
  const twoFunctions = () => {
    clearAllData()
    navigate('/home')
  };
  return (
    <ContainerModal>
      <Content>
        <img width="300px" src={Logo} alt='Shopper Logo' />
        <Typography color="primary" variant="h6">
          Compra realizada com sucesso!! :-)
        </Typography>
        <Box padding={5}>
          <Button
            variant="contained"
            color="primary"
            margin="normal"
            type="submit"
            onClick={() => twoFunctions()}
          >
            Continuar comprando
          </Button>
        </Box>
      </Content>
    </ContainerModal>
  );
}

