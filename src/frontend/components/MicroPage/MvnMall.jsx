import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import mvnMallImg from "../../assets/images/mvn_mall.webp";
import mvnMallBannerImg1 from "../../assets/images/mall-banner-1.webp"
import mvnMallBannerImg2 from "../../assets/images/mall-banner-2.webp"
import mvnMallAnimatedImg from "../../assets/images/mvn_mall_animated_img.webp"
import Watermark from "../../../common/watermark/Index";
import Logomark from "../../../common/logomark/Index";
import ZoomOutImage from "./ZoomOut";
import { useMatches } from "../../../theme/theme";

gsap.registerPlugin(ScrollTrigger);

const MvnMall = ({data}) => {
  const imageRef = useRef(null);
  const secRef = useRef(null);
    const { isMobile } = useMatches(); 


    useEffect(() => {
      if (isMobile) {
        const image = imageRef.current;
    
        if (image) {
          gsap.to(image, {
            x: "-50%", // Moves the image 50% to the left
            ease: "none",
            scrollTrigger: {
              trigger: secRef.current,
              start: "top 60px",
              pin: true,
              scrub: 1,
              end: "+=1000", // Adjust this value based on desired scroll distance
              onLeave: () => {
                document.querySelector(".navbar").classList.add("fill");
              },
              onEnterBack: () => {
                document.querySelector(".navbar").classList.remove("fill");
              },
            },
          });
        }
      }
    }, [isMobile]); // Depend on `isMobile` to re-run if the device type changes
    

  return (
    <>
    
      <section className="section mvn_mall_section micro_design1 pb-0"  aria-label="MVN Mall Section">
        {window.innerWidth < 768 ? (
          <>
            <Container>
              <div className="heading_div mb_60 mb_sm_30">
                <h4 className="title title_style1 text-center">MVN Mall</h4>
              </div>
              <p className="des_style1 text-center mb_20">Experience a pollution-free haven at MVN's iconic masterpiece, where every breath you take is purified by advanced air filtration systems. Nestled above MVN mall, everything you need—from gourmet dining to designer boutiques and private cinemas—is just an elevator ride away. This is a sanctuary where luxury and convenience come together, offering you everything at your doorstep, so you never need to leave.</p>
            </Container>  
            
            <ZoomOutImage dataFrames={data}/>

            <div ref={secRef}>
              <div className="image_animation">
                <img
                  ref={imageRef}
                  src={mvnMallImg}
                  alt="mvn mall animation"
                  className="img-fluid"
                />
              </div>
            </div>
          </>
        ) : (
          <Container>
            <div className="heading_div mb_60 mb_sm_30">
                <h4 className="title title_style1 text-center">MVN Mall</h4>
              </div>

            <p className="des_style1 text-center mb_40">Experience a pollution-free haven at MVN's iconic masterpiece, where every breath you take is purified by advanced air filtration systems. Nestled above MVN mall, everything you need—from gourmet dining to designer boutiques and private cinemas—is just an elevator ride away. This is a sanctuary where luxury and convenience come together, offering you everything at your doorstep, so you never need to leave.</p>

            <div className="row">
              
                <div className="col-sm-12 col-md-6 col-lg-6 mvn_mall_left_col">
                  <div className="position-relative">
                    <img src={mvnMallAnimatedImg} alt="mvn mall icon" className="img-fluid" />
                    <Watermark />
                    <Logomark className="left sm" />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 mvn_mall_right_col">

                  <div className="position-relative mb-4">
                    <img src={mvnMallBannerImg2} alt="mvn mall icon" className="img-fluid" />
                    <Watermark />
                    <Logomark className="left sm" />
                  </div>

                  <div className="position-relative">
                    <img src={mvnMallBannerImg1} alt="mvn mall icon" className="img-fluid" />
                    <Watermark />
                    <Logomark className="left sm" />
                  </div>

                </div>
              </div>
          </Container>
        )}

        
      </section>
    </>
  );
};

export default MvnMall;
