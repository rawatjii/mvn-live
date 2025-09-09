import React, { useState, Suspense, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

import Hero from "../components/homepage/Hero";
import Overview from "../components/homepage/Overview";
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

import { useDispatch, useSelector } from "react-redux";
import { fetchhome, clearhome } from "../../redux/homepageSlice";

import "swiper/css";
import "swiper/css/navigation";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import useFetchData from "../utils/apiHelper";
import Intro from "../components/homepage/Intro";
import LazyLoadComponent from "../../common/LazyLoadComponent";
import { API_URL, BACKEND_IMAGE_URL } from "../../config/config";
import WhatsappBtn from "../components/Whatsapp";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  const [pageMetaData, setPageMetaData] = useState(null);
  const [metaDataArray, setMetaData] = useState([]);
  let { home: homepageData, loading } = useSelector((state) => state.home);
  homepageData = homepageData?.data;
  const dispatch = useDispatch();

  const { data: metaData } = useFetchData(`get-page-meta/3`);
  const rehydrated = useSelector((state) => state._persist?.rehydrated);

  useEffect(() => {
    if (!homepageData) {
      dispatch(fetchhome());
    }
  }, [dispatch]);
  useEffect(() => {
    console.log(homepageData, "homepageData");
  }, [homepageData]);

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
            return <Intro data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-introduction")
            return <Overview data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-overview")
            return <ClubOne data={section} key={secIndex + section.id} />;
        })}
        {homepageData?.map((section, secIndex) => {
          if (section.page_section == "home-video")
            return (
              <Offer
                data={section}
                clickHandler={showCustomModal}
                key={secIndex + section.id}
              />
            );

          if (section.page_section == "home-project")
            return (
              <Projects
                data={section}
                clickHandler={showCustomModal}
                key={secIndex + section.id}
              />
            );

          if (section.page_section == "home-verticals")
            return <OtherProjects data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-infrastructure")
            return <OurJourney data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-people-behind")
            return <OurTeam data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-brand-ethos")
            return <OurBrand data={section} key={secIndex + section.id} />;

          if (section.page_section == "home-client-says")
            return <Testimonial data={section} key={secIndex + section.id} />;
        })}
        <div className="flex-footer-form">
          <Enquire />
          <EnquireForm projectName={"MVN Infrastructure"} />
        </div>
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
