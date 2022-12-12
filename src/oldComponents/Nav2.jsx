import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';

function App() {
  return (
    <div>
      <Box className = "topNav" sx = {{height:"15vh", flexGrow: 1}}>
        <Stack direction = "row" bgcolor="" spacing = {1} sx={{padding: "20px 34px 20px 34px"}}>
          <Box bgcolor="" flex={0.5} sx={{height:"8vh"}}>
          <Avatar children = "KN" sx={{height:"90%", backgroundColor:"red"}}/>
          </Box>
          <Box bgcolor="blue" flex={8} sx={{height:"8vh"}}>
            <Box sx={{backgroundColor:"", border:"1px solid blue"}} sx={{height:"8vh"}}>
              <Stack direction="row" sx={{height:"100%", border:"2px solid #ed6c02"}}>
                <Box bgcolor="white" sx={{height:"100%", width:"20%"}}>
                  Products
                </Box>
                  <Divider sx ={{border:"1px solid #ed6c02", height:"100%"}}></Divider>
                <Box sx={{width:"80%"}}>
                  <InputBase placeholder="What are you looking for?" sx={{width:"100%",height:"100%", backgroundColor:"white"}}/>
                </Box>
                  <Divider sx ={{border:"0px solid blue", height:"8vh", backgroundColor:"brown"}}></Divider>
                <Box>
                  <Button color="warning" variant="contained" sx={{width:"100%", height:"100%", borderRadius:"0px"}}>
                    <SearchIcon/>
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box bgcolor="" flex={2} sx={{height:"8vh"}}>
            <Button variant="outlined" sx={{textTransform:"capitalize", width:"100%", height:"100%"}}>Post Buying Leads</Button>
          </Box>
          <Box bgcolor="" flex = {1} sx={{height:"8vh"}}>
            <Stack direction="row">
              <Button variant="text" sx={{height:"100%"}} size="sm">
                <PersonIcon sx={{height:"8vh"}}/>
                <Typography sx={{fontSize:"13px", textTransform:"capitalize"}}>My Account</Typography>
              </Button>
            </Stack>
          </Box>
          <Box bgcolor="" flex={1.5} sx={{height:"8vh"}}>
            <Stack direction="row" spacing={1}>
              <Button variant="text" sx={{height:"100%"}} size="sm">
                <LanguageTwoToneIcon sx={{height:"8vh"}}/>
                <Typography sx={{fontSize:"13px", textTransform:"capitalize"}}>Global Buyer Directory</Typography>
              </Button>
            </Stack>
          </Box>
        </Stack>
     </Box> 
    </div>
  );
}

export default App;