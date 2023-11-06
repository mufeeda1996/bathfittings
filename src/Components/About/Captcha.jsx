import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const MyCaptcha = () => {
  const siteKey = 'YOUR_RECAPTCHA_SITE_KEY'; // Replace with your actual reCAPTCHA site key

  const handleCaptchaChange = (value) => {
    // You can handle the reCAPTCHA response here
    console.log("reCAPTCHA value:", value);
  };

  return (
    <div>
      <p>I am not a robot</p>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleCaptchaChange}
      />
    </div>
  );
}

export default MyCaptcha;
