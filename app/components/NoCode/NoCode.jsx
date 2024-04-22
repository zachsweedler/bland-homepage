import React from "react";
import styles from "./nocode.module.css";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import Card from "@/app/global-components/Card/Card";
import Container from "@/app/global-components/Container/Container";
import Image from "next/image";

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
                     darkBg
                     outsideText
                     heading="Dashboard"
                     subheading="Send test calls, tweak agent settings, and create conversational pathways without code."
                     linkText="Go to Respell"
                     graphic={
                        <Image
                           src="/nocode/devdash.png"
                           className={styles.screenshot}
                           alt=""
                           width={489}
                           height={315}
                        />
                     }
                  />
                  <Card
                     darkBg
                     outsideText
                     heading="Respell"
                     subheading="Bland integrated with Respell, a no-code platform for generative AI."
                     linkText="Go to Respell"
                     graphic={
                        <Image
                           src="/nocode/respell.png"
                           className={styles.screenshot}
                           alt=""
                           width={489}
                           height={315}
                        />
                     }
                  />
               </div>
            </div>
         </Container>
      </div>
   );
}

export default NoCode;
