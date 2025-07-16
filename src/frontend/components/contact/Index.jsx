import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import * as CONFIG from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const ContactPage = ({ page }) => {
  const { data: contactData, loading } = useFetchData(
    `page/page-section/${page}`
  );

  const supportIcon = `${CONFIG.API_URL}images/icons/contact/support.png`;

  return (
    <section
      className="section contact-us-section "
      aria-label="Contact Us Section"
    >
      <Container>
        <SecTitle className="text-center color style1 mb_30 page-header-main-heading">
          <img
            src={supportIcon}
            alt="mvn support icon"
            className="img-fluid supportIcon"
          />
          <h4 className="title title_style1 text-center">
            {contactData?.[1]?.heading}
          </h4>
        </SecTitle>

        <p className="detail_title">
          Write <span>T</span>o us
        </p>
        <ul className="contact_details">
          <li>
            <span className="icon">
              <img
                src={`${CONFIG.API_URL}assets/icons/mail.png`}
                alt="mvn envelope icon"
                className="img-fluid"
              />
            </span>
            <span className="txt">
              <a
                href={`mailto:${contactData?.[2]?.heading.trim()}`}
                aria-label={`Email us at ${contactData?.[2]?.heading.trim()}`}
              >
                {contactData?.[2]?.heading.trim()}
              </a>
            </span>
          </li>
          <li>
            <span className="icon">
              <img
                src={`${CONFIG.API_URL}assets/icons/call.png`}
                alt="mvn envelope icon"
                className="img-fluid"
              />
            </span>
            <span className="txt">
              <a
                href={`tel:${contactData?.[2]?.sub_heading}`}
                aria-label={`Call us at ${contactData?.[2]?.sub_heading}`}
              >
                {contactData?.[2]?.sub_heading}
              </a>
            </span>
          </li>
          <li>
            <span className="icon">
              <img
                src={`${CONFIG.API_URL}assets/icons/location.png`}
                alt="mvn envelope icon"
                className="img-fluid"
              />
            </span>
            <span className="txt text-start">
              {contactData?.[2]?.short_description}
            </span>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ContactPage;
