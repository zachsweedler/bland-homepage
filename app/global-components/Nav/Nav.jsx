import React from "react";
import styles from "./nav.module.css";
import TextLink from "../TextLink/TextLink";
import Button from "../Button/Button";

function Nav() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.logo_wrapper}>BLAND AI</div>
         <div className={styles.menu_items_wrapper}>
            <TextLink href="https://docs.bland.ai/welcome-to-bland">
               Docs
            </TextLink>
            <TextLink href="https://app.bland.ai/enterprise">Demo</TextLink>
            <TextLink href="https://zapier.com/apps/bland-ai/integrations">
               No Code
            </TextLink>
            <TextLink href="https://app.bland.ai/enterprise">
               Enterprise
            </TextLink>
         </div>
         <div className={styles.cat_wrapper}>
            <TextLink href="https://app.bland.ai/login">Login</TextLink>
            <Button href="https://app.bland.ai/enterprise">
               Contact Sales
            </Button>
         </div>
      </div>
   );
}

export default Nav;
