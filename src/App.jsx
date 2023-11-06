import React from "react";
import { Route, Routes } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Home from "./features/Pages/Home";
import ContactUs from "./features/Pages/ContactUs";
import Certificate from "./features/Pages/Certificate";
import ProductSystem from "./features/Pages/ProductSystem";
import AboutUs from "./features/Pages/AboutUs";
import Submit from "./features/Pages/Submit";

function App() {
  return (
    <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName="SlideIn"
      > 
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/certificate" element={<Certificate />} />
      <Route exact path="/productsystem" element={<ProductSystem/>} />
      <Route exact path="/submitrequest" element={<Submit/>} />
      {/* <Route exact path="/passenger-transportation" element={<PassengerTransport />} />
      <Route exact path="/school-transportation" element={<SchoolTransportation />} /> */}
    </Routes>
    </ReactCSSTransitionGroup>
  );
}

export default App;
// import Button from '@mui/material/Button'
// import { Grid, TextField, Typography } from '@mui/material'
// import React from 'react'
// import { display } from '@mui/system'

// const Form = () => {
//   return (
//     <Grid container  backgroundColor= '#FB8C00' borderRadius="10px" spacing={1} width="50%">
//       <Grid item md={7} xs={12}>
//         <Typography sx={{width:"250px",fontSize:"1.5rem",fontWeight:"600",padding:".5rem"}}>Get Expert's Help</Typography>
//       </Grid>
//       <Grid item md={8} xs={12}>
//         <Typography sx={{padding:".5rem"}}>
//           Send Your query today our team would be happy to assit you at any time
//         </Typography>
//       </Grid>
//       <Grid item md={10} xs={12}>
//         <form>
//           <TextField label='First Name' name='firstName' fullWidth />
//           <TextField label='second name' name='second name' fullWidth />
//           <TextField label='phone' name='phone' fullWidth />
//           <TextField label='message' name='message' fullWidth />
//           <Button variant='contained'
//             color='primary'
//             type='submit'
//             sx={{ margin: '1rem' }}>send the query</Button>
//         </form>
//       </Grid>
//     </Grid>
//   )
// }

// export default Form