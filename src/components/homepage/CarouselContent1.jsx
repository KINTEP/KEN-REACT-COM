import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "@fontsource/montez"
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';



export default function CarouselContent1({data}) {
  return (
    <Box sx={data.css}>
      <Paper elevation={5} sx={data.paperCss}>
        <Box sx={{height:"100%", display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <center>
                <Typography variant="h3" sx={{color:"red", fontFamily:"cursive"}}>{data.header}</Typography>
                <Box sx={{backgroundColor:"white", width:"50%", margin:"2%", borderRadius:"10px", fontWeight:"bold"}}>
                  <Typography variant="p" gutterBottom sx={{color:"black"}}>{data.paragraph}</Typography>
                </Box>
            </center>
              <center><AwesomeButton type="primary">Join for free</AwesomeButton></center>
        </Box> 
      </Paper>
    </Box>
  );
}

