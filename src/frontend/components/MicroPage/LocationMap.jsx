import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Modal from 'react-bootstrap/Modal';


import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import * as CONFIG from '../../../config/config'

// Import Swiper styles
import 'swiper/css';
import "yet-another-react-lightbox/styles.css";

import location_map_sm from '../../assets/images/location-advantage/location_map_sm.webp'
import Button from "../../../common/Button/Button";
import CustomCard from "../Card";

gsap.registerPlugin(ScrollTrigger);
const MicroLocationMap = ({data})=>{
  const titleRef = useRef();
  const typoRefs = useRef([]);
  const priceRefs = useRef([]);
  const sizeRefs = useRef([]);
  const [isLocationMapOpen, setIsLocationMapOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log("location map img", data.mapIMG);
  

  const locationMapImg = [{src: data.mapIMG.desktop, asset:data.mapIMG.desktop}]
  
  const handleClose = () => setShowModal(false);


  const handleShow = () => setShowModal(true);

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
    <section className="section location_map_section pb-0">
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Location Map</h4>
        </div>
      </Container>

      <div className="locationMapContent">

        <div className="row justify-content-center">
          <div className="col-sm-9">
            <div className="thumbnail">

              <button className="location_btn"  onClick={handleShow}>
                <img src={CONFIG.IMAGE_URL + 'icons/yt_color.png'} alt="youtube icon" className="img-fluid yt_icon"  />
                Location Video
              </button>

              
              <div onClick={()=>setIsLocationMapOpen(true)}>
                <img src={data.mapIMG.desktop} alt="mvn-master-plan" className="img-fluid d-none d-md-block" loading="lazy" />
                <img src={data.mapIMG.mobile} alt="mvn-master-plan" className="img-fluid d-md-none" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <Container className="desktop_fluid_container">
          <h4 className="title style2">{data.title}</h4>

          <ul className="location_points">
            <span className="left_road"></span>
            <span className="top_road"></span>
            {data.locationData.map((item,index)=>(
              <li key={index}>
                <h3 className="distance">{item.distance}</h3>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Container>
        <div className='about'>
          <CustomCard
            className="px-0 pb-0"
            title="THE LOCATION AS INVITING AS ITS ALLURE" 
            desc="Located at the prime 22km stone on Dwarka Expressway, Gurugram, MVN Aero One sits on the growth corridor at the first and only drop of the 23km elevated expressway. Strategically positioned at downtown Gurugram." 
          />
        </div>
      </Container>

      <Lightbox 
        open={isLocationMapOpen}
        close={() => setIsLocationMapOpen(false)}
        slides={[{src:data.mapIMG.desktop}]}
        plugins={[Zoom]}
        carousel={{
          finite: locationMapImg.length <= 1,  // Prevent looping if there’s only one image
        }}
        render={{
        buttonNext: locationMapImg.length > 1 ? undefined : () => null,
        buttonPrev: locationMapImg.length > 1 ? undefined : () => null,
        slide: locationMapImg.length > 1 ? undefined : () => null, 
      }} />


      <Modal className="location_modal" show={showModal} onHide={handleClose}>
        <span type="button" class="close" onClick={handleClose}>×</span>
        <iframe src="https://www.youtube.com/embed/p4ArtUtsj-A?si=VsbM3Dvdk969-OHv" title="MVN Location Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
      </Modal>
    </section>
  )
}

export default MicroLocationMap