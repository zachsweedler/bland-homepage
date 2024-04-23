import React from "react";
import styles from "./faq.module.css";
import Accordian from "@/app/global-components/Accordian/Accordian";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import Container from "@/app/global-components/Container/Container";

function FAQs() {
   return (
      <Container large>
         <div className={styles.wrapper}>
            <SectionTitle
               heading="Your questions answered"
               subheading="FAQs"
               alignLeft
            />
            <div className={styles.accordian_wrapper}>
               <div>
                  <Accordian
                     question="What is Bland’s pricing?"
                     answer={
                        <p>
                           Bland costs $0.09/minute, only for connected calls,
                           billed to the exact second. To learn about volume
                           discounts and enterprise solutions,{" "}
                           <span>
                              <a
                                 href="https://app.bland.ai/enterprise"
                                 className={styles.link}
                              >
                                 submit an inquiry here.
                              </a>
                           </span>
                        </p>
                     }
                  />
                  <Accordian
                     question="Does Bland work outside the US?"
                     answer={
                        <p>
                           Yes, Bland can make calls outside the US, including
                           in Australia, the United Kingdom, India, and the rest
                           of the world. Email the team at{" "}
                           <span>
                              <a
                                 href="mailto:hello@bland.ai"
                                 className={styles.link}
                              >
                                 hello@bland.ai
                              </a>
                           </span>{" "}
                           to confirm your region is available.
                        </p>
                     }
                  />
                  <Accordian
                     question="Can I create a phone agent that speaks non-english languages?"
                     answer={
                        <p>
                           Yes you can, using Bland’s voice cloning
                           functionality to create a voice for any language -
                           from French to German, Spanish, etc.
                        </p>
                     }
                  />
                  <Accordian
                     question="If I’m not a developer, can I still use Bland?"
                     answer={
                        <p>
                           If you aren&apos;t a developer, you can integrate
                           Bland using Zapier or Make. Join the{" "}
                           <span>
                              <a
                                 href="https://discord.com/invite/8xGGg2KfH7"
                                 className={styles.link}
                              >
                                 Discord community
                              </a>
                           </span>{" "}
                           to meet and get support from other no-code builders.
                        </p>
                     }
                  />

                  <Accordian
                     question="How do I access Bland Turbo?"
                     answer={
                        <p>
                           You can access Bland Turbo via the developer portal.
                           Get started{" "}
                           <span>
                              <a
                                 href="https://app.bland.ai"
                                 className={styles.link}
                              >
                                 here
                              </a>
                           </span>
                           .
                        </p>
                     }
                  />
               </div>
               <div>
                  <Accordian
                     question="Does Bland work for Inbound calling?"
                     answer={
                        <p>
                           Yes, you can configure Bland AI phone agents to
                           answer inbound phone calls. To create your inbound
                           phone agent, visit the{" "}
                           <span>
                              <a
                                 href="https://app.bland.ai"
                                 className={styles.link}
                              >
                                 Bland developer portal
                              </a>
                           </span>
                        </p>
                     }
                  />
                  <Accordian
                     question="How many phone calls can Bland handle at any given time?"
                     answer={
                        <p>
                           You can dispatch or receive thousands of phone calls
                           at once, using Bland. To scale further, Bland will
                           provide dedicated infrastructure for your enterprise.
                           Connect with one of our solutions engineers{" "}
                           <span>
                              <a
                                 href="https://discord.com/invite/8xGGg2KfH7"
                                 className={styles.link}
                              >
                                 here
                              </a>
                           </span>
                           .
                        </p>
                     }
                  />
                  <Accordian
                     question="Can I create a custom phone agent with my company’s data?"
                     answer={
                        <p>
                           Bland will fine-tune a custom language model for your
                           enterprise, using prior conversation data. To inquire
                           about a custom model, contact our team{" "}
                           <span>
                              <a
                                 href="https://discord.com/invite/8xGGg2KfH7"
                                 className={styles.link}
                              >
                                 here
                              </a>
                           </span>
                           .
                        </p>
                     }
                  />
                  <Accordian
                     question="What features does Bland Enterprise offer?"
                     answer={
                        <p>
                           Custom models, removed rate limits (for unlimited
                           scale), and enterprise-level support from Bland AI’s
                           solutions engineers. Learn more{" "}
                           <span>
                              <a
                                 href="https://discord.com/invite/8xGGg2KfH7"
                                 className={styles.link}
                              >
                                 here
                              </a>
                           </span>
                           .
                        </p>
                     }
                  />
               </div>
            </div>
         </div>
      </Container>
   );
}

export default FAQs;
