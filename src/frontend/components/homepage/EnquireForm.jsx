import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import { API_URL } from "../../../config/config";
import { useParams, useLocation } from 'react-router-dom';

const EnquireForm = ({ career, projectName }) => {
  const titleRef = useRef();
  const formRef = useRef();

  const [formDetails, setFormDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const { ...pathParams } = useParams(); // Fetching path parameters
  const location = useLocation(); // Accessing current location for query parameters
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    // Create an object to store query parameters
    const params = new URLSearchParams(location.search);
    const queryParamsObject = {};
    
    // Loop through all query parameters
    params.forEach((value, key) => {
      queryParamsObject[key] = value;
    });

    setQueryParams(queryParamsObject);
  }, [location.search]); // Re-run if query params change

  const handleFormChange = useCallback((e) => {
    setFormDetails((prevDetails)=>({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=&qIP=".getUserIP().`

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    let apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=${projectName}&micrositeurl=${window.location.href}`;

    Object.keys(queryParams).forEach((key) => {
      apiUrl += `&${key}=${queryParams[key]}`;
    });

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
    <section className="section enquire_form" aria-label="Enquiry Form Section">
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img
            src={`${API_URL}images/icons/heading-icon-img.webp`}
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
                autoComplete="name" 
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
                autoComplete="off" 
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
                onChange={(e) => {
                  const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
                  if (inputValue.length <= 10) {
                    handleFormChange({ target: { name: "number", value: inputValue } });
                  }
                }}
                autoComplete="tel"
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
                    autoComplete="off" 
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
                    autoComplete="off" 
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
                autoComplete="off" 
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
                    autoComplete="off" 
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
