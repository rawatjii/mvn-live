import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LottieAnimationSection from "./LottieAnimationSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMatches } from "../../../theme/theme";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = React.memo(({ data, onLoadComplete, onBannerExit, isMainBanner }) => {
  const sectionRef = useRef(null);
  const { isMobile } = useMatches();

  useEffect(() => {
    if (isMainBanner && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse",
        onEnterBack: () => onBannerExit(false),
        onLeave: () => onBannerExit(true),
      });
    }
  }, [isMainBanner, onBannerExit]);

  return (
    <div className="section sliding_door_section py-0" ref={sectionRef} id="peacockSection">
      {/* Loading progress */}
      {/* {loading && <PeacockLoader progress={progress} />} */}

      <LottieAnimationSection data={data} logomark={isMobile ? `left sm` : `left`} anClass="pt-0" isBanner={true} />
    </div>
  );
});

export default LivingRoomVideoGurugram;
