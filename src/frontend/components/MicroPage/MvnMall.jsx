import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Watermark from "../../../common/watermark/Index";
import ZoomOutImage from "./ZoomOut";
import { useMatches } from "../../../theme/theme";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

gsap.registerPlugin(ScrollTrigger);

const MvnMall = ({ data }) => {
  const imageRef = useRef(null);
  const secRef = useRef(null);
  const iframeRef = useRef(null);
  const { isMobile } = useMatches();
  const [iframeVisible, setIframeVisible] = useState(false);

  const { data: mallData, loading } = useFetchData(`project/${data?.project_id}/mvn-mall`);


  const { heading, description } = data;

  useEffect(() => {
    // Scroll animation for mobile image pinning
    if (isMobile) {
      const image = imageRef.current;
      if (image) {
        gsap.to(image, {
          x: "-50%",
          ease: "none",
          scrollTrigger: {
            trigger: secRef.current,
            start: "top 60px",
            pin: true,
            scrub: 1,
            end: "+=1000",
            onLeave: () => {
              document.querySelector(".navbar")?.classList.add("fill");
            },
            onEnterBack: () => {
              document.querySelector(".navbar")?.classList.remove("fill");
            },
          },
        });
      }
    }

    // Lazy load iframe when in view
    let trigger;
    if (iframeRef.current) {
      trigger = ScrollTrigger.create({
        trigger: iframeRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => setIframeVisible(true),
      });
    }

    return () => {
      if (trigger) trigger.kill();
    };
  }, [isMobile, mallData]);
  

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && mallData && mallData.length === 0) return <div className="text-center py-5">No records found</div>;

  return (
    <section
      className="section mvn_mall_section micro_design1 pb-0"
      aria-label="MVN Mall Section"
    >
      {window.innerWidth < 768 ? (
        <>
          <Container>
            <div className="heading_div mb_60 mb_sm_30">
              <h4 className="title title_style1 text-center">{heading}</h4>
            </div>
            <p className="des_style1 text-center mb_20">
              {description}
            </p>
          </Container>

          {data.iframe && (
            <div className="walkthrough" ref={iframeRef}>
              {iframeVisible && (
                <>
                  <iframe
                    src={data.iframe}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    playsInline
                    className="mb-4"
                  ></iframe>
                  <hr />
                </>
              )}
            </div>
          )}
 
          <ZoomOutImage dataFrames={data} path={`${API_URL}assets/mvn-mall/mvn-mall/`} mobileFrameCounts="102" desktopFrameCounts="102" />

          <div ref={secRef}>
            <div className="image_animation">
              <img
                ref={imageRef}
                src={BACKEND_IMAGE_URL + mallData?.[2].image}
                alt="mvn mall animation"
                className="img-fluid"
              />
              <Watermark isMvnLogo={true} />
            </div>
          </div>
        </>
      ) : (
        <Container>
          <div className="heading_div mb_60 mb_sm_30">
            <h4 className="title title_style1 text-center">{heading}</h4>
          </div>

          <p className="des_style1 text-center mb_40">
            {description}
          </p>

          {data.iframe && (
            <div className="walkthrough mb-5" ref={iframeRef}>
              {iframeVisible && (
                <>
                  <iframe
                    src={data.iframe}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    playsInline
                    className="mb-4"
                  ></iframe>
                  <hr />
                </>
              )}
            </div>
          )}

          <div className="row">

            {mallData?.map((item, index) => {
              if (index == 0) {
                return <div className="col-sm-12 col-md-6 col-lg-6 mvn_mall_left_col">
                  <div className="position-relative">
                    <img src={BACKEND_IMAGE_URL + item.image} alt="mvn mall icon" className="img-fluid w-100" />
                    <Watermark isMvnLogo="true" />
                  </div>
                </div>
              }
            })}



            <div className="col-sm-12 col-md-6 col-lg-6 mvn_mall_right_col">
              {mallData?.map((item, index) => {
                if(index !== 0){
                  return (
                    <div className="position-relative mb-4">
                      <img
                        src={BACKEND_IMAGE_URL + item.image}
                        alt="mvn mall icon"
                        className="img-fluid"
                      />
                      <Watermark isMvnLogo="true" />
                    </div>
                  )
                }
                
              })}

            </div>
          </div>
        </Container>
      )}
    </section>
  );
};

export default MvnMall;
