import React, { useState, Suspense, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Skeleton from "../../common/Loader/skeleton/Index";

import Hero from "../components/homepage/Hero";
const Intro = React.lazy(() => import("../components/homepage/Intro"));
const Overview = React.lazy(() => import("../components/homepage/Overview"));
const Banner1 = React.lazy(() => import("../components/homepage/Banner1"));
const Offer = React.lazy(() => import("../components/homepage/Offer"));
const Projects = React.lazy(()=>import("../components/homepage/Projects")) ;
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
const WhatsappBtn = React.lazy(() => import("../components/Whatsapp"));
// const Enquire = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("../components/homepage/Enquire")), 100000)
//   )
// );

import "swiper/css";
import "swiper/css/navigation";
import useFetchData from "../utils/apiHelper";
import { API_URL, BACKEND_IMAGE_URL } from "../../config/config";
import LazyLoadComponent from "../../common/LazyLoadComponent";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [pageMetaData, setPageMetaData] = useState(null);
  const [metaDataArray, setMetaData] = useState([]);

  const { data: homepageData, loading } = useFetchData(
    `page/page-section/home`
  );

  const { data: metaData } = useFetchData(`get-page-meta/3`);

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

  useEffect(() => {
    setPageMetaData(metaData?.[0]);
  }, [metaData]);

  useEffect(() => {
    const headDataArray = pageMetaData?.head_data?.split("\n");

    // Convert each string element to its appropriate type
    const parsedArray = headDataArray?.map((item) => item);

    parsedArray?.map((item) => {
      setMetaData((prevState) => [...prevState, item]);
    });
  }, [pageMetaData]);

  useEffect(() => {
    var headDataContainer;
    if (pageMetaData?.head_data) {
      headDataContainer = document.createElement("div");
      headDataContainer.innerHTML = pageMetaData.head_data;
      Array.from(headDataContainer.children).forEach((child) => {
        document.head.appendChild(child);
      });
    }

    return () => {
      if (headDataContainer) {
        Array.from(headDataContainer.children).forEach((child) => {
          document.head.removeChild(child);
        });
      }
    };
  }, [pageMetaData]);

  if (loading)
    return (
      <div className="loading_screen" style={{ position: "relative" }}>
        <img
          src={
            window.innerWidth < 768
              ? API_URL + "loader/homepage_loading_sm.webp"
              : API_URL + "loader/homepage_loading.webp"
          }
          alt="loading screen"
          className="img-fluid w-100"
          style={{ width: "100%" }}
        />
        <p
          className="loading"
          style={{
            position: "fixed ",
            top: "calc(100vh - 40px)",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "14px",
            letterSpacing: "3px",
            textShadow: "0 0 10px #000",
            fontWeight: 600,
          }}
        >
          Loading Experience...
        </p>
      </div>
    );
  if (!loading && homepageData && homepageData.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <>
      <Helmet>
        {pageMetaData && pageMetaData.meta_title && (
          <title>{pageMetaData.meta_title}</title>
        )}
        {pageMetaData && pageMetaData.meta_description && (
          <meta name="description" content={pageMetaData.meta_description} />
        )}
        {pageMetaData && pageMetaData.meta_keywords && (
          <meta name="keywords" content={pageMetaData.meta_keywords} />
        )}
        {pageMetaData && pageMetaData.head_data && (
          <div dangerouslySetInnerHTML={{ __html: pageMetaData.head_data }} />
        )}
      </Helmet>

      <WhatsappBtn />

      <Layout>
        {homepageData?.map((section, secIndex) => {
          if (section.page_section == "home-banner")
            return <Hero data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-area")
            return (
              <Suspense fallback={<p></p>}>
                <Intro data={section} key={secIndex + section.id} />
              </Suspense>
            );

          if (section.page_section == "home-introduction")
            return (
              <Suspense fallback={<p></p>}>
                <Overview data={section} key={secIndex + section.id} />
              </Suspense>
            );

          if (section.page_section == "home-overview")
            return (
              <Suspense fallback={<p></p>}>
                <ClubOne data={section} key={secIndex + section.id} />
              </Suspense>
            );
        })}

        {homepageData?.map((section, secIndex) => {
          if (section.page_section == "home-video")
            return (
              <Suspense fallback={<p></p>}>
                {" "}
                <Offer
                  data={section}
                  clickHandler={showCustomModal}
                  key={secIndex + section.id}
                />
              </Suspense>
            );

          if (section.page_section == "home-project")
            return (
              <LazyLoadComponent margin="200px">
                <Suspense fallback={<p></p>}>
                  <Projects
                    data={section}
                    clickHandler={showCustomModal}
                    key={secIndex + section.id}
                  />
                </Suspense>
                
              </LazyLoadComponent>
            );

          if (section.page_section == "home-verticals")
            return (
              <Suspense fallback={<p></p>}>
                <OtherProjects data={section} key={secIndex + section.id} />
              </Suspense>
            );

          if (section.page_section == "home-infrastructure")
            return (
              <Suspense fallback={<p></p>}>
                <OurJourney data={section} key={secIndex + section.id} />
              </Suspense>
            );

          if (section.page_section == "home-people-behind")
            return (
              <Suspense fallback={<p></p>}>
                <OurTeam data={section} key={secIndex + section.id} />
              </Suspense>
            );

          if (section.page_section == "home-brand-ethos")
            return (
              <Suspense fallback={<p></p>}>
                <OurBrand data={section} key={secIndex + section.id} />
              </Suspense>
            );

          if (section.page_section == "home-client-says")
            return (
              <Suspense fallback={<p></p>}>
                <Testimonial data={section} key={secIndex + section.id} />
              </Suspense>
            );
        })}

        <div className="flex-footer-form">
          <Suspense fallback={<p></p>}>
            <Enquire />
          </Suspense>
          <Suspense fallback={<p></p>}>
            <EnquireForm projectName={"MVN Infrastructure"} />
          </Suspense>
        </div>

        <Suspense fallback={<div></div>}>
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
