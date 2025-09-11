import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { useMatches } from "../../../theme/theme";
import { API_URL } from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const otherProjects = [
  {
    name: "MVN School",
    thumbnails: {
      mobile: `${API_URL}images/other-projects/mvn-school.webp`,
      desktop: `${API_URL}images/other-projects/mvn-school-desktop.webp`,
    },
    link: "https://www.mvneducation.com/sector-17/",
  },
  {
    name: "MVN University",
    thumbnails: {
      mobile: `${API_URL}images/other-projects/mvn-university.webp`,
      desktop: `${API_URL}images/other-projects/mvn-university-desktop.webp`,
    },
    link: "https://www.mvn.edu.in/",
  },
  {
    name: "MVN Sports Academy",
    thumbnails: {
      mobile: `${API_URL}images/other-projects/mvn-sports-academy-desktop-2.webp`,
      desktop: `${API_URL}images/other-projects/mvn-sports-academy-desktop-2.webp`,
    },
    link: "https://www.mvn88.com/exercise-sports-academy/",
  },
];

const OtherProjects = React.memo(
  ({ data, title, subTitle, mobContent = 12 }) => {
    const titleRef = useRef();
    const imageDivRefs = useRef([]);
    const { isMobile } = useMatches();
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const initializeAnimations = useCallback(() => {
      if (otherProjects.length > 0) {
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 95%",
          },
        });

        imageDivRefs.current.forEach((imagediv, index) => {
          if (imagediv) {
            gsap.to(imagediv, {
              scrollTrigger: {
                trigger: imagediv,
                start: "top 95%",
                onEnter: () => imagediv.classList.add("active"),
                once: true,
              },
            });
          }
        });
      }
    }, []);

    useEffect(() => {
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      if (imagesLoaded === otherProjects.length) {
        setTimeout(() => {
          initializeAnimations();
          ScrollTrigger.refresh();
        }, 300);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [imagesLoaded]);

    const handleImageLoad = () => {
      setImagesLoaded((prev) => prev + 1);
    };

    return (
      <section
        className="section other_projects_section pb-0"
        aria-label="Other Project Section"
      >
        <Container>
          <div className="heading_div mb_60 mb_sm_30">
            <img
              src={`${API_URL}images/icons/heading-icon-img.webp`}
              alt="mvn vertical icon"
              className="img-fluid title_plane1"
            />
            <h4 ref={titleRef} className="title title_style1 text-center">
              Other Verticals
            </h4>
          </div>

          <Row>
            {otherProjects?.map((item, index) => (
              <Col key={index} xs={12} md={4} lg={4} className="single_col">
                <div className="single">
                  <div className="top">
                    <h5 className="name">{item.name}</h5>
                    <Link to={item.link} target="_blank">
                      <img
                        src={`${API_URL}images/icons/arrow.png`}
                        alt="mvn arrow icon"
                        className="img-fluid icon"
                      />
                    </Link>
                  </div>
                  {title && (
                    <div className="content">
                      <span className="am-name">{title}</span>
                      <p className="desc">{subTitle}</p>
                    </div>
                  )}

                  <img
                    src={
                      isMobile
                        ? item.thumbnails.mobile
                        : item.thumbnails.desktop
                    }
                    alt="mvn projects image"
                    className="img-fluid other-project-img"
                    onLoad={handleImageLoad}
                  />

                  {/* <AnImage ref={(el) => (imageDivRefs.current[index] = el)}>
                  
                </AnImage> */}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  }
);

export default OtherProjects;
