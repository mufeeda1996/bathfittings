import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import logo from '../../Image/logo_mobile.png'
const Hero = ({
  image,
  title,
  description
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
            md={6}
            lg={6}
            sx={{
              padding: { xs: "2rem 1rem" },
            }}
          >
            <Typography
              variant="h1"
              color= "white.dark"
              sx={{
                marginBottom: {md:"3rem",xs:"0"},
                marginTop:{md:"0",xs:"20rem"},
                fontSize: {md:"2.5rem", xs: "1.5rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="white.dark"
              sx={{ marginBottom: "3rem" }}
            >
              {description}
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
