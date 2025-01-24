import React, { useState, useEffect, Suspense } from "react";
const MicroBanner = React.lazy(()=>import("../components/MicroBanner/Index"));
const AboutOverview = React.lazy(()=>import('../components/About/Overview'));
const Philosophy = React.lazy(()=>import("../components/About/Philosophy"));
const Timeline = React.lazy(()=>import("../components/About/Timeline"));
const OurTeam = React.lazy(()=>import("../components/About/Ourteam"));
const Enquire = React.lazy(()=>import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(()=>import("../components/homepage/EnquireForm"));

import Layout from "../components/Layout";

import Mobilemicro_bg from '../assets/images/about/about-head-bg-desktop.webp';
import Desktopmicro_bg from '../assets/images/about/about-head-bg-desktop.webp';

const AboutUs = () => {
  window.scrollTo(0, 0);
  
  const [microBg, setMicroBg] = useState(Desktopmicro_bg);
  
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
        setMicroBg(Mobilemicro_bg);
      } else {
        setMicroBg(Desktopmicro_bg);
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
      <Layout>
        <Suspense fallback="">
          <MicroBanner bg={microBg} data={breadcrumbs} />
        </Suspense>

        <div className="micro_content">
          <div className="micro_data">
            <Suspense fallback="">
              <AboutOverview />
            </Suspense>

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
