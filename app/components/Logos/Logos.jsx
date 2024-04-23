import React from "react";
import styles from "./logos.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

function Logos() {
   const logos = [
      {
         url: "/clients/accenture.svg",
         alt: "accenture",
      },
      {
         url: "/clients/advantismed.svg",
         alt: "advantismed",
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
         url: "/clients/divvy.svg",
         alt: "divvy",
      },
      {
         url: "/clients/gohighlevel.svg",
         alt: "gohighlevel",
      },
      {
         url: "/clients/servicenow.svg",
         alt: "servicenow",
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
                  height={10}
                  className={styles.logo_wrapper}
               />
            ))}
         </Marquee>
      </Container>
   );
}

export default Logos;
