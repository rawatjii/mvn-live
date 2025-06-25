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
import useFetchData from "../utils/apiHelper";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  window.scrollTo(0, 0);
  const [pageMetaData, setPageMetaData] = useState(null);
  const [metaDataArray, setMetaData] = useState([])
  const [microBg, setMicroBg] = useState(`${API_URL}images/about/about-head-bg-desktop.webp`);

  const { data, loading } = useFetchData("page/page-section/about");

  const { data: metaData } = useFetchData(`get-page-meta/2`);
  
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
        <MicroBanner page_section="about-banner" data={breadcrumbs} page="about" />

        <div className="micro_content">
          <div className="micro_data">
            {data?.map((el, index)=>{
              if(el.page_section == 'about-overview') return <AboutOverview data={el} />
              if(el.page_section == 'about-philosophy') return <Philosophy data={el} />
              if(el.page_section == 'about-timeline') return <Timeline data={el} />
              if(el.page_section == 'about-behind') return <OurTeam data={el} />
            })}

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
