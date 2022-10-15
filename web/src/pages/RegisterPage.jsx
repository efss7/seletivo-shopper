import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Form } from '../components/Form';

const RegisterPage = () => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Shopper</Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Box padding={4}>
        <Form />
      </Box>
    </>
  );
};

export default RegisterPage;
