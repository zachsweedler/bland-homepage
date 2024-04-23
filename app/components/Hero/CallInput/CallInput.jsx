"use client";
import React, { useEffect, useState } from "react";
import styles from "./callinput.module.css";
import Button from "@/app/global-components/Button/Button";
import Phone from "@/app/global-components/PhoneInput/Phone";
import { PhoneIcon } from "@/app/global-components/Icons/PhoneIcon";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";

function CallInput() {
   const methods = useForm();
   const [loading, setLoading] = useState(false);
   const [ip, setIP] = useState("");

   useEffect(() => {
      const getData = async () => {
         const res = await axios.get("https://api.ipify.org/?format=json");
         setIP(res.data.ip);
      };
      getData();
   }, []);

   const headers = {
      "x-real-ip": ip,
   };

   const onSubmit = async (formData) => {
      setLoading(true);
      try {
         await axios.post(
            "https://app.bland.ai/api/welcome/call",
            {
               phoneNumber: formData.phone_number,
               firstName: formData.name,
            },
            {
               headers,
            }
         );
      } catch (error) {
         console.error("Error during API call:", error);
      }
      setLoading(false);
   };

   return (
      <FormProvider {...methods}>
         <form
            className={styles.wrapper}
            onSubmit={methods.handleSubmit(onSubmit)}
         >
            <Phone fieldName="phone_number" />
            <input
               {...methods.register("name")}
               className={styles.input}
               placeholder="Your Name"
            />
            <input className={styles.input} placeholder="Company" />
            <Button
               type="submit"
               style={{ width: "100%", justifyContent: "center" }}
            >
               <PhoneIcon />
               {!loading ? "Call Me" : "Calling..."}
            </Button>
         </form>
      </FormProvider>
   );
}

export default CallInput;
