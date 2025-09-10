import React, { useRef, useState } from "react";
import LottieAnimationSection from "./LottieAnimationSection";
import { useMatches } from "../../../theme/theme";
import { API_URL } from "../../../config/config";

const partyImg = `${API_URL}assets/loader/party.jpg`;

const View360 = React.memo(({ data, onLoadComplete, sectionId }) => {
  const { isMobile } = useMatches();
  const [showthreeSixtyView, setshowthreeSixtyView] = useState(false);

  const mb_json = "assets/json/360/mobile.json";
  const json = "assets/json/360/desktop.json";

  const finalData = {
    ...data,
    mb_json,
    json,
  };

  return (
    <div className="position-relative section_360">
      {!showthreeSixtyView ? (
        <div className="image_section">
          <picture>
          <source 
          media="(max-width: 767px)" 
          srcSet="./assets/images/defaultthreesixtyImgmob.jpg" 
          />
          <source 
          media="(min-width: 768px)" 
          srcSet="./assets/images/defaultthreesixtyImg.jpg" 
          />
          <img 
          src="./assets/images/defaultthreesixtyImg.jpg" 
          alt="default Image" 
          className="w-100" 
          />
          </picture>
          <button className="btn btn btn_style3 r_100 threeSixtyBtn" onClick={()=>setshowthreeSixtyView(true)}>
            360 View
          </button>
        </div>
      ) : (
        <div className="section peacock_section position-relative party_section py-0">
          <LottieAnimationSection
            sectionId={sectionId}
            onLoadComplete={onLoadComplete}
            backgroundImg={partyImg}
            data={data}
            logomark={isMobile ? "left sm" : "left"}
            position="0"
            animation_speed="3"
            key={showthreeSixtyView ? "360-view" : "default"}
          />
        </div>
      )}
    </div>
  );
});

export default View360;
