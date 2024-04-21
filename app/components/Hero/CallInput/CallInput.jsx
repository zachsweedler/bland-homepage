import React from "react";
import styles from "./callinput.module.css";
import Button from "@/app/global-components/Button/Button";
import Phone from "@/app/global-components/PhoneInput/Phone";
import { PhoneIcon } from "@/app/global-components/Icons/PhoneIcon";

function CallInput() {
   return (
      <form className={styles.wrapper}>
         <Phone />
         <input className={styles.input} placeholder="Your Name" />
         <input className={styles.input} placeholder="Company" />
         <Button>
            <PhoneIcon />
            Call Me
         </Button>
      </form>
   );
}

export default CallInput;
