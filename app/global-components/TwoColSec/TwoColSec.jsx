import React from "react";
import styles from "./twocolsec.module.css";
import TextLink from "../TextLink/TextLink";

function TwoColSec({
   index,
   heading,
   description,
   link,
   bgColor,
   graphic,
   flip,
}) {
   return (
      <div className={flip ? styles.wrapper_flipped : styles.wrapper}>
         <div className={styles.copy_col}>
            <div className={styles.heading_wrapper}>
               <p className={styles.index}>{index}</p>
               <h2>{heading}</h2>
            </div>
            <div className={styles.description_wrapper}>
               <p>{description}</p>
               <TextLink className={styles.link}>{link}</TextLink>
            </div>
         </div>
         <div className={styles.img_col} style={{ backgroundColor: bgColor }}>
            {graphic}
         </div>
      </div>
   );
}

export default TwoColSec;
