import React from "react";
import styles from "./features.module.css";
import Container from "@/app/global-components/Container/Container";
import Button from "@/app/global-components/Button/Button";
import TextLink from "@/app/global-components/TextLink/TextLink";
import Card from "@/app/global-components/Card/Card";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";

function Features() {
   return (
      <Container large>
         <div className={styles.wrapper}>
            <SectionTitle
               heading={
                  <p>
                     Put Phone Calls
                     <br />
                     on Autopilot
                  </p>
               }
               subheading="Feature Packed"
               buttonText="Get Started"
               linkText="Contact Sales"
            />
            <div className={styles.grid}>
               <Card
                  insideText
                  className={styles.grid_1}
                  heading="Batch Calls"
                  subheading="Send or receive millions of calls simultaneously"
               />
               <Card
                  insideText
                  className={styles.grid_2}
                  heading="Voices & Language"
                  subheading="Select from our library or create a voice clone."
               />
               <Card
                  insideText
                  className={styles.grid_3}
                  heading="Dynamic Data"
                  subheading="Integrate APIs to inject live data into phone calls."
               />
               <Card
                  insideText
                  className={styles.grid_4}
                  heading="SMS"
                  subheading="Enable your agent to respond via SMS"
                  top
               />
               <Card
                  insideText
                  className={styles.grid_5}
                  heading="Live Transfers"
                  subheading="Conditionally transfer calls to a human."
               />
               <Card
                  insideText
                  className={styles.grid_6}
                  heading="Pathways"
                  subheading="Gain greater control over your AI agent and the conversational flow."
               />
            </div>
         </div>
      </Container>
   );
}

export default Features;
