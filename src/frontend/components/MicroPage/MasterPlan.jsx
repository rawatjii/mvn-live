import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import LazyLoad from "react-lazyload";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Accordion from 'react-bootstrap/Accordion';

// Import Swiper styles
import 'swiper/css';
import "yet-another-react-lightbox/styles.css";

// import masterPlanImg from '../../assets/images/master-plan/master_plan_img.png'

gsap.registerPlugin(ScrollTrigger);


const MicroMasterPlan = ({data})=>{
  const titleRef = useRef();
  const typoRefs = useRef([]);
  const priceRefs = useRef([]);
  const sizeRefs = useRef([]);
  const [isMasterPlanOpen, setIsMasterPlanOpen] = useState(false);
  console.log("data", data);
  
  const masterPlanImage = [{src: data}]

  // for animation

  useEffect(()=>{
    gsap.from(titleRef.current, {
      y: 50,  
      opacity: 0,
      duration: 1, 

      scrollTrigger:{
        trigger: titleRef.current,
        start: "top 95%",
      }
    })


    typoRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,  
          opacity: 0,
          duration: 0.5,  

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          }
        });
      }
    })

    priceRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,  
          opacity: 0,
          duration: 0.5,  

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          }
        });
      }
    })

    sizeRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 10,  
          opacity: 0,
          duration: 0.5,  

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          }
        });
      }
    })
  }, [])


  return(
    <section className="section master_plan_section pb-0">
      <Container>
        <SecTitle className="text-center color style1">
          <h4 className="title">Master Plan</h4>
        </SecTitle>

        <div className="masterPlanImg" onClick={()=>setIsMasterPlanOpen(true)}>
          <img src={data} alt="mvn master plan icon" className="img-fluid" />
          <button className="btn btn_master">view more</button>
        </div>

      </Container>

      <Lightbox 
        open={isMasterPlanOpen}
        close={() => setIsMasterPlanOpen(false)}
        slides={masterPlanImage}
        plugins={[Zoom]}
        carousel={{
          finite: masterPlanImage.length <= 1,  // Prevent looping if there’s only one image
        }}
        render={{
        buttonNext: masterPlanImage.length > 1 ? undefined : () => null,
        buttonPrev: masterPlanImage.length > 1 ? undefined : () => null,
        slide: masterPlanImage.length > 1 ? undefined : () => null, 
      }} />
    </section>
  )
}

export default MicroMasterPlan