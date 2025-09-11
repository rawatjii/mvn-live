import React, { useState, Suspense, useCallback } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Skeleton from "../../common/Loader/skeleton/Index";
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
const MvnMall = React.lazy(() => import("../components/homepage/MvnMall"));
import LazyLoadComponent from "../../common/LazyLoadComponent";
import Strip from "../components/homepage/Strip";
import Strip11 from "../components/homepage/Strip11";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isOffer, setIsOffer] = useState(false);

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

  return (
    <>
     <Helmet>
  <title>MVN Infrastructure – 40+ Years of Real Estate Excellence</title>
  <meta 
    name="description" 
    content="MVN Infrastructure has delivered trust, timely projects, and prime luxury locations, shaping India's skyline with quality and innovation." 
  />
  <meta 
    name="keywords" 
    content="MVN Infrastructure, MVN Gurgaon, MVN MALL Gurugram, MVN aero one, 5BHK in Gurgaon, Aero one, MVN Bangalore, mvn.in, MVN Developer." 
  />
  
  <link rel="preload" as="image" href="/assets/images/logo_white.webp" />
  <link rel="preload" as="image" href="/assets/images/homepage/hero/hero_img_sm.webp" />
  
  <link rel="canonical" href="https://www.mvn.in/" />
  <meta name="distribution" content="Global" />
  <meta name="language" content="English" />
  <meta name="doc-type" content="Public" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="MVN Infrastructure" />
  <meta name="googlebot" content="all, index, follow" />
  <meta name="YahooSeeker" content="all, index, follow" />
  <meta name="msnbot" content="all, index, follow" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="revisit-after" content="1 days" />
  <meta name="rating" content="safe for kids" />
  <meta name="expires" content="never" />
  
  <meta property="og:url" content="https://www.mvn.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="MVN Infrastructure – 40+ Years of Real Estate Excellence" />
  <meta property="og:description" content="MVN Infrastructure has delivered trust, timely projects, and prime luxury locations, shaping India's skyline with quality and innovation." />
  <meta property="og:site_name" content="MVN Infrastructure – 40+ Years of Real Estate Excellence" />
  <meta property="og:image" content="https://mvnbackend.gtftechnologies.com/uploads/project/elevant-galleries/1748697415520.webp" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MVNInfrastructure" />
  <meta name="twitter:title" content="MVN Infrastructure – 40+ Years of Real Estate Excellence" />
  <meta name="twitter:description" content="MVN Infrastructure has delivered trust, timely projects, and prime luxury locations, shaping India's skyline with quality and innovation." />
  <meta name="twitter:creator" content="@MVNInfrastructure" />
  <meta name="twitter:image" content="https://mvnbackend.gtftechnologies.com/uploads/project/elevant-galleries/1748697415520.webp" />
  
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MVN Infrastructure",
      "url": "https://www.mvn.in/",
      "logo": "https://img.websitedesigningcompany.co.in/public/assets/logo_white.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "799 6000 196",
        "contactType": "technical support",
        "contactOption": "TollFree",
        "areaServed": "IN",
        "availableLanguage": ["en", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/officialmvninfra/",
        "https://www.instagram.com/mvn_infrastructure/",
        "https://www.linkedin.com/company/mvn-infrastructure/",
        "https://www.youtube.com/@MVNInfrastructures"
      ]
    })}
  </script>
</Helmet>

      <Layout>
        <Hero />
        <Overview />

        <LazyLoadComponent>
          <ClubOne />
        </LazyLoadComponent>

        {/* <LazyLoadComponent>
          <MvnMall />
        </LazyLoadComponent> */}

        {/* <LazyLoadComponent>
          <Strip11 clickHandler={showCustomModal} />
        </LazyLoadComponent> */}

        <LazyLoadComponent>
          <Offer clickHandler={showCustomModal} />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Projects />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <OtherProjects />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <OurJourney />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <OurTeam />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <OurBrand />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Testimonial />
        </LazyLoadComponent>

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
            projectName="MVN Infrastructure"
            isOffer={isOffer}
          />
        </Suspense>
      </Layout>
    </>
  );
};

export default Homepage;
