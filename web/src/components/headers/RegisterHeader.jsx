import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export function RegisterHeader() {
  return (
      <AppBar position="static" >
          <Toolbar>
              <Typography variant="h6">Shopper</Typography>
          </Toolbar>
      </AppBar>
  )
}
