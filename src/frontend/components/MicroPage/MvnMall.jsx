import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Watermark from "../../../common/watermark/Index";
import Logomark from "../../../common/logomark/Index";
import ZoomOutImage from "./ZoomOut";
import { useMatches } from "../../../theme/theme";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const mvnMallImg = `${API_URL}images/mvn_mall.webp`;
const mvnMallBannerImg1 = `${API_URL}images/mall-banner-1.webp`;
const mvnMallBannerImg2 = `${API_URL}images/mall-banner-2.webp`;
const mvnMallAnimatedImg = `${API_URL}images/mvn_mall_animated_img.webp`;

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
  }, [isMobile]);
  
  console.log('mallData',mallData);
  

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
              <h4 className="title title_style1 text-center">MVN Mall</h4>
            </div>
            <p className="des_style1 text-center mb_20">
              Experience a pollution-free haven at MVN's iconic masterpiece,
              where every breath you take is purified by advanced air
              filtration systems. Nestled above MVN mall, everything you
              need—from gourmet dining to designer boutiques and private
              cinemas—is just an elevator ride away. This is a sanctuary where
              luxury and convenience come together, offering you everything at
              your doorstep, so you never need to leave.
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

          {/* <ZoomOutImage dataFrames={data} /> */}

          <div ref={secRef}>
            <div className="image_animation">
              <img
                ref={imageRef}
                src={mvnMallImg}
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
                    <Logomark className="left sm" />
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
                      <Logomark className="left sm" />
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
