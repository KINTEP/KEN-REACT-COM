import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


function Section6() {
  return (
    <Box>
    <Box sx={{backgroundColor:"", margin:"0% 4% 2% 4%", height:"60vh", border:"0px solid grey", borderRadius:"0px"}}>
        <Stack direction="row" sx={{height:"100%", width:"100%"}} spacing = {2}>
              <Paper sx={{width:"100%"}}>One</Paper>
              <Paper sx={{width:"100%"}}>Two</Paper>
              <Paper sx={{width:"100%"}}>Three</Paper>
        </Stack>
    </Box>
    </Box>
  );
}


export default Section6