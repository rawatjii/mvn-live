import React from "react";
import LottieAnimationSection from "./LottieAnimationSection";
import { useMatches } from "../../../theme/theme";

const PartyVideo = ({ data }) => {
  const { isMobile } = useMatches();

  return (
    <div className="section peacock_section party_section pb-0">
      <LottieAnimationSection data={data} logomark={isMobile ? "left sm" : "left"} position="0" />
    </div>
  );
};

export default PartyVideo;
