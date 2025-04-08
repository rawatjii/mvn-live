import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import LazyLoad from "react-lazyload";
import * as CONFIG from '../../config/config';

import { otherProjects, otherPages, otherDetails,socialMedia } from "../../data/headerdata";

// import twitterIcon from '../assets/images/icons/social/twitter.png';
// import linkedinIcon from '../assets/images/icons/social/linkedin.png';
// import fbIcon from '../assets/images/icons/social/fb.png';
// import instaIcon from '../assets/images/icons/social/instagram.png';
// import YoutubeIcon from '../assets/images/icons/social/youtube.png';

const subscribeBtn = `${CONFIG.API_URL}images/icons/subscribe_btn.webp`;

const Footer = () => {
  const [isBangaloreProject, setIsBangaloreProject] = useState(false);

  const {pathname} = useLocation();

  const channelUrl = CONFIG.YOUTUBE_URL;
  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(()=>{
    if(pathname.includes("aeroone-bangalore")){
      setIsBangaloreProject(true);
    }
  }, [pathname])

  

  return (
    <footer>
      <Container >
        <div className="footer-mid">
          <div className="inner-mid">
            <div className="center">
              <div className="f-logo reveal">
                <img src={CONFIG.API_URL + 'assets/logo_white.webp'} width="100%" alt="mvn logo image" />
              </div>
            </div>

            <div className="right">
              <div className="links">
                <div className="box">
                  <h4>Projects</h4>
                  <ul>
                    {otherProjects && otherProjects.map((singleProject, index)=>(
                      <li key={index}>
                        <span >{singleProject.location}</span>
                        {
                            singleProject.projects && singleProject.projects.map((singleNav, index1) => {
                              const target = singleNav.target_blank ? "_blank" : undefined;

                              return (
                                <NavLink key={index1} to={singleNav.link} target={target}>
                                  {singleNav.name}
                                </NavLink>
                              );
                            })
                          }
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="box">
                  <h4>Important Links</h4>
                  <ul>
                    <li>
                      <NavLink to={baseUrl}>
                        Home
                      </NavLink>
                    </li>
                    {otherPages && otherPages.map((singlePage, pageIndex)=>(
                      <li key={pageIndex}>
                        <NavLink to={`${baseUrl}${singlePage.link}`}>
                          {singlePage.name}
                        </NavLink>
                      </li>
                    ))}
                  
                  </ul>
                </div>
              </div>
            </div>

            <div className="left">
              <h4>Contact Details</h4>
              {isBangaloreProject ? (
                <>
                  <p className="address-details"><span>Meet:</span>MVN Group, 2nd Floor, Above McDonald's, Jansons Mall, Downtown Park II, Menakunte, Sadahalli Gate, Bangalore – 562157</p>
                  <p className="address-details"><span>MVN Aero One Project:</span>Brigade Orchards Spinal Rd, Bychapura, Karnataka 562110</p>
                </>
              ) : (
                <>
                  <p className="address-details"><span>Meet:</span>{otherDetails.address}<br /> CIN:ACA-4678 | PAN:ABWFM8415E</p>
                </>
              )}

              <p className="phone-details"><span>Talk:</span> {!isBangaloreProject ? otherDetails.contact : '+91 9164001177'}</p>
              <p className="mail-details"><span>Write:</span> {otherDetails.email}</p>

              <div className="footer-top">
                <div className="social-media">
                  <div className="left-b">
                    <div className="icons">
                      <ul>
                        {socialMedia && socialMedia.map((singleLink, socialIndex)=>(
                          <li key={socialIndex}>
                            <Link to={singleLink.link} target="_blank" className={`icon ${singleLink.className}`}>
                              <img src={singleLink.imgUrl} alt={singleLink.alt} className={`img-fluid`} /> 
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="right-b">
                    <div className="box">
                      <span>
                        <img src={subscribeBtn} alt="subscribe button" role="button" className="subscribe_btn" onClick={() => window.open(channelUrl, "_blank")} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="box-b">
            <div className="left">
              <ul>
                <li>
                  <NavLink to={`${import.meta.env.VITE_APP_URL}privacy-policy`}>Privacy Policy |</NavLink>
                </li>
                  {" "}
                <li>
                  <NavLink to={`${import.meta.env.VITE_APP_URL}disclaimer`}> Disclaimer |</NavLink>
                </li>
                {" "}
                <li>
                  <a href={`${import.meta.env.VITE_APP_URL}sitemap.xml`} target="_blank" rel="noopener noreferrer">
                    Sitemap
                  </a>
                </li>

              </ul>
            </div>
            <div className="right">
              <ul>
                <li>
                  {/* <p className="main-pera">© Copyright 2024 - MVN Group. All Right Reserved. | */}
                  <Link to="http://gtftechnologies.com/" target="_blank">Curated by: GTF Technologies</Link>
                  {/* </p> */}
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>

      </Container>

    </footer>
  );
};

export default Footer;
