import React from "react";
import styles from "./logos.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

function Logos() {
   const logos = [
      {
         url: "/clients/airbnb.svg",
         alt: "airbnb",
      },
      {
         url: "/clients/coinbase.svg",
         alt: "coinbase",
      },
      {
         url: "/clients/dominos.svg",
         alt: "dominos",
      },
      {
         url: "/clients/ycombinator.svg",
         alt: "ycombinator",
      },
      {
         url: "/clients/nookit.svg",
         alt: "nookit",
      },
   ];

   return (
      <Container
         large
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "120px",
         }}
      >
         <div className={styles.fade_left} />
         <div className={styles.fade_right} />
         <Marquee autoFill={true}>
            {logos.map((img, index) => (
               <Image
                  key={index}
                  src={img.url}
                  alt={img.alt}
                  width={100}
                  height={100}
                  className={styles.logo_wrapper}
               />
            ))}
         </Marquee>
      </Container>
   );
}

export default Logos;
