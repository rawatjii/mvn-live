import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";

const OurTeam = React.memo(({data}) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  const {heading, short_description, image, alternative_image} = data;

  return (
    <section className="section our_team_section" aria-label="Team Section">
      <Container>
        <Row className="mx_-8">
          <div className="col-md-12 col-12 heading_div  mb_60 mb_sm_30">
            <img
              src={`${API_URL}images/icons/heading-icon-img.webp`}
              alt="mvn heading image"
              className="img-fluid title_plane1"
              loading="lazy"
            />
            <h4 ref={titleRef} className="title title_style1 text-center">
              {heading}
            </h4>
          </div>
        </Row>
      </Container>

      <picture>
        <source srcset={BACKEND_IMAGE_URL + image} />
        <img src={BACKEND_IMAGE_URL + alternative_image} alt="mvn team image" className="img-fluid team_img" loading="lazy" />
      </picture>

      <p ref={contentRef} className="des_style1 text-center">
        {short_description}
      </p>

      <div className="awards">
            <img src={`${API_URL}mvn-offer-without-logo.webp`} alt="awards icon" />
          </div>
    </section>
  );
});

export default OurTeam;
