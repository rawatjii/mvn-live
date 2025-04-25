import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LottieAnimationSection from "./LottieAnimationSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMatches } from "../../../theme/theme";
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";
import Player from '@vimeo/player';

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = React.memo(
  ({ data, onLoadComplete, onBannerExit, isMainBanner }) => {
    const sectionRef = useRef(null);
    const iframeRef = useRef(null);
    const { isMobile } = useMatches();
    const [isMute, setIsMute] = useState(true);
    const videoRef = useRef(null);
    const [vimeoPlayer, setVimeoPlayer] = useState(null);

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

    useEffect(() => {
      if (iframeRef.current && !vimeoPlayer) {
        const player = new Player(iframeRef.current);
    
        // Do NOT set volume immediately
        // That breaks autoplay on iOS
    
        setVimeoPlayer(player);
      }
    }, [iframeRef, vimeoPlayer]);

    const updateMuteStatus = () => {
      if (!vimeoPlayer) return;
      vimeoPlayer.getVolume().then((volume) => {
        if (volume > 0) {
          vimeoPlayer.setVolume(0);
          setIsMute(true);
        } else {
          vimeoPlayer.setVolume(1);
          setIsMute(false);
        }
      });
    };



    return (
      <div
        className="section sliding_door_section py-0 mb-md-5 mb-2"
        ref={sectionRef}
        id="peacockSection"
      >
        {/* Loading progress */}
        {/* {loading && <PeacockLoader progress={progress} />} */}

        {/* <video
          src={data.path.desktop}
          loop={true}
          muted={isMute}
          autoPlay={true}
          width="100%"
          playsInline
        /> */}
        <div style={{ position: "relative", paddingBottom: '56.25%', overflow: "hidden" }}>
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1078294218?background=1&autopause=0&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="MVN Aero One Walkthrough"
          />
        </div>

        {/* <div className="video_mute_btns" onClick={updateMuteStatus} title={isMute ? "Unmute" : "Mute"}>
          {isMute ? <GoUnmute size={isMobile ? 16 : 20} /> : <GoMute size={isMobile ? 16 : 20} />}
        </div> */}

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
