import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as CONFIG from "root/config/config";
import React, { useEffect, useRef, useState } from "react";

import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';
import CloseBtnimg from '../assets/images/icons/close.png';

import "./Header.css";


const otherPages = [
  {
    name:'About Us',
    link:'about-us',
  },
  {
    name:'Media Centre',
    link:'media-centre',
  },
  {
    name:'Blogs',
    link:'blogs',
  },
  {
    name:'Career',
    link:'career',
  },
];

const otherProjects = [
  {
    location:'Gurugram',
    projects:[
      {
        name:'MVN Mall',
        link:'https://mvnmall.com/',
        status:'new Launch',
      }
    ]
  },
  {
    location:'Bangalore',
    projects:[
      {
        name:'MVN',
        link:'https://www.mvnaeroone.com/',
        status:'',
      }
    ]
  },
  {
    location:'Faridabad',
    projects:[
      {
        name:'MVN Athens',
        link:'https://www.mvn.in/athens-faridabad/',
        status:'',
      }
    ]
  },
  {
    location:'Sohna',
    projects:[
      {
        name:'MVN Athens',
        link:'https://www.mvn.in/athens-gurugram/',
        status:'',
      },
      {
        name:'MVN Athens PH-2',
        link:'https://www.mvninfrastructure.com/athens-gurugram-phase2/',
        status:'',
      },
    ]
  },
];

const otherDetails = {
  contact: '+91 79960 00196',
  email: 'info@mvn.in',
  address: 'MVN AERO ONE, C/o Awfis, 7th Floor, Gate No. 3 &4 Ambience Mall, Ambience Island, NH-8, DLF Phase-3, Sector-24, Gurugram',
}

const socialMedia = [
  {
    imgUrl:'social/fb.png',
    alt:'mvn-facebook-icon',
    link:'https://www.facebook.com/officialmvninfra/',
  },
  {
    imgUrl:'social/instagram.png',
    alt:'mvn-instagram-icon',
    link:'https://www.instagram.com/mvn_infrastructure/',
  },
  {
    imgUrl:'social/linkedin.png',
    alt:'mvn-linkedin-icon',
    link:'https://www.linkedin.com/company/mvn-infrastructure/',
  },
  {
    imgUrl:'social/youtube.png',
    alt:'mvn-youtube-icon',
    link:'https://www.youtube.com/@MVNInfrastructures',
  },
];

const MicroHeader = ({ scrollToSection, sectionsMenus, projectName }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);

  const channelUrl = "https://www.youtube.com/@MVNInfrastructures?sub_confirmation=1";

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [otherProjectsOpen, setOtherProjectsOpen] = useState(false);

  const menusRef = useRef();
  const headerRef = useRef();

  const { pathname } = useLocation();

  let navbarScroll = localStorage.getItem('navbar_scroll_height');

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
  }, [navbarScroll]);

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

  return (
    <>
      <Navbar
        ref={headerRef}
        expand="false"
        className={`${scrolled ? "fixed" : ""} ${isMicro ? "micro_nav" : null}`}
        role="navigation"
      >
        <Container>
          <Navbar.Brand  className="logo">
            <Link onClick={() => toggleMenu("close")}>
              <img
                src={CONFIG.IMAGE_URL + "logo_white.webp"}
                alt="mvn logo"
                className="img-fluid d-none d-md-block"
                fetchpriority="high"
              />
              <img
                src={CONFIG.IMAGE_URL + "logo_white.webp"}
                alt="mvn logo"
                className="img-fluid d-md-none"
                fetchpriority="high"
              />
            </Link>
          </Navbar.Brand>

          <div className="right">
            <a href={`tel:${otherDetails.contact}`} className="call_btn" >
              <img src={CONFIG.IMAGE_URL + 'icons/call.png'} alt="mvn call icon" />
            </a>
            <Navbar.Toggle
            role="button"
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
                            <h4>{projectName}</h4>
                            <ul>
                              {sectionsMenus && sectionsMenus.map((section, index) =>(
                                <li key={index}>
                                  <NavLink
                                    className="new-launch"
                                    onClick={() => {scrollToSection(section.link);toggleMenu("close");}}
                                  >
                                    {section.page}
                                  </NavLink>
                                </li>
                              ))}

                              <li>
                                <NavLink to={import.meta.env.VITE_APP_URL + 'contact-us'} onClick={() => toggleMenu("close")}>
                                Contact Us
                                </NavLink>
                              </li>

                            </ul>
                          </div>

                          <div className="left">

                            {otherProjects && otherProjects.map((singleProject, index) => (
                              <React.Fragment key={index}>
                                <h4 className={index === 0 ? 'pt-0' : null}>{singleProject.location}</h4>
                                <ul>
                                  {singleProject.projects && singleProject.projects.map((project, index)=>(
                                    <li className={project.status ? 'new_launch' : null} key={project.name+index}>
                                      <NavLink to={project.link} target="_blank" onClick={() => toggleMenu("close")}>
                                        {project.name}
                                      </NavLink>
                                      {project.status && <span>{project.status}</span>}
                                    </li>
                                  ))}
                                  
                                </ul>
                              </React.Fragment>
                            ))}

                          </div>

                          <div className={`right ${window.innerWidth > 768 ? 'top' : 'bottom'}`}>
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
                              <span className=" d-block w-100">Social Media</span>
                              <ul className="social_links ">
                                {socialMedia && socialMedia.map((socialIcon, index) => (
                                  <li key={index}>
                                    <Link to={socialIcon.link} target="_blank" onClick={() => toggleMenu("close")}>
                                      <img
                                        src={`${CONFIG.IMAGE_URL + socialIcon.imgUrl}`}
                                        alt={socialIcon.alt}
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li>
                            <img src={subscribeBtn} alt="subscribe btn" role="button" tabIndex={0}  className="subscribe_btn" onClick={() => window.open(channelUrl, "_blank")} style={{cursor:'pointer'}} />
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
                    }}>
                      <img src={CloseBtnimg} alt="mvn close icon"  className="img-fluid close-img"/>  Close
                  </a>
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
