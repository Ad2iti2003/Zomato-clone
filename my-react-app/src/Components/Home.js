import React from 'react';
import { Box, TextField } from '@mui/material';
import Food from '../Image/food.jpg'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '70vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
     
      <Box
        sx={{
          width: '100vw',
          height: '65vh',
          backgroundImage: `url(${Food})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
      
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            
          }}
        />
        <Box className='flex justify-between py-6 px-20'>
        <Box color='white' sx={{opacity:0.9, fontWeight:'100'}}>
            <button>Get the App</button>

        </Box>
        <Box
           sx={{
                display: "flex", 
                gap: "2rem", 
                color: "white", 
                opacity: 0.9,
                fontWeight:'100',
                fontSize:'20px'
                }}
                >
                <button>Investor Relations</button>
                <button>Add Restaurant</button>
                <button >Log in</button>
                <button>Sign up</button>
                </Box>
        </Box>
        <Box sx={{color:'white',opacity:0.9, p:3, display:'flex',justifyContent:'center', fontFamily:"cursive"}}>
            <h1 className='text-7xl font-extrabold italic'>zomato</h1>
            
        </Box>
        <Box sx={{color:'white',opacity:0.9, display:'flex',justifyContent:'center'}}>
          <p className='text-4xl'>Discover the best food & drinks in Chhindwara</p>
        </Box>
        <Box className="h-14 opacity-95 bg-white mt-4 max-w-2xl flex items-center justify-center mx-auto px-4 gap-2 rounded-md shadow-md">
  <LocationOnIcon sx={{ width: "20px", height: "20px", color: "red" }} />
  
  <TextField 
    label="Ranchi" 
    sx={{ bgcolor: "white", color: "black" }} 
    variant="standard" 
  />
  
  <ArrowDropDownIcon />

  <Box className="h-6 w-px bg-gray-300 mx-2" /> 

  <SearchIcon />
  
  <TextField 
    label="Search for restaurant, cuisine, or a dish" 
    sx={{ bgcolor: "white", color: "black", width: "100%" }} 
    variant="standard" 
  />
</Box>;
        
      </Box>
    </Box>
  );
}

export default Home;




