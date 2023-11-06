import { Box, Button, Grid, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
// import TitleCard from "./Cards/TitleCard";
// import { titleCards } from "../constants/Constants";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Form from './Form'
const About = ({
  image,
  title,
  description,
  btnLabel,
  btnFn,
  isFullWidthHero,
  altTxt,
  hasVideo
}) => {
  return (
    <Box sx={{
      // backgroundColor: '#ffffff',
       boxShadow: '#454545 1px 2px 5px'}}>
      <Grid
        container
        sx={{
          minHeight: { xs: '60vh', md: 'calc(100vh - 178px)' },
          justifyContent: {
            xs: 'flex-end',
            sm: 'flex-end',
            md: 'flex-start'
          },
          alignItems: 'center'
          // padding:"100px"
        }}
      >
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <img src={image} width='100%'></img>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          lg={6}
          sx={{
            padding: { xs: '2rem 1rem' }
          }}
        >
          <Typography
            variant='h1'
            color='#000000'
            sx={{
              marginBottom: '2rem',
              fontSize: { md: '1.7rem', xs: '1rem' }
            }}
          >
            {title}
          </Typography>
          <Typography
            variant='body1'
            color='#454545'
            sx={{ marginBottom: {lg:'2rem'} }}
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
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'center' },
            padding: '1rem'
          }}
        ></Grid>
        <Grid  xs={12}
          // sm={5}
          md={10}
          lg={8}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'center' },
            padding: '.5rem',
            transform:{md:"translatey(-20%)"},
            // marginTop:{md:"-40rem " ,lg:"0",xs:"0"}
          }}>
        <Form/>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default About
