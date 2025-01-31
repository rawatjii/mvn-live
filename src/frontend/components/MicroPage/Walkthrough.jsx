import React from "react";
import CustomCard from "../Card";
import {Container } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import subscribeImg from '../../../frontend/assets/images/icons/subscribe_btn.webp'

import * as CONFIG from '../../../config/config.js';

const Walkthrough = React.memo(()=>{

  const channelUrl = CONFIG.YOUTUBE_URL;

  return(
    <section className="section walkthrough_section pb-0">
      <iframe src="https://www.youtube.com/embed/9CHcJAveejU?si=Sr3K9ETfhxeyjrOW" 
        title="YouTube video player"
        frameBorder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        width="100"
        height="100"
      ></iframe>

      <a href={channelUrl} target="_blank" className="d-table mx-auto mt-4">
        <img src={subscribeImg} alt="mvn subscribe btn" className="img-fluid subscribe_style1" />
      </a> 
   
      <Container>
        <div className='about'>
          <CustomCard
          className="px-0"
            title="A GLIMPSE INTO A LIFE EXTRAORDINARY" 
            desc="Take a guided virtual tour through our stunning spaces with a walkthrough video that brings your future home to life. Every detail is showcased, allowing you to experience the design, luxury, and lifestyle that await you." 
          />
        </div>

        
      </Container>
    </section>
    
  )
})

export default Walkthrough