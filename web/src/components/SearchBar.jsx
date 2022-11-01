import { Search } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { State } from '../global/State';

function SearchBar() {
    const { search, handleSearch } = useContext(State);
  return (
    <Box display="flex" alignItems="center" sx={{margin: 2}}>
      <TextField
        sx={{bgcolor: 'white', borderRadius: '5px'}}
        fullWidth
        label="Produtos"
        variant="outlined"
        value={search}
        placeholder="Buscar..."
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;
