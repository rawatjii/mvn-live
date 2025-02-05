import React, { useEffect, useRef } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './microBanner.css';

gsap.registerPlugin(ScrollTrigger);

const MicroBanner = ({bg, data})=>{
  const titleRef = useRef();
  const linksRef = useRef();

  useEffect(()=>{
    // breadcrumb animation
    const breadcrumbTimeline = gsap.timeline({
      scrollTrigger:{
        trigger: linksRef.current,
        start: "top 95%",
      }
    })

    // Add animation to the timeline with a delay

    breadcrumbTimeline.from(linksRef.current, {
      y: 15,    
      opacity: 0,      // Start with 0 opacity (invisible)
      duration: 0.7,   // Animation duration in seconds
    }, "+=0.5");

  }, [])

  return(
    <>
      <section className="section micro_banner" aria-label="Banner Section">
        <Container>
        <img src={bg} alt="mvn-microbanner-bg" className="img-fluid microbanner_bg" />
          <h2 ref={titleRef} className="microTitle" >{data.title}</h2>
          <p className="microContent">{data.content}</p>
        </Container>
      </section>
      <section className="breadcrumb_section" aria-label="Breadcrumb Section">
          <Container>
            <Breadcrumb ref={linksRef}>
              {data.links.map((link, index)=>(
                <Breadcrumb.Item key={index} href={link.link ? link.link : null}>{link.name}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </Container>
      </section>
    </>
  )
}

export default MicroBanner