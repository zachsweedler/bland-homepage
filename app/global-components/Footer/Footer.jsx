import React from "react";
import styles from "./footer.module.css";
import Container from "../Container/Container";
import TextLink from "../TextLink/TextLink";

function Footer() {
   return (
      <div className={styles.wrapper}>
         <Container large style={{ height: "100%" }}>
            <div className={styles.menus_wrapper}>
               <div className={styles.menu}>
                  <p className={styles.logo}>BLAND AI</p>
                  <p>The platform for AI phone calling</p>
               </div>
               <div className={styles.menu}>
                  <TextLink href="https://app.bland.ai/enterprise">
                     Enterprise
                  </TextLink>
                  <TextLink href="https://docs.bland.ai/welcome-to-bland">
                     Documentation
                  </TextLink>
                  <TextLink href="mailto:hello@bland.ai">Contact</TextLink>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Footer;
