import React, { useCallback, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import headingIconImg from "../../assets/images/icons/heading-icon-img.webp";

const EnquireForm = ({ career, projectName }) => {
  const titleRef = useRef();
  const formRef = useRef();

  const [formDetails, setFormDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormChange = useCallback((e) => {
    setFormDetails((prevDetails)=>({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=&qIP=".getUserIP().`

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=${projectName}`;
    if (
      !formDetails.name ||
      !formDetails.email ||
      !formDetails.number ||
      !formDetails.message
    ) {
      alert("Please fill all details!");
    } else {
      setLoading(true);
      fetch(apiUrl, {
        method: "GET", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        // body: JSON.stringify(formDetails), // Convert the data to JSON string
      })
        .then((data) => {
          // console.log("Success:", data); // Handle the response
          setFormDetails({});
          setLoading(false);
          alert("Enquiry Details Sent Successfully!");

          const newTab = window.open("/thanks", "_blank");

          // Close the current tab
          if (newTab) {
            // If the new tab opened successfully, close the current tab
            window.close();
          }
        })
        .catch((error) => {
          console.error("Error:", error); // Handle any errors
          setLoading(false);
        });
    }
  }, [formDetails, projectName]);

  return (
    <section className="section enquire_form">
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img
            src={headingIconImg}
            alt="mvn heading icon"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 ref={titleRef} className="title title_style1 text-center">
            Get In Touch With Us
          </h4>
        </div>

        {/* {loading  ? <Loader  /> : '' } */}

        <Form ref={formRef} onSubmit={loading ? () => null : handleSubmit}>
          <Row>
            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Label className="visually-hidden" htmlFor="name">
                Your Name:
              </Form.Label>
              <Form.Control
                id="name"
                type="text"
                name="name"
                placeholder="Your Name:"
                value={formDetails.name ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Label className="visually-hidden" htmlFor="email">
                Your E-Mail:
              </Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                placeholder="Your E-Mail:"
                value={formDetails.email ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Label className="visually-hidden" htmlFor="number">
                Your Phone:
              </Form.Label>
              <Form.Control
                id="number"
                type="number"
                name="number"
                placeholder="Your Phone:"
                value={formDetails.number ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>

            {career && career === true && (
              <>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Label className="visually-hidden" htmlFor="designation">
                    Designation:
                  </Form.Label>
                  <Form.Control
                    id="designation"
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Label className="visually-hidden" htmlFor="experience">
                    Experience:
                  </Form.Label>
                  <Form.Control
                    id="experience"
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Label className="visually-hidden" htmlFor="message">
                Your Message:
              </Form.Label>
              <Form.Control
                id="message"
                type="text"
                name="message"
                placeholder="Your Message:"
                value={formDetails.message ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>

            {career && career === true && (
              <>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Label className="visually-hidden" htmlFor="resume">
                    Your Resume:
                  </Form.Label>
                  <Form.Control
                    id="resume"
                    type="file"
                    name="resume"
                    placeholder="Your Resume"
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </>
            )}
          </Row>

          <Button
            type="submit"
            className="btn_style3"
            disabled={loading ? true : false}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default EnquireForm;
