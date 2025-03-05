import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box
      className="bg-rose-100 bg-opacity-70  flex"
      sx={{ maxHeight: "560px", margin: "auto" }}
    >
      <Box className="w-1/2">
        <img
          src="https://cdn.dribbble.com/users/6714086/screenshots/17892100/media/82ed000af784ae4b8a4485e4381f1ec5.png?compress=1&resize=1000x750&vertical=top"
          width="100%"
          alt="Zomato Promotion"
        />
      </Box>
      <Box className="w-1/2 pt-14 leading-10">
        <h1 className="text-5xl font-bold">Get the Zomato app</h1>
        <p className="text-gray-600 mt-5">
          We will send you a link, open it on your phone to download
         <br />the app
        </p>
        <form action="/" className='mt-3' role="form">
          <label htmlFor="emailOption" className="mr-2">
            <input type="radio" color="red" className="accent-red-600" name="contactMethod" id="emailOption" /> Email
          </label>
          <label htmlFor="phoneOption" className="ml-4">
            <input type="radio" className="accent-red-600" name="contactMethod" id="phoneOption" /> Phone
          </label>
          <br />
          <input
            type="text"
            name="contactInfo"
            id="contactInfo"
            placeholder="Enter email or phone"
            className="py-2 px-4 w-80 mr-4 border border-gray-300 rounded mt-3"
          />
          
          <button className="text-white bg-rose-600 py-2 px-4 mt-3 rounded">
            Share app Link
          </button>
        </form>
        <Typography marginTop='10px' variant="body2" color="text.secondary">
        Download app from
          </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
