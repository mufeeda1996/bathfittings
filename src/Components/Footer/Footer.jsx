import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'

import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box ,Divider} from '@mui/material'


export default function Footer () {
  return (
    <>
    <Box
      component='footer'
      sx={{
        width: '100%',
        margin: '3.5rem 0',
        height: {md:'150px',xs:"250px"},
        backgroundColor: '#ffffff',
        // padding: '10px',
        backdropFilter: 'blur(100px)',
        boxShadow: '#454545 1px 2px 5px '
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={5} justifyContent="space-evenly" >
          <Grid item xs={12} sm={4} >
            <Typography variant='h6' color='text.primary' gutterBottom>
              Contact Us
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Email: sales@lhtech-me.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Typography variant='h6' color='text.primary' gutterBottom>
              Follow Us
            </Typography>
            <Link href='' color='inherit'>
              <Facebook />
            </Link>
            <Link
              href=''
              color='inherit'
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href='' color='inherit'>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        </Container>
    </Box>
        {/* </Box> */}
        <Divider sx={{ margin: "1rem 0" }} />
        <Box mt={5}>
          <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href=''>
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
     </>
  )
}
