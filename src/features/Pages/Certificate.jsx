import { Grid } from '@mui/material'
import React from 'react'
import Layout from '../Layout/Layout'
import certificate from '../../Image/certificates.jpg'

const Certificate = () => {
  return (
   <Layout>
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <img src={certificate} width="100%"></img>
      </Grid>
    </Grid>
   </Layout>
  )
}

export default Certificate