import React, { useState, Suspense, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Skeleton from "../../common/Loader/skeleton/Index";

import Hero from "../components/homepage/Hero";
import Overview from "../components/homepage/Overview";
const Banner1 = React.lazy(() => import("../components/homepage/Banner1"));
const Offer = React.lazy(() => import("../components/homepage/Offer"));
const Projects = React.lazy(() => import("../components/homepage/Projects"));
const OtherProjects = React.lazy(() =>
  import("../components/homepage/OtheProjects")
);
const OurJourney = React.lazy(() =>
  import("../components/homepage/OurJourney")
);
const OurTeam = React.lazy(() => import("../components/homepage/OurTeam"));
const OurBrand = React.lazy(() => import("../components/homepage/OurBrand"));
const Testimonial = React.lazy(() =>
  import("../components/homepage/Testimonial")
);
const Enquire = React.lazy(() => import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(() =>
  import("../components/homepage/EnquireForm")
);
const CustomModal = React.lazy(() => import("../../common/Modal"));
const ClubOne = React.lazy(() => import("../components/homepage/ClubOne"));
const MvnMall = React.lazy(() => import("../components/homepage/MvnMall"));
// const Enquire = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("../components/homepage/Enquire")), 100000)
//   )
// );

import "swiper/css";
import "swiper/css/navigation";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import useFetchData from "../utils/apiHelper";
import Intro from "../components/homepage/Intro";
import LazyLoadComponent from "../../common/LazyLoadComponent";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [pageMetaData, setPageMetaData] = useState(null);
  const [metaDataArray, setMetaData] = useState([])

  const { data: homepageData, loading } = useFetchData(
    `page/page-section/home`
  );

  const { data: metaData } = useFetchData(`get-page-meta/3`);

  // const fetchPageMeta = async()=>{
  //   try{
  //     const response = await fetch('https://mvnbackend.gtftechnologies.com/api/admin/page-meta/3');
  //     const fetchPageData = await response.json();
  //     setPageMetaData(fetchPageData.data);
  //   }catch(error){
  //     console.error(error);
  //   }
  // }


  const isHideModal = () => {
    setIsShowModal(false);
    setIsOffer(false);
  };

  const showCustomModal = useCallback((offer) => {
    if (offer) {
      setIsOffer(true);
      setIsShowModal(true);
    } else {
      setIsShowModal(true);
    }
  }, []);
  
  useEffect(()=>{
    setPageMetaData(metaData?.[0])
  }, [metaData])

  useEffect(()=>{
    const headDataArray = pageMetaData?.head_data?.split('\n')

    // Convert each string element to its appropriate type
    const parsedArray = headDataArray?.map(item => item);
  
    parsedArray?.map(item=>{
        setMetaData(prevState=>([
            ...prevState,
            item,
        ]))
    })
    
  }, [pageMetaData])

  useEffect(()=>{
      var headDataContainer;
      if (pageMetaData?.head_data) {
          headDataContainer = document.createElement('div');
          headDataContainer.innerHTML = pageMetaData.head_data;
          Array.from(headDataContainer.children).forEach(child => {
              document.head.appendChild(child);
          });
      }

      return ()=>{
          if (headDataContainer) {
              Array.from(headDataContainer.children).forEach(child => {
                document.head.removeChild(child);
              });
          }
      }
  }, [pageMetaData])
  

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && homepageData && homepageData.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <>
      <Helmet>
        {pageMetaData && pageMetaData.meta_title && <title>{pageMetaData.meta_title}</title>}
        {pageMetaData && pageMetaData.meta_description && <meta name="description" content={pageMetaData.meta_description} />}
        {pageMetaData && pageMetaData.meta_keywords && <meta name="keywords" content={pageMetaData.meta_keywords} />}
        {pageMetaData && pageMetaData.head_data && <div dangerouslySetInnerHTML={{__html:pageMetaData.head_data}} />}
      </Helmet>

      <Layout>
        {homepageData?.map((section, secIndex) => {
          if (section.page_section == "home-banner")
            return <Hero data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-area")
            return <Intro data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-introduction")
            return <Overview data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-overview")
            return <LazyLoadComponent><ClubOne data={section} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-shopping")
            return <LazyLoadComponent><MvnMall data={section} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-video")
            return <LazyLoadComponent><Offer data={section} clickHandler={showCustomModal} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-project")
            return <LazyLoadComponent><Projects data={section} clickHandler={showCustomModal} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-verticals")
            return <LazyLoadComponent><OtherProjects data={section} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-infrastructure")
            return <LazyLoadComponent><OurJourney data={section} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-people-behind")
            return <LazyLoadComponent><OurTeam data={section} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-brand-ethos")
            return <LazyLoadComponent><OurBrand data={section} key={secIndex + section.id} /></LazyLoadComponent>;

          if (section.page_section == "home-client-says")
            return <LazyLoadComponent><Testimonial data={section} key={secIndex + section.id} /></LazyLoadComponent>;
        })}
        {/* <Suspense fallback={<Skeleton height="h_90vh" />}>
          <Testimonial />
        </Suspense> */}
        <LazyLoadComponent>
          <div className="flex-footer-form">
              <Enquire />
              <EnquireForm projectName={"MVN Infrastructure"} />
          </div>
        </LazyLoadComponent>

        <Suspense fallback={<div>Loading...</div>}>
          <CustomModal
            hide={isHideModal}
            show={isShowModal}
            type="enquire"
            projectName="MVN Aeroone"
            isOffer={isOffer}
          />
        </Suspense>
      </Layout>
    </>
  );
};

export default Homepage;
