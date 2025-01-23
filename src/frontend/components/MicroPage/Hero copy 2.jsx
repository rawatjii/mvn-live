import React, { useEffect, useRef,useState } from "react";
import Container from "react-bootstrap/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import ImgMail from "../../assets/images/icons/email.png";

const MicroHero = ({ data }) => {
  const lottieContainerRef = useRef(null);
  const lottieInstanceRef = useRef(null);

  useEffect(() => {
    if (data.micro_hero_section.isVdo && data.micro_hero_section.animationPath) {
      // Initialize Lottie animation
      lottieInstanceRef.current = lottie.loadAnimation({
        container: lottieContainerRef.current, // the DOM element where the animation will render
        renderer: "canvas", // use "canvas" for performance
        loop: false, // play once
        autoplay: false, // control playback via scroll
        path: data.micro_hero_section.animationPath, // path to the Lottie JSON file
      });

      // Scroll-triggered animation with GSAP
      const scrollAnimation = ScrollTrigger.create({
        trigger: lottieContainerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 2}`, // Adjust based on animation duration
        pin: true,
        scrub: 0.005,
        onUpdate: (self) => {
          const frame = Math.floor(
            self.progress * (lottieInstanceRef.current.totalFrames - 1)
          );
          lottieInstanceRef.current.goToAndStop(frame, true);
        },
      });

      return () => {
        // Cleanup
        lottieInstanceRef.current?.destroy();
        scrollAnimation.kill();
      };
    }
  }, [data.micro_hero_section]);

  return (
    <section className="section micro_hero_section p-0">
      {data.micro_hero_section.isVdo && (
        <div
          ref={lottieContainerRef}
          className="frames_content"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}

      {data.micro_hero_section.images &&
        Array.isArray(data.micro_hero_section.images) &&
        data.micro_hero_section.images.map((imgs, index) => (
          <div key={index} className="hero-img">
            <img
              src={imgs.imgDesk}
              alt={`mvn-hero-image-${index}`}
              className="img-fluid d_lg_block"
              fetchPriority="high"
            />
            <img
              src={imgs.imgMb}
              alt={`mvn-hero-image-sm-${index}`}
              className="img-fluid d_sm_block"
              fetchPriority="high"
            />
          </div>
        ))}

      {data.micro_hero_section.bannerHighLight && (
        <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div>
      )}

      {data.micro_hero_section.enquiryBTN &&
        data.micro_hero_section.enquiryBTN.isshow === true && (
          <div className="enquiry_btn">
            <a
              href={`mailto:${data.micro_hero_section.enquiryBTN.mail}`}
              className="btn btn_enquire"
            >
              <img
                src={ImgMail}
                className="img-fluid mail_enqiry_icon"
                alt="mvn enquiry"
              />
              Enquire Now
            </a>
          </div>
        )}
    </section>
  );
};

export default MicroHero;
