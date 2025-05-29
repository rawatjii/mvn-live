import React, { useState, useEffect, Suspense } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import AboutOverview from '../components/About/Overview';

const Philosophy = React.lazy(()=>import("../components/About/Philosophy"));
const Timeline = React.lazy(()=>import("../components/About/Timeline"));
const OurTeam = React.lazy(()=>import("../components/About/Ourteam"));
const Enquire = React.lazy(()=>import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(()=>import("../components/homepage/EnquireForm"));

import Layout from "../components/Layout";

import { API_URL } from "../../config/config";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  window.scrollTo(0, 0);
  
  const [microBg, setMicroBg] = useState(`${API_URL}images/about/about-head-bg-desktop.webp`);
  
  const breadcrumbs = {
    title: 'About Us',
    content: 'Building Brilliance, Crafting Opulence',
    links: [
      { name: 'Home', link: '/' },
      { name: 'About Us' }
    ]
  };

  // Update background image based on window width
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth <= 768) {
        setMicroBg(`${API_URL}images/about/about-head-bg-desktop.webp`);
      } else {
        setMicroBg(`${API_URL}images/about/about-head-bg-desktop.webp`);
      }
    };

    // Initial check
    updateBackground();

    // Add resize event listener
    window.addEventListener('resize', updateBackground);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>About MVN | Trusted Real Estate Developers in India</title>
        <meta name="description" content="Learn about MVN’s legacy as a trusted real estate company in India. Discover our vision, values, and commitment to delivering quality residential and commercial projects."></meta>
        <link rel="canonical" href="https://www.mvn.in/about-us" />
      </Helmet>


      <Layout>
        <MicroBanner bg={microBg} data={breadcrumbs} />

        <div className="micro_content">
          <div className="micro_data">
            <AboutOverview />

            <Suspense fallback="">
              <Philosophy />
            </Suspense>

            <Suspense fallback="">
              <Timeline />
            </Suspense>

            <Suspense fallback="">
              <OurTeam />
            </Suspense>

            <div className="flex-footer-form">
              <Suspense fallback="">
                <Enquire />
              </Suspense>

              <Suspense fallback="">
                <EnquireForm projectName={"MVN Infrastructure"} />
              </Suspense>
            </div>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
