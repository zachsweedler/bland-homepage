import React from "react";
import styles from "./nocode.module.css";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import Card from "@/app/global-components/Card/Card";
import Container from "@/app/global-components/Container/Container";

function NoCode() {
   return (
      <div className={styles.wrapper}>
         <Container large>
            <div className={styles.content}>
               <SectionTitle
                  heading={
                     <p>
                        No code?
                        <br />
                        No problem.
                     </p>
                  }
                  subheading="For everyone"
                  buttonText="Get Started"
                  linkText="Contact Sales"
               />
               <div className={styles.card_wrapper}>
                  <Card
                     outsideText
                     heading="Dynamic Data"
                     subheading="Integrate APIs to inject live data into phone calls."
                     linkText="Contact Sales"
                     darkBg
                  />
                  <Card
                     outsideText
                     heading="Dynamic Data"
                     subheading="Integrate APIs to inject live data into phone calls."
                     linkText="Contact Sales"
                     darkBg
                  />
               </div>
            </div>
         </Container>
      </div>
   );
}

export default NoCode;
