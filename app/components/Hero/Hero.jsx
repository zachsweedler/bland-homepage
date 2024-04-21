import React from "react";
import styles from "./hero.module.css";
import CallInput from "./CallInput/CallInput";

function Hero() {
   return (
         <div className={styles.wrapper}>
            <div className={styles.heading_wrapper}>
               <p className={styles.subheading}>Build, Test, & Scale AI</p>
               <h1 className={styles.heading}>Phone Agents</h1>
            </div>
            <CallInput />
         </div>

   );
}

export default Hero;
