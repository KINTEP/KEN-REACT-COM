import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import globe1 from "../../assets/images/online1.jpg"
import globe2 from "../../assets/images/online4.jpg"
import Carousel1 from "./Carousel1"
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const MyStyles = {
  Grid1:{backgroundColor:"", 
        height:"94.6%", 
        width:"100%",
        backgroundImage:`url(${globe1})`,
        backgroundRepeat:"none",
         marginTop:"-2.5%"
      },

  Grid2:{backgroundColor:"", 
        height:"100%", 
        width:"100%",
        backgroundImage:`url(${globe2})`,
        backgroundRepeat:"none",
        marginTop:"0%",
        borderRadius:"5px",
        color:"white"
      },
}

export default function Section1() {
  return (
    <Box sx={{marginTop:"1px"}}>
      <Paper elevation={6} sx={{marginLeft:"3%", marginRight:"3%", height:"70vh", display:"flex"}}>
          <Grid container justify="center" sx={{height:"100%", width:"100%", border:"0px solid red"}}>
            <Grid item flex={1} sx={{display:"flex", justifyContent:"center"}}> 
              <Box bgcolor="" sx={{height:"95%", width:"95%", display:"flex", marginTop:"2%"}}>
                  <Box>
                      <center>
                        <Typography sx={{fontWeight:"bold", fontSize:"24px", marginBottom:"0px", color:"blue", width:"90%"}}>Tell us your Buying Requirements</Typography>
                        <Divider sx={{borderBottom:"8px solid red", marginTop:"0.01%", width:"50%"}}></Divider>
                      </center>
                      <Box  sx={{display:"flex", justifyContent:"center", marginTop:"18px"}}>
                        <TextField variant="standard" sx={{borderRadius:"0px", borderBottom:"2px solid black", color:"white", width:"80%"}} placeholder="Enter Product/Service name"/>
                      </Box>
                      <Box  sx={{display:"flex", justifyContent:"center", marginTop:"18px"}}>
                        <TextField variant="standard" sx={{borderRadius:"0px", borderBottom:"2px solid black", color:"white", width:"80%"}} placeholder="Provide any from of description"/>
                      </Box>
                      <Box  sx={{display:"flex", justifyContent:"center", marginTop:"18px"}}>
                        <TextField variant="standard" sx={{borderRadius:"0px", borderBottom:"2px solid black", color:"white", width:"80%"}} placeholder="Business Email"/>
                      </Box>
                      <Box  sx={{display:"flex", justifyContent:"center", marginTop:"18px"}}>
                        <TextField variant="standard" sx={{borderRadius:"0px", borderBottom:"2px solid black", color:"white", width:"80%"}} placeholder="Company Name"/>
                      </Box>
                      <Box  sx={{display:"flex", justifyContent:"center", marginTop:"18px"}}>
                        <TextField variant="standard" sx={{borderRadius:"0px", borderBottom:"2px solid black", color:"white", width:"80%"}} placeholder="Country of company origin"/>
                      </Box>
                      <Box  sx={{display:"flex", justifyContent:"center", marginTop:"25px"}}>
                          <AwesomeButton type="danger">
                            <Typography sx={{textTransform:"capitalize", fontWeight:"bold"}}>Send Requirements</Typography>
                          </AwesomeButton>
                            
                      </Box>
                  </Box>
              </Box>
            </Grid>
            <Grid item flex={2}>
              <Box><Carousel1/></Box>
            </Grid>
          </Grid>
      </Paper>
    </Box>
  );
}

