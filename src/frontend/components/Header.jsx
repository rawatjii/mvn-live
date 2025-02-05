import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as CONFIG from "root/config/config";
import { useEffect, useRef, useState } from "react";
import CloseBtnimg from '../assets/images/icons/close.png';
import { otherProjects, otherPages, otherDetails, socialMedia } from "../../data/headerdata";

import MenuSideVideo from '../assets/images/hero/tiger.mp4';

import "./Header.css";

import Button from "../../common/Button/Button";
import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);
  const channelUrl =  CONFIG.YOUTUBE_URL;

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [otherProjectsOpen, setOtherProjectsOpen] = useState(false);

  const menusRef = useRef();
  const headerRef = useRef();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("aeroone-gurgaon")) {
      setIsMicro(true);
    }

    const handleScroll = () => {
      if (pathname === "/") {
        if (window.scrollY > 500) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      // if (window.scrollY > 50) {
      //   setScrolled(true);
      // } else {
      //   setScrolled(false);
      // }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (value) => {
    if (value == "show") {
      document.querySelector(".navbar_collapse").classList.add("show");
    } else {
      document.querySelector(".navbar_collapse").classList.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      setInnerWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", () => null);
  }, []);

  const pathnamesToHideMiddleMenu = ["/aeroone-gurgaon"];
  return (
    <>
      <Navbar
        ref={headerRef}
        expand="false"
        className={`${scrolled ? "fixed" : ""} ${isMicro ? "micro_nav" : null}`}
      >
        <Container>
          <Navbar.Brand className="logo">
            <Link onClick={() => toggleMenu("close")} to={import.meta.env.VITE_APP_URL}>
              <img
                src={CONFIG.IMAGE_URL + "logo_white.webp"}
                alt="mvn-logo"
                className="img-fluid d-none d-md-block"
                fetchpriority="high"
              />
              <img
                src={CONFIG.IMAGE_URL + "logo_white.webp"}
                alt="mvn-logo"
                className="img-fluid d-md-none"
                fetchpriority="high"
              />
            </Link>
          </Navbar.Brand>

          <div className="right">
            <a href="tel:+917996000196" className="call_btn">
              <img src={CONFIG.IMAGE_URL + 'icons/call.png'} alt="mvn call icon" />
            </a>
            <Navbar.Toggle
             
              aria-controls="basic-navbar-nav"
              onClick={() => toggleMenu("show")}
            >
              <span className="icon"></span>
            </Navbar.Toggle>
          </div>

          <div id="basic-navbar-nav" className="navbar_collapse" ref={menusRef}>
            <div className="overlay-content">
              <div className="inner-overlay">
                {window.innerWidth > 767 && (
                  <div className="video-area">
                    <video autoPlay muted  loop>
                      <source src={MenuSideVideo} type="video/mp4" className="img-fluid videoMenu"/>
                    </video>
                  </div>
                )}

                <div className="menu-area">
                  <div>
                    <div className="top_head">
                      <Link
                        onClick={() => toggleMenu("close")}
                      >
                        <img src={CONFIG.IMAGE_URL + "logo_white.webp"} width="50" alt="mvn logo" />
                      </Link>

                      <span className="close d-md-none"onClick={() => toggleMenu("close")}>&times;</span>
                    </div>
                    <div className="inner-menu">

                      <div className="bottom-area">
                        <div className="inner-bottom-area">
                          <div className="left">

                            {otherProjects && otherProjects.map((singleProject, index) => (
                              <React.Fragment key={index}>
                                <h4 className={index === 0 ? '' : ''}>{singleProject.location}</h4>
    
                                <ul>
                                  {singleProject.projects && singleProject.projects.map((project, idx) => (
                                    <li className={project.status ? 'new_launch' : ''} key={project.name + idx}>
                                      <NavLink to={project.link} target={project.target_blank === false ? "_self" : "_blank"} onClick={() => toggleMenu("close")}>
                                        {project.name}
                                      </NavLink>
                                      {project.status && <span>{project.status}</span>}
                                    </li>
                                  ))}
                                </ul>
                              </React.Fragment>
                            ))}
                          </div>

                          <div className="right top">
                            <ul>
                              <li>
                                <NavLink to={import.meta.env.VITE_APP_URL} onClick={() => toggleMenu("close")}>
                                  Home
                                </NavLink>
                              </li>
                              {/* otherPages */}
                              {window.innerWidth > 768 ? (
                                <>
                                  {otherPages && otherPages.map((singleLink, index)=>(
                                    <li key={index}>
                                      <NavLink to={import.meta.env.VITE_APP_URL + singleLink.link} onClick={() => toggleMenu("close")}>
                                      {singleLink.name}
                                      </NavLink>
                                    </li>
                                  ))}
                                </>
                              ) : null}
                            </ul>
                          </div>

                          <div className="right bottom d-md-none">
                            <ul>
                              {otherPages && otherPages.map((singleLink, index)=>(
                                <li key={index}>
                                  <NavLink to={import.meta.env.VITE_APP_URL + singleLink.link} onClick={() => toggleMenu("close")}>
                                    {singleLink.name}
                                  </NavLink>
                                </li>
                              ))}

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
                              <span htmlFor="school" className=" d-block w-100">Social Media</span>
                              <ul className="social_links ">
                                {socialMedia.map((socialIcon, index) => (
                                  <li key={index}>
                                    <Link to={socialIcon.link} target="_blank" onClick={() => toggleMenu("close")}>
                                      <img src={`${CONFIG.IMAGE_URL + socialIcon.imgUrl}`} alt={socialIcon.alt} />
                                    </Link>
                                  </li>
                                ))}

                              </ul>
                            </li>
                            <li>
                              <img src={subscribeBtn} alt="subscribe_btn" role="button" className="subscribe_btn" onClick={() => window.open(channelUrl, "_blank")} />
                            </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="closebtn-area d-none d-md-grid" onClick={() => toggleMenu("close")}>
                <button
    className="closebtn"
    onClick={(e) => {
      e.stopPropagation(); 
      toggleMenu("close");
    }}><img src={CloseBtnimg} alt="mvn close icon"  className="img-fluid close-img"/>  Close</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
