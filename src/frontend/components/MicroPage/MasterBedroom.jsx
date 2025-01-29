import React, { Suspense } from "react";
import { useMatches } from "../../../theme/theme";
const LottieAnimationSection = React.lazy(()=>import("./LottieAnimationSection")) ;

const MasterBedroom = React.memo(({  data, onLoadComplete }) => {
  const { isMobile } = useMatches();


  return (
    <div className="section peacock_section pb-0 master-bed-room">
      <Suspense fallback="">
      <LottieAnimationSection data={data} logomark={isMobile ? "left sm style3" : "left"} watermark={isMobile ? 'style3':''} position="0" type="style1" />
      </Suspense>
    </div>
  );
});

export default MasterBedroom;
