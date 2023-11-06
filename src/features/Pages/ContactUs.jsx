import React from 'react'
import Layout from '../Layout/Layout'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LanguageIcon from '@mui/icons-material/Language'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Grid, Typography, Box } from '@mui/material'
import logo from '../../Image/logo12.png'

const ContactUs = () => {
  return (
    <Layout>
      <Grid
        container
        justifyContent='space-evenly'
        height='500px'
        alignItems='center'
        sx={{
          backdropFilter: 'blur(100px)',
          boxShadow: '#454545 1px 2px 5px ',
          backgroundColor:"#ffffff"
        }}
      >
         <Grid item md={4} xs={12}>
          <img src={logo} width="60%"></img>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              svg: { fontSize: '24px' },
              display: 'flex',
              flexDirection: 'row',
              margin: '.5rem 0'
            }}
          >
            <WhatsAppIcon sx={{ color: 'primary.dark' }} />
            <Typography sx={{ fontSize: '19px', width: '250px' }}>
              {' '}
              +971 58 560 1448
            </Typography>
          </Box>
          <Box
            sx={{
              svg: { fontSize: '24px' },
              display: 'flex',
              flexDirection: 'row',
              margin: '.5rem 0'
            }}
          >
            <LanguageIcon sx={{ color: 'primary.dark' }} />
            <Typography sx={{ fontSize: '19px', width: '250px' }}>
              {' '}
              www.lhtech-me.com
            </Typography>
          </Box>
          <Box
            sx={{
              svg: { fontSize: '24px' },
              display: 'flex',
              flexDirection: 'row',
              margin: '.5rem 0'
            }}
          >
            <AlternateEmailIcon sx={{ color: 'primary.dark' }} />
            <Typography sx={{ fontSize: '19px', width: '250px' }}>
              {' '}
              sales@lhtech-me.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactUs
