import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from '../Card'
import { useMatches } from '../../../theme/theme'
gsap.registerPlugin(ScrollTrigger);
import * as CONFIG from '../../../config/config'
const bgImgDesk1 = `${CONFIG.API_URL}images/aero-gurgaon/largeBg1.png`
const bgImgDesk1_sm = `${CONFIG.API_URL}images/aero-gurgaon/largeBg1Sm.webp`


function LargeElevation1({ data, theme2 }) {

    const {title, class_name, path,second_title,desc} = data;

    const { isMobile } = useMatches(); 

    
        
    return (
        <div className='large-elevation'  id='largeElevationSection'>
            {theme2 && title &&
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

            <div className={`bottom_img_div ${isMobile ? "d_sm_block" : "d_lg_block"}`}>
                <div className={`full_img ${!theme2 ? 'position-relative' : ''}`}>
                    {theme2 ? <img src={isMobile ? bgImgDesk1_sm : bgImgDesk1} alt={title} className={`img-fluid img_in ${isMobile ? " " : "d_lg_block"}`} /> : <img src={isMobile ? path.mobile.bgImg : path.desktop.bgImg} alt={title} className={`img-fluid img_in ${isMobile ? " " : "d_lg_block"}`} />}
                </div>
                {theme2 && (
                    <div className={`abs_img ${isMobile ? "abs_img_m" : "abs_img1"} ${class_name}`}>
                        <img src={isMobile ? path.mobile.frontImg : path.desktop.frontImg} alt={title} className={`img-fluid abs_img_in ${isMobile ? " " : "d_lg_block"}`} />
                    </div>
                )}
                
            </div>

             {/* view end */}



            <div className='content_section'>
                <Container>
                    <div className="about">
                        <CustomCard className="px-0 pb-0" title={!theme2 ? "Villas in the Sky" : "ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE"} desc={!theme2 ? "Experience elevated living with unmatched luxury above the clouds." : "This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits."} type="style1"  />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default React.memo(LargeElevation1)