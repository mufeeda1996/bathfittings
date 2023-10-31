import React from 'react'
import {AppBar, Box, Grid, Toolbar,useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles'
const Navbar = () => {
    const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const desktop=(
    <Box sx={{backgroundColor:"secondary.main",color:"#ffffff"}}>
        <AppBar position='static'>
            <Toolbar >

           
         <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item md={2}>
          Brands catalogue
          </Grid>
          <Grid item md={2}>
          Company
          </Grid >
          <Grid item md={2}>
          Certificates
          </Grid>
          <Grid item md={2}>
          Contacts
          </Grid>
          <Grid item md={2}>
          Submit a request
          </Grid>
         </Grid>
         </Toolbar>
        </AppBar>
    </Box>
  )
  return (
    <>
    {isMobile ? null : desktop}
    </>
  )
}

export default Navbar