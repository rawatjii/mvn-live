import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import LazyLoad from "react-lazyload";
import * as CONFIG from '../../config/config';

// import twitterIcon from '../assets/images/icons/social/twitter.png';
import linkedinIcon from '../assets/images/icons/social/linkedin.png';
import fbIcon from '../assets/images/icons/social/fb.png';
import instaIcon from '../assets/images/icons/social/instagram.png';
import YoutubeIcon from '../assets/images/icons/social/youtube.png';
import BtnIcon from '../assets/images/icons/send.png';
// import FormBgImg from '../assets/images/icons/form-bg.png';
import FooterMiddleLogo from '../assets/images/logomvn.png';
import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';

const Footer = () => {
  const channelUrl = "https://www.youtube.com/@MVNInfrastructures?sub_confirmation=1";

  return (
    <footer>

      {/* <LazyLoad >
        <img src={FooterBgImg} alt="mvn-about-bg" className="img-fluid about_bg" />
      </LazyLoad> */}

      <Container >
        <div class="footer-mid">
          <div class="inner-mid">
            <div class="center">
              <div class="f-logo reveal">
                <img src={CONFIG.IMAGE_URL + 'logo_white.webp'} width="100%" alt="mvn logo" />
              </div>
            </div>

            <div class="right">
              <div class="links">
                <div class="box">
                  <h4>Projects</h4>
                  <ul>
                    <li>
                      <label for="">Gurgaon</label>
                      <NavLink to='https://mvnmall.com/' target="_blank">MVN Mall</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}aeroone-gurgaon`}>MVN Aero One</NavLink>
                    </li>
                    <li>
                      <label for="">Bangalore</label>
                      <NavLink to="https://www.mvnaeroone.com/" target="_blank">MVN</NavLink>
                    </li>
                    <li>
                      <label for="">Sohna</label>
                      <NavLink to="https://www.mvn.in/athens-gurugram/" target="_blank">MVN Athens</NavLink>
                    </li>
                    <li>
                      <NavLink to="https://www.mvninfrastructure.com/athens-gurugram-phase2/" target="_blank">MVN Athens PH-2</NavLink>
                    </li>
                    <li>
                      <label for="">Faridabad</label>
                      <NavLink to="https://www.mvn.in/athens-faridabad/" target="_blank">MVN Athens</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="box">
                  <h4>Important Links</h4>
                  <ul>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}`}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}about-us`}>
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}media-centre`}>Media Centre</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}blogs`}>Blogs</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}career`}>Career</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}contact-us`}>
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="left">
              <h4>Contact Details</h4>

              <p class="address-details"><span>Meet:</span> MVN AERO ONE, C/o Awfis, 7th Floor, Gate No. 3 &4 Ambience Mall, Ambience Island, NH-8, DLF Phase-3, Sector-24, Gurugram
              <br /> CIN:ACA-4678 | PAN:ABWFM8415E</p>
              <p class="phone-details"><span>Talk:</span> +91 799 6000 196</p>
              <p class="mail-details"><span>Write:</span> info@mvn.in</p>

              <div class="footer-top">
                <div class="social-media">
                  <div class="left-b">
                    <div class="icons">
                      <ul>
                        <li>
                          <Link to="https://www.linkedin.com/company/mvn-infrastructure/" target="_blank" className="icon">
                            <img src={linkedinIcon} alt="mvn-linkedin-icon" className="img-fluid" />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.facebook.com/officialmvninfra/" target="_blank" className="icon">
                            <img src={fbIcon} alt="mvn-fb-icon" className="img-fluid" />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.instagram.com/mvn_infrastructure/" target="_blank" className="icon">
                            <img src={instaIcon} alt="mvn-insta-icon" className="img-fluid" />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.youtube.com/@MVNInfrastructures" target="_blank" className="icon">
                            <img src={YoutubeIcon} alt="mvn-insta-icon" className="img-fluid" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="right-b">
                    <div class="box">
                      <span>
                        <img src={subscribeBtn} alt="subscribe_btn" className="subscribe_btn" onClick={() => window.open(channelUrl, "_blank")} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="box-b">
            <div class="left">
              <ul>
                <li>
                  <NavLink to={`${import.meta.env.VITE_APP_URL}privacy-policy`}>Privacy Policy</NavLink>
                </li>
                {` | `}
                <li>
                  <NavLink to={`${import.meta.env.VITE_APP_URL}disclaimer`}> Disclaimer</NavLink>
                </li>
            </ul>
            </div>
            <div class="right">
              <ul>
                <li>
                  <p class="main-pera">© Copyright 2024 - MVN Group. All Right Reserved. |
                  <Link to="http://gtftechnologies.com/" target="_blank">Curated by: GTF Technologies</Link></p>
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
