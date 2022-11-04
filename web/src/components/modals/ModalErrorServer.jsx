import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Logo from '../../assets/shopper-logo.png';
import { State } from '../../global/State';
import { ContainerModal, Content } from './styles';

export function ModalErrorServer() {
    const { setDisplayServerErrorModal, serverMessageError } = useContext(State);
    const twoFunctions = () => {
        setDisplayServerErrorModal(false)
    };
    return (
        <ContainerModal>
            <Content >
                <img width="300px" src={Logo} />
                <Typography color="error" variant="h6">
                    Infelizmente algo deu errado na compra... :-(
                </Typography>
                <Typography>
                    Erro no servidor!
                </Typography>
                <Typography padding={0}>
                    {serverMessageError}
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
