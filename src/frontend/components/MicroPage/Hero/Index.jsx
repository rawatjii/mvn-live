import React, { useEffect, useRef, useState, useCallback } from "react";
import "./hero.css";
import Player from "@vimeo/player";
import { API_URL, BACKEND_IMAGE_URL } from "../../../../config/config";
import { fetchBanner } from "../../../../redux/bannerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const HeroSection = ({ projectId, onBannerExit, isMainBanner, projectName }) => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const bannerRef = useRef(null);

  const [vimeoPlayer, setVimeoPlayer] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const dispatch = useDispatch();
  const { banner, loading } = useSelector((state) => state.banner);

  const loaderImage =
    projectName?.includes("aeroone-gurgaon") || projectName?.includes("mvn-mall")
      ? `${API_URL}loader/${
          projectName.includes("aeroone-gurgaon") ? "homepage_loading" : "mvnMall_loader"
        }${window.innerWidth < 768 ? "_sm" : ""}.webp`
      : projectName.includes("mvn-athens-gurgaon-phase-3")
      ? "/assets/images/mvn_phase_2.webp"
      : undefined;

      console.log(banner,"bannersada")

  useEffect(() => {
         dispatch(fetchBanner(projectId));
  }, [dispatch, projectId]);
  useEffect(() => {
    if (!isMainBanner) return;

    const handleScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;
      onBannerExit(!(sectionTop < windowHeight && sectionTop > 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainBanner, onBannerExit]);

  useEffect(() => {
    if (iframeRef.current && !vimeoPlayer && banner?.data?.[0]?.is_type === "iframe") {
      const player = new Player(iframeRef.current, { autoplay: true });
      player.on("play", () => setIsVideoPlaying(true));
      setVimeoPlayer(player);
      return () => player.off("play");
    }
  }, [vimeoPlayer, banner]);

  useEffect(() => {
    if (banner?.data?.length && bannerRef.current) {
      const newImage =
        banner.data[0].is_type === "image" ? `${BACKEND_IMAGE_URL}${banner.data[0].image}` : null;
      if (newImage && newImage !== currentImage) {
        setCurrentImage(null);
        setTimeout(() => setCurrentImage(newImage), 500);
      }
    }
  }, [banner, currentImage]);

  const renderLoadingScreen=()=> {
  
  return <div className="loading_screen" style={{ position: "relative" }}>
        {loaderImage && (
          <>
            <img src={loaderImage} alt="loading screen" className="img-fluid w-100" />
            <p
              className="loading"
              style={{
                position: "fixed",
                top: "calc(100vh - 40px)",
                width: "100%",
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: window.innerWidth < 768 ? "11px" : "14px",
                letterSpacing: "3px",
                textShadow: "0 0 10px #000",
                fontWeight: 600,
              }}
            >
              {loading ? "Loading Experience..." : "No records found"}
            </p>
          </>
        )}
      </div>

}

  if (!banner?.data.length) return renderLoadingScreen();
  const { is_type, alternative_image, alt, iframe } = banner?.data[0];
  return (
    <div className="section sliding_door_section py-0 mb-md-5 mb-2" ref={sectionRef}>
      {is_type === "image" ? (
        <div
          className="AthensBanner"
          ref={bannerRef}
          style={{ transition: "opacity 0.5s ease-in-out", opacity: currentImage ? 1 : 0 }}
        >
          {currentImage && (
            <picture>
              <source srcSet={currentImage} />
              <img
                src={`${BACKEND_IMAGE_URL}${alternative_image}`}
                alt={alt || "Banner image"}
                className="img-fluid"
              />
            </picture>
          )}
        </div>
      ) : is_type === "iframe" ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", overflow: "hidden" }} ref={bannerRef}>
          {!isVideoPlaying && loaderImage && (
            <img
              src={loaderImage}
              alt={alt || "Loading video..."}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }}
            />
          )}
          <iframe
            ref={iframeRef}
            src={`${iframe}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
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