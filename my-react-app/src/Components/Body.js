import { Box } from '@mui/system'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FoodImage from "../Image/food2.jpg";

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
    </Box>
  )
}

export default Body