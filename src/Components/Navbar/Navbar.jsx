import React from 'react'
import { AppBar, Box, Grid, Toolbar, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navItems = [
    {label:'Home', url:"/"},
    {label:'Products & Systems',url:"/productsystem"},
    { label:'Certificate',url:"/certificate"},
    {label:'Contact Us',url:"/contact"},
    {label:'Submit a Request',url:"/submitrequest"}
  ]
  const desktop = (
    <Box sx={{ backgroundColor: 'secondary.main', color: '#ffffff' }}>
      <AppBar position='static'>
        <Toolbar>
          <Grid container spacing={2} justifyContent='space-evenly'>
            {navItems.map((item, index) => {
              return (
                <>
                  <Grid item md={2} key={index} onClick={() => navigate(item.url)} sx={{cursor:"pointer"}}>
                    {item.label}
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
  return <>{isMobile ? null : desktop}</>
}

export default Navbar
