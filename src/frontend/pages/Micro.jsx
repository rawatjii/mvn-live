import React, { Suspense } from "react";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
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
import PartyVideo from "../components/MicroPage/PartyVideo";
import MasterBedroom from "../components/MicroPage/MasterBedroom";
import Slides from "../components/MicroPage/Slides";
import Walkthrough from "../components/MicroPage/Walkthrough";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import Renders from "../components/MicroPage/Renders";
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";
import Rera from "../components/MicroPage/Rera";
import LivingRoomVideo from "../components/MicroPage/LivingRoomVideo";
import GallerySlider from "../components/GallerySlider";
import SecTitle from "../../common/SecTitle/Index";

const MicroPage = ({ data, projectName }) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <MicroHero data={data} />
        <MicroOverview data={data} />
        {
          data.rera && data.rera.isshow === true && <Rera data={data.rera} />
        }
        {data.LargeElevationSection && data.LargeElevationSection.isAllow === true && <LargeElevationSection data={data.LargeElevationSection} />}
        {data.video1 && data.video1.isVdo === true && <PeacockSection data={data} />}
        {/* {data.video2.isVdo === true && <Video2 data={data} />} */}
        {data.living_room_video && data.living_room_video.isVdo === true && <LivingRoomVideo data={data} />}
        {data.video3 && data.video3.isVdo === true && <PartyVideo data={data} />}

        {data.masterBedroom && data.masterBedroom.isVdo === true && <MasterBedroom data={data} />}

        {data.walkthrough && data.walkthrough.isshow === true && <Walkthrough data={data} />}

        {/* {data.masterBedroom && data.masterBedroom.isVdo === true && <MasterBedroom data={data} />} */}

{/* <NoPolutionZone /> */}
        
        {/* <NoPolutionZone /> */}

        {/* {data.masterBedroom.isVdo === true && <MasterBedroom data={data} />} */}
        

        {/* {data.Walkthrough && <Walkthrough data={data.Walkthrough} />}         */}
        {/* {data.renders && <Renders data={data} />} */}
        {data.highlightbg && data.highlightbg.isshow ? (
          <div
            style={{ backgroundImage: `url(${data.highlightbg.img})` }}
            className="highlightbg"
          >
            <MicroHighlights data={data.highlight} />
          </div>
        ) : (
          <MicroHighlights data={data.highlight} />
        )
        }

        {/* {data.renders && <Renders data={data} />} */}
        {/* <MicroHighlights /> */}
        <MicroPrice />
        {data.amenities && (
          <MicroAmenities data={data.amenities} />
        )}
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <MicroMasterPlan data={data.masterImage} />
            </div>
            <div className="col-sm-6">
              <MicroFloorPlan data={data.floorPlan} />
            </div>
          </div>
        </div>





        <MicroLocationMap data={data.locationAdvantage} />
        {
          data.gallery && <div className="container py-5 my-5">
            <SecTitle className="text-center color style1">
              <h4  className="title">Gallery</h4>
            </SecTitle>
            {data.gallery && data.gallery.isshow === true && <GallerySlider data={data.gallery} slidesPerView={3} spaceBetween={20} navigation={true} />}
          </div>

        }

        {data.Slides && data.Slides.isshow === true && <Slides data={data.Slides} />}



        <div className="container-fluid micro_footer">
          <div className="row ">
            <div className="col-sm-6 px-0">
              <Enquire />
            </div>
            <div className="col-sm-6 px-0">
            <EnquireForm projectName={projectName}/>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default MicroPage;
