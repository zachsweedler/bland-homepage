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
               buttonLink="https://app.bland.ai/login"
               linkHref="https://app.bland.ai/enterprise"
            />
            <TwoColSec
               index="01"
               heading={<p>Fine Tuning</p>}
               description="Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination."
               link="Contact Sales"
               bgColor="#F2F2EC"
               graphic={
                  <div className={styles.fine_tuning}>
                     <Image
                        src="/scalability/fine-tuning.svg"
                        alt=""
                        fill={true}
                        style={{
                           objectFit: "contain",
                        }}
                     />
                  </div>
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
                  <div className={styles.integration_wrapper}>
                     <Image
                        src="/scalability/custom-tools/calcom.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <Image
                        src="/scalability/custom-tools/calendly.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <Image
                        src="/scalability/custom-tools/stripe.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <Image
                        src="/scalability/custom-tools/zapier.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <Image
                        src="/scalability/custom-tools/calcom.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <Image
                        src="/scalability/custom-tools/calendly.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <Image
                        src="/scalability/custom-tools/stripe.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <Image
                        src="/scalability/custom-tools/zapier.svg"
                        className={styles.integration_logo}
                        alt=""
                        width={85}
                        height={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                  </div>
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
                     className={styles.server_rack}
                     alt=""
                     width={576}
                     height={276}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <div className={styles.vault_wrapper}>
                     <Marquee>
                        <Image
                           src="/scalability/security/vault2.svg"
                           className={styles.vault}
                           alt=""
                           width={84}
                           height={79}
                        />
                        <Image
                           src="/scalability/security/vault3.svg"
                           className={styles.vault}
                           alt=""
                           width={112}
                           height={105}
                        />
                        <Image
                           src="/scalability/security/vault1.svg"
                           className={styles.vault}
                           alt=""
                           width={232}
                           height={225}
                           style={{ marginLeft: "30px" }}
                        />
                        <Image
                           src="/scalability/security/vault4.svg"
                           className={styles.vault}
                           alt=""
                           width={84}
                           height={79}
                        />
                        <Image
                           src="/scalability/security/vault5.svg"
                           className={styles.vault}
                           alt=""
                           width={112}
                           height={105}
                        />
                     </Marquee>
                  </div>
               }
            />
         </div>
      </Container>
   );
}

export default Scalability;
