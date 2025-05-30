import React, { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Watermark from "../common/watermark/Index";
import { useMatches } from "../theme/theme";
import { Container } from "react-bootstrap";
import CustomCard from "../frontend/components/Card";
import * as CONFIG from "../config/config";
import { useLocation } from "react-router-dom";
import useFetchData from "../frontend/utils/apiHelper";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection({ section_data }) {
  const { isMobile } = useMatches();
  const sectionsRef = useRef([]); // Array to hold section refs
  const triggersRef = useRef([]); // Array to hold ScrollTrigger instances
  const containerRef = useRef(null); // Ref for the component container
  const iframeRef = useRef(null);

  const { pathname } = useLocation();
  const { heading, data, second_title, desc, iframe, project_id, section_type } = section_data || {};
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  const { data:projectData, loading:projectLoading } = useFetchData(`project/${project_id}/${section_type}`);


  // Memoized ratio calculation
  const getRatio = useCallback(
    (el) => {
      return el
        ? window.innerHeight / (window.innerHeight + el.offsetHeight)
        : 0;
    },
    [pathname]
  );

  // collect all image url to preload
  useEffect(() => {
    if (data) {
      const urls = data.reduce((acc, item) => {
        if (isMobile && item.path?.mobile) acc.push(item.path.mobile);
        if (!isMobile && item.path?.desktop) acc.push(item.path.desktop);
        return acc;
      }, []);
      setImageUrls([...new Set(urls)]);
    }
  }, [data, isMobile]);

  // Preload images and update loading status
  useEffect(() => {
    if (!imageUrls.length) {
      setImagesLoaded(true); // No images to load
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
        ScrollTrigger.refresh();
      }
    };

    console.log(' parallad section_data', section_data);
    

    const preloadImages = () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad; // Handle failed loads
      });
    };

    preloadImages();

    return () => {
      // Cleanup not strictly necessary for Image objects, but included for completeness
      loadedCount = totalImages; // Prevent further updates
    };
  }, [imageUrls]);

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

  // Run animations only after images are loaded
  useEffect(() => {
    if (imagesLoaded && !isMobile && data && sectionsRef.current.length) {
      setupAnimations();

      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        triggersRef.current.forEach((trigger) => trigger?.kill());
        triggersRef.current = [];
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.refresh();
      };
    }
  }, [imagesLoaded, isMobile, data, setupAnimations]);

  // lazy load youtube ifram
  useEffect(()=>{
    if(!iframe || !containerRef.current || iframeLoaded) return;

    const walkthroughEl = containerRef.current.querySelector('.walkthrough');

    if(!walkthroughEl) return;

    const trigger = ScrollTrigger.create({
      trigger:walkthroughEl,
      start:'top bottom',
      onEnter:()=>{
        if(iframeRef.current && !iframeLoaded){
          const autoplaySrc = iframe;
          iframeRef.current.src = autoplaySrc;
          setIframeLoaded(true);
        }
      },
      once:true,
    })

    return ()=>{
      trigger.kill();
    }
  }, [iframe, iframeLoaded, imagesLoaded])

  const renderMobileView = () => (
    <div className="section amenities_section main_am bottom_content parallax_section pb-0">
      <div className="cards-container">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">{heading}</h4>
        </div>

        {/* walkthrough */}

        {iframe && (
          <div className="walkthrough mb-5">
            <iframe
            ref={iframeRef}
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="100"
              height="100"
              playsInline
              className=" mb-4"
              loading="lazy"
            ></iframe>
            <hr />
          </div>
        )}

        {/* parallax */}

        {projectData?.map((single, index) => (
          <div key={index} className="col-sm-12 col-lg-4">
            <div className="card center">
              <picture>
                <source media="(min-width:650px)" srcset="img_pink_flowers.jpg" />
                <source media="(min-width:465px)" srcset="img_white_flower.jpg" />
                <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;" />
              </picture>

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
        <h4 className="title title_style1 text-center">{heading}</h4>
      </div>

      {/* walkthrough */}
      {iframe && (
        <div className="walkthrough mb-5">
          <iframe
            ref={iframeRef}
            title="YouTube video player"
            frameBorder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            width="100"
            height="100"
            playsInline
            className=" mb-4"
            loading="lazy"
          ></iframe>
          <hr />
        </div>
      )}

      {/* parallax */}
      {projectData?.map((amenity, i) => (
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
      ))}
    </div>
  );

  // Loader component (customize as needed)
  const Loader = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        zIndex: 9999,
      }}
    >
      <div>Loading...</div> {/* Replace with your spinner or custom loader */}
    </div>
  );

  return (
    <>
      {!imagesLoaded && <Loader />}
      <div
        ref={containerRef}
        style={{ visibility: imagesLoaded ? "visible" : "hidden" }}
      >
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
    </>
  );
}

export default React.memo(ParallaxSection);
