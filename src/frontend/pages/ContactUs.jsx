import React, { useState, useEffect, Suspense } from "react";
import MicroBanner from "../components/MicroBanner/Index";
const ContactPage = React.lazy(() => import('../components/contact/Index'));
import Enquire from '../components/homepage/Enquire';
import EnquireForm from '../components/homepage/EnquireForm';
import Layout from "../components/Layout";
import { API_URL } from "../../config/config";
import { Helmet } from "react-helmet";
import useFetchData from "../utils/apiHelper";
import ContactInfo from "../components/ContactInfo";

const MobilebannerBg = `${API_URL}images/contact/head-banner_bg.webp`;
const DesktopbannerBg = `${API_URL}images/contact/head-banner_bg-2.webp`;

const ContactUs = () => {
  window.scrollTo(0, 0);
  const [pageMetaData, setPageMetaData] = useState(null);
  const [metaDataArray, setMetaData] = useState([])
  const [bannerBg, setBannerBg] = useState(DesktopbannerBg);
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));
  const { data: metaData } = useFetchData(`get-page-meta/7`);

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

  return (
    <>
      <Helmet>
        {pageMetaData && pageMetaData.meta_title && <title>{pageMetaData.meta_title}</title>}
        {pageMetaData && pageMetaData.meta_description && <meta name="description" content={pageMetaData.meta_description} />}
        {pageMetaData && pageMetaData.meta_keyword && <meta name="keywords" content={pageMetaData.meta_keyword} />}
        {pageMetaData && pageMetaData.head_data && <div dangerouslySetInnerHTML={{__html:pageMetaData.head_data}} />}
      </Helmet>
      <Layout>
        <MicroBanner page_section="contact-banner" page="contact-us" bg={bannerBg} data={breadcrumbs} />
        <div className="micro_content">
          <div className="micro_data">
              <Suspense fallback="loading">
                <ContactPage page="contact-us" />
                  <div className="flex-footer-form">
                  <Enquire />
                  <EnquireForm projectName={'MVN Infrastructure'}/>
                </div>
                
                <ContactInfo/>
              </Suspense>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
