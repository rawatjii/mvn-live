import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CloseBtnimg from '../assets/images/icons/close.png';
import * as CONFIG from "root/config/config";

import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';

import MenuSideVideo from '../assets/images/hero/tiger.mp4';

import "./Header.css";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);
  const channelUrl = "https://www.youtube.com/@MVNInfrastructures?sub_confirmation=1";

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
            <a href="tel:+917996000196" className="call_btn" >
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
                <div className="video-area d-none d-md-block">
                  <video autoPlay muted  loop>
                    <source src={MenuSideVideo} type="video/mp4" className="img-fluid videoMenu"/>
                  </video>

                </div>

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
                            <h4>Gurugram</h4>
                          <ul>
                   
                            <li className="new_launch">
                              <NavLink to={import.meta.env.VITE_APP_URL + 'aeroone-gurgaon'} onClick={() => toggleMenu("close")}>
                                MVN Aero One
                              </NavLink>
                              <span>New Launch</span>
                            </li>
                            <li className="new_launch">
                              <NavLink to="https://mvnmall.com/" target="_blank" onClick={() => toggleMenu("close")}>
                                MVN Mall
                              </NavLink>
                              <span>New Launch</span>
                            </li>
                          </ul>

                          <h4>Bangalore</h4>
                          <ul>
                            <li>
                              <NavLink to="https://www.mvnaeroone.com/" target="_blank" onClick={() => toggleMenu("close")}>MVN</NavLink>
                            </li>
                          </ul>

                          
                          <h4>Sohna</h4>
                          <ul>
                            <li>
                              <NavLink to="https://www.mvn.in/athens-gurugram/" target="_blank" onClick={() => toggleMenu("close")}>
                                MVN Athens
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="https://www.mvninfrastructure.com/athens-gurugram-phase2/" target="_blank" onClick={() => toggleMenu("close")}>MVN Athens PH-2</NavLink>
                            </li>
                          </ul>

           

                          <h4>Faridabad</h4>
                          <ul>
                            <li>
                              <NavLink to="https://www.mvn.in/athens-faridabad/" target="_blank" onClick={() => toggleMenu("close")}>MVN Athens</NavLink>
                            </li>
                          </ul>
                          </div>

                          <div className="right top">
                            <ul>
                              <li>
                                <NavLink to={import.meta.env.VITE_APP_URL} onClick={() => toggleMenu("close")}>
                                  Home
                                </NavLink>
                              </li>
                              {window.innerWidth > 768 ? (
                                <>
                                  <li>
                                    <NavLink to={import.meta.env.VITE_APP_URL + 'about-us'} onClick={() => toggleMenu("close")}>
                                      About Us
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to={import.meta.env.VITE_APP_URL + 'media-centre'} onClick={() => toggleMenu("close")}>
                                    Media Centre
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to={import.meta.env.VITE_APP_URL + 'blogs'} onClick={() => toggleMenu("close")}>
                                    Blogs
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to={import.meta.env.VITE_APP_URL + 'career'} onClick={() => toggleMenu("close")}>
                                    Career
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to={import.meta.env.VITE_APP_URL + 'contact-us'} onClick={() => toggleMenu("close")}>
                                    Contact Us
                                    </NavLink>
                                  </li>
                                </>
                              ) : null}
                            </ul>
                          </div>

                          <div className="right bottom d-md-none">
                            <ul>
                            <li>
                              <NavLink to={import.meta.env.VITE_APP_URL + 'about-us'} onClick={() => toggleMenu("close")}>
                                About Us
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={import.meta.env.VITE_APP_URL + 'media-center'} onClick={() => toggleMenu("close")}>
                              Media Centre
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={import.meta.env.VITE_APP_URL + 'blogs'} onClick={() => toggleMenu("close")}>
                              Blogs
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={import.meta.env.VITE_APP_URL + 'career'} onClick={() => toggleMenu("close")}>
                              Career
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={import.meta.env.VITE_APP_URL + 'contact-us'} onClick={() => toggleMenu("close")}>
                              Contact Us
                              </NavLink>
                            </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="top-area">
                        
                        <div className="inner-logo d-none d-md-block">
                          <p><span>Office:</span> MVN AERO ONE, C/o Awfis, 7th Floor, Gate No. 3 &4 Ambience Mall, Ambience Island, NH-8, DLF Phase-3, Sector-24, Gurugram</p>
                          <p><span>Talk:</span> +91 79960 00196</p>
                        </div>

                        <ul className="sub_menu">
                            <li>
                              <label htmlFor="school" className=" d-block w-100">Social Media</label>
                              <ul className="social_links ">
                                <li>
                                  <Link to="https://www.facebook.com/officialmvninfra/" target="_blank" onClick={() => toggleMenu("close")}>
                                    <img
                                      src={`${CONFIG.IMAGE_URL + "social/fb.png"}`}
                                      alt="mvn-facebook-icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="https://www.instagram.com/mvn_infrastructure/" target="_blank" onClick={() => toggleMenu("close")}>
                                    <img
                                      src={`${CONFIG.IMAGE_URL + "social/instagram.png"}`}
                                      alt="mvn-instagram-icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="https://www.linkedin.com/company/mvn-infrastructure/" target="_blank" onClick={() => toggleMenu("close")}>
                                    <img
                                      src={`${CONFIG.IMAGE_URL + "social/linkedin.png"}`}
                                      alt="mvn-linkedin-icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="https://www.youtube.com/@MVNInfrastructures" target="_blank" onClick={() => toggleMenu("close")}>
                                    <img
                                      src={`${CONFIG.IMAGE_URL + "social/youtube.png"}`}
                                      alt="mvn-youtube-icon"
                                    />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <img src={subscribeBtn} alt="subscribe_btn" className="subscribe_btn" onClick={() => window.open(channelUrl, "_blank")} style={{cursor:'pointer'}} />
                            </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="closebtn-area d-none d-md-grid" onClick={() => toggleMenu("close")}>
                <a 
    href="#"
    className="closebtn"
    onClick={(e) => {
      e.stopPropagation(); 
      toggleMenu("close");
    }}><img src={CloseBtnimg} alt="mvn close icon"  className="img-fluid close-img"/>  Close</a>
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
