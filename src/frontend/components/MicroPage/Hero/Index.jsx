import React, { useEffect, useRef, useState, useCallback } from "react";
import "./hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Player from "@vimeo/player";
import { API_URL, BACKEND_IMAGE_URL } from "../../../../config/config";
import { fetchBanner, clearBanner } from "../../../../redux/bannerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ projectId, onBannerExit, isMainBanner, projectName }) => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const [vimeoPlayer, setVimeoPlayer] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const dispatch = useDispatch();
  const { banner, loading } = useSelector((state) => state.banner);
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);
  const bannerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(null);

  const loaderImage = projectName?.includes('aeroone-gurgaon') || projectName?.includes('mvn-mall')
    ? `${API_URL}loader/${projectName.includes('aeroone-gurgaon') ? 'homepage_loading' : 'mvnMall_loader'}${window.innerWidth < 768 ? '_sm' : ''}.webp`:projectName.includes('mvn-athens-gurgaon-phase-3') ?'/assets/images/mvn_phase_2.webp': undefined;

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (banner) dispatch(clearBanner());
  }, [pathname, banner, dispatch]);

  useEffect(() => {
    if (!banner && projectId) dispatch(fetchBanner(projectId));
  }, [dispatch, projectId, banner]);

  useEffect(() => {
    if (isMainBanner && sectionRef.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse",
        onEnterBack: () => onBannerExit(false),
        onLeave: () => onBannerExit(true),
      });
      return () => scrollTrigger.kill();
    }
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
      const newImage = banner.data[0].is_type === "image" ? `${BACKEND_IMAGE_URL}${banner.data[0].image}` : null;

      if (newImage && newImage !== currentImage) {
        gsap.to(bannerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            setCurrentImage(newImage);
            gsap.fromTo(
              bannerRef.current,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.in" }
            );
          },
        });
      } else if (!currentImage) {
        setCurrentImage(newImage);
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out" }
        );
      }
    }
  }, [banner, currentImage]);

  const renderLoadingScreen = useCallback(() => (
    <div className="loading_screen" style={{ position: "relative" }}>
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
  ), [loaderImage, loading]);

  if (loading || !banner?.data?.length) {
    return renderLoadingScreen();
  }

  const { is_type, image, alternative_image, alt, iframe } = banner.data[0];

  return (
    <div className="section sliding_door_section py-0 mb-md-5 mb-2" ref={sectionRef} id="peacockSection">
      {is_type === "image" ? (
        <div className="AthensBanner" ref={bannerRef}>
          <picture>
            <source srcSet={`${BACKEND_IMAGE_URL}${image}`} />
            <img src={`${BACKEND_IMAGE_URL}${alternative_image}`} alt={alt || "Banner image"} className="img-fluid" />
          </picture>
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