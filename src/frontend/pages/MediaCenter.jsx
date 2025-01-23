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
      // {
      //   src: mediaGalleryImg5,
      //   alt: "Image 5",
      // },
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
      // {
      //   src: mediaGalleryImg5,
      //   alt: "Image 6",
      // },
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
      id: 2,
      title: `MVN Infrastructure Celebrates MVN Mall's New Office Opening with Traditional Hawan Ceremony`,
      img: aninewsIMG,
      postedDate: "11 Sep 2024",
      url: "https://www.aninews.in/news/business/mvn-infrastructure-celebrates-mvn-malls-new-office-opening-with-traditional-hawan-ceremony20240911182559/",
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
    // {
    //     thumbnail: pressReleaseImg4,
    //     pdf: pressReleasePdf4,
    //     title: "Press Release 4",
    // },
  ];

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem('count')));
  }, [localStorage.getItem('count')]);

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
    <Layout>
      <div className="media_center">
        <MicroBanner bg={MediaImg} data={breadcrumbs} />
        <section className="section media-news-section pb-0">
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

                  {/* <SecTitle className="text-center color style1 mb_30">
                    <img
                      src={headingIconImg}
                      alt="mvn Media Centre image"
                      className="img-fluid headpage-icon"
                    />
                    <h4 ref={titleRef} className="title">
                      Latest News
                    </h4>
                  </SecTitle> */}
    
                </Container>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 px-md-0">

                <div className="heading_div mb_60 mb_sm_30">
                  <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
                  <h4 className="title title_style1 text-center">
                  Offline Media News
                  </h4>
                </div>

              {/* <SecTitle className="text-center color style1">
                    <img
                      src={headingIconImg}
                      alt="mvn plane icon"
                      className="img-fluid headingIcon"
                    />
                    <h4 className="title">Offline Media News</h4>
                  </SecTitle> */}



                <div className="media-news_offline">
                

                  <GallerySlider
                    data={newsImages}
                    slidesPerView={2}
                    navigation={true}
                  />

                  {/* <div className="row">

                                      <div className="col-md-6">
                                          <div className="media-news-page ">
                                              <div className="media-news-page-box">
                                                  <div className="media-news-page-img">
                                                      <img src={newsIMG} alt="mvn news image" />
                                                  </div>
                                                  <div className="news-page-content">
                                                      <p className="news-date">25 September, 2025</p>
                                                      <p className="news-title">MVN Infrastructure Celebrates MVN Mall’s New Office Opening</p>
                                                      <a className="btn btn_style-news" href="">View Details <img className="img-fluid" src={rightArrow} alt="mvn arrow icon" /></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6 ">
                                          <div className="media-news-page ">
                                              <div className="media-news-page-box">
                                                  <div className="media-news-page-img">
                                                      <img src={newsIMG} alt="mvn news image" />
                                                  </div>
                                                  <div className="news-page-content">
                                                      <p className="news-date">25 September, 2025</p>
                                                      <p className="news-title">MVN Infrastructure Celebrates MVN Mall’s New Office Opening</p>
                                                      <a className="btn btn_style-news" href="">View Details <img className="img-fluid" src={rightArrow} alt="mvn arrow icon" /></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div> */}
                </div>
              </div>

              <div className="col-sm-6 px-md-0">
                <div className="media-news_online">
                  <div className="heading_div mb_60 mb_sm_30">
                    <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
                    <h4 className="title title_style1 text-center">
                    Online Media News
                    </h4>
                  </div>
                  
                  {/* <SecTitle className="text-center color style1">
                    <img
                      src={headingIconImg}
                      alt="mvn heading image"
                      className="img-fluid headingIcon"
                    />
                    <h4 className="title">Online Media News</h4>
                  </SecTitle> */}

                  {onlineNews &&
                    onlineNews.map((item, index) => (
                      <article
                        className="awa_card awa_shadow"
                        key={`news-${index}`}
                      >
                        <div>
                          <img src={item.img} alt="image" />
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
        {/* <section className="section media-press-release pb-0">
          <div className="container">
            <div className="sec_title text-center color style1 mb_30">
              <img
                src={headingIconImg}
                alt="mvn heading image"
                className="img-fluid headingIcon"
              />
              <h4 className="title">Press Center</h4>
              <p>
                Welcome to the Press Release section of MVN, where innovation,
                milestones, and achievements take center stage. Stay informed
                about our latest ventures, industry contributions, and community
                impact, as we continue to redefine the future. From pioneering in
                real estate to shaping the future of education, we’re committed to
                excellence every step of the way.
              </p>
            </div>
            <section className="press-release" id="press-center">
              <div className="">
                <div className="press-rel-sec">
                  <div className="inner-press-re">
                    <div className="logo-sec">
                      <div className="inner-logo-sec">
                        <div className="box box-g">
                          <h4>MVN Group Logo with Tagline</h4>
                          <div className="inner-box">
                            <div className="logo">
                              <img src={mvnLOGO} alt="logo" width="100%" />
                            </div>
                            <div className="type">
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">Jpeg</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">png</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">Eps</a>
                                </li>
                                <li>
                                  <a href="javscript:void(0);">Ai</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="content-sec">
                      <div className="inner-content-sec">
                        <div className="document-list">
                          <ul id="presslistitem">
                            {pressCenter &&
                              pressCenter.map((item, index) => (
                                <li key={`press-${index}`}>
                                  <a href={item.PDF} download="">
                                    <span>{item.title}</span>
                                    <span>
                                      <img
                                        src={pdfICON}
                                        className="img-fluid"
                                        alt="pdf"
                                      />
                                    </span>
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="row">
                          <div className="col-sm-4">
                              <div className="press-release-content ">
                                  <h4>Simply Dummy Text</h4>
                                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </div>
                          </div>
                          <div className="col-sm-8">
                              <div className="press-release-content ">
                                  <h4>Simply Dummy Text</h4>
                                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="press-release-content ">
                                  <h4>Simply Dummy Text</h4>
                                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </div>
                          </div>
                      </div>
          </div>
        </section> */}

        <section className="section press-releases-container">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
              Press Releases
              </h4>
            </div>

            {/* <SecTitle className="text-center color style1 mb_30">
              <img
                src={headingIconImg}
                alt="mvn press heading image"
                className="img-fluid headingIcon"
              />
              <h4 className="title">Press Releases</h4>
            </SecTitle> */}

            <PressRelease
              data={pressReleaseData}
              slidesPerView={3}
              spaceBetween={20}
            />
          </div>
        </section>
        <section className="section media-gallery">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
                Gallery
              </h4>
            </div>

            {/* <SecTitle className="text-center color style1 mb_30">
              <h4 className="title">GALLERY</h4>
            </SecTitle> */}
            <GallerySlider
              data={ourGallery}
              slidesPerView={3}
              spaceBetween={20}
              navigation={true}
            />
          </div>
        </section>
        <section className="section media-events">
          <div className="container">
            <div className="heading_div mb_60 mb_sm_30">
              <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
              <h4 className="title title_style1 text-center">
              OUR EVENTS
              </h4>
            </div>

            {/* <div className="sec_title text-center color style1 mb_30">
              <h4 className="title">OUR EVENTS</h4>
            </div> */}
            
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
