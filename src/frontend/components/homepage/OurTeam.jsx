import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnImage from "../../../common/animations/Image/Index";

import teamImg from '../../assets/images/team/team.webp'
import headingIconImg from "../../assets/images/icons/heading-icon-img.webp";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = ()=>{
  const titleRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(titleRef.current, {
        y: 50,  
        opacity: 0,
        duration: 1, 
  
        scrollTrigger:{
          trigger: titleRef.current,
          start: "top 95%",
        }
      })
  
      gsap.from(contentRef.current, {
        y: 50,  
        opacity: 0,
        duration: 1, 
  
        scrollTrigger:{
          trigger: contentRef.current,
          start: "top 95%",
        }
      })
  
      gsap.to(imageRef.current, {
        scrollTrigger:{
          trigger: imageRef.current,
          start: "top 95%",
          onEnter: () => {
            if(imageRef.current){
              imageRef.current.classList.add('active')
            }
          },
          once: true, // Ensures the animation only happens once
        }
      })
    })

    return ()=>ctx.revert();
  }, [])

  return(
    <section className="section our_team_section">
    <Container>
      <Row className="mx_-8">
        <div className="col-md-12 col-12 heading_div  mb_60 mb_sm_30">
          <img src={headingIconImg} alt="mvn heading image" className="img-fluid title_plane1" loading="lazy"/>
          <h4 ref={titleRef} className="title title_style1 text-center">People Behind</h4>
        </div>
      </Row>
      
    </Container>

    <AnImage ref={imageRef}>
      <img src={teamImg} alt="mvn team image" className="img-fluid team_img" loading="lazy" />
    </AnImage>

    <p ref={contentRef} className="des_style1 text-center">MVN Infrastructure is backed up by a team of experienced professionals who are committed to offering high standards of professional conduct in real estate practices.</p>

  </section>
  )
}

export default OurTeam