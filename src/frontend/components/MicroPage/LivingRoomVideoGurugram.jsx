import React, { useRef } from "react";
import LottieAnimationSection from "./LottieAnimationSection";
import { useMatches } from "../../../theme/theme";

const LivingRoomVideoGurugram = React.memo(({ data, onLoadComplete }) => {
  const sectionRef = useRef(null);
  const { isMobile } = useMatches();


  return (
    <div className="section sliding_door_section pb-0" ref={sectionRef} id="peacockSection">
      {/* Loading progress */}
      {/* {loading && <PeacockLoader progress={progress} />} */}

      <LottieAnimationSection data={data} logomark={isMobile ? `left sm` : `left`} />
    </div>
  );
});

export default LivingRoomVideoGurugram;
