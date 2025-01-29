import React, { useEffect, useState, useRef, Suspense } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";
import { Helmet } from "react-helmet";

import MicroHeader from "../components/MicroHeader";
import MicroHero from "../components/MicroPage/Hero";
import { useMatches } from "../../theme/theme";
const MicroOverview = React.lazy(()=>import("../components/MicroPage/Overview"));
const LargeElevationSection = React.lazy(()=>import("../components/MicroPage/LargeElevationSection"));
const Walkthrough = React.lazy(()=>import("../components/MicroPage/Walkthrough"));
const DownloadBrochure = React.lazy(()=>import("../components/MicroPage/DownloadBrochure"));

const PeacockSection = React.lazy(() =>
  import("../components/MicroPage/PeacockSection")
);
const LivingRoomVideoGurugram = React.lazy(() =>
  import("../components/MicroPage/LivingRoomVideoGurugram")
);
const PartyVideo = React.lazy(() =>
  import("../components/MicroPage/PartyVideo"));

const MasterBedroom = React.lazy(() =>
  import("../components/MicroPage/MasterBedroom"));

const Consultant = React.lazy(() =>
  import("../components/MicroPage/Consultant")
);
const ImageGallery = React.lazy(() =>
  import("../components/MicroPage/ImagesGallery")
);
const ConstructionTechnology = React.lazy(() =>
  import("../components/MicroPage/ConstructionTechnology")
);
const MicroAmenities = React.lazy(() =>
  import("../components/MicroPage/Amenities")
);
const Typology = React.lazy(() => import("../components/homepage/Typology"));
const MicroFloorPlan = React.lazy(() =>
  import("../components/MicroPage/FloorPlan")
);
const MicroLocationMap = React.lazy(() =>
  import("../components/MicroPage/LocationMap")
);
const MvnMall = React.lazy(() => import("../components/MicroPage/MvnMall"));
const NoPolutionZone = React.lazy(() =>
  import("../components/MicroPage/NoPolutionZone")
);
const Enquire = React.lazy(() => import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(() =>
  import("../components/homepage/EnquireForm")
);
const Footer = React.lazy(() => import("../components/Footer"));

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MicroPageGurgaon1 = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const { pageSections, projectName } = data;
  const { isMobile } = useMatches(); 

  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  };

  // useEffect(() => {
  //   if (heroLoaded) {
  //     smootherRef.current = ScrollSmoother.create({
  //       wrapper: "#smooth-wrapper",
  //       content: "#smooth-content",
  //       smooth: 1.5,
  //       effects: true,
  //       smoothTouch: 1.4,
  //     });
  //   }
  //   return () => {
  //     if (smootherRef.current) {
  //       smootherRef.current.kill();
  //       smootherRef.current = null;
  //     }
  //   };
  // }, [heroLoaded]);

  return (
    <>
      <MicroHeader
        scrollToSection={scrollToSection}
        data={data.header}
      />

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
            <MicroHero />
          </div>

          <Suspense fallback="">
            <MicroOverview data={data} />
          </Suspense>

          <Suspense fallback="">
            <LargeElevationSection data={data.LargeElevationSection} />
          </Suspense>

          <div ref={(el) => (sectionRefs.current.Walkthrough = el)}>
            <Suspense fallback="">
              <Walkthrough  />
            </Suspense>
          </div>

          <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
            <Suspense fallback="">
              <DownloadBrochure />
            </Suspense>
          </div>

          <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
            <Suspense fallback="">
              <PeacockSection
                data={data.peacock_section}
                onLoadComplete={() => setPeacockLoaded(true)}
                isMobile={isMobile}
              />
            </Suspense>
          </div>

          <Suspense fallback="">
            <div>
              <LivingRoomVideoGurugram
                data={data.living_room}
                onLoadComplete={() => setLivingRoomLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div>
              <PartyVideo
                data={data.party_video}
                onLoadComplete={() => setPartyLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div>
              <MasterBedroom
                data={data.masterBedroom}
                onLoadComplete={() => setMasterBedroomLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </Suspense>
          

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.consultant = el)}>
              <Consultant data={data.consultant} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroLandscape = el)}>
              <ImageGallery data={data.landscape} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroElevation = el)}>
              <ImageGallery  data={data.microElevation} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroApartment = el)}>
              <ImageGallery data={data.microApartment} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div
              ref={(el) => (sectionRefs.current.constructionTechnology = el)}
            >
              <ConstructionTechnology />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
              <MicroAmenities section_data={data.amenities} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroTypology = el)
              }
            >
              <Typology onLoadComplete={() => setTypologyLoaded(true)} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroFloorPlan = el)}>
              <MicroFloorPlan data={data.floorPlan} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroLocationMap = el)}>
              <MicroLocationMap data={data.locationAdvantage} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MVNMALL = el)}>
              <MvnMall />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.NoPolutionZone = el)}>
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
                  <EnquireForm projectName={"MVN Aeroone"} />
                </Suspense>
              </div>
            </div>
          </div>

          <Suspense fallback="">
            <Footer />
          </Suspense>
        {/* </div>
      </div> */}

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaon1;
