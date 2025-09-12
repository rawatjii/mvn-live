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
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import SliderTypology from "../components/MicroPage/bangalore/SliderTypology";
import AthensBanner from "../components/MicroPage/athens/AthensBanner";
import FeatureSection from "../components/MicroPage/athens/FeatureSection";
import ParallaxSection from "../../common/ParallaxSection";
import Construction from "./Construction";
import MetaComponents from "../components/MetaComponents";

const MicroPageGurgaonPhase3 = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Math.floor(localStorage.getItem("count") || 0)
  );
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const { pageSections, projectName } = data;

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const bannerRef = useRef(null);

const scrollToSection = (sectionKey) => {
    const section = document.getElementById(sectionKey);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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

          <div id="microOverview" ref={(el) => (sectionRefs.current.microOverview = el)}>
            <MicroOverview data={data.overview} heroLoadedStatus={heroLoaded} />{" "}
          </div>
          <div id="downloadBrochure" ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
            <DownloadBrochure
              name="DOWNLOAD MVN ATHENS ID BROCHURE"
              projectName="MVN Athens Gurgaon PH-2"
            />
          </div>
           <div  id="features" ref={(el) => (sectionRefs.current.features = el)}>
              <FeatureSection data={data.features} />
          </div>

          <div id="MicroAmenities" ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
              <ParallaxSection section_data={data.amenities} />
          </div>

          <div id="MicroTypology" ref={(el) => (sectionRefs.current.MicroTypology = el)}>
            <SliderTypology
              data={data.typologies}
              onLoadComplete={() => setTypologyLoaded(true)}
            />
          </div>

          <div id="MicroLocationMap" ref={(el) => (sectionRefs.current.MicroLocationMap = el)}>
            <MicroLocationMap data={data.locationAdvantage} />
          </div>

          <div>
            <Construction data={data.construction} />
          </div>

          <div
            className="container-fluid micro_footer"
            ref={(el) => (sectionRefs.current.Enuqiry = el)}
          >
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Enquire />
              </div>
              <div className="col-sm-6 px-0">
                <EnquireForm projectName={"MVN Athens Gurgaon PH-2"} />
              </div>
            </div>
          </div>

          <Footer />

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaonPhase3;
