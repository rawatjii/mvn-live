import React, { useState, useEffect, Suspense } from "react";
import MicroBanner from "../components/MicroBanner/Index";

const ContactPage = React.lazy(() => import('../components/contact/Index'));

import MobilebannerBg from '../assets/images/contact/head-banner_bg.webp';
import DesktopbannerBg from '../assets/images/contact/head-banner_bg-2.webp';
import Enquire from '../components/homepage/Enquire';
import EnquireForm from '../components/homepage/EnquireForm';
import InitialLoading from "../skeleton/Initial/Index";
import Layout from "../components/Layout";

const ContactUs = () => {
  window.scrollTo(0, 0);
  const [bannerBg, setBannerBg] = useState(DesktopbannerBg);
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));

  const breadcrumbs = {
    title: 'Contact Us',
    links: [
      { name: 'Home', link: '/' },
      { name: 'Contact Us' }
    ]
  };

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem('count')));
  }, [localStorage.getItem('count')]);

  // Update background image dynamically based on screen width
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth <= 768) {
        setBannerBg(MobilebannerBg);
      } else {
        setBannerBg(DesktopbannerBg);
      }
    };

    // Initial check
    updateBackground();

    // Add event listener for screen resize
    window.addEventListener('resize', updateBackground);

    // Cleanup event listener
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
  //   return <InitialLoading loadingCount={newLoadingCount} setLoadingCount={setNewLoadingCount} fast="true" second="true" />;
  // }

  return (
    <>
      <Layout>
        <MicroBanner bg={bannerBg} data={breadcrumbs} />
        <div className="micro_content">
          <div className="micro_data">
              <Suspense fallback="loading">
                <ContactPage />
                  <div className="flex-footer-form">
                  <Enquire />
                  <EnquireForm projectName={'MVN Infrastructure'}/>
                </div>
              </Suspense>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
