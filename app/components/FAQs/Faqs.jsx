import React from "react";
import styles from "./faq.module.css";
import Accordian from "@/app/global-components/Accordian/Accordian";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import { HorzDivider } from "@/app/global-components/Divider/Divider";
import Container from "@/app/global-components/Container/Container";

function FAQs() {
   return (
    <Container large>
      <div className={styles.wrapper}>
 
            <SectionTitle heading="Your questions answered" subheading="FAQs" />
            <div className={styles.accordian_wrapper}>
               <div className={styles.accordian_col}>
                  <HorzDivider />
                  <Accordian question="What is Bland’s pricing?" answer="" />
                  <HorzDivider />
                  <Accordian question="Does Bland work outside the US?" answer="" />
                  <HorzDivider />
                  <Accordian question="Can I create a phone agent that speaks non-english languages?" answer="" />
                  <HorzDivider />
                  <Accordian question="If I’m not a developer, can I still use Bland?" answer="" />
                  <HorzDivider />
               </div>
               <div className={styles.accordian_col}>
                  <HorzDivider />
                  <Accordian question="How do I access Bland Turbo?" answer="" />
                  <HorzDivider />
                  <Accordian question="Does Bland work for Inbound calling?" answer="" />
                  <HorzDivider />
                  <Accordian question="How many phone calls can Bland handle at any given time?" answer="" />
                  <HorzDivider />
                  <Accordian question="Can I create a custom phone agent with my company’s data?" answer="" />
                  <HorzDivider />
                  <Accordian question="What features does Bland Enterprise offer?" answer="" />
                  <HorzDivider />
               </div>
            </div>
 
      </div>
      </Container>
   );
}

export default FAQs;
