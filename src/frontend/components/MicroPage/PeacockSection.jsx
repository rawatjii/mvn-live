import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import { useMatches } from "../../../theme/theme";
import LottieAnimationSection from "./LottieAnimationSection";

import * as CONFIG from '../../../config/config';

gsap.registerPlugin(ScrollTrigger);

const PeacockSection = ({ data, onLoadComplete }) => {
  const { isMobile } = useMatches();

  return (
    <div className="section peacock_section pb-0" id="peacockSection">
      {/* Show loader only on mobile */}
      {/* {isMobile && loading && <PeacockLoader />} */}
      {isMobile ? 
      <>
        <LottieAnimationSection data={data} position="0"/>
      </>
      
      : <>
      <img src={CONFIG.IMAGE_URL + 'peacock/peacock.webp'} alt="Peacock image" className="img-fluid peacock_img" />
      <Container>
            <div className="about">
              <CustomCard
                className="px_sm_0 pb-0"
                title="EXPERIENCE THE GRANDEUR OF THE LIVING ROOM WITH 360° PANORAMIC VIEWS"
                desc="Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings."
              />
            </div>
          </Container>
      </>
      }

     
    </div>
  );
};

export default PeacockSection;
