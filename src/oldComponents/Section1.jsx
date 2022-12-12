import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SideBar from "./SideBar"


function Section1() {
  return (
    <Box>
    <Paper sx={{backgroundColor:"white", margin:"0% 4% 2% 4%", height:"65vh", border:"5px solid grey"}}>
        <Stack direction="row" sx={{height:"100%"}}>
          <Box bgcolor="" flex={1} >
            <SideBar/>
          </Box>
          <Box bgcolor="violet" flex={3} >Two</Box>
          <center>
              <Stack bgcolor="white" flex={1.1} sx={{width:"90%"}} spacing={2.3}>
              <Typography sx={{fontWeight:"bold", fontSize:"24px", marginBottom:"-12px"}}>Tell us your Buying Requirements</Typography>
              <center>
              <Divider sx={{borderBottom:"8px solid #ed6c02", marginTop:"0.01%", width:"50%"}}></Divider>
              </center>
                <TextField variant="standard" color="" sx={{borderRadius:"0px", borderBottom:"2px solid #1976D2"}} placeholder="Enter Product/Service name"/>
                <TextField variant="standard" color="" sx={{borderRadius:"0px", borderBottom:"2px solid #1976D2"}} placeholder="Enter Product/Service name"/>
                <TextField variant="standard" color="" sx={{borderRadius:"0px", borderBottom:"2px solid #1976D2"}} placeholder="Business E-mail"/>
                <TextField variant="standard" color="" sx={{borderRadius:"0px", borderBottom:"2px solid #1976D2"}} placeholder="Company name"/>
                <Button size="sm" variant="contained" sx={{width:"100%", textTransform:"capitalize"}}>Submit your requirements</Button>
              </Stack>
          </center>
        </Stack>
    </Paper>
    </Box>
  );
}


export default Section1