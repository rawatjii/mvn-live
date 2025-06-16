import React, { useEffect, useRef, useState } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './microBanner.css';
import useFetchData from "../../utils/apiHelper";
import { BACKEND_IMAGE_URL } from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const MicroBanner = ({page_section, page, data, type})=>{
  const titleRef = useRef();
  const linksRef = useRef();
  const [microBannerData, setMicroBannerData] = useState(null);

  const fetchUrl = type == 'blog' ? `blog/${page}` : `page/page-section/${page}`;

  const { data:bannerData, loading } = useFetchData(fetchUrl);

  console.log('bannerData',bannerData);
  
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

  console.log('blog type', page);
  

  return (
    <>
      <section className="section micro_banner" aria-label="Banner Section">
        <Container>
          <picture className="microbanner_bg">
            <source srcset={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+microBannerData?.mb_image : BACKEND_IMAGE_URL+microBannerData?.image} type="image/webp" />
            <img src={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+microBannerData?.mb_alternative_image : BACKEND_IMAGE_URL+microBannerData?.alternative_image} alt={microBannerData?.alt} />
          </picture>
          {/* <img src={window.innerWidth <= 768 ? BACKEND_IMAGE_URL+microBannerData?.mb_image : BACKEND_IMAGE_URL+microBannerData?.image} alt="mvn micro banner background image" className="img-fluid microbanner_bg" /> */}
          <h2 ref={titleRef} className="microTitle" >{microBannerData?.heading}</h2>
          <p className="microContent">{microBannerData?.sub_heading && microBannerData?.sub_heading}</p>
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
