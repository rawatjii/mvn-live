import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import LazyLoad from "react-lazyload";

// import twitterIcon from '../assets/images/icons/social/twitter.png';
import linkedinIcon from '../assets/images/icons/social/linkedin.png';
import fbIcon from '../assets/images/icons/social/fb.png';
import instaIcon from '../assets/images/icons/social/instagram-2.png';
import YoutubeIcon from '../assets/images/icons/social/youtube.png';
import BtnIcon from '../assets/images/icons/send.png';
// import FormBgImg from '../assets/images/icons/form-bg.png';
import FooterMiddleLogo from '../assets/images/logomvn.png';
import FooterBgImg from '../assets/images/footer-bg-img.jpg';
import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';

const Footer = () => {
  const channelUrl = "https://www.youtube.com/@MVNInfrastructures?sub_confirmation=1";

  return (
    <footer>

      {/* <LazyLoad >
        <img src={FooterBgImg} alt="mvn-about-bg" className="img-fluid about_bg" />
      </LazyLoad> */}

      <Container className="footer-bottom-border">
        <Row>
          <Col xs={12} md={6} lg={6}>

            <div className="social_links text-center">
              <ul>
                {/* <li>
                  <a href=" https://x.com/MVN_infra" className="icon">
                    <img src={twitterIcon} alt="mvn-twitter-icon" className="img-fluid " />
                  </a>
                </li> */}
                <li>
                  <a href=" https://www.linkedin.com/company/mvn-infrastructure/" className="icon">
                    <img src={linkedinIcon} alt="mvn-google-plus-icon" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/officialmvninfra/" className="icon">
                    <img src={fbIcon} alt="mvn-fb-icon" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href=" https://www.instagram.com/mvn_infrastructure/" className="icon">
                    <img src={instaIcon} alt="mvn-insta-icon" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@MVNInfrastructures" className="icon">
                    <img src={YoutubeIcon} alt="mvn-insta-icon" className="img-fluid" />
                  </a>
                </li>
              </ul>

              <img src={subscribeBtn} alt="subscribe_btn" className="subscribe_btn" onClick={() => window.open(channelUrl, "_blank")} />

            </div>
          </Col>
          {/* <Col xs={12} md={6} lg={6}>
            <div className="box searchbox-input-box">
              <div className="subscribe">
                <input className="form-control" type="text" placeholder="Your Email" name="" />
                <button>Subscribe Now</button>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>

      <Container>
        <div className="flex-row">
          <div className="custom-col">
            <div className="box office-details-box">
              <h4 className="footer-second-heading">Contact Details</h4>
              <p className="address-details"><span>Meet:</span> MVN AeroOne Dwarka Expressway, 22 Km Milestone, Sector-37D, Gurugram, Pin-122103 <br/> CIN:ACA-4678 | PAN:ABWFM8415E</p>
              <p className="phone-details"><span>Talk:</span> +91 90710 08464</p>
              <p className="mail-details"><span>Write:</span> info@mvn.in</p>
            </div>
          </div>
          <div className="custom-col flex-middel-col">
            <img src={FooterMiddleLogo} alt="mvn footer logo" className="footerM" />
          </div>
          <div className="custom-col">
            <div className="box footer-links-box">
              <div className="inner-box">
                <div className="footer-menu">
                <h4 className="footer-second-heading">Important Links</h4>
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
                    {/* <li>
                      
                      <a href="#">Real Estate</a>
                    </li> */}
                    {/* <li><a href="#">Educations</a></li> */}
                    {/* <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}contact-us`}>
                      Education
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}media-center`}>Media Centre</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}blogs`}>Blogs</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}career`}>Career</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}csr`}>CSR</NavLink>
                    </li> */}
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}privacy-policy`}>Privacy Policy</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}disclaimer`}>Disclaimer</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}contact-us`}>
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="footer-menu">
                  <h4 className="footer-second-heading">Projects</h4>
                  <ul>
                    <li>
                      <label htmlFor="">Gurgaon</label>
                      <NavLink to='https://mvnmall.com/' target="_blank">MVN Mall</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}aeroone-gurgaon`}>MVN Aero One</NavLink>
                    </li>
                    <li>
                      <label htmlFor="">Bangalore</label>
                      <NavLink to="https://www.mvnaeroone.com/" target="_blank">MVN</NavLink>
                    </li>
                    <li>
                      <label htmlFor="">Sohna</label>
                      <NavLink to="https://www.mvn.in/athens-gurugram/" target="_blank">MVN Athens</NavLink>
                    </li>
                    <li>
                      <NavLink to="https://www.mvninfrastructure.com/athens-gurugram-phase2/" target="_blank">MVN Athens PH-2</NavLink>
                    </li>
                    <li>
                      <label htmlFor="">Faridabad</label>
                      <NavLink to="https://www.mvn.in/athens-faridabad/" target="_blank">MVN Athens</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
          </div>
        </div>
        <Col  xs={12} md={12} lg={12} className="text-center">
        <div className="border-top-footer bottom">
          <p className="main-pera"><i className="fa fa-copyright" aria-hidden="true"></i> 2024 - MVN Group. All Right Reserved.</p>
          <p><small><a href="http://gtftechnologies.com/" target="blank"> Curated by: GTF Technologies</a></small></p>
        </div>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
