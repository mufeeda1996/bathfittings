import { Container } from '@mui/system'
import React from 'react'
import ProductSystems from '../../Components/ProductSystems.jsx/ProductSystems'
import Layout from '../Layout/Layout'

const ProductSystem = () => {
  return (
    <Layout>
    <Container sx={{margin:"2rem 0"}}>
    <ProductSystems/>
    </Container>
    </Layout>
  )
}

export default ProductSystem