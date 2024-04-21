import React from "react";
import styles from "./textlink.module.css";

function TextLink({ children, ...props }) {
   return (
      <div {...props}>
         <a className={styles.link}>{children}</a>
      </div>
   );
}

export default TextLink;
