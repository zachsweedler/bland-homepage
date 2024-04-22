"use client";
import React from "react";
import styles from "./callinput.module.css";
import Button from "@/app/global-components/Button/Button";
import Phone from "@/app/global-components/PhoneInput/Phone";
import { PhoneIcon } from "@/app/global-components/Icons/PhoneIcon";
import { FormProvider, useForm } from "react-hook-form";
import { sendCall } from "@/app/actions";

function CallInput() {
   const methods = useForm();

   const onSubmit = async (formData) => {
      await sendCall(formData);
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
               type="button"
               style={{ width: "100%", justifyContent: "center" }}
            >
               <PhoneIcon />
               Call Me
            </Button>
         </form>
      </FormProvider>
   );
}

export default CallInput;
