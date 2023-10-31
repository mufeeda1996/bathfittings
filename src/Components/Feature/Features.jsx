import { Grid, Typography, Box } from '@mui/material'
import React from 'react'

const Features = ({ features }) => {
  return (
    <>
      <Grid container justifyContent='flex-start'>
        <Grid>
          <Typography
            variant='h4'
            sx={{
              fontSize: '2rem',
              fontWeight: '500',
              paddingBottom: '4rem',
              fontFamily: 'Arial Narrow, sans-serif'
            }}
          >
            Our values ensure quality of service
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {features.map(item => {
            return (
              <>
                <Grid item xs={12} md={4} sx={{ padding: '1rem' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '250px',
                      backgroundColor: '#ffffff',
                      padding: '10px',backdropFilter: 'blur(100px)',
                      boxShadow: '#454545 1px 2px 5px '

                    }}
                  >
                    <Box
                      sx={{
                        // backgroundColor: "primary.main",

                        // borderRadius: '69px',
                        width: '20rem',
                        height: '5rem',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin:".5rem auto"
                        // margin:"2rem 2rem"
                      }}
                    >
                      <img width='30%' src={item.image} alt='safety' />
                    </Box>
                    <Typography
                      variant='h6'
                      sx={{
                        // paddingTop: '3rem ',
                        color: '#000000',
                        fontFamily: 'PFDin Text,Arial,sans-serif',
                        fontWeight: '300',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin:"1.5rem 1rem"
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{
                        paddingTop: '.5rem',
                        color: 'rgba(32,46,66,.7)',
                        // fontFamily:"ArimaMaduraiRegular",
                        fontFamily: 'Open Sans,sans-serif',
                        fontSize: ' .875rem',
                        lineHeight: ' 1.25rem',
                        margin:"1.5rem 1rem"
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              </>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default Features
