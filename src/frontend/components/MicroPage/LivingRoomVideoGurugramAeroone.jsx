import React, { useEffect, useRef, useState } from "react";
import { useMatches } from "../../../theme/theme";
import Player from "@vimeo/player";

const LivingRoomVideoGurugramAeroone = React.memo(
  ({ data, onLoadComplete, onBannerExit, isMainBanner }) => {
    const sectionRef = useRef(null);
    const iframeRef = useRef(null);
    const { isMobile } = useMatches();

    const [isMute, setIsMute] = useState(true);
    const [vimeoPlayer, setVimeoPlayer] = useState(null);

    const [showPoster, setShowPoster] = useState(true);
    const [showPlayBtn, setShowPlayBtn] = useState(false);

    // Responsive poster sources (provide these via props/data)
    const posterDesktop =
      data?.posterDesktop ||
      data?.path?.posterDesktop ||
      "https://img.websitedesigningcompany.co.in/public/loader/homepage_loading.webp";

    const posterMobile =
      data?.posterMobile ||
      data?.path?.posterMobile ||
      "https://img.websitedesigningcompany.co.in/public/loader/homepage_loading_sm.webp";

    useEffect(() => {
      if (iframeRef.current && !vimeoPlayer) {
        const player = new Player(iframeRef.current);
        setVimeoPlayer(player);
      }
    }, [vimeoPlayer]);

    useEffect(() => {
      if (!vimeoPlayer) return;

      const onLoaded = () => {
        // Try to autoplay (muted) — if blocked, show manual button
        vimeoPlayer.play().catch(() => setShowPlayBtn(true));
      };

      const onPlaying = () => {
        setShowPoster(false);
        setShowPlayBtn(false);
        if (typeof onLoadComplete === "function") onLoadComplete();
      };

      vimeoPlayer.on("loaded", onLoaded);
      vimeoPlayer.on("playing", onPlaying);

      return () => {
        vimeoPlayer.off("loaded", onLoaded);
        vimeoPlayer.off("playing", onPlaying);
      };
    }, [vimeoPlayer, onLoadComplete]);

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

    const handleManualPlay = () => {
      if (!vimeoPlayer) return;
      vimeoPlayer.play().then(() => setShowPlayBtn(false)).catch(() => setShowPlayBtn(true));
    };

    return (
      <div
        className="section sliding_door_section py-0 mb-md-5 mb-2"
        ref={sectionRef}
        id="peacockSection"
        style={{ position: "relative" }}
      >
        {/* 16:9 container; adjust for a taller mobile ratio if you prefer */}
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            overflow: "hidden",
          }}
        >
          <iframe
            ref={iframeRef}
            src={
              "https://player.vimeo.com/video/1078294218?background=1&autoplay=1&muted=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
            }
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            title="MVN Aero One Walkthrough"
          />

          {showPoster && (
            <div
              onClick={handleManualPlay}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                cursor: showPlayBtn ? "pointer" : "default",
              }}
            >
              <picture>
                {/* Prefer webp sources if you have them */}
                {/* <source media="(max-width: 767px)" srcSet="/path/mobile.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="/path/desktop.webp" type="image/webp" /> */}
                <source media="(max-width: 767px)" srcSet={posterMobile} />
                <source media="(min-width: 768px)" srcSet={posterDesktop} />
                <img
                  src={posterDesktop}
                  alt="MVN Aero One Poster"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    inset: 0,
                  }}
                  loading="eager"
                />
              </picture>

              {/* Optional dark scrim */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                }}
              />

              {/* Optional play button when autoplay blocked */}
              {showPlayBtn && (
                <button
                  onClick={handleManualPlay}
                  aria-label="Play video"
                  style={{
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    width: 72,
                    height: 72,
                    border: "none",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.9)",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    zIndex: 3,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "16px solid #000",
                      marginLeft: 4,
                    }}
                  />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Example mute/unmute control (optional) */}
        {/* <button onClick={updateMuteStatus} className="mute-toggle-btn">
          {isMute ? "Unmute" : "Mute"}
        </button> */}
      </div>
    );
  }
);

export default LivingRoomVideoGurugramAeroone;
