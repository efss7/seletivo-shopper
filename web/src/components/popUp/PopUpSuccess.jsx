import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ContainerPopUp, Content } from './styles';
import Logo from '../../assets/shopper-logo.png';
import { State } from '../../global/State';

export const PopUpSuccess = () => {
  const navigate = useNavigate();
  const { clearAllData, message } = useContext(State);
  const twoFunctions = () => {
    clearAllData()
    navigate('/home')
  };
  return (
    <ContainerPopUp>
      <Content>
        <img width="300px" src={Logo} />
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
    </ContainerPopUp>
  );
};

export default PopUpSuccess;
