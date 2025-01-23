import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as CONFIG from "root/config/config";
import { useEffect, useRef, useState } from "react";

import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';
import CloseBtnimg from '../assets/images/icons/close.png';

import "./Header.css";

import { gsap } from "gsap";

const MicroHeader = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const channelUrl = "https://www.youtube.com/@MVNInfrastructures?sub_confirmation=1";

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [otherProjectsOpen, setOtherProjectsOpen] = useState(false);

  const menusRef = useRef();
  const headerRef = useRef();
  const logoRef = useRef();
  const toggleRef = useRef();
  const callBtnRef = useRef();

  const { pathname } = useLocation();

  let navbarScroll = localStorage.getItem('navbar_scroll_height');

  useEffect(()=>{
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile); // Update on resize

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
    
  }, [])

  useEffect(() => {
    if (pathname.includes("aeroone-gurgaon") || pathname.includes("mvn-mall")) {
      setIsMicro(true);
    }

    const handleScroll = () => {
      if(navbarScroll){
        if (window.scrollY > navbarScroll){
          setScrolled(true)
        }else{
          setScrolled(false);
        }
      }
      
      
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, navbarScroll]);

  useEffect(() => {
    // logo animation

    gsap.from(logoRef.current, {
      y: 30, // Move 50px from the bottom
      opacity: 0, // Start with 0 opacity (invisible)
      duration: 1, // Animation duration in seconds
      // ease: "power2" // Easing function for a smooth effect
    });

    // menu toggle animation
    gsap.from(toggleRef.current, {
      y: 15, // Move 50px from the bottom
      opacity: 0, // Start with 0 opacity (invisible)
      duration: 0.6, // Animation duration in seconds
      delay: 0.4,
      // ease: "power2" // Easing function for a smooth effect
    });
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
          <Navbar.Brand ref={logoRef} className="logo">
            <Link onClick={() => toggleMenu("close")}>
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
            <a href="tel:+917996000196" className="call_btn" ref={callBtnRef}>
              <img src={CONFIG.IMAGE_URL + 'icons/call.png'} alt="mvn call icon" />
            </a>
            <Navbar.Toggle
              ref={toggleRef}
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
                  <img src={CONFIG.IMAGE_URL + 'renders/elevation/2.webp'} alt="mvn elevation image" />
                </div>

                <div className="menu-area">
                  <div>
                    <div className="top_head">
                    <Link
                      onClick={() => toggleMenu("close")}
                    >
                      <img src={CONFIG.IMAGE_URL + "logo_white.webp"} className="logo" alt="mvn logo"/>
                    </Link>
                    

                    <span className="close d-md-none"onClick={() => toggleMenu("close")}>&times;</span>
                    </div>
                    <div className="inner-menu">
                      

                      <div className="bottom-area">
                        <div className="inner-bottom-area">
                          <div className="microsite">
                        

                          <ul>
                          <li>
                                <NavLink to={import.meta.env.VITE_APP_URL} onClick={() => toggleMenu("close")}>
                                  Home
                                </NavLink>
                              </li>
                              </ul>
                            <h4>MVN AeroOne, Gurugram</h4>
                            <ul>
                              <li>
                                <a
                                  
                                  className="new-launch"
                                  onClick={() => {scrollToSection('microOverview');toggleMenu("close");}}
                                >
                                  Overview
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("Walkthrough");toggleMenu("close");}}
                                >
                                  Walkthrough
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("downloadBrochure");toggleMenu("close");}}
                                >
                                  MVN ID Brochure
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("LIVINGROOM");toggleMenu("close");}}
                                >
                                The Living Room
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroLandscape");toggleMenu("close");}}
                                >
                                  Landscape
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroElevation");toggleMenu("close");}}
                                >
                                  Elevation
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroApartment");toggleMenu("close");}}
                                >
                                  Apartment
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("constructionTechnology");toggleMenu("close");}}
                                >
                                  Construction Technology
                                </a>
                              </li>


                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroAmenities");toggleMenu("close");}}
                                >
                                  Amenities
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroTypology");toggleMenu("close");}}
                                >
                                  Typology
                               </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroFloorPlan");toggleMenu("close");}}
                                >
                                  Floor Plans
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroLocationMap");toggleMenu("close");}}
                                >
                                  Location Map
                                </a>
                              </li>

                              <li>
                                <a
                                 className="new-launch"
                                 onClick={() => {scrollToSection("MVNMALL");toggleMenu("close");}}
                               >
                                MVN Mall
                               </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("NoPolutionZone");toggleMenu("close");}}
                                >
                                  Connections MVN Mall
                                </a>
                              </li>

                              {/* <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("Enuqiry");toggleMenu("close");}}
                                >
                                  Contact
                                </a>
                              </li> */}

                              <li>
                                <NavLink to={import.meta.env.VITE_APP_URL + 'contact-us'} onClick={() => toggleMenu("close")}>
                                Contact Us
                                </NavLink>
                              </li>

                            </ul>
                            {/* <ul>
                            <h4>Gallery</h4>
                            <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroLandscape");toggleMenu("close");}}
                                >
                                  Landscape
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroElevation");toggleMenu("close");}}
                                >
                                  Elevation
                                </a>
                              </li>

                              <li>
                                <a
                                  className="new-launch"
                                  onClick={() => {scrollToSection("MicroApartment");toggleMenu("close");}}
                                >
                                  Apartment
                                </a>
                              </li>
                            </ul> */}
                          </div>
                          <div className="left">
                

                          <h4 className="pt-0">Gurugram</h4>
                          <ul>
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

                          <h4>Faridabad</h4>
                          <ul>
                            <li>
                              <NavLink to="https://www.mvn.in/athens-faridabad/" target="_blank" onClick={() => toggleMenu("close")}>MVN Athens</NavLink>
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

                          </div>

                          <div className="right top">
                            <ul>
                             
                              {window.innerWidth > 768 ? (
                                <>
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
                                  {/* <li>
                                    <NavLink to={import.meta.env.VITE_APP_URL + 'contact-us'} onClick={() => toggleMenu("close")}>
                                    Contact Us
                                    </NavLink>
                                  </li> */}
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
                            {/* <li>
                              <NavLink to={import.meta.env.VITE_APP_URL + 'contact-us'} onClick={() => toggleMenu("close")}>
                              Contact Us
                              </NavLink>
                            </li> */}
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
                                      alt="mvn-fb-icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="https://www.instagram.com/mvn_infrastructure/" target="_blank" onClick={() => toggleMenu("close")}>
                                    <img
                                      src={`${CONFIG.IMAGE_URL + "social/instagram.png"}`}
                                      alt="mvn-insta-icon"
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
                  <a href="javascript:void(0)" className="closebtn" onclick="closeNav()"> <img src={CloseBtnimg} alt="mvn close icon"  className="img-fluid close-img"/>  Close</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default MicroHeader;
