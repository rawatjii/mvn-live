import React from "react";
import { useMatches } from "../../../theme/theme";
import LottieAnimationSection from "./LottieAnimationSection";
import bedrromImg from "../../assets/loader/bedroom.webp"

const MasterBedroom = React.memo(({  data, onLoadComplete }) => {
  const { isMobile } = useMatches();


  return (
    <div className="section peacock_section pb-0 master-bed-room">
      <LottieAnimationSection backgroundImg={bedrromImg} data={data} logomark={isMobile ? "left sm style3" : "left"} watermark={isMobile ? 'style3':''} position="0" type="style1" />
    </div>
  );
});

export default MasterBedroom;
