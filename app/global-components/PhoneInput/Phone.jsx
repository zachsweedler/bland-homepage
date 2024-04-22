"use client";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Phone({ fieldName, ...props }) {
   const { control } = useFormContext();

   return (
      <Controller
         control={control}
         name={fieldName}
         render={({ field: { onChange, value } }) => (
            <PhoneInput
               value={typeof value === "number" ? value.toString() : value}
               autoFormat={true}
               country={"us"}
               onChange={onChange}
               inputStyle={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "transparent",
               }}
               buttonStyle={{
                  background: "none",
                  border: "none",
               }}
               {...props}
            />
         )}
      />
   );
}

export default Phone;
