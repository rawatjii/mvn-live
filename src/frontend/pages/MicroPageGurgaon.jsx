import React, { Suspense, useEffect, useState } from "react";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import MicroHighlights from "../components/MicroPage/Highlights";
import MicroPrice from "../components/MicroPage/Price";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroMasterPlan from "../components/MicroPage/MasterPlan";
import MicroFloorPlan from "../components/MicroPage/FloorPlan";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import PeacockSection from "../components/MicroPage/PeacockSection";
import Video2 from "../components/MicroPage/Video2";
import Video3 from "../components/MicroPage/PartyVideo";
import MasterBedroom from "../components/MicroPage/MasterBedroom";
import Slides from "../components/MicroPage/Slides";
import Walkthrough from "../components/MicroPage/Walkthrough";
import Renders from "../components/MicroPage/Renders";
import LivingRoomVideo from "../components/MicroPage/LivingRoomVideo";
import GurgaonLoader from "../../common/Loader/Homepage/Index";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import Typology from './../components/homepage/Typology';
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";

const MicroPageGurgaon = ({ data }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    if (!heroLoaded) {
      // Add overflow: hidden to the body when heroLoaded is false
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when heroLoaded is true
      document.body.style.overflow = "";
    }
  
    // Cleanup function to reset the body overflow if the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [heroLoaded]);

  return (
    <>
      {/* Show Loader until hero section is loaded */}
      {!heroLoaded && (
        <GurgaonLoader />
      )}

      {/* Render Hero Section */}
      <MicroHero data={data} onLoadComplete={() => setHeroLoaded(true)} />

      {/* Render other components only after Hero Section is loaded */}

      {heroLoaded && (
        <>

          <MicroOverview data={data} /> {/*no isssue*/}
          <LargeElevationSection data={data.LargeElevationSection} /> {/*no isssue*/}
          <PeacockSection data={data} /> {/*no isssue*/}
          {/*no isssue*/}
          {/* {<Video2 data={data} />}  */}
          <LivingRoomVideoGurugram data={data}  />
          <Video3 data={data} /> {/*no isssue*/}
          <MasterBedroom data={data} /> {/*no isssue*/}
          <Walkthrough data={data.Walkthrough} /> {/*no isssue*/}
          {/* No polution zone location */}
          <Renders data={data} />  {/*no isssue*/}
          <MicroHighlights data={data.highlight} />  {/*no isssue*/}
          {/* <MicroPrice />  */}
          <MicroAmenities data={data.amenities} />
          <MicroFloorPlan data={data.floorPlan} />
          <MicroLocationMap data={data.locationAdvantage} />


          <NoPolutionZone /> {/*no isssue*/}
<Typology  />

          {/* <Slides /> */}
          <div className="container-fluid micro_footer">
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Enquire />
              </div>
              <div className="col-sm-6 px-0">
              <EnquireForm projectName={'MVN-AeroOne-Gurgaon'}/>
              </div>
            </div>
          </div>
        </>
      )}
        
        
    </>
  );
};

export default MicroPageGurgaon;
