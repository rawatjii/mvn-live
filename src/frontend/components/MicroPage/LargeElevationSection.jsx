import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from "../Card";
import { useMatches } from "../../../theme/theme";
import { BACKEND_IMAGE_URL } from "../../../config/config";
gsap.registerPlugin(ScrollTrigger);

function LargeElevation({ data }) {
  const sectionRef = React.useRef(null);
  const desktopRef = React.useRef();
  const {
    heading,
    class_name,
    path,
    sub_heading,
    description,
    image,
    optional_images,
  } = data;

  const { isMobile } = useMatches();

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
        markers: false,
      },
    });

    // Ensure triggers refresh
    ScrollTrigger.addEventListener("refresh", () =>
      console.log("Triggers refreshed")
    );
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className="large-elevation"
      ref={sectionRef}
      id="largeElevationSection"
    >
      {heading && (
        <Container>
          <div className="container_elevation">
            <div className="top_div">
              <h3 className="title elevation_title text-uppercase">
                {heading.split(" ").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h3>
            </div>
          </div>
        </Container>
      )}

      {/* view start */}

      <div
        className={`bottom_img_div ${isMobile ? "d_sm_block" : "d_lg_block"}`}
        ref={!isMobile ? desktopRef : null}
      >
        <div className="full_img">
          <img
            src={
              isMobile ? BACKEND_IMAGE_URL + image : BACKEND_IMAGE_URL + image
            }
            alt={heading}
            className={`img-fluid img_in ${isMobile ? " " : "d_lg_block"}`}
          />
        </div>
        <div
          className={`abs_img ${
            isMobile ? "abs_img_m" : "abs_img1"
          } ${class_name}`}
        >
          <img
            src={
              isMobile
                ? BACKEND_IMAGE_URL + optional_images
                : BACKEND_IMAGE_URL + optional_images
            }
            alt={heading}
            className={`img-fluid abs_img_in ${isMobile ? " " : "d_lg_block"}`}
          />
        </div>
      </div>

      {/* view end */}

      <div className="content_section">
        <Container>
          <div className="about">
            <CustomCard
              className="px-0 pb-0"
              title={sub_heading}
              desc={description}
              type="style1"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default React.memo(LargeElevation);
