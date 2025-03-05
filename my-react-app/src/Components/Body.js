import { Box } from '@mui/system'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FoodImage from "../Image/food2.jpg";
import { ArrowForwardRounded } from '@mui/icons-material';

function Body() {
  return (
    <Box className='px-32'>
      <Card sx={{ maxWidth: 520, boxShadow: 3, borderRadius: 2 , marginBottom: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 180 }} // ✅ Corrected height
          image={FoodImage}
          alt="Delicious food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Order Online
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stay home and order to your doorstep
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Box>
      <h1 className='text-4xl font-thin text-gray-800 text-ellipsis'>Popular localities in and around <b className='text-gray-900'>Chhindwara</b></h1>
      <Card sx={{ maxWidth: 360, boxShadow: 3, borderRadius: 2 , marginBottom: 10, marginTop: 5 }}>
        <CardActionArea>
          <CardContent className='flex justify-between'>
          <Box>
          <Typography gutterBottom variant="p" component="div">
          Chhindwara Locality
          </Typography>
          <Typography variant="body2" color="text.secondary">
            202 places
          </Typography>
          </Box>
          <Box>
            <ArrowForwardRounded/>

          </Box>

          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
    </Box>
  )
}

export default Body