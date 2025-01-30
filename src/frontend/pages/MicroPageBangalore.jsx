import React, { useEffect, useState, useRef, Suspense, useMemo } from "react";

// Load critical components normally
import MicroHeader from "../components/MicroHeader";
import Footer from "../components/Footer";
import ScrollTriggerFrames from "../components/MicroPage/ScrollTriggerFrames";

// Lazy load non-critical components
const MicroOverview = React.lazy(() => import("../components/MicroPage/Overview"));
const MicroAmenities = React.lazy(() => import("../components/MicroPage/Amenities"));
const MicroLocationMap = React.lazy(() => import("../components/MicroPage/LocationMap"));
const Enquire = React.lazy(() => import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(() => import("../components/homepage/EnquireForm"));
const Walkthrough = React.lazy(() => import("../components/MicroPage/Walkthrough"));
const DownloadBrochure = React.lazy(() => import("../components/MicroPage/DownloadBrochure"));
const ImagesGallery = React.lazy(() => import("../components/MicroPage/ImagesGallery"));
const BangaloreElevationSection = React.lazy(() => import("../components/MicroPage/bangalore/BangaloreElevationSection"));
const SliderTypology = React.lazy(() => import("../components/MicroPage/bangalore/SliderTypology"));

const MicroPageBangalore = ({ data }) => {
  const sectionRefs = useRef([]);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  // Memoize data to avoid unnecessary re-renders
  const memoizedData = useMemo(() => data, [data]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MicroHeader data={memoizedData.header} isFixed={isHeaderFixed} />

        <div>
          {/* Hero Section */}
          <div>
            <ScrollTriggerFrames 
              data={memoizedData.micro_hero_section}
              onBannerExit={setIsHeaderFixed}
              isMainBanner={true}
            />
          </div>

          {/* Other Sections */}
          <div ref={(el) => (sectionRefs.current[0] = el)}>
            <MicroOverview data={memoizedData.overview} />
          </div>

          <BangaloreElevationSection />

          <div ref={(el) => (sectionRefs.current[1] = el)}>
            <Walkthrough data={memoizedData.walkthrough} />
          </div>

          <div ref={(el) => (sectionRefs.current[2] = el)}>
            <DownloadBrochure />
          </div>

          <div ref={(el) => (sectionRefs.current[3] = el)}>
            <ScrollTriggerFrames data={memoizedData.living_room} />
          </div>

          <div ref={(el) => (sectionRefs.current[4] = el)}>
            <ScrollTriggerFrames data={memoizedData.masterBedroom} />
          </div>

          <div ref={(el) => (sectionRefs.current[5] = el)}>
            <ImagesGallery data={memoizedData.landscape} />
          </div>

          <div ref={(el) => (sectionRefs.current[6] = el)}>
            <ImagesGallery data={memoizedData.microElevation} />
          </div>

          <div ref={(el) => (sectionRefs.current[7] = el)}>
            <ImagesGallery data={memoizedData.microApartment} />
          </div>

          <div ref={(el) => (sectionRefs.current[8] = el)}>
            <MicroAmenities section_data={memoizedData.amenities} />
          </div>

          <div ref={(el) => (sectionRefs.current[9] = el)}>
            <SliderTypology data={memoizedData.typologies} />
          </div>

          <div ref={(el) => (sectionRefs.current[10] = el)}>
            <MicroLocationMap data={memoizedData.locationAdvantage} />
          </div>

          <div className="container-fluid micro_footer" ref={(el) => (sectionRefs.current[11] = el)}>
            <div className="row">
              <div className="col-sm-6 px-0">
                <Enquire />
              </div>
              <div className="col-sm-6 px-0">
                <EnquireForm projectName={"MVN Aeroone"} />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default MicroPageBangalore;
