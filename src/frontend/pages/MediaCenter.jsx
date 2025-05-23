import React, { useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import * as CONFIG from "../../config/config";

import { Container } from "react-bootstrap";

import EnquireForm from "../components/homepage/EnquireForm";
import Enquire from "../components/homepage/Enquire";
import GallerySlider from "../components/GallerySlider";
import PressRelease from "../components/PressRelease";

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
      videobanner: `${CONFIG.API_URL}images/mediacenter/youtube-video-banner-1.jpg`,
    },
    {
      id: 2,
      IframeLink: "https://www.youtube.com/shorts/mVNbupk5MRg",
      videobanner: `${CONFIG.API_URL}images/mediacenter/youtube-video-banner-2.jpg`,
    },
    {
      id: 3,
      IframeLink: "https://www.youtube.com/watch?v=n3UMMbpPMrU",
      videobanner: `${CONFIG.API_URL}images/mediacenter/youtube-video-banner-3.jpg`,
    },
  ];

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

  const ourGallery = {
    isshow: true,
    galleryData: [
      {
        src: `${CONFIG.API_URL}images/projects/gallery_img1.webp`,
        alt: "Image 1",
      },
      {
        src: `${CONFIG.API_URL}images/projects/gallery_img2.webp`,
        alt: "Image 2",
      },
      {
        src: `${CONFIG.API_URL}images/projects/gallery_img3.webp`,
        alt: "Image 3",
      },
      {
        src: `${CONFIG.API_URL}images/projects/gallery-img-5.webp`,
        alt: "Image 4",
      },
      {
        src: `${CONFIG.API_URL}images/projects/gallery_img1.webp`,
        alt: "Image 4",
      },
      {
        src: `${CONFIG.API_URL}images/projects/gallery_img2.webp`,
        alt: "Image 5",
      },
      {
        src: `${CONFIG.API_URL}images/projects/gallery_img3.webp`,
        alt: "Image 6",
      },
      {
        src: `${CONFIG.API_URL}images/projects/gallery-img-5.webp`,
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
      id: 10,
      title: `The Rise of Four-Side Open Residences in Gurugram: A new trend in urban luxury`,
      img: `${CONFIG.API_URL}images/mediacenter/financialexp_logo.webp`,
      postedDate: "February 12, 2025",
      url: "https://www.financialexpress.com/money/the-rise-of-four-side-open-residences-a-new-standard-in-urban-luxury-3747311/",
    },
    {
      id: 9,
      title: `Sensex Today, Stock Market Feb 7 Highlights: Sensex, Nifty closed in red after RBI rate cut announcement; metals buck the trend`,
      img: `${CONFIG.API_URL}images/mediacenter/et_now_logo.webp`,
      postedDate: "Februrary 07, 2025",
      url: "https://www.etnownews.com/markets/sensex-today-stock-market-live-updates-feb-7-nifty-50-share-price-itc-dividend-sbi-hero-motocorp-airtel-q3-results-brokerages-picks-liveblog-117997762",
    },
    {
      id: 8,
      title: `Budget 2025 HIGHLIGHTS: Zero Income Tax till Rs 12 Lakh Income under New Tax Regime, says FM Nirmala Sitharaman`,
      img: `${CONFIG.API_URL}images/mediacenter/et_now_logo.webp`,
      postedDate: "Februrary 04, 2025",
      url: "https://www.etnownews.com/budget/union-budget-2025-26-live-updates-nirmala-sitharaman-speech-1-feb-income-tax-rate-slabs-railway-healthcare-auto-defence-announcement-news-liveblog-117808795",
    },
    {
      id: 7,
      title: `Ultra luxe, spacious homes arrive in Gurugram`,
      img: `${CONFIG.API_URL}images/mediacenter/economic_times_logo.webp`,
      postedDate: "January 29, 2025",
      url: "https://economictimes.indiatimes.com/epaper/delhicapital/2025/jan/29/et-panache/ultra-luxe-spacious-homes-arrive-in-gurugram/articleshow/117660416.cms",
    },
    {
      id: 6,
      title: `Average flat sizes in top 7 cities rise by 7% in 2024, NCR records highest growth`,
      img: `${CONFIG.API_URL}images/mediacenter/financialexp_logo.webp`,
      postedDate: "January 22, 2025",
      url: "https://www.financialexpress.com/money/average-flat-sizes-in-top-7-cities-rise-by-7-in-2024-ncr-records-highest-growth-3723080/",
    },
    {
      id: 5,
      title: `Buying vs Renting: Residential demand in metros sees strong growth amid rising rental yields`,
      img: `${CONFIG.API_URL}images/mediacenter/financialexp_logo.webp`,
      postedDate: "January 20, 2025",
      url: "https://www.financialexpress.com/money/buying-vs-renting-residential-demand-in-metros-sees-strong-growth-amid-rising-rental-yields-3720460/",
    },
    {
      id: 4,
      title: `MVN Infrastructure Celebrates MVN Mall's New Office Opening with Traditional Hawan Ceremony`,
      img: `${CONFIG.API_URL}images/mediacenter/aninews.png`,
      postedDate: "September 11, 2024",
      url: "https://www.aninews.in/news/business/mvn-infrastructure-celebrates-mvn-malls-new-office-opening-with-traditional-hawan-ceremony20240911182559/",
    },
    {
      id: 1,
      title:
        "MVN Aero One pre-leases 3 lakh sq ft to co-working operator Spring House in Gurugram",
      img: `${CONFIG.API_URL}images/mediacenter/newsdrum-logo.jpg`,
      postedDate: "29 Jun 2024   ",
      url: "https://www.newsdrum.in/business/mvn-aero-one-pre-leases-3-lakh-sq-ft-to-co-working-operator-spring-house-in-gurugram-4786427",
    },
    {
      id: 3,
      title: `Press Releases: MVN Infrastructure Marks Navratri with a Vibrant Mata Ki Chowki Celebration`,
      img: `${CONFIG.API_URL}images/mediacenter/webindia-logo.png`,
      postedDate: "October 10, 2024",
      url: "https://news.webindia123.com/news/articles/Business/20241010/4244271.html",
    },
  ];

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
        <MicroBanner page_section="media-banner" page="media-center" bg={MediaImg} data={breadcrumbs} />
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
                    <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="heading icon" className="img-fluid title_plane1" />
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
              <img src={`${CONFIG.API_URL}images/icons/heading-icon-img.webp`} alt="heading icon" className="img-fluid title_plane1" />
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
                        src={`${CONFIG.API_URL}images/mediacenter/play-button.png`}
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
