import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { State } from '../../global/State';

export function HomeHeader() {
    const { cart } = useContext(State);
    const navigate = useNavigate();

    const cartProduct = cart.length;
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    onClick={() => navigate(-1)}
                    color="inherit"
                >
                    <ArrowBack />
                </IconButton>
                <Typography variant="h6">Shopper</Typography>
                <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-haspopup="true"
                        onClick={() => navigate('/cart')}
                        color="inherit"
                    >
                        <Badge badgeContent={cartProduct} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
            </Toolbar>
        </AppBar>
    )
}
