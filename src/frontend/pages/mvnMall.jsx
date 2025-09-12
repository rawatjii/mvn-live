import React, { useEffect, useState, useRef, Suspense } from "react";
import MicroOverview from "../components/MicroPage/Overview";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Footer from "../components/Footer";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import { Helmet } from "react-helmet";
import MicroHeader from "../components/MicroHeader";
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import SliderTypology from "../components/MicroPage/bangalore/SliderTypology";
import AthensBanner from "../components/MicroPage/athens/AthensBanner";
import CustomIframe from "../components/MicroPage/CustomIframe";
import Strip from "../components/homepage/Strip11";
import ParallaxSection from "../../common/ParallaxSection";

const MvnMall1 = ({ data }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  const sectionRefs = useRef({});

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const bannerRef = useRef(null);

  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
  };

  return (
    <>
      <Helmet>
        <title>
          {" "}
          MVN Mall | Premier Shopping & Entertainment Hub in Sector-37D,
          Gurugram{" "}
        </title>
        <meta
          name="keywords"
          content="MVN Mall Gurgaon, MVN Mall Gurugram, MVN Mall Sector 37D, MVN Mall Sector 37D Gurgaon, MVN Mall Sector 37D in Gurgaon, MVN Mall project in Gurgaon, MVN Shopping Mall in Sector 37D, MVN Mall in Gurugram, MVN Mall Sector 37D Gurugram."
        />
        <meta
          name="description"
          content="MVN Mall Gurgaon is an upcoming commercial destination in Sector 37D, Gurugram, offering a premium shopping experience with excellent connectivity and state-of-the-art amenities."
        />
        <link rel="canonical" href="https://www.mvn.in/mvn-mall" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MVN Mall Gurugram" />
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
          content="MVN Mall | Premier Shopping & Entertainment Hub in Sector-37D, Gurugram"
        />
        <meta
          property="og:description"
          content="MVN Mall Gurgaon is an upcoming commercial destination in Sector 37D, Gurugram, offering a premium shopping experience with excellent connectivity and state-of-the-art amenities."
        />
        <meta property="og:url" content="https://www.mvn.in/mvn-mall" />
        <meta property="og:site_name" content="MVN Mall Gurugram" />
        <meta
          property="og:image"
          content="https://img.websitedesigningcompany.co.in/public/assets/logo_white.webp"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@MVN_infra" />
        <meta
          name="twitter:title"
          content="MVN Mall | Premier Shopping & Entertainment Hub in Sector-37D, Gurugram"
        />
        <meta
          name="twitter:description"
          content="MVN Mall Gurgaon is an upcoming commercial destination in Sector 37D, Gurugram, offering a premium shopping experience with excellent connectivity and state-of-the-art amenities."
        />
        <meta name="twitter:creator" content="@MVN_infra" />
        <meta
          name="twitter:image"
          content="https://img.websitedesigningcompany.co.in/public/assets/logo_white.webp"
        />
      </Helmet>

      <MicroHeader
        scrollToSection={scrollToSection}
        data={data.header}
        isFixed={isHeaderFixed}
      />

      <div ref={bannerRef}>
        <AthensBanner
          data={data.banner}
          onBannerExit={setIsHeaderFixed}
          isMainBanner={true}
        />
      </div>

      <div className="mt-5 mt-md-0 mb-md-5">
        <Strip />
      </div>

      <div>
        <MicroOverview data={data.overview} heroLoadedStatus={heroLoaded} />
      </div>

      <div>
        <DownloadBrochure
          projectName="MVN Mall Dwarka Expressway"
          showAwards={true}
        />
      </div>

      <CustomIframe data={data.mvnMallVideo} />

      <div>
        <ParallaxSection section_data={data.amenities} />
      </div>

      <div>
        <MicroLocationMap data={data.locationAdvantage} />
      </div>
      <div
        className="container-fluid micro_footer"
        ref={(el) => (sectionRefs.current.Enuqiry = el)}
      >
        <div className="row ">
          <div className="col-sm-6 px-0">
            <Enquire />
          </div>
          <div className="col-sm-6 px-0">
            <EnquireForm projectName={"MVN Mall Dwarka Expressway"} />
          </div>
        </div>
      </div>

      <Footer />

      {/* <ScrollTop /> */}
    </>
  );
};

export default MvnMall1;
