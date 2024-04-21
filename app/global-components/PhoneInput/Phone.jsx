"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Phone(props) {
   return (
      <PhoneInput
         autoFormat={true}
         country={"us"}
         {...props}
         inputStyle={{
            width: "100%",
            border: "none",
            backgroundColor: "transparent",
         }}
         buttonStyle={{
            background: 'none',
            border: 'none',
         }}
      />

   );
}

export default Phone;
