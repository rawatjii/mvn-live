import React, { useEffect, useState, useRef } from "react";
import MicroOverview from "../components/MicroPage/Overview";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Walkthrough from "../components/MicroPage/Walkthrough";
import Footer from "../components/Footer";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Helmet } from "react-helmet";
import MicroHeader from "../components/MicroHeader";
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import ScrollTriggerFrames from "../components/MicroPage/ScrollTriggerFrames";
import BangaloreElevationSection from "../components/MicroPage/bangalore/BangaloreElevationSection";
import SliderTypology from "../components/MicroPage/bangalore/SliderTypology";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
 
const MicroPageBangalore = ({ data, loadingCount, setLoadingCount }) => {
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

      <MicroHeader scrollToSection={scrollToSection} data={data.header} isFixed={ isHeaderFixed }/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          <div ref={bannerRef}>
            <ScrollTriggerFrames 
            data={data.micro_hero_section}
            onLoadComplete={() => setHeroLoaded(true)}
            onBannerExit={setIsHeaderFixed} 
            isMainBanner={true} 
            />
          </div>
          {/* Render other components only after Hero Section is loaded */}

          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
          <MicroOverview data={data.overview} heroLoadedStatus={heroLoaded} /> {/*no isssue*/}
          </div>
          <BangaloreElevationSection/>

          
          <div
            ref={(el) =>
              (sectionRefs.current.Walkthrough = el)
            }
          >
            <Walkthrough data={data.walkthrough}/>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <DownloadBrochure />
          </div>
          {/* <div
            ref={(el) =>
              (sectionRefs.current.livingRoom = el)
            }>
            <ScrollTriggerFrames 
            data={data.living_room}
            onLoadComplete={() => setLivingRoomLoaded(true)}
            />
          </div> */}
          {/* <div 
            ref={(el) =>
              (sectionRefs.current.masterBedroom = el)
            }>
            <ScrollTriggerFrames 
            data={data.masterBedroom}
            onLoadComplete={() => setMasterBedroomLoaded(true)}
            />
          </div> */}
          <div
            ref={(el) =>
              (sectionRefs.current.MicroLandscape = el)
            }
          >
            <ImagesGallery data={data.landscape}/>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroElevation = el)
            }
          >
            <ImagesGallery data={data.microElevation}/>
          </div>

         <div
            ref={(el) =>
              (sectionRefs.current.MicroApartment = el)
            }
          >
            <ImagesGallery data={data.microApartment}/>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroAmenities = el)
            }>
            <MicroAmenities section_data={data.amenities} />
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
                  projectName={"MVN Aeroone"}
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

export default MicroPageBangalore;
