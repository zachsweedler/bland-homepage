import React from "react";
import styles from "./versatility.module.css";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import Card from "@/app/global-components/Card/Card";
import Container from "@/app/global-components/Container/Container";

function Versatility() {
   return (
      <div className={styles.wrapper}>
         <Container large>
            <div className={styles.content}>
               <div className={styles.sticky_wrapper}>
                  <SectionTitle
                     heading={
                        <p>
                           Scale with
                           <br />
                           <span className={styles.enterprise}>
                              enterprise-grade
                           </span>
                           <br />
                           capabilities
                        </p>
                     }
                     subheading="Scalability"
                     buttonText="Get Started"
                     linkText="Contact Sales"
                     buttonLink="https://app.bland.ai/login"
                     linkHref="https://app.bland.ai/enterprise"
                  />
               </div>
               <div className={styles.col}>
                  <Card
                     outsideText
                     heading="Inbound Sales"
                     subheading="Boost your conversion rate as much as 8x by calling inbound leads the moment they fill out your website form."
                  />
                  <Card
                     outsideText
                     heading="Customer Support"
                     subheading="Offer a 24/7 support agent to answer customers’ questions and collect their contact info to call back later."
                  />
                  <Card
                     outsideText
                     heading="B2B Data Collection"
                     subheading="Call pharmacies, apartment complexes, and larger organizations to collect and create valuable datasets."
                  />
                  <Card
                     outsideText
                     heading="Ordering & Reservations"
                     subheading="Automate ordering and reservations for businesses such as restaurants."
                  />
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Versatility;
