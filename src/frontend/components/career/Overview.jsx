import React, { Suspense, useRef } from "react";
import { Container } from "react-bootstrap";
import headingIconImg from "../../assets/images/icons/heading-icon-img.webp"
import useFetchData from "../../utils/apiHelper";

const CareerOverview = ({page}) => {
  const titleRef = useRef();
  const desRefs = useRef([]);

  const { data:careerData, loading } = useFetchData(`page/page-section/${page}`);

  return (
    <div className="micro_data">
        <div className="content_col position-relative page-header-main-heading">
          <Container>
            <div className="heading_div mb_60 mb_sm_30">
              <img
                src={headingIconImg}
                alt="mvn vertical icon"
                className="img-fluid title_plane1"
              />
              <h4 ref={titleRef} className="title title_style1 text-center">
                {careerData?.[1]?.heading}
              </h4>
            </div>
            <p
              className="des_style1 text-center"
              ref={(el) => (desRefs.current[0] = el)}
            >
              {careerData?.[1]?.description}
            </p>
          </Container>
        </div>
    </div>
  );
};

export default CareerOverview;
