import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import bgImgMB from '../../assets/images/aero-gurgaon/largeBg1Sm.webp'
import bgImgDesk from '../../assets/images/aero-gurgaon/largeBg.webp'
import absDesk from '../../assets/images/aero-gurgaon/building_sm.webp'
import building_sm from '../../assets/images/aero-gurgaon/building_sm.webp'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from '../Card'

gsap.registerPlugin(ScrollTrigger);


 function LargeElevation({ data }) {
    const sectionRef = React.useRef(null);
    const desktopRef = React.useRef();

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
            ScrollTrigger.refresh();
    }, []);
    return (
        <div className='large-elevation' ref={sectionRef} id='largeElevationSection'>
            <Container>
                <div className='container_elevation'>
                    <div className='top_div'>
                        <h3 className='title elevation_title text-uppercase'>{data.title.map((item, index)=>(
                            <span key={index}>{item}</span>
                        ))}</h3>
                    </div>
                </div>
            </Container>

            {/* mb view */}
            <div className='bottom_img_div d_sm_block'>
                <div className='full_img'>
                    <img src={bgImgMB} alt={data.title} className="img-fluid img_in" />
                </div>
                <div className='abs_img abs_img_m'>
                    <img src={building_sm} alt={data.title} className="img-fluid abs_img_in" />
                </div>
            </div>


            {/* desk view */}
            <div className='bottom_img_div d_lg_block' ref={desktopRef}>
                <div className='full_img'>
                    <img src={bgImgDesk} alt={data.title} className="img-fluid img_in d_lg_block" />
                </div>
                <div className={`abs_img abs_img1 ${data.position}`}>
                    <img src={absDesk} alt={data.title} className="img-fluid abs_img_in d_lg_block" />
                </div>
            </div>

            <div className='content_section'>
                <Container>
                    <div className="about">
                        <CustomCard className="px-0 pb-0" title="ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE" desc="This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a  residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits." type="style1"  />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default React.memo(LargeElevation);
