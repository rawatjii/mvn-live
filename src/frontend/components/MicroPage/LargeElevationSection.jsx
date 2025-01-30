import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from '../Card'
import { useMatches } from '../../../theme/theme'
gsap.registerPlugin(ScrollTrigger);


function LargeElevation({ data }) {

    const sectionRef = React.useRef(null);
    const desktopRef = React.useRef();
    const {title, class_name, path,second_title,desc} = data;

    const { isMobile } = useMatches(); 

    useEffect(() => {
        gsap.from(".abs_img_m", {
            y: -200,
            scrollTrigger: {
                trigger: ".large-elevation",
                start: "top 80%",
                end: "top 20%",
                scrub: 0.2,
            },
        });
        gsap.to(".abs_img1", {
            y: -200,
            scrollTrigger: {
                trigger: desktopRef.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
                markers:false
            },
        });

         // Ensure triggers refresh
            ScrollTrigger.addEventListener("refresh", () => console.log("Triggers refreshed"));
            ScrollTrigger.refresh();
    }, []);
        
    return (
        <div className='large-elevation' ref={sectionRef} id='largeElevationSection'>
            {title &&
            <Container>
            <div className='container_elevation'>
                <div className='top_div'>
                    <h3 className='title elevation_title text-uppercase'>{title.map((item, index)=>(
                        <span key={index}>{item}</span>
                    ))}</h3>
                </div>
            </div>
        </Container>
            }
            

            {/* view start */}

            <div className={`bottom_img_div ${isMobile ? "d_sm_block" : "d_lg_block"}`}  ref={!isMobile ? desktopRef : null}>
                <div className='full_img'>
                    <img src={isMobile ? path.mobile.bgImg : path.desktop.bgImg} alt={title} className={`img-fluid img_in ${isMobile ? " " : "d_lg_block"}`} />
                </div>
                <div className={`abs_img ${isMobile ? "abs_img_m" : "abs_img1"} ${class_name}`}>
                    <img src={isMobile ? path.mobile.frontImg : path.desktop.frontImg} alt={title} className={`img-fluid abs_img_in ${isMobile ? " " : "d_lg_block"}`} />
                </div>
            </div>

             {/* view end */}



            <div className='content_section'>
                <Container>
                    <div className="about">
                        <CustomCard className="px-0 pb-0" title={second_title} desc={desc} type="style1"  />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default React.memo(LargeElevation)