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
import DownloadBrochureAeroone from "../components/MicroPage/DownloadBrochureAeroone";
import ContactInfoAeroone from "../components/ContactInfoAeroone";
import PeacockSectionAeroone from "../components/MicroPage/PeacockSectionAeroone";
import ConsultantAeroone from "../components/MicroPage/ConsultantAeroone";
import ImagesGalleryAeroone from "../components/MicroPage/ImagesGalleryAeroone";
import ConstructionTechnologyAeroone from "../components/MicroPage/ConstructionTechnologyAeroone";
import ParallaxSectionAeroone from "../../common/ParallaxSectionAeroone";
import TypologyAeroone from "../components/homepage/TypologyAeroone";
import MicroFloorPlanAeroone from "../components/MicroPage/FloorPlanAeroone";
import MicroLocationMapAeroone from "../components/MicroPage/LocationMapAeroone";
import MvnMallAeroone from "../components/MicroPage/MvnMallAeroone";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";

const MicroOverview = React.lazy(() =>
  import("../components/MicroPage/Overview")
);

const PartyVideo = React.lazy(() =>
  import("../components/MicroPage/PartyVideo")
);

const MasterBedroom = React.lazy(() =>
  import("../components/MicroPage/MasterBedroom")
);

const Footer = React.lazy(() => import("../components/Footer"));

const MicroPageGurgaon1 = ({ data, loadingCount, setLoadingCount }) => {
  const sectionRefs = useRef({});
  const { isMobile } = useMatches();

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const scrollToSection = (sectionKey) => {
    console.log(sectionKey);

    const section = document.getElementById(sectionKey);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div id="overview">
        <MicroOverviewAeroone data={data.overview} />
      </div>
      {/* elevationData */}
      <div id="Walkthrough">
        {data?.elevationData?.map((item, index) => (
          <div key={index}>
            <div className="mt_80 mt_sm_30 mb-md-5">
              <LargeElevationSection1Aeroone {...item} />
            </div>
          </div>
        ))}
      </div>

      <div id="">
        <LargeElevationSectionAeroone data={data.LargeElevationSection} />
      </div>

      <div>
        <YtIframeAeroone data={data.walkthrough} subs_btn={true} />
      </div>

      <div>
        <DownloadBrochureAeroone
          showAwards={API_URL + "assets/aeroone/awards.webp"}
          name={"MVN Aero One Residence "}
        />
      </div>

      <div id="dgm_sales">
        <ContactInfoAeroone white={true} />
      </div>

      <div id="peacock">
        <PeacockSectionAeroone data={data.peacock_section} />
      </div>

      <div id="party">
        <PeacockSectionAeroone
          data={data.party_video}
          watermarkClass="style5"
          desktop_img="assets/images/aeroone/party/desktop.webp"
          mobile_img="assets/images/aeroone/party/mobile.webp"
        />
      </div>

      <div id="master_bedroom">
        <PeacockSectionAeroone
          data={data.masterBedroom}
          watermarkClass="style5"
          desktop_img="assets/images/aeroone/bedroom/desktop.webp"
          mobile_img="assets/images/aeroone/bedroom/mobile.webp"
        />
      </div>

      <div id="about_architect">
        <ConsultantAeroone data={data.architect} />
      </div>

      <div id="landscape">
        <ImagesGalleryAeroone data={data.landscape} />
      </div>

      <div id="construction_technology">
        <ConstructionTechnologyAeroone data={data.construction_technology} />
      </div>

      <div id="amenities">
        <ParallaxSectionAeroone section_data={data.amenities} />
      </div>

      <div id="typologies">
        <TypologyAeroone data={data.typology} />
      </div>

      <div id="floor_plan">
        <MicroFloorPlanAeroone data={data.floorPlan} />
      </div>

      <div id="location_map">
        <MicroLocationMapAeroone
          data={data.locationAdvantage}
          projectName="aeroone-gurgaon"
        />
      </div>

      <div id="mvn_mall">
        <MvnMallAeroone data={data.mvnMall} />
      </div>

      <div className="container-fluid micro_footer">
        <div className="row ">
          <div className="col-sm-6 px-0">
            <Enquire />
          </div>
          <div className="col-sm-6 px-0">
            <EnquireForm projectName={"MVN Aeroone"} />
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
