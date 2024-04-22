import React from "react";
import styles from "./textlink.module.css";

function TextLink({ href, children, ...props }) {
   return (
      <div {...props}>
         <a className={styles.link} href={href}>{children}</a>
      </div>
   );
}

export default TextLink;
