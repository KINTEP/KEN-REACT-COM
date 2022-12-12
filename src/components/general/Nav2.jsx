import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const categories = ["Agriculture","Paw", "Banku", "Fufu"]

export default function Nav2() {
  return (
    <Box sx={{ flexGrow: 1 , marginTop:"10px", marginLeft:"3%", marginRight:"3%"}}>
      <Box elevation={0} position="relative" sx = {{backgroundColor:'#fff', border:"0px solid black", height:"12vh"}}>
        <Box>
          <Stack spacing={1} direction="row">
        {categories.map((num) => 
        
          <Typography  key ={num} sx={{color:"red"}}>{num}</Typography>
        
        )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

