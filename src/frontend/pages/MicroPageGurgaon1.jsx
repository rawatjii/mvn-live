import React, { useEffect, useState, useRef, Suspense } from "react";
import { Helmet } from "react-helmet";
import ScrollSmoother from "gsap/ScrollSmoother";


import MicroHeader from "../components/MicroHeader";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import Walkthrough from "../components/MicroPage/Walkthrough";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";


const PeacockSection = React.lazy(()=>import("../components/MicroPage/PeacockSection"));
const LivingRoomVideoGurugram = React.lazy(()=>import("../components/MicroPage/LivingRoomVideoGurugram"));
const Consultant = React.lazy(()=>import("../components/MicroPage/Consultant"));
const MicroLandscape = React.lazy(()=>import("../components/MicroPage/Landscape"));
const MicroElevation = React.lazy(()=>import("../components/MicroPage/MicroElevation"));
const MicroApartment = React.lazy(()=>import("../components/MicroPage/MicroApartment"));
const ConstructionTechnology = React.lazy(()=>import("../components/MicroPage/ConstructionTechnology"));
const MicroAmenities = React.lazy(()=>import("../components/MicroPage/Amenities"));
const Typology = React.lazy(()=>import("../components/homepage/Typology"));
const MicroFloorPlan = React.lazy(()=>import("../components/MicroPage/FloorPlan"));
const MicroLocationMap = React.lazy(()=>import("../components/MicroPage/LocationMap"));
const MvnMall = React.lazy(()=>import("../components/MicroPage/MvnMall"));
const NoPolutionZone = React.lazy(()=>import("../components/MicroPage/NoPolutionZone"));
const Enquire = React.lazy(()=>import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(()=>import("../components/homepage/EnquireForm"));
const Footer = React.lazy(()=>import("../components/Footer"));


const MicroPageGurgaon1 = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const {pageSections, projectName} = data;


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
      
        <MicroHeader scrollToSection={scrollToSection} sectionsMenus={pageSections} projectName={projectName} />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          

          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
              <MicroHero />
          </div>

          <MicroOverview data={data} /> 
          
          <LargeElevationSection data={data.LargeElevationSection} />
          
          <div
            ref={(el) =>
              (sectionRefs.current.Walkthrough = el)
            }
          >
              <Walkthrough data={data.Walkthrough} />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
              <DownloadBrochure />
          </div>


          <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
            {/* <Suspense fallback="">
              <PeacockSection
                data={data}
                onLoadComplete={() => setPeacockLoaded(true)}
                isMobile={isMobile}
              />
            </Suspense> */}
          </div>


          {/* <Suspense fallback="">
            <div>
              <LivingRoomVideoGurugram
                data={data}
                onLoadComplete={() => setLivingRoomLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </Suspense> */}

          
          

          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.consultant = el)
              }
            >
              <Consultant data={data.consultant} />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroLandscape = el)
              }
            >
              <MicroLandscape />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroElevation = el)
              }
            >
              <MicroElevation />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroApartment = el)
              }
            >
              <MicroApartment />
            </div>
          </Suspense>
         
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.constructionTechnology = el)
              }
            >
              <ConstructionTechnology />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroAmenities = el)
              }>
              <MicroAmenities data={data.amenities} />
            </div>
          </Suspense>

          {/* <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroTypology = el)
              }
            >
              <Typology onLoadComplete={() => setTypologyLoaded(true)} />
            </div>
          </Suspense> */}
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroFloorPlan = el)
              }
            >
              <MicroFloorPlan data={data.floorPlan} />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroLocationMap = el)
              }
            >
              <MicroLocationMap
                data={data.locationAdvantage}
              />
            </div>  
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) => (sectionRefs.current.MVNMALL = el)}
            >
              <MvnMall />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.NoPolutionZone = el)
              }
            >
              <NoPolutionZone data={data.noPollutionZone} />
            </div>
          </Suspense>

          <div
            className="container-fluid micro_footer"
            ref={(el) => (sectionRefs.current.Enuqiry = el)}
          >
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Suspense fallback="">
                  <Enquire />
                </Suspense>
              </div>
              <div className="col-sm-6 px-0">
                <Suspense fallback="">
                  <EnquireForm
                    projectName={"MVN Aeroone"}
                  />
                </Suspense>
              </div>
            </div>
          </div>

          <Suspense fallback="">
            <Footer />
          </Suspense>
        </div>
      </div>

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaon1;
