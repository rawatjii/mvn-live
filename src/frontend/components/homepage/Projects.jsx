import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AnImage from "../../../common/animations/Image/Index";

import mvnMallImg from "../../assets/images/projects/mvn-mall.webp";
import mvnAerooneImg from "../../assets/images/projects/mvn-aeroone.webp";
import mvnAerooneBangaloreImg from "../../assets/images/projects/mvn-bangalore-project.webp";
import mvnMallImgDesktop from "../../assets/images/projects/project-img-3.webp";
import mvnAerooneImgDesktop from "../../assets/images/projects/mvn-aeroone.webp";
import mvnAerooneBangaloreImgDesktop from "../../assets/images/projects/mvn-bangalore-project.webp";
import arrowIcon from "../../assets/images/icons/arrow.png";
import planeIcon from "../../assets/images/icons/heading-icon-img.webp";

import * as CONFIG from '../../../config/config'

const projectsData = [
  {
    mobile: mvnAerooneImg,
    desktop: mvnAerooneImgDesktop,
    name: "MVN AERO ONE RESIDENCES",
    location: "Gurugram",
    otherPage: false,
    link: "aeroone-gurgaon"
  },
  {
    mobile: mvnMallImg,
    desktop: mvnMallImgDesktop,
    name: "Mvn Mall",
    location: "Gurugram",
    otherPage: true,
    link: 'https://mvnmall.com/',
    watermark:true,
  },
  {
    mobile: mvnAerooneBangaloreImg,
    desktop: mvnAerooneBangaloreImgDesktop,
    name: "Mvn AERO ONE",
    location: "Bangalore",
    otherPage: true,
    link: 'https://www.mvnaeroone.com/'
  },
];

const Projects = () => {

  const imageDivRefs = useRef([]);
  const titleRef = useRef();
  const desRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Set initial state based on current screen size

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const leftColProjects = isDesktop
    ? [projectsData[0], projectsData[1]]
    : [projectsData[0], projectsData[1]];
  const rightColProjects = isDesktop
    ? [projectsData[2]]
    : [projectsData[2]]


  return (
    <>
      <section className="section projects_section_new pb-0">
        <Container>
          <Row className="mx_-8">


            <div className="col-md-12 col-12 heading_div">
              <img
                src={planeIcon}
                alt="mvn-plane-icon"
                className="img-fluid title_plane1"
              />
              <h4 className="title title_style1 text-center" ref={titleRef}>Explore Our Projects</h4>
              <article className="des_style1 text-center" ref={desRef}>MVN Infrastructure introduces MVN Aero One Residencies, the largest ultra-luxury apartments in Delhi NCR, located at the 22-kilometer stone on Dwarka Expressway.</article>
            </div>

            <div className="project_div d-flex flex-wrap">
              <div className="box_with_overlay col-md-4">
                <div className="box_with_overlay_in">
                  <img
                    src={CONFIG.IMAGE_URL + "gurgaon-project-map.webp"}
                    alt="project map image"
                    className="img-fluid img_bg d-lg-block d-none"
                  />
                  <img
                    src={CONFIG.IMAGE_URL + "gurgaon-project-map-sm.webp"}
                    alt="project map image"
                    className="img-fluid img_bg d-lg-none d-block"
                  />
                  <div className="abs_div">
                    <div className="content_div">
                      <span className="title text-uppercase">MVN</span>
                      <p className="text-uppercase pro_name">Aero World</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects_flex_row d-flex flex-wrap col-md-8 col-12">
                {leftColProjects.map((item, index) => (
                  <div className="project_box col-md-6 col-12" key={index}>
                    <div className="project_box_in" key={index}>
                      <AnImage
                        ref={(el) => (imageDivRefs.current[index] = el)}
                        className="pro_img"
                        height={100}
                      >   
                        <span className="new-launch-patch">
                          New Launch
                        </span>
                        <Link to={item.otherPage ? item.link : import.meta.env.VITE_APP_URL + item.link}>
                          <img
                            src={isDesktop ? item.mobile : item.desktop}
                            alt={item.name}
                            className="img-fluid thumbnail"
                            onLoad={handleImageLoad}
                          />
                        </Link>
                        {item.watermark && (
                          <div className="watermark">
                            <img src={CONFIG.IMAGE_URL + 'watermark/mvn_mall.webp'} alt="mvn mall logo" className="img-fluid" />
                          </div>
                        )}
                      </AnImage>
                      <div className="text d-flex">
                        <span className="pro_name text-uppercase">{item.name}</span>
                        <Link className="pro_link text-capitalize" to={item.link}>
                          view detail
                          <img
                            src={arrowIcon}
                            alt="mvn-arrow-icon"
                            className="img-fluid icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project_div d-flex flex-wrap">
              <div className="box_with_overlay col-md-4">
                <div className="box_with_overlay_in">
                  <img
                    src={CONFIG.IMAGE_URL + "bangalore-project-map.webp"}
                    alt="Bangalore project map image"
                    className="img-fluid img_bg d-lg-block d-none"
                  />
                  <img
                    src={CONFIG.IMAGE_URL + "bangalore-project-map-sm.webp"}
                    alt="Bangalore project map image"
                    className="img-fluid img_bg d-lg-none d-block"
                  />
                  <div className="abs_div">
                    <div className="content_div">
                      <span className="title text-uppercase">MVN</span>
                      <p className="text-uppercase pro_name">Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects_flex_row d-flex flex-wrap col-md-8 col-12">
                {rightColProjects.map((item, index) => (
                  <div className="project_box col-12" key={index}>
                    <div className="project_box_in" key={index}>
                      <AnImage
                        ref={(el) => (imageDivRefs.current[index] = el)}
                        className="pro_img"
                        height={100}
                      >
                        <Link to={item.otherPage ? item.link : import.meta.env.VITE_APP_URL + item.link}>
                          <img
                            src={isDesktop ? item.mobile : item.desktop}
                            alt={item.name}
                            className="img-fluid thumbnail"
                            onLoad={handleImageLoad}
                          />
                        </Link>
                      </AnImage>
                      <div className="text d-flex">
                        <span className="pro_name text-uppercase">{item.name}</span>
                        <Link className="pro_link text-capitalize" to={item.link}>
                          view detail
                          <img
                            src={arrowIcon}
                            alt="mvn-arrow-icon"
                            className="img-fluid icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
