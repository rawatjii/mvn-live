import React, {
  useEffect,
  useState,
  useRef,
  Suspense,
  useCallback,
} from "react";
import { Helmet } from "react-helmet";

import MicroHeader from "../components/MicroHeader";
import MicroHero from "../components/MicroPage/Hero";
import { useMatches } from "../../theme/theme";
import MicroAmenities from "../components/MicroPage/Amenities";
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";
import View360 from "../components/MicroPage/360";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import LargeElevationSection1 from "../components/MicroPage/LargeElevationSection1";
import MicroHeaderStatic from "../components/MicroHeadeStatic";
import Walkthrough from "../components/MicroPage/Walkthrough";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import YtIframe from "../components/MicroPage/YtIframe";

const MicroOverview = React.lazy(() =>
  import("../components/MicroPage/Overview")
);
const DownloadBrochure = React.lazy(() =>
  import("../components/MicroPage/DownloadBrochure")
);
const ParallaxSection = React.lazy(() =>
  import("../../common/ParallaxSection")
);

const PeacockSection = React.lazy(() =>
  import("../components/MicroPage/PeacockSection")
);

const PartyVideo = React.lazy(() =>
  import("../components/MicroPage/PartyVideo")
);

const MasterBedroom = React.lazy(() =>
  import("../components/MicroPage/MasterBedroom")
);

const Consultant = React.lazy(() =>
  import("../components/MicroPage/Consultant")
);
const ImageGallery = React.lazy(() =>
  import("../components/MicroPage/ImagesGallery")
);
const ConstructionTechnology = React.lazy(() =>
  import("../components/MicroPage/ConstructionTechnology")
);
const Typology = React.lazy(() => import("../components/homepage/Typology"));
const MicroFloorPlan = React.lazy(() =>
  import("../components/MicroPage/FloorPlan")
);
const MicroLocationMap = React.lazy(() =>
  import("../components/MicroPage/LocationMap")
);
const MvnMall = React.lazy(() => import("../components/MicroPage/MvnMall"));

const Enquire = React.lazy(() => import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(() =>
  import("../components/homepage/EnquireForm")
);
const Footer = React.lazy(() => import("../components/Footer"));


const MicroPageGurgaon1 = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const [is360Show, setIs360Show] = useState(true);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const { pageSections, projectName } = data;
  const { isMobile } = useMatches();

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const bannerRef = useRef(null);

  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  };

  const show360Video = useCallback(() => {
    setIs360Show(true);
  }, [is360Show]);

  return (
    <>
      <MicroHeaderStatic
        scrollToSection={scrollToSection}
        data={data.header}
        isFixed={isHeaderFixed}
      />

          <div>
            <LivingRoomVideoGurugram
              onBannerExit={setIsHeaderFixed} 
              isMainBanner={true}
              data={data.living_room}
              onLoadComplete={() => setLivingRoomLoaded(true)}
              isMobile={isMobile}
            />
          </div>

            <MicroOverview data={data.overview} />

            {/* elevationData */}
            {data?.elevationData?.map((item, index) => (
            <div key={index}>
              <div className="mt_80 mt_sm_30 mb-md-5">
                  <LargeElevationSection1 {...item} />
              </div>
            </div>
          ))}

          <div>
           <LargeElevationSection data={data.LargeElevationSection} />
          </div>

          <div>
            <Suspense fallback={<p></p>}>
              <YtIframe data={data.walkthrough} subs_btn={true} />
            </Suspense>
          </div>

          <div>
            <Suspense fallback="">
              <DownloadBrochure
                is360Available={false}
                show360Video={show360Video}
                showAwards={true}
              />
            </Suspense>
          </div>

          {/* <Suspense fallback="">
          {is360Show ? (
            <View360
              data={data.view360}
              onLoadComplete={() => ScrollTrigger.refresh()}
              isMobile={isMobile}
            />
          ) : null}
          </Suspense>
          

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
                showAwards={true}
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
              <ImageGallery data={data.microElevation} />
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
              <ConstructionTechnology data={data.construction_technology} />
            </div>
          </Suspense>

          <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
            <ParallaxSection section_data={data.amenities} />
          </div>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroTypology = el)}>
              <Typology onLoadComplete={() => setTypologyLoaded(true)} data={data.typology} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroFloorPlan = el)}>
              <MicroFloorPlan data={data.floorPlan} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MicroLocationMap = el)}>
              <MicroLocationMap data={data.locationAdvantage} projectName="aeroone-gurgaon"  />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MVNMALL = el)}>
              <MvnMall data={data.mvnMall} />
            </div>
          </Suspense>

          <div ref={(el) => (sectionRefs.current.NoPolutionZone = el)}>
            <ParallaxSection section_data={data.noPollutionZone} />
          </div>

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
          </Suspense> */}

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaon1;
