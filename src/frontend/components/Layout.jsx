
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';

import Header from "./Header";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

// Register GSAP plugins

gsap.registerPlugin(ScrollSmoother);

const Layout = ({children})=>{
  const [isAerooneGurgaon, setIsAerooneGurgaon] = useState(false);
  const { pathname } = useLocation();

  useEffect(()=>{
    setIsAerooneGurgaon(pathname.includes('aeroone-gurgaon'));
    window.scrollTo(0, 0);
  }, [pathname])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 1.4,
      });

      smoother.scrollTo(0);

      return () => {
        smoother.kill();
      };
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);


  return(
    <>
      

      <Header />
      <div id="smooth-wrapper"  >
        <div id="smooth-content" >
        {children}
          <Footer />
        </div>
      </div>
      
      {/* <ScrollTop /> */}
    </>
  )
}

export default Layout;