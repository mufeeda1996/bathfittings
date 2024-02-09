import { Grid, Typography, Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const Features = ({ features, heading, subHeading }) => {
  const ContainerStyle = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '100%',
    height: 'auto'
  }))

  const TextStyle = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white'
  }))

  return (
    <>
      <Grid container justifyContent='flex-start'>
        <Grid item md={6} xs={12}>
          <Typography
            variant='h4'
            sx={{
              fontSize: '2rem',
              fontWeight: '500',
              paddingBottom: '4rem'
            }}
          >
            {/* {heading} */}
            <Typography
              sx={{
                color: 'rgba(32,46,66,.7)',
                width: '350px',

                fontSize: ' .875rem',
                lineHeight: ' 1.25rem',
                margin: '1.5rem .5rem'
              }}
            >
              {/* {subHeading} */}
            </Typography>
          </Typography>
        </Grid>
        <Grid container spacing={1}>
          {features.map(item => {
            return (
              <>
                <Grid item xs={12} md={6} sx={{ padding: '1rem' }}>
                  <Box
                    sx={{
                      width: '100%',
                      minHeight: '100px',
                      backgroundColor: 'whitesmoke',
                      backdropFilter: 'blur(100px)',
                      boxShadow: '#003366 0px 0px 3px 3px'
                    }}
                  >
                    <ContainerStyle>
                      <Box
                        sx={{
                          // backgroundColor: "primary.main",

                          // borderRadius: '69px',
                          // width: '50rem',
                          // height: '2rem',
                          display: 'flex',
                          justifyContent: 'center',
                          // alignItems: 'center',
                          // margin: '10rem auto'
                          // margin:"2rem 2rem"
                          padding: '10px'
                        }}
                      >
                        <img
                          width='300px'
                          height='250px'
                          style={{ borderRadius: '10px' }}
                          src={item.image}
                          alt='safety'
                        />
                      </Box>
                      <TextStyle>
                        <Typography
                          variant='h5'
                          sx={{
                            // paddingTop: '3rem ',
                            color: '#ffffff',
                            fontFamily: 'PFDin Text,Arial,sans-serif',
                            fontWeight: '700',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '1.5rem 1rem'
                          }}
                        >
                          {item.title}
                        </Typography>
                       
                      </TextStyle>
                      
                    </ContainerStyle>

                    {/* <Typography
                      variant='body1'
                      sx={{
                        paddingTop: '.5rem',
                        color: 'rgba(32,46,66,.7)',
                      
                        fontFamily: 'Open Sans,sans-serif',
                        fontSize: ' .875rem',
                        lineHeight: ' 1.25rem',
                        margin: '1.5rem 1rem'
                      }}
                    >
                      {item.description}
                    </Typography> */}
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
