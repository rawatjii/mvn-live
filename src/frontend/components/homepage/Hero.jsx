import React, { useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazyload';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as CONFIG from 'root/config/config'

import hero_img from '../../../frontend/assets/images/hero/hero_img.webp';
import hero_img_sm from '../../../frontend/assets/images/hero/hero_img_sm.webp';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = ()=>{
  const titleRef = useRef();
  const desRef = useRef();
  const heroRef = useRef();
  const btnRef = useRef();

  useEffect(()=>{
    // logo animation

    gsap.from(titleRef.current, {
      y: 50,           // Move 50px from the bottom
      opacity: 0,      // Start with 0 opacity (invisible)
      duration: 1,   // Animation duration in seconds
      // ease: "power2" // Easing function for a smooth effect

      scrollTrigger:{
        trigger: titleRef.current,
        start: "top 95%",
      }
    })

    gsap.from(desRef.current, {
      y: 50,           // Move 50px from the bottom
      opacity: 0,      // Start with 0 opacity (invisible)
      duration: 1,   // Animation duration in seconds
      // ease: "power2" // Easing function for a smooth effect

      scrollTrigger:{
        trigger: desRef.current,
        start: "top 95%",
      }
    })

    gsap.from(btnRef.current, {
      y: 50,  
      opacity: 0,
      duration: 1, 

      scrollTrigger:{
        trigger: btnRef.current,
        start: "top 95%",
      }
    })

  }, [])

  return(
    <>
      <section ref={heroRef} className="section hero_section p-0">
        <div className="hero-img">
          <img src={hero_img} alt="mvn-hero-image" className="img-fluid d-none d-md-block" fetchpriority="high" />
          <img src={hero_img_sm} alt="mvn-hero-image" className="img-fluid d-md-none" fetchpriority="high" />
        </div>
        
        <div className="hero_content">
          <Container>
            {/* <div className="logo">
              <img src={CONFIG.IMAGE_URL + 'logo_dark.webp'} alt="mvn-logo" className='img-fluid' fetchpriority='high' />
            </div> */}
            
            <div className="center">
              <h1 className="hero_title" ref={titleRef}>40+ years of delivering trust and projects on time</h1>
              <h4 className="hero_desc" ref={desRef}>MVN Group is one of the best entities focused on Education and Real Estate. As per The Hindustan Times-C Fore Top Schools Survey, the leading newspaper of India, MVN is known as the first educational group to be Ranked no.1 for Eight years in Academic Performance.</h4>

              <Link to={`${import.meta.env.VITE_APP_URL}about-us`} ref={btnRef} className="btn btn_style2">Know More</Link>
            </div>

            {/* <div className="bottom">
              <small>Scroll Down</small>
            </div> */}

          </Container>
        </div>
      </section>
    </>
  )
}

export default Hero;