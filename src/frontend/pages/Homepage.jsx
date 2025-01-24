import React, { useState, useEffect, Suspense, useRef } from "react";

import Layout from "../components/Layout";
import EnquireForm from "../components/homepage/EnquireForm";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

// Lazy-loaded components

const Overview = React.lazy(() => import("../components/homepage/Overview"));
const Banner1 = React.lazy(()=>import("../components/homepage/Banner1"));
const Offer = React.lazy(()=>import("../components/homepage/Offer"));
const Projects = React.lazy(()=>import("../components/homepage/Projects"));
const OtherProjects = React.lazy(()=>import("../components/homepage/OtheProjects"));
const OurJourney = React.lazy(()=>import("../components/homepage/OurJourney"));
const OurTeam = React.lazy(()=>import("../components/homepage/OurTeam"));
const OurBrand = React.lazy(()=>import("../components/homepage/OurBrand"));
const Testimonial = React.lazy(()=>import("../components/homepage/Testimonial"));
const Enquire = React.lazy(()=>import("../components/homepage/Enquire"));

import CustomModal from "../../common/Modal";
import Hero from "../components/homepage/Hero";

import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
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

  return (
    <Layout >
      <Hero />

      <Suspense fallback={<div>Loading...</div>}>
        <Overview  />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Banner1 />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Offer clickHandler={showCustomModal} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <OtherProjects />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <OurJourney />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <OurTeam />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <OurBrand />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonial />
      </Suspense>
      

      <div className="flex-footer-form">
        <Suspense fallback={<div>Loading...</div>}>
          <Enquire />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <EnquireForm projectName={"MVN Infrastructure"} />
        </Suspense>
      </div>

      <CustomModal hide={isHideModal} show={isShowModal} type="enquire" projectName="MVN Aeroone" isOffer={isOffer}  />
    </Layout>
  );
};

export default Homepage;
