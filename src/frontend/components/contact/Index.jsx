import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index";
import * as CONFIG from '../../../config/config'

const supportIcon = `${CONFIG.API_URL}images/icons/contact/support.png`;

const ContactPage = ()=>{
    return(
        <section className="section contact-us-section " aria-label="Contact Us Section">
            <Container>
                <SecTitle className="text-center color style1 mb_30 page-header-main-heading">
                    <img src={supportIcon} alt="mvn support icon" className="img-fluid supportIcon" />
                    <h4 className="title title_style1 text-center">Call or Visit us at One of our locations</h4>
                </SecTitle>

                <p className="detail_title">Write <span>T</span>o us</p>
                <ul className="contact_details">
                    <li>
                        <span className="icon">
                            <img src={`${CONFIG.API_URL}assets/icons/mail.png`} alt="mvn envelope icon" className="img-fluid" />
                        </span>
                        <span className="txt">
                        <a href="mailto:info@mvngroup.in" aria-label="Email us at info@mvngroup.in">
                                info@mvngroup.in
                        </a>
                        </span>
                    </li>
                    <li>
                        <span className="icon">
                            <img src={`${CONFIG.API_URL}assets/icons/call.png`} alt="mvn envelope icon" className="img-fluid" />
                        </span>
                        <span  className="txt">
                        <a href="tel:+917996000196" aria-label="Call us at (+91) 799 6000 196">
                                 (+91) 799 6000 196
                        </a>

                        </span>
                    </li>
                    <li>
                        <span className="icon">
                            <img src={`${CONFIG.API_URL}assets/icons/location.png`} alt="mvn envelope icon" className="img-fluid" />
                        </span>
                        <span className="txt text-start">GS 301A–GS 301F, Third Floor, DLF Grand Mall, M.G. Road, Gurgaon, Haryana – 122002. | CIN:ACA-4678 | PAN:ABWFM8415E</span>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default ContactPage