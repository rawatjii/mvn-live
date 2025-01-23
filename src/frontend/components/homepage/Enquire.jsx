import React, { useEffect, useRef, useState } from "react";
import SecTitle from "../../../common/SecTitle/Index";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import MobileenquireBg from "../../assets/images/enquire/form-bg.webp";
import DesktopenquireBg from "../../assets/images/enquire/form-bg.webp";

import LazyLoad from "react-lazyload";

gsap.registerPlugin(ScrollTrigger);

const Enquire = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const btnRef = useRef();
  const [imageSrc, setImageSrc] = useState(DesktopenquireBg);

  useEffect(() => {
    // Set the correct image on mount and window resize
    const updateImageSrc = () => {
      setImageSrc(window.innerWidth <= 768 ? MobileenquireBg : DesktopenquireBg);
    };

    updateImageSrc(); // Initial check
    window.addEventListener("resize", updateImageSrc); // Listen for window resize

    return () => {
      window.removeEventListener("resize", updateImageSrc); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });

    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 95%",
      },
    });

    gsap.from(btnRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 95%",
      },
    });
  }, []);

  return (
    <section className="section enquire_section">
      <LazyLoad>
        <img src={imageSrc} alt="mvn-enquire-bg" className="img-fluid enquire_bg" />
      </LazyLoad>

      <Container>
        <h4 ref={titleRef} className="title_style1 text-center">Excited To Meet Us?</h4>
        <p ref={contentRef}>Every query gets answered. You got questions, we got answers.</p>
      </Container>
    </section>
  );
};

export default Enquire;
