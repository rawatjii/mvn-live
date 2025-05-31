import React, { useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import * as CONFIG from "../../config/config";

import { Container } from "react-bootstrap";

import EnquireForm from "../components/homepage/EnquireForm";
import Enquire from "../components/homepage/Enquire";
import GallerySlider from "../components/GallerySlider";
import PressRelease from "../components/PressRelease";

import Layout from "../components/Layout";
import OfflineMedia from "../components/OfflineMedia";
import OnlineMedia from "../components/OnlineMedia";
import useFetchData from "../utils/apiHelper";
import Events from "../components/Events";

function MediaCenter() {
  window.scrollTo(0, 0);
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));
  
  const mvnLOGO = CONFIG.IMAGE_URL + "logo_white.webp";
  const titleRef = useRef();
  const desRefs = useRef([]);

  const { data:galleryData, loading } = useFetchData("media-center/gallery");

  const breadcrumbs = {
    title: "Media Centre",
    content: "Discover the Pinnacle of Luxury Living",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Media Centre",
      },
    ],
  };

  const newsImages = {
    isshow: true,
    galleryData: [
      {src:`${CONFIG.API_URL}images/mediacenter/news-img-8.webp`, alt:"news Image8"},
      { src: `${CONFIG.API_URL}images/mediacenter/news-img-7.webp`, alt: "Image 7" },
      { src: `${CONFIG.API_URL}images/mediacenter/news-img-1.jpeg`, alt: "Image 1" },
      { src: `${CONFIG.API_URL}images/mediacenter/news-img-2.jpeg`, alt: "Image 2" },
      { src: `${CONFIG.API_URL}images/mediacenter/news-img-3.jpeg`, alt: "Image 3" },
      { src: `${CONFIG.API_URL}images/mediacenter/news-img-4.jpeg`, alt: "Image 4" },
      { src: `${CONFIG.API_URL}images/mediacenter/news-img-5.jpeg`, alt: "Image 5" },
      { src: `${CONFIG.API_URL}images/mediacenter/news-img-6.jpeg`, alt: "Image 6" },
    ],
  };


  const pressReleaseData = [
    {
      thumbnail: `${CONFIG.API_URL}images/mediacenter/theprint-thubmnail.jpg`,
      pdf: `${CONFIG.API_URL}images/mediacenter/theprint.pdf`,
      title: "Press Release 1",
      presscontent:
        "MVN Infrastructure Celebrates Navratri with a Joyous Mata Ki Chowki",
      EventDate: "10 October, 2024",
    },
    {
      thumbnail: `${CONFIG.API_URL}images/mediacenter/daily-news-logo.jpg`,
      pdf: `${CONFIG.API_URL}images/mediacenter/daily24x7news.pdf`,
      title: "Press Release 2",
      presscontent:
        "MVN Infrastructure Celebrates Navratri with a Joyous Mata Ki Chowki",
      EventDate: "10 October, 2024",
    },
    {
      thumbnail: `${CONFIG.API_URL}images/mediacenter/edukida-logo.jpg`,
      pdf: `${CONFIG.API_URL}images/mediacenter/edukida.pdf`,
      title: "Press Release 3",
      presscontent:
        "MVN Infrastructure Celebrates Navratri with a Joyous Mata Ki Chowki",
      EventDate: "10 October, 2024",
    },
  ];

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem('count')));
  }, [localStorage.getItem('count')]);

  return (
    <Layout>
      <div className="media_center">
        <MicroBanner page_section="media-banner" page="media-center"  data={breadcrumbs} />
        <section className="section media-news-section pb-0" aria-label="Media Center Section">
          <div className="micro_content">
            <div className="micro_data">
              <div className="content_col position-relative page-header-main-heading">
                <Container>
                  <div className="heading_div ">
                    <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="mvn vertical icon" className="img-fluid title_plane1" />
                    <h4 ref={titleRef} className="title title_style1 text-center">
                    Latest News
                    </h4>
                  </div>
    
                </Container>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 px-md-0">

                <div className="heading_div mb_60 mb_sm_30">
                  <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="heading icon" className="img-fluid title_plane1" />
                  <h4 className="title title_style1 text-center">
                  Offline Media News
                  </h4>
                </div>
                <div className="media-news_offline">
                  <OfflineMedia data={newsImages} />
                </div>
              </div>

              <div className="col-sm-6 px-md-0">
                <div className="media-news_online">
                  <div className="heading_div mb_60 mb_sm_30">
                    <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="heading icon" className="img-fluid title_plane1" />
                    <h4 className="title title_style1 text-center">
                    Online Media News
                    </h4>
                  </div>
                  

                  <OnlineMedia />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section press-releases-container" aria-label="Press Section">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="heading icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
              Press Releases
              </h4>
            </div>

            <PressRelease
              data={pressReleaseData}
              slidesPerView={3}
              spaceBetween={20}
            />
          </div>
        </section>
        <section className="section media-gallery" aria-label="Media Gallery Section">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="heading icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
                Gallery
              </h4>
            </div>
            <GallerySlider
              data={galleryData}
              slidesPerView={3}
              spaceBetween={20}
              navigation={true}
            />
          </div>
        </section>
        <section className="section media-events" aria-label="Media Events Section">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="heading icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
              OUR EVENTS
              </h4>
            </div>
            
            <div className="row">
              <Events />
              
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <Enquire />
            </div>
            <div className="col-sm-6">
              <div className="media_enquiry_form_card">
              <EnquireForm projectName={'MVN Infrastructure'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    
  );
}

export default MediaCenter;
