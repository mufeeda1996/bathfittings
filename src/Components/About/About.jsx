import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
// import TitleCard from "./Cards/TitleCard";
// import { titleCards } from "../constants/Constants";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
const About = ({
  image,
  title,
  description,
  btnLabel,
  btnFn,
  isFullWidthHero,
  altTxt,
  hasVideo,
}) => {
  return (
    <>
        <Grid
          container
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: { md: "center" },
            minHeight: { xs: "60vh", md: "calc(100vh - 178px)" },
            justifyContent: {
              xs: "flex-end",
              sm: "flex-end",
              md: "flex-end",
            },
            alignItems: "center",
            // padding:"100px"
          }}
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            lg={4}
            sx={{
              padding: { xs: "2rem 1rem" },
            }}
          >
            <Typography
              variant="h1"
              color= "#ffffff"
              sx={{
                // textTransform: "uppercase",
                // width:"600px",
                marginBottom: "2rem",
                fontFamily: 'system-ui',
              
                fontSize: {md:"1.75rem", xs: "1.5rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color= "#e6e6e6"
              sx={{ marginBottom: "2rem",fontFamily: 'system-ui' }}
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

export default About;
