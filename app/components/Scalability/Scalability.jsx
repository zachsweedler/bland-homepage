import React from "react";
import styles from "./scalability.module.css";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import TwoColSec from "@/app/global-components/TwoColSec/TwoColSec";
import Container from "@/app/global-components/Container/Container";

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
               buttonText="Get Started"
               linkText="Contact Sales"
            />
            <TwoColSec
               index="01"
               heading={<p>Fine Tuning</p>}
               description="Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination."
               link="Contact Sales"
               bgColor="#F2F2EC"
               graphic=""
            />
            <TwoColSec
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
               graphic=""
               flip
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
               bgColor="#F2F2EC"
               graphic=""
            />
            <TwoColSec
               index="04"
               heading={
                  <p>
                     Trust &<br />
                     Safety
                  </p>
               }
               description="We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole."
               link="Contact Sales"
               bgColor="#8F74FF"
               graphic=""
               flip
            />
         </div>
      </Container>
   );
}

export default Scalability;
