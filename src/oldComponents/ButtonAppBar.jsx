import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{backgroundColor:'#fff', boxShadow: '0px 2px 2px rgb(0 0 0/5%)'}}>
        <Toolbar>
        <ButtonGroup variant="text" aria-label="text button group" sx = {{flexGrow:1}} color="warning">
            <Button>Sign in</Button>
            <Button>Join Free</Button>
          </ButtonGroup>
          
          <ButtonGroup variant="text" aria-label="text button group" color="warning">
            <Button>Buy Now</Button>
            <Button>Sell Now</Button>
            <Button>Mobile</Button>
            <Button>Community</Button>
            <Button>Help</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default ButtonAppBar