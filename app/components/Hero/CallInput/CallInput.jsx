"use client";
import React, { useEffect, useState } from "react";
import styles from "./callinput.module.css";
import Button from "@/app/global-components/Button/Button";
import Phone from "@/app/global-components/PhoneInput/Phone";
import { PhoneIcon } from "@/app/global-components/Icons/PhoneIcon";
import { FormProvider, useForm } from "react-hook-form";
import { sendCall } from "@/app/actions";

function CallInput() {
   const methods = useForm();
   const [loading, setLoading] = useState(false);

   const onSubmit = async (formData) => {
      setLoading(true);
      await sendCall(formData);
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
