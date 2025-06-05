import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";

const Intro = React.memo(({ data }) => {
  const {
    heading,
    sub_heading,
    short_description,
    image,
    mb_image,
    alternative_image,
    alt,
  } = data;

  return (
    <>
      <div className="mobile-view-box">
        <Container>
          <div className="main_heading_box">
            <img
              src={
                window.innerWidth <= 768
                  ? `${BACKEND_IMAGE_URL + mb_image}`
                  : `${BACKEND_IMAGE_URL + image}`
              }
              alt={alt}
              className="img-fluid"
            />
          </div>

          <div className="mb-4 mb-md-5">
            <h3 className="mt-0 slogan-heading">{heading}</h3>
            <a
              href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
              className="btn btn_style3 r_100 mt-3 mt-md-4"
            >
              Click Here
            </a>
          </div>

          <img
            src={`${BACKEND_IMAGE_URL + alternative_image}`}
            alt="mvn aeroone logo"
            className="img-fluid mobile-img-logo"
            loading="lazy"
          />
          <h2 className="logo_title">{sub_heading}</h2>
          <span className="status">{short_description}</span>

          {/* <div className="main_heading_box">
            <h1 className="sq-ft-heading">6300 - 12600 <small>sq. ft. Area</small></h1>
            <h4 className="main_subheading"><span>5.5 BHK</span> One of the <span>Largest Floor Sizes</span> in gurugram</h4>
          </div> */}

          {/* <div className="awards">
            <img src={`${API_URL}mvn-offer-without-logo.webp`} alt="awards icon" />
          </div> */}
        </Container>
      </div>
    </>
  );
});

export default Intro;
