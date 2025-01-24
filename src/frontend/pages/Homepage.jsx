import React, { useState, useEffect, Suspense, useRef } from "react";

import Layout from "../components/Layout";
import Projects from "../components/homepage/Projects";
import Projectsmobile from "../components/homepage/Projectsmobile";
import OtherProjects from "../components/homepage/OtheProjects";
import OurJourney from "../components/homepage/OurJourney";
import OurTeam from "../components/homepage/OurTeam";
import OurBrand from "../components/homepage/OurBrand";
import Testimonial from "../components/homepage/Testimonial";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import { Container } from "react-bootstrap";
import InitialLoading from "../skeleton/Initial/Index";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import ModalSelectBox from "../../common/ModalSelectBox";

// Lazy-loaded components

const Overview = React.lazy(() => import("../components/homepage/Overview"));

import * as CONFIG from '../../config/config'

import DeskopheronormalImg from "../../frontend/assets/images/hero/hero_img.webp";
import MobileheronormalImg from "../../frontend/assets/images/hero/hero_img_sm.webp";

// banner2
import banner2_desktop from "../../frontend/assets/images/hero/hero_img2.webp";
import banner2_mobile from "../../frontend/assets/images/hero/hero_img_sm2.webp";

import DeskopheronormalImg2 from "../../frontend/assets/images/hero/strip-banner.webp";
import MobileheronormalImg2 from "../../frontend/assets/images/hero/strip-banner-mobile.webp";

import homeMobileLogo from "../../frontend/assets/mvn-aeroone-logo-img.webp";

import 'swiper/css';
import 'swiper/css/navigation';
import CustomModal from "../../common/Modal";
import { Link } from "react-router-dom";
import ScrollTop from "../../common/ScrollToTop/Index";
import { useMatches } from "../../theme/theme";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const fixScrollSectionRef = useRef(null);
  const scrollTopRef = useRef(null);

  const isHideModal = () => {
    setIsShowModal(false);
    setIsOffer(false)
  };

  const showCustomModal = (offer)=>{
    if(offer){
      setIsOffer(true)
      setIsShowModal(true);
    }else{
      setIsShowModal(true);
    }
  }

  const smootherRef = useRef(null);
  const { isMobile } = useMatches();
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );

  useEffect(() => {
    localStorage.removeItem('count');
    setNewLoadingCount(Number(localStorage.getItem("count")));
  }, []);



  useEffect(() => {
    if (fixScrollSectionRef.current && scrollTopRef.current) {
      const scrollTopEl = scrollTopRef.current;
      gsap.set(scrollTopEl, { opacity: 0, pointerEvents: "none" });

      ScrollTrigger.create({
        trigger: fixScrollSectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => gsap.to(scrollTopEl, { opacity: 1, pointerEvents: "auto", duration: 0.3 }),
      });
    }
  }, []);

  return (
    <Layout >
      
      

      <div className="parent-box-div">
        <a
          href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
          className="hero-banner-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isMobile ? MobileheronormalImg : DeskopheronormalImg}
            alt="Hero Banner"
            className="img-fluid hero-banner"
          />
        </a>

        <div className="slider-content">
          <h1 className="slider-heading">Enter The Experience Center</h1>
          <div className="btns">
            <Link
              to={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
              className="btn ink-btn btn_style3 r_100"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-view-box" ref={fixScrollSectionRef}>
        <Container>
          <img
            src={homeMobileLogo}
            alt="mvn aeroone logo"
            className="img-fluid mobile-img-logo"
          />
          <h2 className="logo_title">Gurugram</h2>
          <span className="status">New Launch</span>
          <h3 className="slogan-heading">
            Behold to Experience the complete view!
          </h3>
          <a
            href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
            className="btn btn_style3 r_100 mt-3 mt-md-4"
          >
            Click Here
          </a>
        </Container>
      </div>


      <Suspense fallback={<div>Loading...</div>}>
        <Overview  />
      </Suspense>

      <a
        href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
        className="hero-banner-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={isMobile ? MobileheronormalImg2 : DeskopheronormalImg2}
          alt="Hero Banner"
          className="img-fluid degree-img"
        />
      </a>

      <div className="offers_section">
        <div className="single" style={{cursor:'pointer'}} onClick={()=>showCustomModal(false)}>
          <video src={CONFIG.IMAGE_URL + "offer/offer1.mp4"} muted autoPlay className="img-fluid d-none d-md-block" playsInline />
          <video src={CONFIG.IMAGE_URL + "offer/offer1_sm.mp4"} muted autoPlay className="img-fluid d-md-none" playsInline />
        </div>
      </div>
      <Projects />
      <OtherProjects />
      <OurJourney />
      <OurTeam />
      <OurBrand />
      <Testimonial />

      <div className="flex-footer-form">
        <Enquire />
        <EnquireForm projectName={"MVN Infrastructure"} />
      </div>
      

      <CustomModal hide={isHideModal} show={isShowModal} type="enquire" projectName="MVN Aeroone" isOffer={isOffer}  />
    </Layout>
  );
};

export default Homepage;
