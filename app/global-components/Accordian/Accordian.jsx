'use client'
import React, { useState } from "react";
import styles from "./accordian.module.css";

function Accordian({ question, answer }) {
   const [answerShown, setAnswerShown] = useState(false);

   return (
      <div className={styles.wrapper}>
         <div
            className={styles.question_wrapper}
            onClick={() => setAnswerShown(!answerShown)}
         >
            <p className={styles.question}>{question}</p>
            <div className={styles.question}>{/* <ArrowDownIcon /> */}</div>
         </div>
         {answerShown && (
            <div className={styles.answer_wrapper}>
               <p>{answer}</p>
            </div>
         )}
      </div>
   );
}

export default Accordian;
