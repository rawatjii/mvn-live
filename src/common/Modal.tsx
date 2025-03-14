import React, { RefObject, useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "./Button/Button";
import Modal from "react-bootstrap/Modal";
import SecTitle from "./SecTitle/Index";
import Formlogo from "../../public/assets/images/logo_white.webp";
import Loader from "./Loader/loader";

interface CustomModalProps {
  show:boolean;
  hide:()=>void;
  projectName:string;
  isOffer:boolean;
}

interface FormDetails{
  name?: string;
  email?: string;
  number?: string;
  message?: string;
}

const CustomModal:React.FC<CustomModalProps> = React.memo(({ show, hide, projectName, isOffer }) => {
  const [formDetails, setFormDetails] = useState<FormDetails>({});
  const [loading, setLoading] = useState<boolean>(false);
  const modalRef:RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const handleFormChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formDetails.name ||
      !formDetails.email ||
      !formDetails.number ||
      !formDetails.message
    ) {
      alert("Please fill all details!");
    } else {
      const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=${projectName}`;
      setLoading(true);
      fetch(apiUrl, {
        method: "GET", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        // body: JSON.stringify(formDetails), // Convert the data to JSON string
      })
        .then((data) => {
          console.log("Success:", data); // Handle the response
          alert("Enquiry Details Sent Successfully!");
          const newTab = window.open("/thanks", "_blank");

          // Close the current tab
          if (newTab) {
            // If the new tab opened successfully, close the current tab
            window.close();
          }
          setFormDetails({});
          setLoading(false);
          hide();
        })
        .catch((error) => {
          console.error("Error:", error); // Handle any errors
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const close = (e:MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        console.log("closed");
        hide();
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  if (isOffer) {
    return (
      <Modal
        show={show}
        className="enquire_form custom_modal offer_modal "
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div ref={modalRef}>
          <Modal.Body>
            <div className="left">
              {/* <img
                src={CONFIG.IMAGE_URL + "offer/1.webp"}
                className="img-fluid offer_img"
                alt="offer image"
              /> */}
            </div>

            <div className="right">
              <SecTitle className="text-center color style1">
                <h4 className="title">Grab The Offer</h4>
              </SecTitle>

              <span
                className="close"
                onClick={hide}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 10,
                  fontSize: 30,
                }}
              >
                &times;
              </span>
              {/* {loading  ? <Loader  /> : '' } */}
              <Form onSubmit={loading ? () => null : handleSubmit}>
                <Row>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Label className='visually-hidden' htmlFor="name">Name</Form.Label>
                    <Form.Control
                    autoComplete="name" 
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name:"
                      value={formDetails.name ?? ""}
                      onChange={handleFormChange}
                    />
                  </Form.Group>

                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Label className='visually-hidden' htmlFor="email">E-Mail</Form.Label>
                    <Form.Control
                    autoComplete="off" 
                      id="email"
                      type="email"
                      name="email"
                      placeholder="E-Mail:"
                      value={formDetails.email ?? ""}
                      onChange={handleFormChange}
                    />
                  </Form.Group>

                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Label className='visually-hidden' htmlFor="number">Phone</Form.Label>
                    <Form.Control

                      id="number"
                      type="number"
                      name="number"
                      placeholder="Phone:"
                      value={formDetails.number ?? ""}
                      onChange={(e) => {
                        const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
                        if (inputValue.length <= 10) {
                          handleFormChange({ target: { name: "number", value: inputValue } } as React.ChangeEvent<HTMLInputElement>);
                        }
                      }}
                      autoComplete="tel"
                    />
                  </Form.Group>

                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Label className='visually-hidden' htmlFor="message">Message</Form.Label>
                    <Form.Control
                    autoComplete="off" 
                      id="message"
                      type="text"
                      name="message"
                      placeholder="Message:"
                      value={formDetails.message ?? ""}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                </Row>

                <Button
                  type="submit"
                  className="btn_style3"
                  disabled={loading ? true : false}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    );
  }
  return (
    <Modal show={show} className="enquire_form custom_modal floor_plan_popup">
      <div ref={modalRef}>
        <Modal.Body>
            <SecTitle className="text-center color style1">
              <img
                src={Formlogo}
                alt="mvn modal logo"
                className="img-fluid headingIcon"
              />

              <h4 className="title">Get In Touch With Us</h4>
            </SecTitle>
            <span
              className="close"
              onClick={hide}
              style={{ position: "absolute", top: 0, right: 10, fontSize: 30 }}
            >
              &times;
            </span>
            {/* {loading  ? <Loader  /> : '' } */}
            <Form onSubmit={loading ? () => null : handleSubmit}>
              <Row>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Label className='visually-hidden' htmlFor="name">Name</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name:"
                    value={formDetails.name ?? ""}
                    onChange={handleFormChange}
                    autoComplete="name" 
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Label className='visually-hidden' htmlFor="email">E-Mail</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-Mail:"
                    value={formDetails.email ?? ""}
                    onChange={handleFormChange}
                    autoComplete="off" 
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Label className='visually-hidden' htmlFor="number">Phone</Form.Label>
                  <Form.Control
                    id="number"
                    type="number"
                    name="number"
                    placeholder="Phone:"
                    value={formDetails.number ?? ""}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
                      if (inputValue.length <= 10) {
                        handleFormChange({ target: { name: "number", value: inputValue } } as React.ChangeEvent<HTMLInputElement>);
                      }
                    }}
                    autoComplete="tel"
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Label className='visually-hidden' htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Message:"
                    value={formDetails.message ?? ""}
                    onChange={handleFormChange}
                    autoComplete="off" 
                  />
                </Form.Group>
              </Row>

              <Button
                type="submit"
                className="btn_style3"
                disabled={loading ? true : false}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
});

export default CustomModal;
