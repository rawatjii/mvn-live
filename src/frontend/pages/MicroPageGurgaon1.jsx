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
import LivingRoomVideoGurugramAeroone from "../components/MicroPage/LivingRoomVideoGurugramAeroone";
import LargeElevationSection1Aeroone from "../components/MicroPage/LargeElevationSection1Aeroone";
import MicroHeaderStatic from "../components/MicroHeadeStatic";
import Walkthrough from "../components/MicroPage/Walkthrough";
import LargeElevationSectionAeroone from "../components/MicroPage/LargeElevationSectionAeroone";
import YtIframeAeroone from "../components/MicroPage/YtIframeAeroone";
import { API_URL, JSON_URL } from "../../config/config";
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import MicroOverviewAeroone from "../components/MicroPage/OverviewAeroone";
const ContactInfoAeroone = React.lazy(()=>import("../components/ContactInfoAeroone")) ;

const MicroOverview = React.lazy(() =>
  import("../components/MicroPage/Overview")
);
const DownloadBrochureAeroone = React.lazy(() =>
  import("../components/MicroPage/DownloadBrochureAeroone")
);
const ParallaxSectionAeroone = React.lazy(() =>
  import("../../common/ParallaxSectionAeroone")
);

const PeacockSectionAeroone = React.lazy(() =>
  import("../components/MicroPage/PeacockSectionAeroone")
);

const PartyVideo = React.lazy(() =>
  import("../components/MicroPage/PartyVideo")
);

const MasterBedroom = React.lazy(() =>
  import("../components/MicroPage/MasterBedroom")
);

const ConsultantAeroone = React.lazy(() =>
  import("../components/MicroPage/ConsultantAeroone")
);
const ImagesGalleryAeroone = React.lazy(() =>
  import("../components/MicroPage/ImagesGalleryAeroone")
);
const ConstructionTechnologyAeroone = React.lazy(() =>
  import("../components/MicroPage/ConstructionTechnologyAeroone")
);
const TypologyAeroone = React.lazy(() => import("../components/homepage/TypologyAeroone"));
const MicroFloorPlanAeroone = React.lazy(() =>
  import("../components/MicroPage/FloorPlanAeroone")
);
const MicroLocationMapAeroone = React.lazy(() =>
  import("../components/MicroPage/LocationMapAeroone")
);
const MvnMallAeroone = React.lazy(() => import("../components/MicroPage/MvnMallAeroone"));

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
            <LivingRoomVideoGurugramAeroone
              onBannerExit={setIsHeaderFixed} 
              isMainBanner={true}
              data={data.living_room}
              onLoadComplete={() => setLivingRoomLoaded(true)}
              isMobile={isMobile}
            />
          </div>

            <MicroOverviewAeroone data={data.overview} />

            {/* elevationData */}
            {data?.elevationData?.map((item, index) => (
            <div key={index}>
              <div className="mt_80 mt_sm_30 mb-md-5">
                  <LargeElevationSection1Aeroone {...item} />
              </div>
            </div>
          ))}

          <div>
           <LargeElevationSectionAeroone data={data.LargeElevationSection} />
          </div>

          <div>
            <Suspense fallback={<p></p>}>
              <YtIframeAeroone data={data.walkthrough} subs_btn={true} />
            </Suspense>
          </div>

          <div>
            <Suspense fallback="">
              <DownloadBrochureAeroone
                showAwards={API_URL+'assets/aeroone/awards.webp'}
                name={"MVN Aero One Residence "}
              />
            </Suspense>
          </div>

          <div id="dgm_sales">  
            <Suspense fallback={<p></p>}>
              <ContactInfoAeroone white={true} />
            </Suspense>
          </div>

          <div id="peacock">
            <Suspense fallback={<p></p>}>
              <PeacockSectionAeroone data={data.peacock_section} />
            </Suspense>
          </div>

          <div  id="party">
            <Suspense fallback={<p></p>}>
              <PeacockSectionAeroone
                data={data.party_video}
                watermarkClass="style5"
                desktop_img="assets/images/aeroone/party/desktop.webp"
                mobile_img="assets/images/aeroone/party/mobile.webp"
              />
            </Suspense>
          </div>

          <div id="master_bedroom">
          <Suspense fallback={<p></p>}>
            <PeacockSectionAeroone
              data={data.masterBedroom}
              watermarkClass="style5"
              desktop_img="assets/images/aeroone/bedroom/desktop.webp"
              mobile_img="assets/images/aeroone/bedroom/mobile.webp"
            />
          </Suspense>
        </div>

          <div id="about_architect">
            <Suspense fallback={<p></p>}>
              <ConsultantAeroone data={data.architect} />
            </Suspense>
          </div>

            <div >
          <Suspense fallback="">
              <ImagesGalleryAeroone data={data.landscape} />
          </Suspense>
            </div>

            <div>
          <Suspense fallback="">
              <ConstructionTechnologyAeroone data={data.construction_technology} />
          </Suspense>
            </div>

          <div id="amenities">
          <Suspense fallback="">
            <ParallaxSectionAeroone section_data={data.amenities} />
            </Suspense>
          </div>

            <div>
          <Suspense fallback="">
              <TypologyAeroone data={data.typology} />
          </Suspense>
            </div>

            <div >
           <Suspense fallback="">
              <MicroFloorPlanAeroone data={data.floorPlan} />
          </Suspense>
            </div>

            <div>
          <Suspense fallback="">
              <MicroLocationMapAeroone data={data.locationAdvantage} projectName="aeroone-gurgaon"  />
          </Suspense>
            </div>

          <Suspense fallback="">
            <div ref={(el) => (sectionRefs.current.MVNMALL = el)}>
              <MvnMallAeroone data={data.mvnMall} />
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

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaon1;
