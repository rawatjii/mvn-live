import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from '../../common/ScrollToTop';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScrollTop from "../../common/ScrollToTop/Index";


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const Layout = ({children})=>{
  const [isAerooneGurgaon, setIsAerooneGurgaon] = useState(false);
  const { pathname } = useLocation();

  useEffect(()=>{
    setIsAerooneGurgaon(pathname.includes('aeroone-gurgaon'));
    window.scrollTo(0, 0);
  }, [pathname])

  useEffect(()=>{
  
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,// how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 1.4, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    })

    // Scroll to the top when the layout is mounted
    setTimeout(() => {
      smoother.scrollTo(0);
    }, 100);

    return ()=>{
      smoother.kill();
    }
  }, [pathname])

  return(
    <>
      <Helmet>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
          `}
        </script>

        <script
          async
          src={
          isAerooneGurgaon
            ? "https://www.googletagmanager.com/gtag/js?id=G-P7MQ5KWWGL"
            : "https://www.googletagmanager.com/gtag/js?id=G-T5WPYZN1FC"
          }
        ></script>

        <script>
          {`
            gtag('js', new Date());
            gtag('config', '${isAerooneGurgaon ? 'G-P7MQ5KWWGL' : 'G-T5WPYZN1FC'}');
          `}
        </script>
      </Helmet>

      <Header />
      <div id="smooth-wrapper"  >
        <div id="smooth-content" >
          {children}
          {/* <Outlet /> */}
          <Footer />
        </div>
      </div>
      
      {/* <ScrollTop /> */}
    </>
  )
}

export default Layout;