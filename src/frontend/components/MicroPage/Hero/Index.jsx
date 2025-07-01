import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFetchData from "../../../utils/apiHelper";
import Player from "@vimeo/player";
import { API_URL, BACKEND_IMAGE_URL } from "../../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ projectId, onBannerExit, isMainBanner, projectName }) => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const [vimeoPlayer, setVimeoPlayer] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video playback

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
    if (iframeRef.current && !vimeoPlayer && data && data[0]?.is_type === "iframe") {
      const player = new Player(iframeRef.current, {
        autoplay: true, // Ensure autoplay is enabled
      });

      // Listen for the 'play' event to hide placeholder
      player.on("play", () => {
        setIsVideoPlaying(true);
      });

      setVimeoPlayer(player);

      return () => {
        player.off("play"); // Cleanup event listener
      };
    }
  }, [iframeRef, vimeoPlayer, data]);

  if (loading){
    return (
      <div className="loading_screen" style={{position:'relative'}}>
        {projectName?.includes('aeroone-gurgaon') ? (
          <img src={window.innerWidth < 768 ? API_URL + "loader/homepage_loading_sm.webp" : API_URL + "loader/homepage_loading.webp"} alt="loading screen" className="img-fluid w-100" />
        ) : projectName?.includes('mvn-mall') ? <img src={window.innerWidth < 768 ? API_URL + "loader/mvnMall_loader_sm.webp" : API_URL + "loader/mvnMall_loader.webp"} alt="loading screen" className="img-fluid w-100" /> : undefined}
        
        <p className="loading" style={{position:'fixed ', top:'calc(100vh - 40px)', width:'100%', textAlign:'center', textTransform:'uppercase', fontSize:window.innerWidth < 768 ? '11px' : '14px', letterSpacing:'3px', textShadow:'0 0 10px #000', fontWeight:600}}>Loading Experience...</p>
      </div>
    ) ;
  }
  if (!loading && data && data.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <div
      className="section sliding_door_section py-0 mb-md-5 mb-2"
      ref={sectionRef}
      id="peacockSection"
    >
      {data && data[0]?.is_type === "image" ? (
        <div className="AthensBanner" ref={sectionRef}>
          <picture>
            <source srcSet={`${BACKEND_IMAGE_URL}${data[0].image}`} />
            <img
              src={`${BACKEND_IMAGE_URL}${data[0].alternative_image}`}
              alt={data[0].alt || "Banner image"}
              className="img-fluid"
            />
          </picture>
        </div>
      ) : data && data[0]?.is_type === "iframe" ? (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            overflow: "hidden",
          }}
        >
          {/* Placeholder image for iframe */}
          {!isVideoPlaying && (
            <img
              src={projectName?.includes('aeroone-gurgaon') ? window.innerWidth < 768 ? API_URL + "images/aero-gurgaon/hero/hero_loader_sm.webp" : API_URL + "loader/homepage_loading.webp" : undefined}
              alt={data[0].alt || "Loading video..."}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
          )}
          <iframe
            ref={iframeRef}
            src={`${data[0].iframe}?autoplay=1`} // Ensure autoplay is enabled
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
            }}
            title="MVN Aero One Walkthrough"
          />
        </div>
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  );
};

export default HeroSection;