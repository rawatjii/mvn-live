import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as CONFIG from "root/config/config";
import React, { useEffect, useState } from "react";
import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';
import CloseBtnimg from '../assets/images/icons/close.png';
import "./Header.css";
import { otherPages, otherProjects, otherDetails, socialMedia } from '../../data/headerdata';
import { useMatches } from "../../theme/theme";



const MicroHeader = ({ scrollToSection, data, isFixed }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);

  const { sidebar_section, sidebarAsset } = data;
  const channelUrl = CONFIG.YOUTUBE_URL;
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useMatches();

  useEffect(() => {
    if (pathname.includes("aeroone-gurgaon") || pathname.includes("mvn-mall") || pathname.includes("aeroone-bangalore1") || pathname.includes("mvn-athens-faridabad") || pathname.includes("/mvn-athens-gurgaon-phase-2") || pathname.includes("/mvn-athens-gurgaon-phase-1")) {
      setIsMicro(true);
    }

    const handleScroll = () => {
      const navbarScroll = localStorage.getItem('navbar_scroll_height');
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

  // useEffect(() => {
  //   gsap.from(".logo", { y: 30, opacity: 0, duration: 1 });
  //   gsap.from(".navbar-toggle", { y: 15, opacity: 0, duration: 0.6, delay: 0.4 });
  // }, []);


  const toggleMenu = (value) => {
    setIsMenuOpen(value === "show");
  };

  return (
    <Navbar expand="false" className={`${isFixed ? "fixed" : ""} ${isMicro ? "micro_nav" : ""} ${data.athens_header}`} role="navbar">
      <Container>
        <Navbar.Brand className="logo">
          <Link onClick={() => toggleMenu("close")}>
            <img src={CONFIG.IMAGE_URL + "logo_white.webp"} alt="mvn-logo" className="img-fluid d-none d-md-block" fetchpriority="high" />
            <img src={CONFIG.IMAGE_URL + "logo_white.webp"} alt="mvn-logo" className="img-fluid d-md-none" fetchpriority="high" />
          </Link>
        </Navbar.Brand>
        <div className="right">
          <a href={`tel:${otherDetails.contact}`} className="call_btn">
            <img src={CONFIG.IMAGE_URL + 'icons/call.png'} alt="mvn call icon" />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => toggleMenu("show")} className="navbar-toggle">
            <span className="icon"></span>
          </Navbar.Toggle>
        </div>
        <div id="basic-navbar-nav" className={`navbar_collapse ${isMenuOpen ? "show" : ""}`}>
          <div className="overlay-content">
            <div className="inner-overlay">

              <div className="video-area d-none d-md-block">
                <img src={sidebarAsset.desktop} alt="mvn elevation image" className="img-fluid" />
              </div>

              <div className="menu-area">
                <div className="top_head">
                  <Link onClick={() => toggleMenu("close")}>
                    <img src={CONFIG.IMAGE_URL + "logo_white.webp"} className="logo" alt="mvn logo" />
                  </Link>
                  <span className="close d-md-none" onClick={() => toggleMenu("close")}>&times;</span>
                </div>
                <div className="inner-menu">
                  <div className="bottom-area">
                    <div className="inner-bottom-area">
                      <div className="microsite">
                        <ul>
                          <li>
                            <NavLink to={import.meta.env.VITE_APP_URL} onClick={() => toggleMenu("close")}>Home</NavLink>
                          </li>
                        </ul>
                        <h4>{data.title}</h4>
                        <ul>
                          {sidebar_section && sidebar_section.map((section, index) => (
                            <li key={index}>
                              <NavLink className="new-launch" onClick={() => { scrollToSection(section.link); toggleMenu("close"); }}>
                                {section.section_title}
                              </NavLink>
                            </li>
                          ))}
                          <li>
                            <NavLink to={import.meta.env.VITE_APP_URL + 'contact-us'} onClick={() => toggleMenu("close")}>Contact Us</NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="left">
                        {otherProjects && otherProjects.map((singleProject, index) => (
                          <React.Fragment key={index}>
                            <h4 className={index === 0 ? 'pt-0' : ''}>{singleProject.location}</h4>
                            {/* {singleProject.projects.length == 1 && singleProject.projects.some(sinProject => sinProject.link.includes(pathname)) ? null : } */}

                            <ul>
                              {singleProject.projects && singleProject.projects.map((project, idx) => {
                                return <li className={project.status ? 'new_launch' : ''} key={project.name + idx}>
                                  <NavLink to={project.link} target={project.target_blank === false ? "_self" : "_blank"} onClick={() => toggleMenu("close")}>
                                    {project.name}
                                  </NavLink>
                                  {project.status && <span>{project.status}</span>}
                                </li>
                              })}
                            </ul>
                          </React.Fragment>
                        ))}
                      </div>
                      <div className={`right ${isMobile ? 'bottom' : 'top'}`}>
                        <ul>
                          {otherPages && otherPages.map((singleLink, index) => {
                            if (singleLink.name !== 'Contact Us') {
                              return <li key={index}>
                                <NavLink to={import.meta.env.VITE_APP_URL + singleLink.link} onClick={() => toggleMenu("close")}>
                                  {singleLink.name}
                                </NavLink>
                              </li>
                            }
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="top-area">
                    <div className="inner-logo d-none d-md-block">
                      <p><span>Office:</span> {otherDetails.address}</p>
                      <p><span>Talk:</span> {otherDetails.contact}</p>
                    </div>
                    <ul className="sub_menu">
                      <li>
                        <label htmlFor="school" className="d-block w-100">Social Media</label>
                        <ul className="social_links">
                          {socialMedia.map((socialIcon, index) => (
                            <li key={index}>
                              <Link to={socialIcon.link} target="_blank" onClick={() => toggleMenu("close")} className={socialIcon.className}>
                                <img src={`${CONFIG.IMAGE_URL + socialIcon.imgUrl}`} alt={socialIcon.alt} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <img src={subscribeBtn} alt="subscribe_btn" className="subscribe_btn" onClick={() => window.open(channelUrl, "_blank")} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="closebtn-area d-none d-md-grid" onClick={() => toggleMenu("close")}>
                <button className="closebtn" onClick={(e) => { e.stopPropagation(); toggleMenu("close"); }}>
                  <img src={CloseBtnimg} alt="mvn close icon" className="img-fluid close-img" /> Close
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
