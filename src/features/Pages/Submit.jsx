import { Grid } from '@mui/material'
import React from 'react'
import Form from '../../Components/About/Form'
import Layout from '../Layout/Layout'

const Submit = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" padding={2}>
        <Grid item>
          <Form />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Submit
