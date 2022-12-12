import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function CarouselContent2() {
  return (
    <Box sx={{marginTop:"1%", marginBottom:"3", height:"97%"}}>
      <Paper elevation={5} sx={{height:"100%", marginLeft:"1%", marginRight:"1%"}}>
        <div style={{height:"100%"}}>
              <h1>Henry Ofori Kwaku</h1>
              <p>Hello</p>
              <center><Button variant="outlined">Click Here</Button></center>
        </div> 
      </Paper>
    </Box>
  );
}

