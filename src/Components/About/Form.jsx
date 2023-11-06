import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import axios from 'axios';
import { Typography } from '@mui/material'

function Form () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone:'',
    message:'',
    subject:''
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios({
    //   method: 'post',
    //   url: 'https://script.google.com/macros/s/AKfycbwbWO_6CJxXtDaSx86JeZCUUlCnebJ6ukxSdXhyC9BhcQb0T0avIwqnvlIroUxWN-vt9g/exec', // Replace with your API endpoint
    //   data: formData,
    // })
    //   .then((response) => {
    //     alert('Form submitted successfully');
    //     window.location.reload(); // Refresh the page, or redirect as needed
    //   })
    //   .catch((error) => {
    //     alert('Something went wrong');
    //   });
  

    setFormData({ firstName: '',
    lastName: '',
    Phone:'',
    Message:'',
    subject:''});
    console.log(formData)
  }; 

  return (
    <Box
      sx={{
        width:{md:"700px",xs: '100%'} ,
        height: {md:'300px',xs:"100%"},
        backgroundColor: '#FB8C00',
        borderRadius: '10px',
        display:"flex",
        flexDirection:{md:"row",xs:"column"},
        justifyContent:"space-around"

      }}
    >
      <Box>
        <Typography sx={{width:"250px",fontSize:"1.5rem",fontWeight:"600",padding:".5rem",margin:{md:"0",xs:"4rem 0"}}}>Get Expert's Help</Typography>
        <Typography sx={{padding:".5rem"}}>Send Your query today our team would be happy to assit you at any time</Typography>
      </Box>
      <Box>
        <form onSubmit={(e) => handleSubmit(e)} method="POST" action='https://script.google.com/macros/s/AKfycbxmFsLhauBn4AIH2DMkmuXGoMF8_4F6gUNM_XjhxYIyMeO3aSz7FFYoQV58Jqwig5oz/exec' >
          <Grid container spacing={2} padding='.5rem'>
            <Grid item md={6} xs={12}>
              <TextField
                label='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} padding='.5rem'>
            <Grid item xs={12} md={6}>
              <TextField
                label='Phone'
                name='Phone'
                value={formData.Phone}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Subject'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} padding='.5rem'>
            <Grid item xs={6} md={12} >
              <TextField
               
                label='Message'
                name='Message'
                value={formData.Message}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
          {/* <MyCaptcha/> */}
          <Button
            variant='contained'
            color='primary'
            type='submit'
            sx={{ margin: '1rem' }}
          >
            Submit
          </Button>
        </form>
      </Box>
      
    </Box>
    
  )
}

export default Form
