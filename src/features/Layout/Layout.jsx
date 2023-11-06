import { Box, Container } from "@mui/material";
import React from "react";
import Addressbar from "../../Components/Addressbar/Addressbar";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer";
import logo from '../../Image/logo.png'

const navItems = [
    ' Brands catalogue',
    'Company',
    'Certificates',
    'Contacts',
    'Submit a request'
  ]
  const address = ['Home', 'About', 'home']

const Layout = ({ children }) => {
  
  return (
    <Container maxWidth="100%" sx={{ padding: "0 !important" }}>
      <Addressbar navItems={navItems} address={address} />
      <Navbar />
      {children}
      {/* <Box sx={{marginTop:{md:0,xs:"24rem"}}}> */}
         <Footer 
        logo={logo}
        mail={"info@alameentransportsuae.com"}
        copyright={"2023 - Al Ameen Transports L.L.C"}
      />
    {/* </Box> */}
    
    </Container>
  );
};

export default Layout;