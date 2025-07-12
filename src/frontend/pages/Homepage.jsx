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
        <title>Best Property Developers in Gurugram| MVN Infrastructure</title>
        <meta
          name="description"
          content="Best Developers in Gurgaon. 5.5 BHK Largest floor sizes in Gurugram. 40+ years of delivering trust and projects on time. MVN Infrastructure."
        />
        <meta
          name="keywords"
          content="MVN Infrastructure, MVN Gurgaon, MVN MALL Gurugram, MVN aero one, 5BHK in Gurgaon, Aero one, MVN Bangalore, mvn.in, MVN Developer."
        />
        <link rel="preload" as="image" href="/assets/images/logo_white.webp" />
        <link
          rel="preload"
          as="image"
          href="/assets/images/homepage/hero/hero_img_sm.webp"
        />
        <link rel="canonical" href="https://www.mvn.in/" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
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
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Property Developers in Gurugram| MVN Infrastructure"
        />
        <meta
          property="og:description"
          content="Best Developers in Gurgaon. 5.5 BHK Largest floor sizes in Gurugram. 40+ years of delivering trust and projects on time. MVN Infrastructure."
        />
        <meta property="og:url" content="https://www.mvn.in/" />
        <meta property="og:site_name" content="MVN Infrastructure" />
        <meta
          property="og:image"
          content="https://mvn.in/assets/images/logo.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@MVN_infra" />
        <meta
          name="twitter:title"
          content="Best Property Developers in Gurugram| MVN Infrastructure"
        />
        <meta
          name="twitter:description"
          content="Best Developers in Gurgaon. 5.5 BHK Largest floor sizes in Gurugram. 40+ years of delivering trust and projects on time. MVN Infrastructure."
        />
        <meta name="twitter:creator" content="@MVN_infra" />
        <meta
          name="twitter:image"
          content="https://mvn.in/assets/images/logo.png"
        />

        <script async type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                "name": "MVN Infrastructure",
                "address": {
                "@type": "PostalAddress",
                "streetAddress": "MVN Group, 2nd Floor, Above McDonald's, Jansons Mall, Downtown Park II, Menakunte, Sadahalli Gate",
                "addressLocality": "Bangalore",
                "addressRegion": "KA",
                "postalCode": "562157"
                },
                "image": "https://mvn.in/assets/images/logo_white.webp",
                "email": "info@mvn.in",
                "telePhone": "+91 916 4001 177",
                "url": "https://mvn.in/",
                "paymentAccepted": [ "check" ],
                "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-22:00",
                "openingHoursSpecification": [ {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
                ],
                "opens": "09:00",
                "closes": "22:00"
                } ],
                "priceRange":"$"
                
              }
            `}
        </script>

        <script async type="application/ld+json">
          {`
                {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "MVN Infrastructure",
                "alternateName": "MVN",
                "url": "https://www.mvn.in/",
                "logo": "https://www.mvn.in/assets/images/logo_white.webp",
                "sameAs": [
                  "https://www.facebook.com/officialmvninfra/",
                  "https://x.com/MVN_infra",
                  "https://www.instagram.com/mvn_infrastructure/",
                  "https://www.youtube.com/@MVNInfrastructures",
                  "https://www.linkedin.com/company/mvn-infrastructure/"
                ]
              }
              `}
        </script>
      </Helmet>

      <Layout>
        <Hero />
        <Overview />

        {/* <LazyLoadComponent>
          <ClubOne />
        </LazyLoadComponent> */}

        <LazyLoadComponent>
          <MvnMall />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Strip clickHandler={showCustomModal} />
        </LazyLoadComponent>

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
            projectName="MVN Aeroone"
            isOffer={isOffer}
          />
        </Suspense>
      </Layout>
    </>
  );
};

export default Homepage;
