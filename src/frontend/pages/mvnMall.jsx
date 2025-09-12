import React, { useEffect, useState, useRef, Suspense } from "react";
import MicroOverview from "../components/MicroPage/Overview";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Footer from "../components/Footer";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import { Helmet } from "react-helmet";
import MicroHeader from "../components/MicroHeader";
import AthensBanner from "../components/MicroPage/athens/AthensBanner";
import CustomIframe from "../components/MicroPage/CustomIframe";
import Strip from "../components/homepage/Strip11";
import ParallaxSection from "../../common/ParallaxSection";
import MetaComponents from "../components/MetaComponents";

const MvnMall1 = ({ data }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  const sectionRefs = useRef({});

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const bannerRef = useRef(null);

const scrollToSection = (sectionKey) => {
  const section = document.getElementById(sectionKey);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <>
    <MetaComponents/>

      <MicroHeader
        scrollToSection={scrollToSection}
        data={data.header}
        isFixed={isHeaderFixed}
      />

      <div ref={bannerRef}>
        <AthensBanner
          data={data.banner}
          onBannerExit={setIsHeaderFixed}
          isMainBanner={true}
        />
      </div>

      <div className="mt-5 mt-md-0 mb-md-5">
        <Strip />
      </div>

      <div id="microOverview">
        <MicroOverview data={data.overview} heroLoadedStatus={heroLoaded} />
      </div>

      <div id="downloadBrochure">
        <DownloadBrochure
          projectName="MVN Mall Dwarka Expressway"
          showAwards={true}
        />
      </div>
        <div  id="landscape">
      <CustomIframe data={data.mvnMallVideo} />
      </div>

      <div id="gallery">
        <ParallaxSection section_data={data.amenities} />
      </div>

      <div id="MicroLocationMap">
        <MicroLocationMap data={data.locationAdvantage} />
      </div>
      <div
        className="container-fluid micro_footer"
        ref={(el) => (sectionRefs.current.Enuqiry = el)}
      >
        <div className="row">
          <div className="col-sm-6 px-0">
            <Enquire />
          </div>
          <div className="col-sm-6 px-0">
            <EnquireForm projectName={"MVN Mall Dwarka Expressway"} />
          </div>
        </div>
      </div>

      <Footer />

      {/* <ScrollTop /> */}
    </>
  );
};

export default MvnMall1;
