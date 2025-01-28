import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from "gsap/ScrollSmoother";

import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Layout = ({ children }) => {
  const [isAerooneGurgaon, setIsAerooneGurgaon] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsAerooneGurgaon(pathname.includes("aeroone-gurgaon"));
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!wrapper || !content) {
      console.error("ScrollSmoother wrapper or content is missing.");
      return;
    }

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 1.4,
    });

    setTimeout(() => {
      smoother.scrollTo(0);
    }, 100);

    return () => {
      smoother.kill();
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
