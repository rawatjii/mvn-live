import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LottieAnimationSection from "./LottieAnimationSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMatches } from "../../../theme/theme";
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = React.memo(
  ({ data, onLoadComplete, onBannerExit, isMainBanner }) => {
    const sectionRef = useRef(null);
    const { isMobile } = useMatches();
    const [isMute, setIsMute] = useState(true);

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

    const updateMuteStatus = ()=>{
      setIsMute((state)=>!state)
    }

    return (
      <div
        className="section sliding_door_section py-0 mb-md-5 mb-2"
        ref={sectionRef}
        id="peacockSection"
      >
        {/* Loading progress */}
        {/* {loading && <PeacockLoader progress={progress} />} */}

        <video
          src={data.path.desktop}
          loop={true}
          muted={isMute}
          autoPlay={true}
          width="100%"
          playsInline
        />

        <div className="video_mute_btns" onClick={updateMuteStatus} title={isMute ? "Unmute" : "Mute"}>
          {isMute ? <GoUnmute size={isMobile ? 16 : 20} /> : <GoMute size={isMobile ? 16 : 20} />}
        </div>

        {/* {window.innerWidth > 767 ? (
          <LottieAnimationSection
            data={data}
            logomark={isMobile ? `left sm` : `left`}
            anClass="pt-0"
            isBanner={true}
          />
        ) : (
          <iframe
            src="https://www.youtube.com/embed/9CHcJAveejU?autoplay=1&mute=1&loop=1&playlist=9CHcJAveejU"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            width="1000"
            height="500"
            playsInline
          ></iframe>
        )} */}
      </div>
    );
  }
);

export default LivingRoomVideoGurugram;
