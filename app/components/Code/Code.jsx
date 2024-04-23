import React from "react";
import styles from "./code.module.css";
import Container from "@/app/global-components/Container/Container";
import Button from "@/app/global-components/Button/Button";
import CodePreview from "./Preview/CodePreview";

function Code() {
   return (
      <div className={styles.wrapper}>
         <Container large>
            <div className={styles.col_wrapper}>
               <div className={styles.col}>
                  <div className={styles.copy_wrapper}>
                     <div className={styles.heading_wrapper}>
                        <p className={styles.subheading}>Integrate Fast</p>
                        <h2>Send a call in 10 lines</h2>
                     </div>
                     <p className={styles.description}>
                        Get your API key and $2 free credits when you sign up.
                     </p>
                     <Button href="https://docs.bland.ai/welcome-to-bland">Read The Docs</Button>
                  </div>
               </div>
               <div className={styles.col}>
                  <CodePreview />
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Code;
