import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {styled} from "@mui/material/styles"
import "@fontsource/montez"

export default function NavBar() {

  const MyButton = styled(Button)(() => ({
    color:"black"
  }))

  const logoStyle = {
    fontFamily:"Montez",
    //fontFamily:"cursive",
    fontSize:"4em",
    cursor:"pointer",
    color:"blue", //fontFamily:"sans-serif", fontSize:"14px", fontStyle:"bold"
  }

  return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{backgroundColor:'#fff', boxShadow: '0px 2px 2px rgb(0 0 0/5%)'}}>
        <Toolbar>
        <Box variant="text" aria-label="text button group" sx = {{flexGrow:1}} color="warning">
              <Typography sx={logoStyle}>KC</Typography>
          </Box>
          
          <ButtonGroup variant="text" aria-label="text button group" color="warning">
            <Button>Buy Now</Button>
            <Button>Sell Now</Button>
            <Button>Mobile</Button>
            <Button>Community</Button>
            <Button>Help</Button>
            <Box sx={{marginLeft:"30px"}}>
              <Button variant="outlined"><PersonIcon/></Button>
              <Button variant="outlined"><SearchIcon/></Button>
            </Box>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

