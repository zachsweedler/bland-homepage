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
            <SectionTitle heading="Your questions answered" subheading="FAQs" alignLeft/>
            <div className={styles.accordian_wrapper}>
               <div className={styles.accordian_col}>
                  <HorzDivider />
                  <Accordian
                     question="What is Bland’s pricing?"
                     answer="Bland costs $0.09/minute, only for connected calls, billed to the exact second. To learn about volume discounts and enterprise solutions, submit an inquiry here."
                  />
                  <HorzDivider />
                  <Accordian
                     question="Does Bland work outside the US?"
                     answer="Yes, Bland can make calls outside the US, including in Australia, the United Kingdom, India, and the rest of the world. Email the team at hello@bland.ai to confirm your region is available."
                  />
                  <HorzDivider />
                  <Accordian
                     question="Can I create a phone agent that speaks non-english languages?"
                     answer="Yes you can, using Bland’s voice cloning functionality to create a voice for any language - from French to German, Spanish, etc."
                  />
                  <HorzDivider />
                  <Accordian
                     question="If I’m not a developer, can I still use Bland?"
                     answer="If you aren’t a developer, you can integrate Bland using Zapier or Make. Join the Discord community to meet and get support from other no-code builders."
                  />
                  <HorzDivider />
                  <Accordian
                     question="How do I access Bland Turbo?"
                     answer="You can access Bland Turbo via the developer portal. Get started here."
                  />
                  <HorzDivider/>
               </div>
               <div className={styles.accordian_col}>
                  <HorzDivider />
                  <Accordian
                     question="Does Bland work for Inbound calling?"
                     answer="Yes, you can configure Bland AI phone agents to answer inbound phone calls. To create your inbound phone agent, visit the Bland developer portal."
                  />
                  <HorzDivider />
                  <Accordian
                     question="How many phone calls can Bland handle at any given time?"
                     answer="You can dispatch or receive thousands of phone calls at once, using Bland. To scale further, Bland will provide dedicated infrastructure for your enterprise. Connect with one of our solutions engineers here."
                  />
                  <HorzDivider />
                  <Accordian
                     question="Can I create a custom phone agent with my company’s data?"
                     answer="Bland will fine-tune a custom language model for your enterprise, using prior conversation data. To inquire about a custom model, contact our team here."
                  />
                  <HorzDivider />
                  <Accordian
                     question="What features does Bland Enterprise offer?"
                     answer="Custom models, removed rate limits (for unlimited scale), and enterprise-level support from Bland AI’s solutions engineers. Learn more here."
                  />
                  <HorzDivider />
               </div>
            </div>
         </div>
      </Container>
   );
}

export default FAQs;
