import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


function Section9() {
  return (
    <Box>
    <Box sx={{backgroundColor:"#ACA7CB", margin:"0% 4% 2% 4%", height:"20vh", border:"", borderRadius:"0px"}}>
        <Stack direction="row" sx={{height:"100%", width:"100%"}} spacing = {2}>
              <Paper bgcolor="red" sx={{width:"100%"}}>One</Paper>
              <Paper bgcolor="white" sx={{width:"100%"}}>Two</Paper>
              <Paper bgcolor="black" sx={{width:"100%"}}>Three</Paper>
              <Paper bgcolor="yellow" sx={{width:"100%"}}>Four</Paper>
        </Stack>
    </Box>
    </Box>
  );
}


export default Section9