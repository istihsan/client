import * as React from 'react';
import {CardActionArea} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Img from '../../img/tractor.jpg'


export default function BasicCard() {
  return (
  <Box sx={{overflow: 'hidden'}}>
    <Grid container spacing={2} sx={{py:'6%', px:'10%', backgroundColor:'#FFF0DD', overflow:'hidden '}}>
      <Grid xs={6}>
        <Typography variant='h4'>Special Equipment & Special Vehicles.</Typography>
        <Typography variant='subtitle1' sx={{mt: '2%'}}>PT. Profindo Multi Dinamika is the official dealer for the BARBER-USA, PFG-Italy, PERUZZO-Italy, BIG JOHN-USA brands, which have been established since 1959. PT. Profindo Multi Dinamika will provide marketing support, service & after-sales services for all users of BARBER-USA, PFG-Italy, PERUZZO-Italy, BIG JOHN-USA products.</Typography>
        <Button variant='contained' sx={{mt:'1%', backgroundColor:'#EB0B0D', fontWeight:'bold'}}>Contact Us</Button>
      </Grid>
      <Grid xs={6}>    
        <Card sx={{ maxWidth: '50%', ml: "20%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={Img}
              alt="Tractors"
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Box>
  );
}
