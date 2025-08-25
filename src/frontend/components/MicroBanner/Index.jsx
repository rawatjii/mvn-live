import React, { useEffect, useRef, useState } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './microBanner.css';
import useFetchData from "../../utils/apiHelper";
import { BACKEND_IMAGE_URL } from "../../../config/config";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MicroBanner = ({page_section, page, data, type})=>{
  const titleRef = useRef();
  const linksRef = useRef();
  const [microBannerData, setMicroBannerData] = useState(null);
  const {pathname} = useLocation();

  const fetchUrl = type == 'blog' ? `blog/${page}` : `page/page-section/${page}`;

  const { data:bannerData, loading } = useFetchData(fetchUrl);
  const { data:innerBlogBanner } = useFetchData(`page/page-section/blog`);

  useEffect(()=>{
    if(type != 'blog'){
      const banner = bannerData?.filter((el)=> el.page_section == page_section)
      setMicroBannerData(banner?.[0])
    }else{
      setMicroBannerData(bannerData)
    }
  }, [bannerData])

  useEffect(() => {
    // breadcrumb animation
    const breadcrumbTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: linksRef.current,
        start: "top 95%",
      },
    });

    // Add animation to the timeline with a delay

    breadcrumbTimeline.from(
      linksRef.current,
      {
        y: 15,
        opacity: 0, // Start with 0 opacity (invisible)
        duration: 0.7, // Animation duration in seconds
      },
      "+=0.5"
    );
  }, []);
  

  return (
    <>
      <section className="section micro_banner" aria-label="Banner Section">
        <Container>
          {type == 'blog' ? (
            <picture className="microbanner_bg">
              <source srcset={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+innerBlogBanner?.[0]?.mb_image : BACKEND_IMAGE_URL+innerBlogBanner?.[0]?.image} type="image/webp" />
              <img src={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+innerBlogBanner?.[0]?.mb_alternative_image : BACKEND_IMAGE_URL+innerBlogBanner?.[0]?.alternative_image} alt={innerBlogBanner?.[0]?.alt} />
            </picture>
          ) : (
            <picture className="microbanner_bg">
              <source srcset={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+microBannerData?.mb_image : BACKEND_IMAGE_URL+microBannerData?.image} type="image/webp" />
              <img src={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+microBannerData?.mb_alternative_image : BACKEND_IMAGE_URL+microBannerData?.alternative_image} alt={microBannerData?.alt} />
            </picture>
          )}
          
          {/* <img src={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+microBannerData?.mb_image : BACKEND_IMAGE_URL+microBannerData?.image} alt="mvn micro banner background image" className="img-fluid microbanner_bg" /> */}
          <h1 ref={titleRef} className="microTitle" >{pathname == '/blogs/mvn-aero-one-gurgaon' ? "MVN Aero One Gurgaon Premium Residences" : microBannerData?.heading}</h1>
          <h2 className="microContent">{microBannerData?.sub_heading && microBannerData?.sub_heading}</h2>
        </Container>
      </section>
      <section className="breadcrumb_section" aria-label="Breadcrumb Section">
        <Container>
          <Breadcrumb ref={linksRef}>
            {data.links.map((link, index) => (
              <Breadcrumb.Item key={index} href={link.link ? link.link : null}>
                {link.name}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Container>
      </section>
    </>
  );
};

export default MicroBanner;
