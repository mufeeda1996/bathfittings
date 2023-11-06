import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import logo from '../../Image/logo_mobile.png'
const Hero = ({
  image,
  title,
  description,
  description2
}) => {
  return (
    <>
        <Grid
          container
          sx={{
            backgroundImage: {md:`url(${image})`,xs:`url(${logo})`},
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: { md: "center" ,sm:"center"},
            minHeight: { xs: "70vh", md: "calc(100vh - 178px)" },
            justifyContent: {
              xs: "flex-start",
              sm: "flex-start",
              md: "space-around",
            },
            alignItems: "flex-end",
            padding:{md:"100px",sm:"10px"}
          }}
        >
          <Grid
            item
            xs={10}
            sm={10}
            md={5}
            lg={5}
            sx={{
              padding: { xs: "2rem 1rem" },
            }}
          >
            <Typography
              variant="h1"
              color= "white.dark"
              sx={{
                marginBottom: {md:"2rem",xs:"0"},
                marginTop:{md:"0",xs:"40rem"},
                fontSize: {md:"2rem", xs: "2rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="white.dark"
              sx={{ marginBottom: "2rem" }}
            >
              {description}
            </Typography>
            <Typography
              variant="body1"
              color="white.dark"
              // sx={{ marginBottom: "2rem" }}
            >
              {description2}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
              padding: "1rem",
            }}
          >
           
          </Grid>
        </Grid>
    
    </>
  );
};

export default Hero;
