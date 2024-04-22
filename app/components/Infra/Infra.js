"use client";
import React from "react";
import styles from "./infra.module.css";
import Container from "@/app/global-components/Container/Container";
import Earth from "./Earth/Earth";
import TextLink from "@/app/global-components/TextLink/TextLink";
import Button from "@/app/global-components/Button/Button";

function Infra() {
   return (
      <Container large>
         <div className={styles.wrapper}>
            <div className={styles.heading_wrapper}>
               <h2 className={styles.heading}>
                  The infrastructure for building AI<br/>phone calling
                  applications at scale.
               </h2>
               <div className={styles.cat}>
                  <TextLink>Contact Sales</TextLink>
                  <Button>Get Started</Button>
               </div>
            </div>
            <div className={styles.globe}>
               <Earth />
            </div>
         </div>
      </Container>
   );
}

export default Infra;
