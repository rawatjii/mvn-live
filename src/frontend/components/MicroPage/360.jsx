import React, { useRef } from "react";
import LottieAnimationSection from "./LottieAnimationSection";
import { useMatches } from "../../../theme/theme";
import { API_URL } from "../../../config/config";

const partyImg = `${API_URL}assets/loader/party.jpg`

const View360 = React.memo(({ data, onLoadComplete }) => {
  const { isMobile } = useMatches();


  return (
    <div className="section peacock_section party_section py-0">
      {/* Loading progress */}
      {/* {loading && <PeacockLoader progress={progress} />} */}

      <LottieAnimationSection onLoadComplete={onLoadComplete} backgroundImg={partyImg} data={data} logomark={isMobile ? "left sm" : "left"} position="0" />
    </div>
  );
});

export default View360;
