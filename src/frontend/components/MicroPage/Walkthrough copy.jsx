import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import thumbnail_sm from '../../assets/videos/walkthrough/thumbnail_sm.webp';
import playBtn from '../../assets/images/icons/play.png';

import * as CONFIG from '../../../config/config'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Walkthrough = ({data}) => {
  const titleRef = useRef();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // const {title, desc} = data.walkthrough

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
  }, [])

  return (
    <div className="section walkthrough_section pb-0">
      {/* <div className="video">
        <img src={thumbnail_sm} alt="mvn-walkthrough" className={`img-fluid thumbnail ${isPlaying ? 'hide':''}`} />
        <img src={playBtn} alt="mvn-play-icon" className="img-fluid play_btn" onClick={handlePlayPause} />

        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          width="100%"
          className={!isPlaying ? 'hide':''}
          height="auto"
          controls={true}
          onClick={handlePlayPause}
        />
      </div> */}

      <div className="content">
        <Container>
          <h1>walkthrough</h1>
          {/* <SecTitle className="text-center color style1">
            <h4 ref={titleRef} className="title">{title}</h4>
          </SecTitle> */}

          {/* {desc && <p className="desc">{desc}</p>} */}
          
        </Container>
      </div>
    </div>
  );
};

export default Walkthrough;
