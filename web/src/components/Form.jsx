import { Button, TextField, Typography, Box } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { ProductList } from '../services/Requests';
import Logo from '../assets/shopper-logo.png';
import { State } from '../global/State';

export const Form = () => {
  const navigate = useNavigate()
  const { form, onChange } = useContext(State)
  return (
    <>
      <Box align="center">
        <img width="300px" src={Logo} />
      </Box>

      <Typography variant="h6">Dê seu nome à sua lista:</Typography>
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
      <Typography variant="h6">Selecione a data de entrega:</Typography>
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
      <Button
        fullWidth
        variant="contained"
        color="primary"
        margin="normal"
        type="submit"
        onClick={() => navigate("/home")}
      >
        Ir às compras !!
      </Button>
    </>
  );
};

export default Form;
