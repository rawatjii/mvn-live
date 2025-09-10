import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as CONFIG from "root/config/config";
import React, { useEffect, useState } from "react";
import {
  otherPages,
  otherProjects,
  otherDetails,
  socialMedia,
} from "../../data/headerdata";
import { useMatches } from "../../theme/theme";
import { API_URL } from "../../config/config";
import "./Header.css";
import useFetchData from "../utils/apiHelper";
import { useSelector } from "react-redux";
import { setCommonState } from "../../redux/commonSlice";

const subscribeBtn = `${API_URL}images/icons/subscribe_btn.webp`;
const CloseBtnimg = `${API_URL}images/icons/close.png`;


const microMenus = [
  { section_name: 'Overview', section_type: 'overview' },
  { section_name: 'Walkthrough', section_type: 'walkthrough' },
  { section_name: 'DGM Sales', section_type: 'dgm_sales' },
  { section_name: '360 Degree View', section_type: 'view_360' },
  { section_name: 'About Architect', section_type: 'about_architect' },
  { section_name: 'Landscape', section_type: 'landscape' },
  { section_name: 'Construction Technology', section_type: 'construction_technology' },
  { section_name: 'Amenities', section_type: 'amenities' },
  { section_name: 'Typologies', section_type: 'typologies' },
  { section_name: 'Floor plan', section_type: 'floor_plan' },
  { section_name: 'Location Map', section_type: 'location_map' },
  { section_name: 'MVN Mall', section_type: 'mvn_mall' },
];

const MicroHeader = ({ scrollToSection, data, isFixed }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);
  const [isBangaloreProject, setIsBangaloreProject] = useState(false);
  const {isMicroPage, microId} = useSelector((state)=>state.commonState);

  const { sidebar_section, sidebarAsset } = data;

  const channelUrl = CONFIG.YOUTUBE_URL;
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useMatches();

  useEffect(() => {
    if (
      pathname.includes("aeroone-gurgaon") ||
      pathname.includes("mvn-mall") ||
      pathname.includes("aeroone-bangalore") ||
      pathname.includes("mvn-athens-faridabad") ||
      pathname.includes("/mvn-athens-gurgaon-phase-2") ||
      pathname.includes("/mvn-athens-gurgaon-phase-3") ||
      pathname.includes("/mvn-athens-gurgaon-phase-1")
    ) {
      setIsMicro(true);
    }

    if (pathname.includes("aeroone-bangalore")) {
      setIsBangaloreProject(true);
    }

    const handleScroll = () => {
      const navbarScroll = localStorage.getItem("navbar_scroll_height");
      if (navbarScroll && window.scrollY > navbarScroll) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const { data: pageLinks, loading } = useFetchData("platter-project");
  const { data: contactData } = useFetchData(`page/page-section/contact-us`);
  const { data: microPageSections } = useFetchData(`project/${microId}/project-section-nav?is_theme=${pathname.includes("aeroone-gurgaon") ? 2 : 1}`);
  // const { data: contactData } = useFetchData(`project/${}/project-section-nav`);
  

  // if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && pageLinks && pageLinks.length === 0)
    return <div className="text-center py-5">No records found</div>;

  const returndeddta =
    pageLinks &&
    Object.entries(pageLinks).map(([key, value]) => ({ key, value }));

  const toggleMenu = (value) => {
    setIsMenuOpen(value === "show");
  };
  // console.log(isMicro)

  let menusSections = pathname.includes('aeroone-gurgaon') ? microMenus : microPageSections;

  return (
    <Navbar
      expand="false"
      className={`${isFixed ? "fixed" : ""} ${isMicro ? "micro_nav" : ""} ${data.athens_header}`}
      role="navbar"
    >
      <Container>
        <Navbar.Brand className="logo">
          <Link onClick={() => toggleMenu("close")}>
            <img
              src={`${API_URL}assets/logo_white.webp`}
              alt="mvn logo"
              className="img-fluid d-none d-md-block"
              fetchpriority="high"
            />
            <img
              src={`${API_URL}assets/logo_white.webp`}
              alt="mvn logo"
              className="img-fluid d-md-none"
              fetchpriority="high"
            />
          </Link>
        </Navbar.Brand>
        <div className="right">
          <a href={`tel:${otherDetails.contact}`} className="call_btn">
            <img src={`${API_URL}assets/icons/call.png`} alt="mvn call icon" />
          </a>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => toggleMenu("show")}
            className="navbar-toggle"
          >
            <span className="icon"></span>
          </Navbar.Toggle>
        </div>
        <div
          id="basic-navbar-nav"
          className={`navbar_collapse ${isMenuOpen ? "show" : ""}`}
        >
          <div className="overlay-content">
            <div className="inner-overlay">
              {window.innerWidth > 767 && (
                <div className="video-area">
                  <img
                    src={sidebarAsset.desktop}
                    alt="mvn elevation image"
                    className="img-fluid"
                  />
                </div>
              )}

              <div className="menu-area">
                <div className="top_head">
                  <Link onClick={() => toggleMenu("close")}>
                    <img
                      src={`${API_URL}assets/logo_white.webp`}
                      className="logo"
                      alt="mvn logo"
                    />
                  </Link>
                  <span
                    className="close d-md-none"
                    onClick={() => toggleMenu("close")}
                  >
                    &times;
                  </span>
                </div>
                <div className="inner-menu">
                  <div className="bottom-area">
                    <div className="inner-bottom-area">
                      <div className="microsite">
                        <ul>
                          <li>
                            <NavLink
                              to={import.meta.env.VITE_APP_URL}
                              onClick={() => toggleMenu("close")}
                            >
                              Home
                            </NavLink>
                          </li>
                        </ul>
                        <h4>{pathname.includes('mvn-mall') ? 'MVN Mall, Gurugram' : pathname.includes('mvn-athens-gurgaon-phase-1') ? 'MVN Athens Ph-1, Sohna' : pathname.includes('mvn-athens-gurgaon-phase-2') ? 'MVN Athens Ph-2, Sohna' : pathname.includes('mvn-athens-faridabad') ? 'MVN Athens, Faridabad' : pathname.includes('aeroone-gurgaon')?'MVN Aeroone Gurgaon':data.title}</h4>
                        
                        <ul>
                        {/* {pathname.includes('mvn-mall') ? } */}
                          {menusSections &&
                            menusSections?.map((section, index) => (
                              <li key={index}>
                                <NavLink
                                  className="new-launch"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(section.section_type);
                                    toggleMenu("close");
                                  }}
                                >
                                  {section.section_name}
                                </NavLink>
                              </li>
                            ))}
                               
                               {pathname=="/mvn-athens-gurgaon-phase-3"&&<li>
                               <NavLink
                                  className="new-launch"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("construction");
                                    toggleMenu("close");
                                  }}
                                >
                              Construction Update
                            </NavLink>
                          </li>}
                          <li>
                            <NavLink
                              to={import.meta.env.VITE_APP_URL + "contact-us"}
                              onClick={() => toggleMenu("close")}
                            >
                              Contact Us  
                            </NavLink>
                          </li>
                        </ul>
                      </div>

                      <div className="left">
                        {pageLinks &&
                          Object.entries(pageLinks).length > 0 &&
                          Object.entries(pageLinks).map(
                            ([key, value], index) => (
                              <React.Fragment key={index}>
                                {value.length > 0 && (
                                  <>
                                    <h4 className={index === 0 ? "pt-0" : ""}>
                                      {key}
                                    </h4>

                                    <ul>
                                      {value.map((project, idx) => {
                                        return (
                                          <li
                                            className={
                                              project.project_status
                                                ? "new_launch"
                                                : ""
                                            }
                                            key={project.name + idx}
                                          >
                                            <NavLink
                                              to={
                                                project.slug == 'aeroone-bangalore' ? 'https://www.mvnaeroone.com/' : import.meta.env.VITE_APP_FRONTEND_URL + project.slug
                                              }
                                              onClick={() =>
                                                toggleMenu("close")
                                              }
                                              target={project.slug == 'aeroone-bangalore' && '_blank'}
                                            >
                                              {project.name}
                                            </NavLink>
                                            {project.project_status && (
                                              <span>{project.project_status}</span>
                                            )}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </>
                                )}
                              </React.Fragment>
                            )
                          )}
                      </div>
                      <div className={`right ${isMobile ? "bottom" : "top"}`}>
                        <ul>
                          {otherPages &&
                            otherPages.map((singleLink, index) => {
                              if (singleLink.name !== "Contact Us") {
                                return (
                                  <li key={index}>
                                    <NavLink
                                      to={
                                        import.meta.env.VITE_APP_URL +
                                        singleLink.link
                                      }
                                      onClick={() => toggleMenu("close")}
                                    >
                                      {singleLink.name}
                                    </NavLink>
                                  </li>
                                );
                              }
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="top-area">
                    <div className="inner-logo">
                      <p className="mb-1">
                        <span>Office:</span> {contactData?.[2]?.short_description}
                      </p>
                      <p>
                        <span>Talk:</span> <a href={`tel:${contactData?.[2]?.sub_heading}`}>{contactData?.[2]?.sub_heading}</a>
                      </p>
                    </div>

                    {/* {pathname.includes("aeroone-gurgaon") && (
                      <>
                        <div className="inner-logo">
                          <p>
                            <span>Vidhi Negi</span>
                          </p>

                          <p>
                            <span>Email:</span> <a href="mailto:smtm@mvninfrastructure.com">smtm@mvninfrastructure.com</a>
                          </p>
                          <p>
                            <span>Talk:</span> <a href="tel:+919311051426">(+91) 9311051426</a>
                          </p>
                          <p><span>Designation:</span> DGM Sales</p>
                        </div>

                        <div className="inner-logo">
                          <p>
                            <span>Archi</span>
                          </p>

                          <p>
                            <span>Email:</span> <a href="mailto:smto@mvninfrastructure.com">smto@mvninfrastructure.com</a>
                          </p>
                          <p>
                            <span>Talk:</span> <a href="tel:+919870101385">(+91) 9870101385</a>
                          </p>
                          <p><span>Designation:</span> DGM Sales</p>
                        </div>
                      </>
                    )} */}

                    
                    
                    <ul className="sub_menu">
                      <li>
                        <span htmlFor="school" className="d-block w-100">
                          Social Media
                        </span>
                        <ul className="social_links">
                          {socialMedia.map((socialIcon, index) => (
                            <li key={index}>
                              <Link
                                to={socialIcon.link}
                                target="_blank"
                                onClick={() => toggleMenu("close")}
                                className={socialIcon.className}
                              >
                                <img
                                  src={socialIcon.imgUrl}
                                  alt={socialIcon.alt}
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <img
                          src={subscribeBtn}
                          alt="subscribe button"
                          role="button"
                          className="subscribe_btn"
                          onClick={() => window.open(channelUrl, "_blank")}
                        />
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <div
                className="closebtn-area d-none d-md-grid"
                onClick={() => toggleMenu("close")}
              >
                <button
                  className="closebtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu("close");
                  }}
                >
                  <img
                    src={CloseBtnimg}
                    alt="mvn close icon"
                    className="img-fluid close-img"
                  />{" "}
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MicroHeader;
