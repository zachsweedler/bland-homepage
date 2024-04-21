import React from "react";
import styles from "./footer.module.css";
import Container from "../Container/Container";
import TextLink from "../TextLink/TextLink";

function Footer() {
   return (
      <div className={styles.wrapper}>
         <Container large style={{height: '100%'}}>
            <div className={styles.menus_wrapper}>
               <div className={styles.menu}>
                  <p>BLAND AI</p>
                  <p>The platform for AI phone calling</p>
               </div>
               <div className={styles.menu}>
                  <TextLink>Enterprise</TextLink>
                  <TextLink>Documentation</TextLink>
                  <TextLink>Blog</TextLink>
                  <TextLink>Contact</TextLink>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Footer;
