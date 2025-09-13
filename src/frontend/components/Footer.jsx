import { NavLink } from "react-router-dom";
import * as CONFIG from "root/config/config";


const Footer = () => {
  const channelUrl = CONFIG.YOUTUBE_URL;
  return (
    <footer>
      <div className="container">
        <div className="footer-mid">
          <div className="inner-mid">
            <div className="center">
              <div className="f-logo reveal">
                <img
                  src="https://img.websitedesigningcompany.co.in/public/assets/logo_white_new.webp"
                  width="100%"
                  alt="mvn logo image"
                />
              </div>
            </div>
            <div className="right">
              <div className="links">
                <div className="box">
                  <h4>Projects</h4>
                  <ul>
                    <li>
                      <span>Gurugram</span>
                      <NavLink to="/aeroone-gurgaon">
                        MVN Aero One Residence
                      </NavLink>
                      <NavLink to="/mvn-mall">
                        MVN Mall
                      </NavLink>
                    </li>
                    <li>
                      <span>Bangalore</span>
                      <NavLink
                        to="https://www.mvnaeroone.com/"
                        target="_blank"
                      >
                        MVN
                      </NavLink>
                    </li>
                    <li>
                      <span>Sohna</span>
                      <NavLink to="/mvn-athens-gurgaon-phase-1">
                        MVN Athens
                      </NavLink>
                      <NavLink
                        to="/mvn-athens-gurgaon-phase-2"
                        activeClassName="active"
                        aria-current="page"
                      >
                        MVN Athens PH-2
                      </NavLink>
                      <NavLink to="/mvn-athens-gurgaon-phase-3">
                        MVN Athens PH-3
                      </NavLink>
                    </li>
                    <li>
                      <span>Faridabad</span>
                      <NavLink to="/mvn-athens-faridabad">
                        MVN Athens
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <h4>Important Links</h4>
                  <ul>
                    <li>
                      <NavLink to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/media-centre">
                        Media Centre
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blogs">
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/career">
                        Career
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="left">
              <h4>Contact Details</h4>
              <p className="address-details">
                <span>Meet:</span>GS 301A–GS 301F, Third Floor, DLF Grand Mall,
                M.G. Road, Gurgaon, Haryana – 122002 | CIN:ACA-4678 |
                PAN:ABWFM8415E
              </p>
              <p className="phone-details">
                <span>Talk:</span> (+91) 799 6000 196
              </p>
              <p className="mail-details">
                <span>Write:</span> info@mvngroup.in
              </p>
              <div className="footer-top">
                <div className="social-media">
                  <div className="left-b">
                    <div className="icons">
                      <ul>
                        <li>
                          <NavLink
                            className="icon fb_icon"
                            to="https://www.facebook.com/officialmvninfra/"
                            target="_blank"
                          >
                            <img
                              src="https://img.websitedesigningcompany.co.in/public/assets/icons/social/fb.png"
                              alt="mvn-facebook-icon"
                              className="img-fluid"
                            />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="icon insta_icon"
                            to="https://www.instagram.com/mvn_infrastructure/"
                            target="_blank"
                          >
                            <img
                              src="https://img.websitedesigningcompany.co.in/public/assets/icons/social/instagram.png"
                              alt="mvn-instagram-icon"
                              className="img-fluid"
                            />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="icon linkedin_icon"
                            to="https://www.linkedin.com/company/mvn-infrastructure/"
                            target="_blank"
                          >
                            <img
                              src="https://img.websitedesigningcompany.co.in/public/assets/icons/social/linkedin.png"
                              alt="mvn-linkedin-icon"
                              className="img-fluid"
                            />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="icon yt_icon"
                            to="https://www.youtube.com/@MVNInfrastructures"
                            target="_blank"
                          >
                            <img
                              src="https://img.websitedesigningcompany.co.in/public/assets/icons/social/youtube.png"
                              alt="mvn-youtube-icon"
                              className="img-fluid"
                            />
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-b">
                    <div className="box">
                      <span>
                        <img
                          src="https://img.websitedesigningcompany.co.in/public/images/icons/subscribe_btn.webp"
                          alt="subscribe button"
                          role="button"
                          className="subscribe_btn"
                          onClick={() => window.open(channelUrl, "_blank")}
                        />
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
                  <NavLink to="/privacy-policy">
                    Privacy Policy |
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/disclaimer">
                    {" "}
                    Disclaimer |
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitemap
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>
                  <NavLink to="http://gtftechnologies.com/" target="_blank">
                    Curated by: GTF Technologies
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;