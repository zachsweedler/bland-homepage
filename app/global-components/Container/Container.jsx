import React from "react";
import styles from "./container.module.css";

function Container({ large, medium, small, xsmall, children, ...props}) {
   const sizeClass = large
      ? styles.large
      : medium
      ? styles.medium
      : small
      ? styles.small
      : xsmall
      ? styles.xsmall
      : styles.large;
   return <div className={`${styles.container} ${sizeClass}`} {...props}>{children}</div>;
}

export default Container;
