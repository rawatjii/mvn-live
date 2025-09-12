import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";


import { API_URL } from "../../../config/config";


const Philosophy = () => {
  const titleRef = useRef();
  const miniTitleRefs = useRef([]);
  const desRefs = useRef([]);


  return (
    <section
      className="section philosophy_section pb-0"
      aria-label="Philosophy Section"
    >
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img
            src={`${API_URL}images/icons/heading-icon-img.webp`}
            alt="mvn heading icon"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 ref={titleRef} className="title title_style1 text-center">
            Our Philosophy
          </h4>
        </div>

        <div className="content">
          <div className="flex-li-row-1">
            <ul>
              <li>
                <h4
                  ref={(el) => (miniTitleRefs.current[0] = el)}
                  className="title"
                >
                  <img
                    src={`${API_URL}images/icons/plane1.png`}
                    alt="mvn plan icon"
                    className="img-fluid icon"
                    loading="lazy"
                  />
                  Our Vision
                </h4>
                <p ref={(el) => (desRefs.current[0] = el)}>
                  We craft exceptional ecosystems that drive India’s growth,
                  blending sustainability with global standards. From
                  universities to urban spaces, we shape aspirations and
                  achievements across India, from Khambi to Bengaluru.
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <h4
                  ref={(el) => (miniTitleRefs.current[1] = el)}
                  className="title"
                >
                  <img
                    src={`${API_URL}images/icons/plane1.png`}
                    alt="mvn plan icon"
                    className="img-fluid icon"
                    loading="lazy"
                  />
                  Our Mission
                </h4>
                <p ref={(el) => (desRefs.current[1] = el)}>
                  We build exceptional ecosystems that serve India’s high-growth
                  ambitions. As part of our mission, we are creating a legacy of
                  world-class real estate offerings that are locally relevant
                  and sustainable yet meet global standards. We are building
                  universities, urban infrastructure, hotels, and homes with
                  equal zest across ‘aspiring’ to ‘arrived’ India – from Khambi
                  to Bengaluru.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-li-row-2">
            <ul>
              <li>
                <h4
                  ref={(el) => (miniTitleRefs.current[2] = el)}
                  className="title"
                >
                  <img
                    src={`${API_URL}images/icons/plane1.png`}
                    alt="mvn plan icon"
                    className="img-fluid icon"
                    loading="lazy"
                  />
                  Our Values
                </h4>
                <ul
                  ref={(el) => (desRefs.current[2] = el)}
                  className="our-values-ul-icon"
                >
                  <li>
                    <img
                      src={`${API_URL}images/about/growth.gif`}
                      alt="mvn Enrich lives"
                      className="img-fluid values-ul-icon"
                      loading="lazy"
                    />
                    Enrich lives
                  </li>
                  <li>
                    <img
                      src={`${API_URL}images/about/growth-2.gif`}
                      alt="mvn Empower ambitions"
                      className="img-fluid values-ul-icon"
                      loading="lazy"
                    />
                    Empower ambitions
                  </li>
                  <li>
                    <img
                      src={`${API_URL}images/about/Idea.gif`}
                      alt="mvn Drive innovation"
                      className="img-fluid values-ul-icon"
                      loading="lazy"
                    />
                    Drive innovation
                  </li>
                  <li>
                    <img
                      src={`${API_URL}images/about/Verified.gif`}
                      alt="mvn Inspire quality"
                      className="img-fluid values-ul-icon"
                      loading="lazy"
                    />
                    Inspire quality
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;
