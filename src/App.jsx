import React from "react";
import { Route, Routes } from "react-router-dom";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Home from "./features/Pages/Home";
import ContactUs from "./features/Pages/ContactUs";
import Certificate from "./features/Pages/Certificate";
import ProductSystem from "./features/Pages/ProductSystem";
import AboutUs from "./features/Pages/AboutUs";
import Submit from "./features/Pages/Submit";

function App() {
  return (
    // <ReactCSSTransitionGroup
    //     transitionAppear={true}
    //     transitionAppearTimeout={600}
    //     transitionEnterTimeout={600}
    //     transitionLeaveTimeout={200}
    //     transitionName="SlideIn"
    //   > 
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/certificate" element={<Certificate />} />
      <Route exact path="/productsystem" element={<ProductSystem/>} />
      <Route exact path="/submitrequest" element={<Submit/>} />
      {/* <Route exact path="/passenger-transportation" element={<PassengerTransport />} />
      <Route exact path="/school-transportation" element={<SchoolTransportation />} /> */}
    </Routes>
    // </ReactCSSTransitionGroup>
  );
}

export default App;
