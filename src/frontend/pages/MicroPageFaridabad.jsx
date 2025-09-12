import React, { useEffect, useState, useRef, Suspense } from "react";
import MicroOverview from "../components/MicroPage/Overview";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Footer from "../components/Footer";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Helmet } from "react-helmet";
import MicroHeader from "../components/MicroHeader";
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import SliderTypology from "../components/MicroPage/bangalore/SliderTypology";
import AthensBanner from "../components/MicroPage/athens/AthensBanner";
import ParallaxSection from "../../common/ParallaxSection";
import MetaComponents from "../components/MetaComponents";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MicroPageFaridabad = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Math.floor(localStorage.getItem('count') || 0)
  );
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const {pageSections, projectName} = data;

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const bannerRef = useRef(null);


  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  };

  useEffect(() => {
    if (heroLoaded) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 1.4,
      });
    }
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [heroLoaded]);

  return (
    <>

      
   <MetaComponents/>

      <MicroHeader scrollToSection={scrollToSection} data={data.header} isFixed={ isHeaderFixed }/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
        <div ref={bannerRef}
          >
          <AthensBanner data={data.banner}
            onBannerExit={setIsHeaderFixed} 
            isMainBanner={true} />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.microOverview = el)
            }
          >
          <MicroOverview data={data.overview} heroLoadedStatus={heroLoaded} /> {/*no isssue*/}
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <DownloadBrochure name="DOWNLOAD MVN ATHENS ID BROCHURE" projectName="MVN Athens Faridabad" />
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.gallery = el)
            }
          >
            <ImagesGallery data={data.gallery}/>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroAmenities = el)
            }>
            <ParallaxSection section_data={data.amenities} />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroTypology = el)
            }
          >
            <SliderTypology data={data.typologies} onLoadComplete={() => setTypologyLoaded(true)} />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroLocationMap = el)
            }
          >
            <MicroLocationMap
              data={data.locationAdvantage}
            />
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
                <EnquireForm
                  projectName={"MVN Athens Faridabad"}
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageFaridabad;
