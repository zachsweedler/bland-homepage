import React from "react";
import styles from "./section_title.module.css";
import Button from "../Button/Button";
import TextLink from "../TextLink/TextLink";

function SectionTitle({
   heading,
   subheading,
   buttonText,
   alignLeft,
   linkText,
}) {
   return (
      <div className={styles.wrapper}>
         <div className={alignLeft ? styles.heading_wrapper_align_left : styles.heading_wrapper}>
            <p className={styles.subheading}>{subheading}</p>
            <h1 className={styles.heading}>{heading}</h1>
         </div>
         {buttonText && (
            <div className={styles.cat_wrapper}>
               <Button>{buttonText}</Button>
               <TextLink>{linkText}</TextLink>
            </div>
         )}
      </div>
   );
}

export default SectionTitle;
