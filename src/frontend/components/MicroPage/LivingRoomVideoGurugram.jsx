import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LottieAnimationSection from "./LottieAnimationSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMatches } from "../../../theme/theme";
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";
import Player from "@vimeo/player";
import { API_URL } from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = React.memo(
  ({ data, onLoadComplete, onBannerExit, isMainBanner }) => {
    const sectionRef = useRef(null);
    const iframeRef = useRef(null);
    const { isMobile } = useMatches();
    const [isMute, setIsMute] = useState(true);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
        setVimeoPlayer(player);

        // Listen for the 'play' event to detect when the video is ready
        player.on('play', ()=>{
          setIsVideoPlaying(true);
        })

        // fallback
        player.on('timeupdate', ()=>{
          setIsVideoPlaying(true);
        })
      }

      // cleanup
      return()=>{
        if(vimeoPlayer){
          vimeoPlayer.off('play');
          vimeoPlayer.off('timeupdate');
        }
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
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            overflow: "hidden",
          }}
        >
            {/* Background image displayed until video is loaded */}
            {!isVideoPlaying && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: window.innerWidth > 768 ? `url(${API_URL}images/aero-gurgaon/hero/video_desktop_bg.webp)` : `url(${API_URL}images/aero-gurgaon/hero/video_sm_bg.webp)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
                aria-hidden="true"
              />
            )}
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1078294218?background=1&autopause=0&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="MVN Aero One Walkthrough"
          />
        </div>
      </div>
    );
  }
);

export default LivingRoomVideoGurugram;
