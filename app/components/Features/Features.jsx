import React from "react";
import styles from "./features.module.css";
import Container from "@/app/global-components/Container/Container";
import Card from "@/app/global-components/Card/Card";
import SectionTitle from "@/app/global-components/SectionTitle/SectionTitle";
import Image from "next/image";
import WavePlayer from "./WavePlayer/WavePlayer";

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
               buttonLink="https://app.bland.ai/login"
               linkHref="https://app.bland.ai/enterprise"
            />
            <div className={styles.grid}>
               <Card
                  insideText
                  className={styles.grid_1}
                  heading="Batch Calls"
                  subheading="Send or receive millions of calls simultaneously"
                  graphic={
                     <div className={styles.graphic_wrapper}>
                        <Image
                           src="/features/batch/person1.svg"
                           className={styles.person_1}
                           alt=""
                           width={140}
                           height={140}
                        />
                        <Image
                           src="/features/batch/person2.svg"
                           className={styles.person_2}
                           alt=""
                           width={90}
                           height={90}
                        />
                        <Image
                           src="/features/batch/person3.svg"
                           className={styles.person_3}
                           alt=""
                           width={190}
                           height={190}
                        />
                        <Image
                           src="/features/batch/person4.svg"
                           className={styles.person_4}
                           alt=""
                           width={90}
                           height={90}
                        />
                        <Image
                           src="/features/batch/phone.svg"
                           className={styles.phone}
                           alt=""
                           width={179}
                           height={179}
                        />
                     </div>
                  }
               />
               <Card
                  insideText
                  className={styles.grid_2}
                  heading="Voices & Language"
                  subheading="Select from our library or create a voice clone."
                  graphic={<WavePlayer className={styles.wave_player} />}
               />
               <Card
                  insideText
                  className={styles.grid_3}
                  heading="Dynamic Data"
                  subheading="Integrate APIs to inject live data into phone calls."
                  graphic={
                     <Image
                        src="/features/dynamic-data.svg"
                        className={styles.dynamic_data}
                        alt=""
                        width={429}
                        height={300}
                     />
                  }
               />
               <Card
                  top
                  insideText
                  className={styles.grid_4}
                  heading="SMS"
                  subheading="Enable your agent to respond via SMS"
                  graphic={
                     <Image
                        src="/features/iphone-sms.png"
                        className={styles.sms_iphone}
                        alt=""
                        width={313}
                        height={545}
                     />
                  }
               />
               <Card
                  insideText
                  className={styles.grid_5}
                  heading="Live Transfers"
                  subheading="Conditionally transfer calls to a human."
                  graphic={
                     <Image
                        src="/features/live-transfer.svg"
                        className={styles.live_transfers}
                        alt=""
                        width={330}
                        height={82}
                     />
                  }
               />
               <Card
                  insideText
                  className={styles.grid_6}
                  heading="Pathways"
                  subheading="Gain greater control over your AI agent and the conversational flow."
                  graphic={
                     <Image
                        src="/features/pathways.svg"
                        className={styles.pathways}
                        alt=""
                        width={1590}
                        height={567}
                     />
                  }
               />
            </div>
         </div>
      </Container>
   );
}

export default Features;
