import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AnImage from "../../../common/animations/Image/Index";

import {
  API_URL,
  BACKEND_IMAGE_URL,
  VITE_APP_URL,
} from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const Projects = React.memo(({ data }) => {
  const imageDivRefs = useRef([]);
  const titleRef = useRef();
  const desRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Set initial state based on current screen size

  const { data: projectsData1, loading } = useFetchData("our-projects");

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    const debounceResize = () => {
      setTimeout(() => {
        handleResize();
      }, 2000);
    };

    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, [handleResize]);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => prev + 1);
  }, []);

  return (
    <>
      <section
        className="section projects_section_new pb-0"
        aria-label="Project Section"
      >
        <Container>
          <Row className="mx_-8">
            <div className="col-md-12 col-12 heading_div">
              <img
                src={`${API_URL}images/icons/heading-icon-img.webp`}
                alt="mvn plane icon"
                className="img-fluid title_plane1"
                loading="lazy"
              />
              <h4 className="title title_style1 text-center" ref={titleRef}>
                {data.heading}
              </h4>
              <article className="des_style1 text-center" ref={desRef}>
                {data.short_description}
              </article>
            </div>

            {projectsData1 &&
              Object.entries(projectsData1).map(([key, value], index) => (
                <div key={index} className="project_div d-flex flex-wrap">
                  <div className="box_with_overlay col-md-4">
                    <div className="box_with_overlay_in">
                      <img
                        src={`${API_URL}images/homepage/projects/mvn-aeroworld-bg.webp`}
                        alt="project map image"
                        className="img-fluid img_bg d-lg-block d-none"
                        loading="lazy"
                      />
                      <img
                        src={`${API_URL}images/homepage/projects/mvn-aeroworld-bg-sm.webp`}
                        alt="project map image"
                        className="img-fluid img_bg d-lg-none d-block"
                        loading="lazy"
                      />
                      <div className="abs_div">
                        <div className="content_div">
                          <span className="title text-uppercase">MVN</span>
                          <p className="text-uppercase pro_name">
                            {key == "Gurugram" ? "Aero World" : "Bangalore"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="projects_flex_row d-flex flex-wrap col-md-8 col-12">
                    {value.map((item, valueIndex) => (
                      <div
                        className={`project_box ${
                          index == 0 && "col-md-6"
                        } col-12`}
                        key={valueIndex}
                      >
                        <div className="project_box_in">
                          <AnImage
                            ref={(el) =>
                              (imageDivRefs.current[valueIndex] = el)
                            }
                            className="pro_img"
                            height={100}
                          >
                            {item.project_status && (
                              <span className="new-launch-patch">
                                {item.project_status}
                              </span>
                            )}

                            <Link
                              target={key == "Bangalore" ? "_blank" : undefined}
                              to={
                                key == "Bangalore"
                                  ? "https://www.mvnaeroone.com/"
                                  : VITE_APP_URL + item.slug
                              }
                            >
                              <img
                                src={BACKEND_IMAGE_URL + item.image}
                                alt={item.name}
                                className="img-fluid thumbnail"
                                onLoad={handleImageLoad}
                                loading="lazy"
                              />
                            </Link>
                            {item?.watermark && (
                              <div className="watermark">
                                <img
                                  src={`${API_URL}images/watermark/mvn_mall.webp`}
                                  alt="mvn mall logo"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                              </div>
                            )}
                          </AnImage>
                          <div className="text d-flex">
                            <span className="pro_name text-uppercase">
                              {item.name}
                            </span>
                            <Link
                              className="pro_link text-capitalize"
                              target={key == "Bangalore" ? "_blank" : undefined}
                              to={
                                key == "Bangalore"
                                  ? "https://www.mvnaeroone.com/"
                                  : VITE_APP_URL + item.slug
                              }
                            >
                              view detail
                              <img
                                src={`${API_URL}images/icons/arrow.png`}
                                alt="mvn arrow icon"
                                className="img-fluid icon"
                                loading="lazy"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* <div className="project_div d-flex flex-wrap">
              <div className="box_with_overlay col-md-4">
                <div className="box_with_overlay_in">
                  <img
                    src={`${API_URL}images/homepage/projects/mvn-aeroworld-bg.webp`}
                    alt="project map image"
                    className="img-fluid img_bg d-lg-block d-none"
                  />
                  <img
                    src={`${API_URL}images/homepage/projects/mvn-aeroworld-bg-sm.webp`}
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
                        <span className="new-launch-patch">New Launch</span>
                        <Link
                          to={
                            item.otherPage
                              ? item.link
                              : import.meta.env.VITE_APP_URL + item.link
                          }
                        >
                          <img
                            src={isDesktop ? item.mobile : item.desktop}
                            alt={item.name}
                            className="img-fluid thumbnail"
                            onLoad={handleImageLoad}
                          />
                        </Link>
                        {item.watermark && (
                          <div className="watermark">
                            <img
                              src={`${API_URL}images/watermark/mvn_mall.webp`}
                              alt="mvn mall logo"
                              className="img-fluid"
                            />
                          </div>
                        )}
                      </AnImage>
                      <div className="text d-flex">
                        <span className="pro_name text-uppercase">
                          {item.name}
                        </span>
                        <Link
                          className="pro_link text-capitalize"
                          to={item.link}
                        >
                          view detail
                          <img
                            src={`${API_URL}images/icons/arrow.png`}
                            alt="mvn arrow icon"
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
                    src={`${API_URL}images/homepage/projects/bangalore/bangalore-project-map.webp`}
                    alt="Bangalore project map image"
                    className="img-fluid img_bg d-lg-block d-none"
                  />
                  <img
                    src={`${API_URL}images/homepage/projects/bangalore/bangalore-project-map-sm.webp`}
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
                        <Link
                          to={
                            item.otherPage
                              ? item.link
                              : import.meta.env.VITE_APP_URL + item.link
                          }
                        >
                          <img
                            src={isDesktop ? item.mobile : item.desktop}
                            alt={item.name}
                            className="img-fluid thumbnail"
                            onLoad={handleImageLoad}
                          />
                        </Link>
                      </AnImage>
                      <div className="text d-flex">
                        <span className="pro_name text-uppercase">
                          {item.name}
                        </span>
                        <Link
                          className="pro_link text-capitalize"
                          to={item.link}
                        >
                          view detail
                          <img
                            src={`${API_URL}images/icons/arrow.png`}
                            alt="mvn arrow icon"
                            className="img-fluid icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </Row>
        </Container>
      </section>
    </>
  );
});

export default Projects;
