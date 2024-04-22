'use client'
import React, { useState } from "react";
import styles from "./code_preview.module.css";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
   javascript,
   java,
   python,
   curl,
   csharp,
   php,
   ruby,
} from "./codeStrings";

function CodePreview() {
   const codeStrings = {
      CURL: curl,
      JAVASCRIPT: javascript,
      PYTHON: python,
      'C#': csharp,
      PHP: php,
      RUBY: ruby,
      JAVA: java,
   };

   const [activeLanguage, setActiveLanguage] = useState("CURL");

   const customStyle = {
      lineHeight: "1.5",
      fontSize: "1rem",
      borderRadius: "5px",
      backgroundColor: "transparent",
      color: "white",
      fontSize: "12px",
      width: "100%",
      padding: '0px'
   };

   const handleLanguageClick = (language) => {
      setActiveLanguage(language);
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles.language_wrapper}>
            {Object.keys(codeStrings).map((language) => (
               <div
                  key={language}
                  className={`${styles.language_button} ${
                     activeLanguage === language ? styles.active : ""
                  }`}
                  onClick={() => handleLanguageClick(language)}
               >
                  {language}
               </div>
            ))}
         </div>
         <SyntaxHighlighter
            language={activeLanguage.toLowerCase()}
            customStyle={customStyle}
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
            style={vs2015}
            wrapLines={true} 
         >
            {codeStrings[activeLanguage]}
         </SyntaxHighlighter>
      </div>
   );
}

export default CodePreview;
