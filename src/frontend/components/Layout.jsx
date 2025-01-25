
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

import 'bootstrap/dist/css/bootstrap.min.css';

// Register GSAP plugins

const Layout = ({children})=>{
  const [isAerooneGurgaon, setIsAerooneGurgaon] = useState(false);
  const { pathname } = useLocation();

  useEffect(()=>{
    setIsAerooneGurgaon(pathname.includes('aeroone-gurgaon'));
    window.scrollTo(0, 0);
  }, [pathname])


  return(
    <>
      

      <Header />
      {children}
      {/*<div id="smooth-wrapper"  >
        <div id="smooth-content" >
          
          <Footer />
        </div>
      </div>*/}
      
      {/* <ScrollTop /> */}
    </>
  )
}

export default Layout;