import React from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import { useMatches } from "../../../theme/theme";
import LottieAnimationSection from "./LottieAnimationSection";

import Watermark from "../../../common/watermark/Index";
import { BACKEND_IMAGE_URL } from "../../../config/config";

const PeacockSection = React.memo(({ data, watermarkClass, json, mb_json, animation_speed=2, desktop_img, mobile_img }) => {
  const { isMobile } = useMatches();
  let finalData;

  const { heading, description, image, alternative_image } = data;

  if(json && mb_json){
    finalData={
      ...data,
      json,
      mb_json,
    }
  }else if(json){
    finalData={
      ...data,
      json,
    }
  }else{
    finalData={
      ...data
    }
  }
  
  const displayImage = desktop_img || image;
  const displayMobileImage = mobile_img || image

  return (
    <>
      {(!displayImage && json) || (isMobile && !displayImage) ? (
        <>
          <LottieAnimationSection
            customClass={watermarkClass ? watermarkClass : "style2"}
            data={finalData}
            position="0"
            logomark="sm style4"
            watermark="style4"
            animation_speed={animation_speed}
          />
        </>
      ) : (
        <>
          <div
            className="section peacock_section pb-0 pt_50 pt_sm_30"
            id="peacockSection"
          >
            <div className="frames_content">
              <div className="image_col position-relative">
                <Watermark
                  className={isMobile ? "style5" : "style2"}
                  type="style1"
                />
                <picture className="img-fluid peacock_img">
                  <source srcSet={isMobile ? BACKEND_IMAGE_URL + displayMobileImage : BACKEND_IMAGE_URL + displayImage} />
                  <img
                    src={isMobile ? BACKEND_IMAGE_URL + displayMobileImage : BACKEND_IMAGE_URL + displayImage}
                    alt="Peacock image"
                    className="img-fluid peacock_img w-100"
                  />
                </picture>
                {/* <img src={BACKEND_IMAGE_URL + image} alt="Peacock image" className="img-fluid peacock_img" /> */}
              </div>

            </div>

            <Container>
              <div className="about">
                <CustomCard
                  className="px_sm_0 pb-0"
                  title={heading}
                  desc={description}
                />
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  );
});

export default PeacockSection;
