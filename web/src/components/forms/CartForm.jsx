import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { State } from '../../global/State';

export function CartForm() {
    const {
        form,
        onChange,
        totalPrice,
        totalQuantity,
        checkOrder
    } = useContext(State);
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" gap="1rem" mx="auto" padding={4} sx={{ maxWidth: "30rem", height: "calc(100vh - 20rem)" }}>
            <Typography color="primary" marginTop={2} align="center" variant="h4">
                Dados da compra
            </Typography>
                <Box display="flex" flexDirection="column" justifyContent="center" gap="2rem" >
                    <Box>

                    <Typography variant="h6" color="secondary">Nome do Cliente:</Typography>
                    <TextField
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        placeholder="Ex: Ana, João..."
                        required
                        type="name" />
                    </Box>
                    <Box>
                    <Typography variant="h6">Data de entrega:</Typography>
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
                        min={new Date().toISOString().slice(0, 10)} />
                    <Typography variant='subtitle2'>
                        Obs: só serão válidas datas atuais e futuras
                    </Typography>
                    </Box>
                    <Typography variant="h6">
                        Valor total da compra: R$ {totalPrice.toFixed(2).replace('.', ',')}
                    </Typography>
                    <Typography variant="h6">
                        Produtos comprados: {totalQuantity}
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => checkOrder()}
                    >
                        Finalizar Pedido
                    </Button>
                </Box>
        </Box>
    )
}

