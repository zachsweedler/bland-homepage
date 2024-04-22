import React from "react";
import styles from "./scalability.module.css";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import TwoColSec from "@/app/global-components/TwoColSec/TwoColSec";
import Container from "@/app/global-components/Container/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Scalability() {
   return (
      <Container large>
         <div className={styles.wrapper}>
            <SectionTitle
               heading={
                  <p>
                     Scale with
                     <br />
                     <span className={styles.enterprise}>enterprise-grade</span>
                     <br />
                     capabilities
                  </p>
               }
               subheading="Scalability"
               buttonText="Contact Sales"
               linkText="Get Started"
            />
            <TwoColSec
               index="01"
               heading={<p>Fine Tuning</p>}
               description="Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination."
               link="Contact Sales"
               bgColor="#F2F2EC"
               graphic={
                  <Image
                     src="/scalability/fine-tuning.svg"
                     className={styles.sms_iphone}
                     alt=""
                     width={382}
                     height={395}
                  />
               }
            />
            <TwoColSec
               flip
               index="02"
               heading={
                  <p>
                     Custom
                     <br />
                     Tools
                  </p>
               }
               description="Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination."
               link="Contact Sales"
               bgColor="#5A36EC"
               graphic={
                  <Marquee autoFill>
                     <Image
                        src="/scalability/custom-tools/calcom.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                     />
                     <Image
                        src="/scalability/custom-tools/calendly.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                     />
                     <Image
                        src="/scalability/custom-tools/stripe.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                     />
                     <Image
                        src="/scalability/custom-tools/zapier.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                     />
                  </Marquee>
               }
            />
            <TwoColSec
               index="03"
               heading={
                  <p>
                     Dedicated
                     <br />
                     Infrastructure
                  </p>
               }
               description="Even during moments of high volume, your enterprise’ infrastructure is partitioned from our general API, increasing the reliability of your phone agents."
               link="Contact Sales"
               bgColor="#261C5D"
               graphic={
                  <Image
                     src="/scalability/infrastructure/serverrack.svg"
                     className={styles.sms_iphone}
                     alt=""
                     width={576}
                     height={276}
                  />
               }
            />
            <TwoColSec
               flip
               index="04"
               heading={
                  <p>
                     Trust &<br />
                     Safety
                  </p>
               }
               description="We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole."
               link="Contact Sales"
               bgColor="#F2F2EC"
               graphic={
                  <Marquee>
                     <Image
                        src="/scalability/security/vault2.svg"
                        className={styles.sms_iphone}
                        alt=""
                        width={84}
                        height={79}
                     />
                     <Image
                        src="/scalability/security/vault3.svg"
                        className={styles.sms_iphone}
                        alt=""
                        width={112}
                        height={105}
                     />
                     <Image
                        src="/scalability/security/vault1.svg"
                        className={styles.sms_iphone}
                        alt=""
                        width={232}
                        height={225}
                     />
                     <Image
                        src="/scalability/security/vault4.svg"
                        className={styles.sms_iphone}
                        alt=""
                        width={84}
                        height={79}
                     />
                     <Image
                        src="/scalability/security/vault5.svg"
                        className={styles.sms_iphone}
                        alt=""
                        width={112}
                        height={105}
                     />
                  </Marquee>
               }
            />
         </div>
      </Container>
   );
}

export default Scalability;
