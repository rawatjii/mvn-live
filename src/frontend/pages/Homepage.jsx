import React, { useState, Suspense, useCallback} from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Skeleton from "../../common/Loader/skeleton/Index";

import Hero from "../components/homepage/Hero";
import Overview from "../components/homepage/Overview";
const Banner1 = React.lazy(()=>import("../components/homepage/Banner1"));
const Offer = React.lazy(()=>import("../components/homepage/Offer"));
const Projects = React.lazy(()=>import("../components/homepage/Projects"));
const OtherProjects = React.lazy(()=>import("../components/homepage/OtheProjects"));
const OurJourney = React.lazy(()=>import("../components/homepage/OurJourney"));
const OurTeam = React.lazy(()=>import("../components/homepage/OurTeam"));
const OurBrand = React.lazy(()=>import("../components/homepage/OurBrand"));
const Testimonial = React.lazy(()=>import("../components/homepage/Testimonial"));
const Enquire = React.lazy(()=>import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(()=>import("../components/homepage/EnquireForm"));
const CustomModal = React.lazy(()=>import("../../common/Modal"));
// const Enquire = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("../components/homepage/Enquire")), 100000)
//   )
// );

import 'swiper/css';
import 'swiper/css/navigation';

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const isHideModal = () => {
    setIsShowModal(false);
    setIsOffer(false)
  };

  const showCustomModal = useCallback((offer)=>{
    if(offer){
      setIsOffer(true)
      setIsShowModal(true);
    }else{
      setIsShowModal(true);
    }
  }, []);

  return (
    <>
        <Layout >
          <Hero />
          <Overview  />

        <Suspense fallback={<Skeleton height="h_70vh" />}>
          <Banner1 />
        </Suspense>

        <Suspense fallback={<Skeleton height="h_100vh" />}>
          <Offer clickHandler={showCustomModal} />
        </Suspense>

        <Suspense fallback={<Skeleton height="h_200vh" />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<Skeleton height="h_70vh h_sm_130vh" />}>
          <OtherProjects />
        </Suspense>

        <Suspense fallback={<Skeleton height="h_70vh h_sm_150vh" />}>
          <OurJourney />
        </Suspense>

        <Suspense fallback={<Skeleton height="h_150vh h_sm_70vh" />}>
          <OurTeam />
        </Suspense>

        <Suspense fallback={<Skeleton height="h_100vh h_sm_130vh" />}>
          <OurBrand />
        </Suspense>

        <Suspense fallback={<Skeleton height="h_90vh" />}>
          <Testimonial />
        </Suspense>
        

        <div className="flex-footer-form">
          <Suspense fallback={<Skeleton height="h_50vh h_sm_30vh" />}>
            <Enquire />
          </Suspense>

          <Suspense fallback={<Skeleton height="h_50vh h_sm_70vh" />}>
            <EnquireForm projectName={"MVN Infrastructure"} />
          </Suspense>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <CustomModal hide={isHideModal} show={isShowModal} type="enquire" projectName="MVN Aeroone" isOffer={isOffer}  />
        </Suspense>

      </Layout>
    </>
    
  );
};

export default Homepage;
