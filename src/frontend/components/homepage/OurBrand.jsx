import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";

import { useMatches } from "../../../theme/theme";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const OurBrand = React.memo(({ data }) => {
  const { isMobile } = useMatches();

  const titleRef = useRef();
  const dataRefs = useRef([]);
  
  const {heading, image, alternative_image, alt, mb_image} = data;
  const { data:blogData, loading } = useFetchData("ethos");

  return (
    <section className="section our_brand_section" aria-label="Brand Section">
      <LazyLoad>
        <picture>
          <source srcset={BACKEND_IMAGE_URL + mb_image} />
          <img src={
            isMobile
              ? BACKEND_IMAGE_URL + mb_image
              : BACKEND_IMAGE_URL + mb_image
          }
          alt="mvn brand background image"
          className="brand_bg"
          loading="lazy" />
        </picture>
        
      </LazyLoad>

      <LazyLoad>
        <picture>
          <source srcset={BACKEND_IMAGE_URL + image} />
          <img src={BACKEND_IMAGE_URL + alternative_image}
            alt="mvn brand background image"
            className="brand_bg brand_bg-2"
            loading="lazy" />
        </picture>
      </LazyLoad>

      <Container>
        <div className="heading_div  mb_60 mb_sm_30">
          <img
            src={`${API_URL}images/icons/heading-icon-img.webp`}
            alt="mvn brand heading icon"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 ref={titleRef} className="title title_style1 text-center">
           {heading}
          </h4>
        </div>

        <div className="brand_content">
          <Row>
            <div className="inner-ethos">
              {blogData?.map((item, index) => (
                <div key={index} className="box">
                  <div
                    ref={(el) => (dataRefs.current[index] = el)}
                    className="box-flex"
                  >
                    <div className="icon">
                      <img
                        src={BACKEND_IMAGE_URL + item.image}
                        alt={item.alt}
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">{item.heading}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
});

export default OurBrand;
