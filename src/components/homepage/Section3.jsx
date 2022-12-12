import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import globe1 from "../../assets/images/online1.jpg"
import globe2 from "../../assets/images/online4.jpg"
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: 'green',
  },
});


export default function Section2() {
  return (
    <>
    <hr/>
    <Box sx={{marginTop:"3%", marginBottom:"3%"}}>
      <Paper square elevation={2} sx={{marginLeft:"3%", marginRight:"3%", borderTop:"5px solid green", display:"flex"}}>
          <Grid spacing = {0.05} container justify="center" sx={{height:"100%", width:"100%", border:"0px solid red", display:"flex", justifyContent:"center"}}>
          {products.map((item) => 
            <Grid item key={item} > 
              <Box sx={{padding:"5px"}}>
                  <Card sx={{marginTop:"2px", backgroundColor:"white", height:"50vh", marginBottom:"2px", display:"flex", flexDirection:"column", width:"100%"}}>
                    <CardMedia image="https://source.unsplash.com/random" sx={{height:"80.4%"}}/>
                    <StyledRating
                          name="customized-color"
                          defaultValue={2}
                          getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                          precision={0.5}
                          icon={<FavoriteIcon fontSize="inherit" />}
                          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                  <CardActions>
                      <Button variant="contained" color="warning">Views</Button>
                      <Button variant="outlined" color="success">Actions</Button>
                  </CardActions>
                  </Card>
              </Box>
            </Grid>
            )}
            
          </Grid>
      </Paper>
    </Box>
    </>
  );
}

