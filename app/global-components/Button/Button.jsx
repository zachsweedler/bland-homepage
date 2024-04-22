import React from "react";
import styles from "./button.module.css";

function Button({ href, children, ...props }) {
   return (
      <a href={href}>
         <button className={styles.button} {...props}>{children}</button>
      </a>
   );
}

export default Button;
