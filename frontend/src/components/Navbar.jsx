import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <InventoryRoundedIcon />
          <Typography variant="h5" component="div" sx={{ flexGrow: 0 }}>
            Lista de Produtos
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
