import React, { useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import * as CONFIG from "../../config/config";

import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";
// import mediaIcon from '../assets/images/icons/media/media.png'
// import McVideo from '../assets/videos/media/video.mp4'
// import McVideoPoster from '../assets/videos/media/poster.png'
import rightArrow from "../assets/images/mediacenter/right-arrow.png";
import newsIMG from "../assets/images/mediacenter/newsdrum-logo.jpg";
// import newsIMG from '../assets/images/mediacenter/news-1.png'
import aninewsIMG from "../assets/images/mediacenter/aninews.png";
import webindiaIMG from "../assets/images/mediacenter/webindia-logo.png";
import financialExpIMG from "../assets/images/mediacenter/financialexp_logo.webp";

// news images

import newsIMG1 from "../assets/images/mediacenter/news-img-1.jpeg";
import newsIMG2 from "../assets/images/mediacenter/news-img-2.jpeg";
import newsIMG3 from "../assets/images/mediacenter/news-img-3.jpeg";
import newsIMG4 from "../assets/images/mediacenter/news-img-4.jpeg";
import newsIMG5 from "../assets/images/mediacenter/news-img-5.jpeg";
import newsIMG6 from "../assets/images/mediacenter/news-img-6.jpeg";
import newsIMG7 from "../assets/images/mediacenter/news-img-7.webp";

import mediaGalleryImg1 from "../assets/images/projects/gallery_img1.webp";
import mediaGalleryImg2 from "../assets/images/projects/gallery_img2.webp";
import mediaGalleryImg3 from "../assets/images/projects/gallery_img3.webp";
import mediaGalleryImg4 from "../assets/images/projects/gallery-img-5.webp";
import mediaGalleryImg5 from "../assets/images/projects/gallery-img-6.jpg";
// import eventGalleryImg1 from '../assets/images/mediacenter/event-img-1.jpg'
// import eventGalleryImg2 from '../assets/images/mediacenter/event-img-2.jpg'
import youtubeVideoBanner1 from "../assets/images/mediacenter/youtube-video-banner-1.jpg";
import youtubeVideoBanner2 from "../assets/images/mediacenter/youtube-video-banner-2.jpg";
import youtubeVideoBanner3 from "../assets/images/mediacenter/youtube-video-banner-3.jpg";

import pressReleaseImg1 from "../assets/images/mediacenter/theprint-thubmnail.jpg";
import pressReleaseImg2 from "../assets/images/mediacenter/daily-news-logo.jpg";
import pressReleaseImg3 from "../assets/images/mediacenter/edukida-logo.jpg";
// import pressReleaseImg4 from '../assets/images/mediacenter/press-relase-img-4.jpg'

import playicon from "../assets/images/mediacenter/play-button.png";

import pressReleasePdf1 from "../assets/images/mediacenter/theprint.pdf";
import pressReleasePdf2 from "../assets/images/mediacenter/daily24x7news.pdf";
import pressReleasePdf3 from "../assets/images/mediacenter/edukida.pdf";
// import pressReleasePdf4 from '../assets/images/mediacenter/mediabulletins.pdf'

import EnquireForm from "../components/homepage/EnquireForm";
import Video from "../components/Video";
import Enquire from "../components/homepage/Enquire";
import GallerySlider from "../components/GallerySlider";
import PressRelease from "../components/PressRelease";
import pdfICON from "../assets/images/icons/pdf.png";

import headingIconImg from "../assets/images/icons/heading-icon-img.webp";
import MediaImg from "../assets/images/mediacenter/mediaimg.jpg";
import ScrollToTop from "../../common/ScrollToTop";
import InitialLoading from "../skeleton/Initial/Index";
import Layout from "../components/Layout";

function MediaCenter() {
  window.scrollTo(0, 0);
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));
  
  const mvnLOGO = CONFIG.IMAGE_URL + "logo_white.webp";
  const titleRef = useRef();
  const desRefs = useRef([]);

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

  const ourEvents = [
    {
      id: 1,
      IframeLink: "https://www.youtube.com/shorts/MeOZFGd_l1A",
      videobanner: youtubeVideoBanner1,
    },
    {
      id: 2,
      IframeLink: "https://www.youtube.com/shorts/mVNbupk5MRg",
      videobanner: youtubeVideoBanner2,
    },
    {
      id: 3,
      IframeLink: "https://www.youtube.com/watch?v=n3UMMbpPMrU",
      videobanner: youtubeVideoBanner3,
    },
  ];

  const newsImages = {
    isshow: true,
    galleryData: [
      { src: newsIMG7, alt: "Image 7" },
      { src: newsIMG1, alt: "Image 1" },
      { src: newsIMG2, alt: "Image 2" },
      { src: newsIMG3, alt: "Image 3" },
      { src: newsIMG4, alt: "Image 4" },
      { src: newsIMG5, alt: "Image 5" },
      { src: newsIMG6, alt: "Image 6" },
    ],
  };

  const ourGallery = {
    isshow: true,
    galleryData: [
      {
        src: mediaGalleryImg1,
        alt: "Image 1",
      },
      {
        src: mediaGalleryImg2,
        alt: "Image 2",
      },
      {
        src: mediaGalleryImg3,
        alt: "Image 3",
      },
      {
        src: mediaGalleryImg4,
        alt: "Image 4",
      },
      {
        src: mediaGalleryImg1,
        alt: "Image 4",
      },
      {
        src: mediaGalleryImg2,
        alt: "Image 5",
      },
      {
        src: mediaGalleryImg3,
        alt: "Image 6",
      },
      {
        src: mediaGalleryImg4,
        alt: "Image 7",
      },
    ],
  };

  const pressCenter = [
    {
      id: 1,
      title: "Spokesperson Photo",
      PDF: "#",
    },
    {
      id: 2,
      title: "Spokesperson Profile",
      PDF: "#",
    },
    {
      id: 3,
      title: "Company Profile",
      PDF: "#",
    },
  ];

  const onlineNews = [
    {
      id: 6,
      title: `Average flat sizes in top 7 cities rise by 7% in 2024, NCR records highest growth`,
      img: financialExpIMG,
      postedDate: "January 22, 2025",
      url: "https://www.financialexpress.com/money/average-flat-sizes-in-top-7-cities-rise-by-7-in-2024-ncr-records-highest-growth-3723080/",
    },
    {
      id: 5,
      title: `Buying vs Renting: Residential demand in metros sees strong growth amid rising rental yields`,
      img: financialExpIMG,
      postedDate: "January 20, 2025",
      url: "https://www.financialexpress.com/money/buying-vs-renting-residential-demand-in-metros-sees-strong-growth-amid-rising-rental-yields-3720460/",
    },
    {
      id: 4,
      title: `MVN Infrastructure Celebrates MVN Mall's New Office Opening with Traditional Hawan Ceremony`,
      img: aninewsIMG,
      postedDate: "September 11, 2024",
      url: "https://www.aninews.in/news/business/mvn-infrastructure-celebrates-mvn-malls-new-office-opening-with-traditional-hawan-ceremony20240911182559/",
    },
    {
      id: 1,
      title:
        "MVN Aero One pre-leases 3 lakh sq ft to co-working operator Spring House in Gurugram",
      img: newsIMG,
      postedDate: "29 Jun 2024   ",
      url: "https://www.newsdrum.in/business/mvn-aero-one-pre-leases-3-lakh-sq-ft-to-co-working-operator-spring-house-in-gurugram-4786427",
    },
    {
      id: 3,
      title: `Press Releases: MVN Infrastructure Marks Navratri with a Vibrant Mata Ki Chowki Celebration`,
      img: webindiaIMG,
      postedDate: "October 10, 2024",
      url: "https://news.webindia123.com/news/articles/Business/20241010/4244271.html",
    },
  ];

  const pressReleaseData = [
    {
      thumbnail: pressReleaseImg1,
      pdf: pressReleasePdf1,
      title: "Press Release 1",
      presscontent:
        "MVN Infrastructure Celebrates Navratri with a Joyous Mata Ki Chowki",
      EventDate: "10 October, 2024",
    },
    {
      thumbnail: pressReleaseImg2,
      pdf: pressReleasePdf2,
      title: "Press Release 2",
      presscontent:
        "MVN Infrastructure Celebrates Navratri with a Joyous Mata Ki Chowki",
      EventDate: "10 October, 2024",
    },
    {
      thumbnail: pressReleaseImg3,
      pdf: pressReleasePdf3,
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
        <MicroBanner bg={MediaImg} data={breadcrumbs} />
        <section className="section media-news-section pb-0" aria-label="Media Center Section">
          <div className="micro_content">
            <div className="micro_data">
              <div className="content_col position-relative page-header-main-heading">
                <Container>
                  <div className="heading_div ">
                    <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
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
                  <img src={headingIconImg} alt="heading icon" className="img-fluid title_plane1" />
                  <h4 className="title title_style1 text-center">
                  Offline Media News
                  </h4>
                </div>
                <div className="media-news_offline">
                

                  <GallerySlider
                    data={newsImages}
                    slidesPerView={2}
                    navigation={true}
                  />
                </div>
              </div>

              <div className="col-sm-6 px-md-0">
                <div className="media-news_online">
                  <div className="heading_div mb_60 mb_sm_30">
                    <img src={headingIconImg} alt="heading icon" className="img-fluid title_plane1" />
                    <h4 className="title title_style1 text-center">
                    Online Media News
                    </h4>
                  </div>
                  {onlineNews &&
                    onlineNews.map((item, index) => (
                      <article
                        className="awa_card awa_shadow"
                        key={`news-${index}`}
                      >
                        <div>
                          <img src={item.img} alt="item image" />
                        </div>

                        <div>
                          <p>{item.title}</p>
                          <div className="awa_posted d-md-flex justify-content-between align-items-center">
                            <span className="text-capitalize">
                              <time>{item.postedDate}</time>
                            </span>

                            <a
                              href={`${item.url}`}
                              className="text-capitalize  "
                              target="_blank"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section press-releases-container" aria-label="Press Section">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={headingIconImg} alt="heading icon" className="img-fluid title_plane1" />
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
              <img src={headingIconImg} alt="heading icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
                Gallery
              </h4>
            </div>
            <GallerySlider
              data={ourGallery}
              slidesPerView={3}
              spaceBetween={20}
              navigation={true}
            />
          </div>
        </section>
        <section className="section media-events" aria-label="Media Events Section">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={headingIconImg} alt="heading icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
              OUR EVENTS
              </h4>
            </div>
            
            <div className="row">
              {ourEvents &&
                ourEvents.map((item, index) => (
                  <div className="col-sm-4" key={`event-${index}`}>
                    <div className="media-event-content">
                      <a
                        href={item.IframeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.videobanner}
                          alt={`mvn events ${index}`}
                          className="img-fluid event-video-banner"
                        />
                      
                      <img
                        src={playicon}
                        alt={`mvn events ${index}`}
                        className="img-fluid play-icon"
                      />
                      </a>
                    </div>
                  </div>
                ))}
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
