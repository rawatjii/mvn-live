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
  const sectionsRef = useRef([]);
  const triggersRef = useRef([]);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const { pathname } = useLocation();
  const { heading, data, second_title, description, iframe, project_id, section_type } = section_data || {};
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  const { data: projectData, loading: projectLoading } = useFetchData(`project/${project_id}/${section_type}`);

  const getRatio = (el,innerHeight) => {
    if (!el) return 0;
    const ratio = innerHeight / (innerHeight + el.offsetHeight);
    return ratio;
  }

  useEffect(() => {
    if (projectData) {
      const urls = projectData.reduce((acc, item) => {
        if (item.image) acc.push(item.image);
        return acc;
      }, []);
      setImageUrls([...new Set(urls)]);
    }
  }, [projectData]);

  useEffect(() => {
    if (!imageUrls.length) {
      setImagesLoaded(true);
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

    const handleImageError = (url) => {
      console.error(`Failed to load image: ${url}`);
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
        ScrollTrigger.refresh();
      }
    };

    const preloadImages = () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = handleImageLoad;
        img.onerror = () => handleImageError(url);
      });
    };

    preloadImages();

    return () => {
      loadedCount = totalImages;
    };
  }, [imageUrls]);

    const setupAnimations = () => {  
      Array.from(document.querySelectorAll(".parallax")).map((section, i) => {
        let windowInnerHeight=window.innerHeight;
        let ratio=getRatio(section,windowInnerHeight);    

          const bg = section.querySelector(".bg");
          ScrollTrigger.create({
            trigger: section,
            start: i === 0 ? "top top" : "top 100%",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            animation: gsap.fromTo(
              bg,
              { backgroundPosition:  i === 0 ? "50% 0" : `50% ${-windowInnerHeight * ratio }px` },
              {
                backgroundPosition: `50% ${ windowInnerHeight * (1 - ratio)}px`,
                ease: "none",
              }
            ),
            markers: false, 
          });
        });
      }
useEffect(() => {
  if (!projectData || !imagesLoaded) return;

  const parallaxSections = document.querySelectorAll(".parallax_section");
  const triggers = Array.from(parallaxSections).map(section => 
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        setupAnimations(section);
      },
    })
  );

  return () => {
    triggers.forEach(trigger => trigger.kill());
  };
}, [projectData, imagesLoaded]);

  useEffect(() => {
    if (!iframe || !containerRef.current || iframeLoaded) return;

    const walkthroughEl = containerRef.current.querySelector(".walkthrough");

    if (!walkthroughEl) return;

    const trigger = ScrollTrigger.create({  
      trigger: walkthroughEl,
      start: "top bottom",
      onEnter: () => {
        if (iframeRef.current && !iframeLoaded) {
          const autoplaySrc = iframe;
          iframeRef.current.src = autoplaySrc;
          setIframeLoaded(true);
        }
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [iframe, iframeLoaded, imagesLoaded]);

  const renderMobileView = () => (
    <div className="section amenities_section main_am bottom_content parallax_section pb-0">
      <div className="cards-container">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">{heading}</h4>
        </div>

        {iframe && (
          <div className="walkthrough mb-5">
            <iframe
              ref={iframeRef}
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="100%"
              height="315"
              playsInline
              className="mb-4"
              loading="lazy"
            ></iframe>
            <hr />
          </div>
        )}

        {projectData?.map((single, index) => (
          <div key={index} className="col-sm-12 col-lg-4">
            <div className="card center">
              <picture>
                <source srcSet={CONFIG.BACKEND_IMAGE_URL + single.mb_image} media="(max-width:768px)" />
                <img src={CONFIG.BACKEND_IMAGE_URL + single.mb_image} className="img-fluid" alt={single.alt} />
              </picture>
              <Watermark />
            </div>
            <div className="content">
              <span className="am-name mx-auto">{single.heading}</span>
              {Array.isArray(single.short_description) ? (
                single.short_description.map((desc, idx) => (
                  <p key={idx} className="desc des_style1 text-center mt-3">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="desc des_style1 text-center mt-3 w-100">
                  {single.short_description}
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

      {iframe && (
        <div className="walkthrough mb-5">
          <iframe
            ref={iframeRef}
            title="YouTube video player"
            frameBorder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            width="100%"
            height="315"
            playsInline
            className="mb-4"
            loading="lazy"
          ></iframe>
          <hr />
        </div>
      )}

      {projectData?.map((amenity, i) => (
        <section
          key={i}
          className="parallax1"
          aria-label="Desktop View Section"
        >
          <div className="card center">
            <picture>
              <source srcSet={CONFIG.BACKEND_IMAGE_URL + amenity.image} media="(max-width:768px)" />
              <img src={CONFIG.BACKEND_IMAGE_URL + amenity.image} className="img-fluid" alt={amenity.alt} />
            </picture>
            <Watermark className="left" />
          </div>
          <div className="content">
            <span className="am-name mx-auto">{amenity.heading}</span>
            <p className="desc des_style1 text-center mt-2 w-100">
              {Array.isArray(amenity.short_description)
                ? amenity.short_description.join(" ")
                : amenity.short_description}
            </p>
          </div>
        </section>
      ))}
    </div>
  );

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
      <div>Loading...</div>
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
        {(second_title || description) && (
          <Container>
            <div className="about">
              <CustomCard
                className="px-0 pb-0"
                title={second_title || ""}
                desc={description || ""}
              />
            </div>
          </Container>
        )}
      </div>
    </>
  );
}

export default React.memo(ParallaxSection);