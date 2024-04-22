
import Code from "./components/Code/Code";
import FAQs from "./components/FAQs/Faqs";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Infra from "./components/Infra/Infra";
import Logos from "./components/Logos/Logos";
import NoCode from "./components/NoCode/NoCode";
import Scalability from "./components/Scalability/Scalability";
import Versatility from "./components/Versatility/Versatility";
import Footer from "./global-components/Footer/Footer";


export default function Home() {
   return (
      <div style={{paddingTop: '60px'}}>
         <Hero/>
         <Logos/>
         <Infra/>
         <Features/>
         <Code/>
         <Scalability/>
         <NoCode/>
         {/* <Versatility/> */}
         <FAQs/>
         <Footer/>
      </div>
   );
}
