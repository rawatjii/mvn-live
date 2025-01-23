import React, { useState, useEffect } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import AboutOverview from '../components/About/Overview';
import Philosophy from "../components/About/Philosophy";
import Timeline from "../components/About/Timeline";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Mobilemicro_bg from '../assets/images/about/about-head-bg-desktop.webp';
import Desktopmicro_bg from '../assets/images/about/about-head-bg-desktop.webp';
import OurTeam from "../components/About/Ourteam";
import ScrollToTop from "../../common/ScrollToTop";
import Layout from "../components/Layout";
import InitialLoading from "../skeleton/Initial/Index";

const AboutUs = () => {
  window.scrollTo(0, 0);
  
  const [microBg, setMicroBg] = useState(Desktopmicro_bg);
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count1')));
  
  const breadcrumbs = {
    title: 'About Us',
    content: 'Building Brilliance, Crafting Opulence',
    links: [
      { name: 'Home', link: '/' },
      { name: 'About Us' }
    ]
  };

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem('count1')));
  }, [localStorage.getItem('count1')]);

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

  // useEffect(() => {
  //   if (newLoadingCount === 100) {
  //     const timer = setTimeout(() => {
  //       setNewLoadingCount(101);
  //     }, 500); // 1 seconds delay before removing InitialLoading

  //     return () => clearTimeout(timer);
  //   }
  // }, [newLoadingCount]);

  // if (newLoadingCount <= 100) {
  //   return <InitialLoading loadingCount={newLoadingCount} setLoadingCount={setNewLoadingCount} fast="true" second="true"/>;
  // }

  return (
    <>
      <Layout>
        <MicroBanner bg={microBg} data={breadcrumbs} />
        <div className="micro_content">
          <div className="micro_data">
            <AboutOverview />
            <Philosophy />
            <Timeline />
            <OurTeam />
            <div className="flex-footer-form">
              <Enquire />
              <EnquireForm projectName={'MVN Infrastructure'}/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
