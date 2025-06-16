import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const OurTeamData = [
  {
    id: 1,
    Person_Name: "Late Shri Gopal Sharma",
    Person_Post: "Founder, MVN Schools",
    Person_Photo: `${API_URL}images/our-team/mvnschool-founder-shri-gopal-sharma.png`,
    Person_content: `Shri Gopal Sharma, an eminent educationist, a good Samaritan, a repository of knowledge, and a true karma yogi, who transformed the education scenario in the quaint industrial town of Faridabad and catapulted the backyard of National Capital to the National Level. A city with well-established brands of educational institutes was left gasping with wonder when Sir entered the education sector in 1983 with the establishment of Modern Vidya Niketan School in Faridabad. A tale of capturing dreams and turning them into reality began at MVN, where values and education in sync define excellence in education. He firmly believed that a school should aim at building an integrated personality that is a harmonious balance of our body, our thoughts, and our aspirations which helps a child to realize his/her unique potential. He could gauge the demand of thousands of students who were clamoring for quality education and made this as his mission of life. What sets apart the peerless from the prosaic is their vision, mission and commitment. As former President APJ Abdul Kalam said “Dream is not that which you see while sleeping; It is something that does not let you sleep”. Shri Gopal Sharma Sir always exhorted the students to Dream Big to Achieve Big.`,
  },
  {
    id: 2,
    Person_Name: "Mr. Varun Sharma",
    Person_Post: "Founder & MD, MVN Infrastructure",
    Person_Photo: `${API_URL}images/our-team/mvngroup-founder-md-varun-sharma.png`,
    Person_content: `The key driving force behind taking MVN’s deep-rooted legacy to new heights, Mr. Varun Sharma is a man with an indomitable vision and passion for creating world-class infrastructure. His strong knowledge and astute insights on infrastructure development and operations have catapulted MVN from a leader in the NCR geography to a pan-India one.`,
  },
  {
    id: 3,
    Person_Name: "Mrs. Kanta Sharma",
    Person_Post: "Founder & CEO, MVN Infrastructure",
    Person_Photo: `${API_URL}images/our-team/mvngroup-founder-ceo-kantasharma.jpg`,
    Person_content: `Mrs. Kanta Sharma, a renowned educationist, has been imparting knowledge and unparalleled educational values to more than 1 lakh students over the past 40 years. Her vision and guidance have succeeded in creating leaders and serving society.`,
  },
  {
    id: 4,
    Person_Name: "Mr. Saurabh Kaushik",
    Person_Post: "Director, MVN Infrastructure",
    Person_Photo: `${API_URL}images/our-team/mvn-infrastructure-director-saurabh-kaushik.jpeg`,
    Person_content: `Mr. Saurabh Kaushik holds a bachelor's degree in Engineering from the National Institute of Technology, Kurukshetra, with a total experience of 16 years, including 5 years in construction and real estate. He has been associated with MVN Infrastructure since 2016.`,
  },
];

const OurTeam = ({data}) => {
  const [show, setShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (person) => {
    setSelectedPerson(person);
    setShow(true);
  };

  const {heading} = data;
  const { data:teamData, loading } = useFetchData("team");

  return (
    <section className="our-team-section" aria-label="Our Team Section">
      <Container>
        {/* Row for the first three members */}

        <div className="heading_div ">
          <img
            src={`${API_URL}images/icons/heading-icon-img.webp`}
            alt="mvn overview image"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 className="title title_style1 text-center">{heading}</h4>
        </div>

        <Row>
          {teamData?.slice(0, 3).map((member) => (
            <Col xs={12} md={4} lg={4} key={member.id}>
              <div className="ourteamCard">
                <div className="profile-pic">
                  <img
                    src={BACKEND_IMAGE_URL + member.image}
                    alt={member.alt}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="cardContent">
                  <h4 className="person-name">{member.name}</h4>
                  <h4 className="person-post">{member.designation}</h4>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => handleShow(member)}
                    className="view-details-btn"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Row for the remaining members */}
        <Row>
          {teamData?.slice(3).map((member, index) => (
            <Col xs={12} md={4} lg={4} key={member.id}>
              <div className="ourteamCard">
                <div className="profile-pic">
                  <img
                    src={BACKEND_IMAGE_URL + member.image}
                    alt={member.alt}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="cardContent">
                  <h4 className="person-name">{member.Person_Name}</h4>
                  <h4 className="person-post">{member.Person_Post}</h4>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => handleShow(member)}
                    className="view-details-btn"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h4 className="modal_name">{selectedPerson?.name}</h4>
          <p>{selectedPerson?.description}</p>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default OurTeam;
