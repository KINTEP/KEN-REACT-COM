import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


export default function Section2() {
  return (
    <Box sx={{marginTop:"3%", marginBottom:"3%"}}>
      <Paper square elevation={5} sx={{marginLeft:"3%", marginRight:"3%", height:"100vh", borderTop:"5px solid violet"}}>
          <Grid container justify="center" sx={{height:"100%", width:"100%", border:"0px solid red"}}>
            <Grid item flex={1}> 
              <Box sx={{borderRight:"1px solid grey", height:"100%"}}>Item 13</Box>
            </Grid>
            <Grid item flex={1}>
              <Box sx={{borderRight:"1px solid grey", height:"100%"}}>Item 12</Box>
            </Grid>
            <Grid item flex={1}>
              <Box>Item 14</Box>
            </Grid>
          </Grid>
      </Paper>
    </Box>
  );
}

