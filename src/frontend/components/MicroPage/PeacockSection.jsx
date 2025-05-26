import React from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import { useMatches } from "../../../theme/theme";
import LottieAnimationSection from "./LottieAnimationSection";

import Watermark from "../../../common/watermark/Index";
import ScrollDown from "../../../common/scrollDown/Index";
import { BACKEND_IMAGE_URL } from "../../../config/config";

const PeacockSection = React.memo(({ data }) => {
  const { isMobile } = useMatches();

  const { heading, description, image, alternative_image, json } = data;

  return (
    <>
      {!image && json ? (
        <>
          <LottieAnimationSection
            customClass="style2"
            data={data}
            position="0"
            logomark="sm style4"
            watermark="style4"
          />
        </>
      ) : (
        <>
          <div
            className="section peacock_section pb-0 pt_sm_0"
            id="peacockSection"
          >
            <div className="frames_content">
              <div className="image_col position-relative">
                <Watermark
                  className={isMobile ? "style4" : "style2"}
                  type="style1"
                />
                <picture className="img-fluid peacock_img">
                  <source srcSet={BACKEND_IMAGE_URL + image} />
                  <img
                    src={BACKEND_IMAGE_URL + alternative_image}
                    alt="Peacock image"
                    className="img-fluid peacock_img"
                  />
                </picture>
                {/* <img src={BACKEND_IMAGE_URL + image} alt="Peacock image" className="img-fluid peacock_img" /> */}
              </div>

              <ScrollDown className="color-black" />
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
