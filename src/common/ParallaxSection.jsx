import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Watermark from "../common/watermark/Index";
import { useMatches } from "../theme/theme";
import { Container } from "react-bootstrap";
import CustomCard from "../frontend/components/Card";
import * as CONFIG from "../config/config";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection({ section_data }) {
  const { isMobile } = useMatches();
  const sectionsRef = useRef([]); // Array to hold section refs
  const triggersRef = useRef([]); // Array to hold ScrollTrigger instances
  const containerRef = useRef(null); // Ref for the component container
  const { pathname } = useLocation();
  const { title, data, second_title, desc, iframe } = section_data || {};

  // Memoized ratio calculation
  const getRatio = useCallback(
    (el) => {
      return el
        ? window.innerHeight / (window.innerHeight + el.offsetHeight)
        : 0;
    },
    [pathname]
  );

  // Setup GSAP animations
  const setupAnimations = useCallback(() => {
    if (!data || !sectionsRef.current.length || isMobile) return;

    // Clear existing triggers before setting up new ones
    triggersRef.current.forEach((trigger) => trigger?.kill());
    triggersRef.current = [];

    triggersRef.current = sectionsRef.current
      .map((section, i) => {
        const bg = section?.querySelector(".bg");
        if (!bg || !data[i]?.path?.desktop) return null;

        const imageUrl = `url(${data[i].path.desktop})`;
        bg.style.backgroundImage = imageUrl;

        const defaultBgPos =
          i === 0
            ? "50% 0"
            : `50% ${-window.innerHeight * getRatio(section)}px`;

        return ScrollTrigger.create({
          trigger: section,
          start: i === 0 ? "top top" : "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          animation: gsap.fromTo(
            bg,
            { backgroundPosition: defaultBgPos },
            {
              backgroundPosition: `50% ${
                window.innerHeight * (1 - getRatio(section))
              }px`,
              ease: "none",
            }
          ),
        });
      })
      .filter(Boolean);

    ScrollTrigger.refresh(); // Explicitly refresh after setup
  }, [data, isMobile, getRatio]);

  // Handle animation setup, cleanup, and resize
  useEffect(() => {
    if (!isMobile && data && sectionsRef.current.length) {
      setupAnimations();

      // Refresh on window resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        triggersRef.current.forEach((trigger) => trigger?.kill());
        triggersRef.current = [];
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.refresh(); // Clean slate on unmount
      };
    }
  }, [isMobile, data, setupAnimations, pathname]);

  // Refresh ScrollTrigger after images load, scoped to this component
  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const images = containerRef.current.querySelectorAll("img");
      if (!images.length) {
        ScrollTrigger.refresh();
        return;
      }

      let loadedCount = 0;
      const totalImages = images.length;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          ScrollTrigger.refresh();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener("load", checkAllLoaded, { once: true });
          img.addEventListener("error", checkAllLoaded, { once: true }); // Handle failed loads
        }
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", checkAllLoaded);
          img.removeEventListener("error", checkAllLoaded);
        });
      };
    }
  }, [isMobile, data, pathname]);

  const renderMobileView = () => (
    <div className="section amenities_section main_am bottom_content parallax_section pb-0">
      <div className="cards-container">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">{title}</h4>
        </div>

        {/* walkthrough */}

        {iframe && (
          <div className="walkthrough mb-5">
            <iframe
              src={iframe}
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="100"
              height="100"
              playsInline
              className=" mb-4"
            ></iframe>
            <hr />
          </div>
        )}

        {/* parallax */}

        {data?.map((single, index) => (
          <div key={index} className="col-sm-12 col-lg-4">
            <div className="card center">
              <img
                src={single.path?.mobile}
                alt={`mvn amenities ${index}`}
                className="img-fluid d-md-none"
                loading="lazy"
              />
              <img
                src={single.path?.desktop}
                alt={`mvn amenities ${index}`}
                className="img-fluid d-none d-md-block"
                loading="lazy"
              />
              <Watermark />
            </div>
            <div className="content">
              <span className="am-name mx-auto">{single.name}</span>
              {Array.isArray(single.desc) ? (
                single.desc.map((desc, idx) => (
                  <p key={idx} className="desc des_style1 text-center mt-3">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="desc des_style1 text-center mt-3 w-100">
                  {single.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDesktopView = () => (
    <div className="section main_am parallax_section pb-0">
      <div className="heading_div mb_60 mb_sm_30">
        <h4 className="title title_style1 text-center">{title}</h4>
      </div>

      {/* walkthrough */}
      {iframe && (
        <div className="walkthrough mb-5">
          <iframe
            src={iframe}
            title="YouTube video player"
            frameBorder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            width="100"
            height="100"
            playsInline
            className=" mb-4"
          ></iframe>
          <hr />
        </div>
      )}

      {/* parallax */}
      {data?.map((amenity, i) => (
        <>
          <section
            key={i}
            className="parallax"
            ref={(el) => (sectionsRef.current[i] = el)}
            aria-label="Desktop View Section"
          >
            <div className="bg">
              <Watermark className="left" />
            </div>
            <div className="content">
              <span className="am-name mx-auto">{amenity.name}</span>
              <p className="desc des_style1 text-center mt-2 w-100">
                {Array.isArray(amenity.desc)
                  ? amenity.desc.join(" ")
                  : amenity.desc}
              </p>
            </div>
          </section>
        </>
      ))}
    </div>
  );

  return (
    <div ref={containerRef}>
      {isMobile ? renderMobileView() : renderDesktopView()}
      {(second_title || desc) && (
        <Container>
          <div className="about">
            <CustomCard
              className="px-0 pb-0"
              title={second_title || ""}
              desc={desc || ""}
            />
          </div>
        </Container>
      )}
    </div>
  );
}

export default React.memo(ParallaxSection);
