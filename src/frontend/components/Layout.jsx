import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  const [isAerooneGurgaon, setIsAerooneGurgaon] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsAerooneGurgaon(pathname.includes("aeroone-gurgaon"));
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <Header />
      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
          {children}
          <Footer />
        {/* </div>
      </div> */}
    </>
  );
};

export default Layout;
