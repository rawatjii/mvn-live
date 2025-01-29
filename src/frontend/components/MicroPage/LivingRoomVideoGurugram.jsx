import React, { Suspense, useRef } from "react";
const LottieAnimationSection = React.lazy(()=>import("./LottieAnimationSection"));
import { useMatches } from "../../../theme/theme";

const LivingRoomVideoGurugram = React.memo(({ data, onLoadComplete }) => {
  const sectionRef = useRef(null);
  const { isMobile } = useMatches();


  return (
    <div className="section sliding_door_section pb-0" ref={sectionRef} id="peacockSection">
      {/* Loading progress */}
      {/* {loading && <PeacockLoader progress={progress} />} */}

      <Suspense fallback="">
      <LottieAnimationSection data={data} logomark={isMobile ? `left sm` : `left`} />
      </Suspense>
    </div>
  );
});

export default LivingRoomVideoGurugram;
