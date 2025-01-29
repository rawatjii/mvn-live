import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LottieAnimationSection from "./LottieAnimationSection";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data, onLoadComplete }) => {
  const sectionRef = useRef(null);


  return (
    <div className="section sliding_door_section pb-0" ref={sectionRef} id="peacockSection">
      {/* Loading progress */}
      {/* {loading && <PeacockLoader progress={progress} />} */}

      <LottieAnimationSection data={data} />
    </div>
  );
};

export default LivingRoomVideoGurugram;
