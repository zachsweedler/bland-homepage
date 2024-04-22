import React from "react";
import styles from "./card.module.css";
import TextLink from "../TextLink/TextLink";

function Card({
   heading,
   subheading,
   top,
   graphic,
   insideText,
   outsideText,
   linkText,
   linkHref,
   darkBg,
   height,
   ...props
}) {
   return (
      <div {...props} style={{ width: "100%" }}>
         <div className={darkBg ? styles.wrapper_dark : styles.wrapper } style={{height: height}}>
            {graphic}
            {insideText && (
               <div
                  className={
                     top
                        ? styles.heading_wrapper_top
                        : styles.heading_wrapper_bottom
                  }
               >
                  <h4>{heading}</h4>
                  <p className={styles.subheading}>{subheading}</p>
               </div>
            )}
         </div>
         {outsideText && (
            <div className={styles.heading_wrapper_outside}>
               <h4>{heading}</h4>
               <p className={styles.subheading}>{subheading}</p>
               <TextLink href={linkHref} className={styles.link_text}>{linkText}</TextLink>
            </div>
         )}
      </div>
   );
}

export default Card;
