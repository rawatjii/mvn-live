import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../../common/Button/Button";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnImage from "../../../common/animations/Image/Index";

import mvnMallImg from "../../assets/images/projects/mvn-mall.webp";
import mvnAerooneImg from "../../assets/images/projects/mvn-aeroone.webp";
import mvnAerooneBangaloreImg from "../../assets/images/projects/mvn-bangalore-project.webp";
import mvnMallImgDesktop from "../../assets/images/projects/project-img-3.webp";
import mvnAerooneImgDesktop from "../../assets/images/projects/mvn-aeroone.webp";
import mvnAerooneBangaloreImgDesktop from "../../assets/images/projects/mvn-bangalore-project.webp";
import arrowIcon from "../../assets/images/icons/arrow.png";
import btn_arrow from "../../assets/images/icons/btn_arrow.png";
import planeIcon from "../../assets/images/icons/plane.jpg";
import NewLaunchIcon from "../../assets/images/icons/new-launch-patch.png"


import * as CONFIG from '../../../config/config'

import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [

    {
        mobile: mvnAerooneImg,
        desktop: mvnAerooneImgDesktop,
        name: "MVN AERO ONE RESIDENCES",
        location: "Gurugram",
        otherPage:false,
        link:"aeroone-gurgaon"
      },

  {
    mobile: mvnMallImg,
    desktop: mvnMallImgDesktop,
    name: "Mvn Mall",
    location: "Gurugram",
    otherPage:true,
    link:'https://mvnmall.com/'
  },

  {
    mobile: mvnAerooneBangaloreImg,
    desktop: mvnAerooneBangaloreImgDesktop,
    name: "Mvn",
    location: "Bangalore",
    otherPage:true,
    link:'https://www.mvnaeroone.com/'
  },
];

const Projects = () => {
  const imageDivRefs = useRef([]);
  const titleRef = useRef();
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

  const initializeAnimations = () => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
        once: true,
      },
    });

    imageDivRefs.current.forEach((imagediv) => {
      if (imagediv) {
        gsap.to(imagediv, {
          scrollTrigger: {
            trigger: imagediv,
            start: "top 95%",
            once: true,
            onEnter: () => imagediv.classList.add("active"),
          },
          clearProps: "all",
        });
      }
    });
  };

  useEffect(() => {
    if (imagesLoaded === projectsData.length) {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }

    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const leftColProjects = isDesktop
    ? [projectsData[0], projectsData[2]] // "Mvn Mall" and "Mvn"
    : [projectsData[0]]; // Desktop: "Mvn Mall" only
  const rightColProjects = isDesktop
    ? [projectsData[1]] // "Mvn Aeroone Residency"
    : projectsData.slice(1); // Desktop: Rest of the projects

  return (
    <>
      <section className="section projects_section pb-0 HomeMobileProject-section">
   
        <Container>
          <Row className="mx_-8">

            {/* Left Column */}
            <Col xs={12} className="px_8 left_col">
         
         <div className="flex-heading-project">
            <div className="flex-box-1">
            <img
            src={planeIcon}
            alt="mvn plane icon"
            className="img-fluid plane_icon"
            />

            </div>
            <div className="flex-box-2">
            <h3 className="sec_title">
                Explore <span>Our Projects</span>
              </h3>
            </div>
         </div>
   
              {leftColProjects.map((item, index) => (
                <div key={index} className="single">
                  
                  <AnImage
                    ref={(el) => (imageDivRefs.current[index] = el)}
                    height={100}
                  >   <img src={NewLaunchIcon} alt={`mvn projects new launch icon ${index}`} className="img-fluid new-launch-patch"/>
                    <Link to={item.otherPage ? item.link : import.meta.env.VITE_APP_URL + item.link}>

                      <img
                        src={isDesktop ? item.mobile : item.desktop}
                        alt={item.name}
                        className="img-fluid thumbnail"
                        onLoad={handleImageLoad}
                      />
                    </Link>
                  </AnImage>
                  <div className="content">
                    <div className="left">
                      <h4 className="project_name">{item.name}</h4>
                      <p className="location">{item.location}</p>
                    </div>

                    <div className="right">
                      <Link to={item.link}>
                        <img
                          src={arrowIcon}
                          alt="mvn arrow icon"
                          className="img-fluid icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Col>

            {/* Right Column */}
            <Col xs={12} className="px_8 right_col">

        
             
              {rightColProjects.map((item, index) => (
                <div key={index} className="single">
                        <img src={NewLaunchIcon} alt={`mvn projects new launch icon ${index}`} className="img-fluid new-launch-patch"/>
                  <AnImage
                    ref={(el) =>
                      (imageDivRefs.current[leftColProjects.length + index] = el)
                    }
                    height={100}
                  >
                    <Link to={item.link} target="_blank">
                      <img
                        src={isDesktop ? item.mobile : item.desktop}
                        alt={item.name}
                        className="img-fluid thumbnail"
                        onLoad={handleImageLoad}
                      />
                    </Link>
                  </AnImage>
                  <div className="content">
                    <div className="left">
                      <h4 className="project_name">{item.name}</h4>
                      <p className="location">{item.location}</p>
                    </div>

                    <div className="right">
                      <Link to={item.link} target="_blank">
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
