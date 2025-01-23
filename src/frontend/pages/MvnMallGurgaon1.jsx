import React from "react";
import "../../frontend/components/MvnMall/mvnstyle.css";
import Banner from "../components/MvnMall/Banner";
import Lux_Scrolling from "../components/MvnMall/Lux_Scrolling";
import OverviewSec from "../components/MvnMall/OverviewSec";
import Spec_Sec from "../components/MvnMall/Spec_Sec";
import Experience_Sec from "../components/MvnMall/Experience_Sec";
import LocationSec from "../components/MvnMall/LocationSec";

const MvnMallGurgaon = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Banner />
      <Lux_Scrolling />
      <OverviewSec />
      <Spec_Sec />
      <Experience_Sec />
      <LocationSec />
    </>
  );
};

export default MvnMallGurgaon;
