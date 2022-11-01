import { ArrowForward } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/shopper-logo.png';
import { State } from '../../global/State';

export function RegisterForm() {
  const navigate = useNavigate()
  const { form, onChange } = useContext(State)
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" gap="1rem" mx="auto" padding={4} sx={{ maxWidth: "30rem", height: "calc(100vh - 15rem)" }}>
      <Box align="center"  >
        <img width="300px" src={Logo} alt='Logo Shopper' />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" gap="2rem" >
        <Box>
          <Typography variant="h6" color="secondary">Dê seu nome à sua lista:</Typography>
          <TextField
            name="name"
            value={form.name}
            onChange={onChange}
            label="Nome"
            variant="outlined"
            fullWidth
            placeholder="Ex: Ana, João..."
            required
            type="name"
          />
        </Box>
        <Box>
          <Typography variant="h6" color="secondary">Selecione a data de entrega:</Typography>
          <TextField
            name="date"
            value={form.date}
            onChange={onChange}
            label=""
            variant="outlined"
            fullWidth
            required
            type="date"
            min={new Date().toISOString().slice(0, 10)}
          />
          <Typography variant='subtitle2' >
            Obs: só serão válidas datas atuais e futuras
          </Typography>
        </Box>
        <Button
          sx={{ gap: 1}}
          fullWidth
          variant="contained"
          type="submit"
          onClick={() => navigate("/home")}
        >
          <b>
            Ir às compras
          </b>
          <ArrowForward />
        </Button>
      </Box>
    </Box>
  );
}
