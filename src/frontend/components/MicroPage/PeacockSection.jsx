import React from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import { useMatches } from "../../../theme/theme";
import LottieAnimationSection from "./LottieAnimationSection";

import Watermark from "../../../common/watermark/Index";
import ScrollDown from "../../../common/scrollDown/Index";
import peacokImg from "../../assets/loader/peacock.webp"

const PeacockSection = React.memo(({ data}) => {
  const { isMobile } = useMatches();

  const {second_title, desc, path} = data;

  return (
    <div className="section peacock_section pb-0 pt_sm_0" id="peacockSection">
      {/* Show loader only on mobile */}
      {/* {isMobile && loading && <PeacockLoader />} */}
      {isMobile ? 
      <>
        <LottieAnimationSection customClass="style2" data={data} position="0" logomark="sm style4" watermark="style4"/>
      </>
      
      : <>
      <div className="frames_content">
        <div className="image_col position-relative">
          <Watermark className={isMobile ? 'style4' : 'style2'} type="style1" />
          <img src={path.desktop} alt="Peacock image" className="img-fluid peacock_img" />
        </div>

        <ScrollDown className="color-black" />
      </div>
      

      <Container>
        <div className="about">
          <CustomCard
            className="px_sm_0 pb-0"
            title={second_title}
            desc={desc}
          />
        </div>
      </Container>
      </>
      }

     
    </div>
  );
});

export default PeacockSection;
