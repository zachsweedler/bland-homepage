import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GlobalError from "./global-error";
import StyledComponentsRegistry from "@/lib/registry";
import Nav from "./global-components/Nav/Nav";
import "./globals.css";

export const metadata = {
   title: "Bland AI | Phone Calling Platform",
   description: "The platform for AI phone calling",
};

export default function RootLayout({ children }) {
   return (
      <>
         <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
         </head>
         <html lang="en">
            <ErrorBoundary fallback={<GlobalError />}>
               <body>
                  <Nav />
                  <StyledComponentsRegistry>
                     {children}
                  </StyledComponentsRegistry>
               </body>
            </ErrorBoundary>
         </html>
      </>
   );
}
