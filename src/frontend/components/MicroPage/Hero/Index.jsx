import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFetchData from "../../../utils/apiHelper";
import Player from "@vimeo/player";
import { BACKEND_IMAGE_URL } from "../../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ projectId, onBannerExit, isMainBanner }) => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);

  const [vimeoPlayer, setVimeoPlayer] = useState(null);

  const { data, loading } = useFetchData(`project/${projectId}/banner`);

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

  console.log("banner data", data);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && data && data.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <div
      className="section sliding_door_section py-0 mb-md-5 mb-2"
      ref={sectionRef}
      id="peacockSection"
    >
      {data && data[0]?.is_type == "image" ? (
        <div className="AthensBanner" ref={sectionRef}>
          <img
            src={BACKEND_IMAGE_URL+data[0].image}
            alt="Desktop Banner"
            className="d-none d-md-block"
          />
          <img src={data[0].mobile} alt="Mobile  Banner" className="d-md-none" />
        </div>
      ) : data && data[0]?.is_type == 'iframe' ? (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            overflow: "hidden",
          }}
        >
          <iframe
            ref={iframeRef}
            src={data[0].iframe}
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
      ) : (<p>Something went wrong</p>)}
    </div>
  );
};

export default HeroSection;
