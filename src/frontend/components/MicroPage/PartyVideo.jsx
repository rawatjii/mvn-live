import React, { Suspense } from "react";
const LottieAnimationSection = React.lazy(()=>import("./LottieAnimationSection")) ;
import { useMatches } from "../../../theme/theme";

const PartyVideo = React.memo(({ data }) => {
  const { isMobile } = useMatches();

  return (
    <div className="section peacock_section party_section pb-0">
      <Suspense fallback="">
      <LottieAnimationSection data={data} logomark={isMobile ? "left sm" : "left"} position="0" />
      </Suspense>
    </div>
  );
});

export default PartyVideo;
