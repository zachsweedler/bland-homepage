import React from "react";
import styles from "./nav.module.css";
import TextLink from "../TextLink/TextLink";
import Button from "../Button/Button";

function Nav() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.logo_wrapper}>BLAND AI</div>
         <div className={styles.menu_items_wrapper}>
            <TextLink>Docs</TextLink>
            <TextLink>Pricing</TextLink>
            <TextLink>Demo</TextLink>
            <TextLink>No Code</TextLink>
            <TextLink>Enterprise</TextLink>
         </div>
         <div className={styles.cat_wrapper}>
            <TextLink>Contact Sales</TextLink>
            <Button>Dashboard</Button>
         </div>
      </div>
   );
}

export default Nav;
