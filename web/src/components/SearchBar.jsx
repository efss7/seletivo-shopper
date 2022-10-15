import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { State } from '../global/State';

const SearchBar = () => {
    const { search, handleSearch, clearSearch } = useContext(State);
  return (
    <Box display="flex" alignItems="center" sx={{margin: 2}}>
      <TextField
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
};

export default SearchBar;
