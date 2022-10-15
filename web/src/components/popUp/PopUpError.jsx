import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ContainerPopUp, Content } from './styles';
import Logo from '../../assets/shopper-logo.png';
import { State } from '../../global/State';

export const PopUpError = () => {
  const navigate = useNavigate();
  const { clearAllData, setDisplayErrorPopUp } = useContext(State);
  const twoFunctions = () => {
    setDisplayErrorPopUp(false)
  };
  return (
    <ContainerPopUp>
      <Content >
        <img width="300px" src={Logo} />
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
    </ContainerPopUp>
  );
};

export default PopUpError;
