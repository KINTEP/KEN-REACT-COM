import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from "./HomePageCss";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
//import MenuListComposition from '@mui/material/MenuListComposition';
import MenuListComposition from "./Button";

function MainNav() {
  const classes = useStyles;

  return (
    <div>
      <AppBar position="static" sx = {classes.navbar}>
        <Toolbar>
          <ButtonGroup variant="text" aria-label="text button group" sx = {classes.navbar.buttons1}>
            <Button sx = {classes.navbar.buttons1.text1}>Sign in</Button>
            <Button sx = {classes.navbar.buttons1.text1}>Join Free</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="text button group" sx = {classes.navbar.buttons2}>
            <MenuListComposition/>
            <Button>Buy Now</Button>
            <Button>Sell Now</Button>
            <Button>Mobile</Button>
            <Button>Community</Button>
            <Button>Help</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Box>
        
      </Box>
    </div>
  );
}

export default MainNav;