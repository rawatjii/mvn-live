import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Modal from "react-bootstrap/Modal";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import * as CONFIG from "../../../config/config";

// Import Swiper styles
import "swiper/css";
import "yet-another-react-lightbox/styles.css";

import CustomCard from "../Card";
import LocationSlider from "./bangalore/LocationSlider";
import LocationAdvantes from "./LocationAdvantes";

gsap.registerPlugin(ScrollTrigger);
const MicroLocationMap = ({ data, projectName }) => {
  const titleRef = useRef();
  const typoRefs = useRef([]);
  const priceRefs = useRef([]);
  const sizeRefs = useRef([]);
  const [isLocationMapOpen, setIsLocationMapOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { project_id, heading, modalIframe, image, sub_heading, description, mb_image, mb_alternative_image, alt, alternative_image } =
    data;

  const locationMapImg = [
    { src: CONFIG.BACKEND_IMAGE_URL + image, asset: CONFIG.BACKEND_IMAGE_URL + image },
  ];

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  // for animation

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });

    typoRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,
          opacity: 0,
          duration: 0.5,

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          },
        });
      }
    });

    priceRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,
          opacity: 0,
          duration: 0.5,

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          },
        });
      }
    });

    sizeRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 10,
          opacity: 0,
          duration: 0.5,

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          },
        });
      }
    });
  }, []);

  return (
    <section
      className="section location_map_section pb-0"
      aria-label="Location Map Section"
    >
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">{heading}</h4>
        </div>
      </Container>

      <div className="locationMapContent">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <div className="thumbnail">
              <button
                type="button"
                className="location_btn"
                onClick={handleShow}
              >
                <img
                  src={`${CONFIG.API_URL}assets/icons/yt_color.png`}
                  alt="youtube icon"
                  className="img-fluid yt_icon"
                />
                Location Video
              </button>

              <div onClick={() => setIsLocationMapOpen(true)}>
                <picture>
                  <source srcSet={CONFIG.BACKEND_IMAGE_URL + mb_image} media="(max-width:768px)" />
                  <img src={CONFIG.BACKEND_IMAGE_URL + image} className="img-fluid" alt={alt} loading="lazy" />
                </picture>
                {/* <picture>
                  <source srcset={window.innerWidth < 768 ? CONFIG.BACKEND_IMAGE_URL + mb_image : CONFIG.BACKEND_IMAGE_URL + image} />
                  <img className="img-fluid" src={window.innerWidth < 768 ? CONFIG.BACKEND_IMAGE_URL + mb_alternative_image : CONFIG.BACKEND_IMAGE_URL + alternative_image} alt={alt} loading="lazy"/>
                </picture> */}

                {/* <img
                  src={CONFIG.BACKEND_IMAGE_URL + image}
                  alt="desktop map"
                  className="img-fluid d-none d-md-block"
                  loading="lazy"
                />
                <img
                src={CONFIG.BACKEND_IMAGE_URL + image}
                  alt="mobile map"
                  className="img-fluid d-md-none"
                  loading="lazy"
                /> */}
              </div>
            </div>
          </div>
        </div>

        <Container className="desktop_fluid_container">
          <h4 className="title style2">Location Advantages</h4>
          {(!projectName.includes('mvn-athens-gurgaon-phase-2') && !projectName.includes('mvn-athens-gurgaon-phase-1') && !projectName.includes('mvn-athens-faridabad')) && (
            <LocationAdvantes project_id={project_id} />
          )}
        </Container>
      </div>

      {(projectName.includes('mvn-athens-gurgaon-phase-2') || projectName.includes('mvn-athens-gurgaon-phase-1') || projectName.includes('mvn-athens-faridabad')) && <LocationSlider project_id={project_id} projectName={projectName} />}

      <Container>
        <div className="about">
          <CustomCard
            className="px-0 pb-0"
            title={sub_heading || ""}
            desc={description || ""}
          />
        </div>
      </Container>

      <Lightbox
        open={isLocationMapOpen}
        close={() => setIsLocationMapOpen(false)}
        slides={[{ src: CONFIG.BACKEND_IMAGE_URL + image }]}
        plugins={[Zoom]}
        carousel={{
          finite: locationMapImg.length <= 1, // Prevent looping if there’s only one image
        }}
        render={{
          buttonNext: locationMapImg.length > 1 ? undefined : () => null,
          buttonPrev: locationMapImg.length > 1 ? undefined : () => null,
          slide: locationMapImg.length > 1 ? undefined : () => null,
        }}
      />

      <Modal className="location_modal" show={showModal} onHide={handleClose}>
        <span type="button" class="close" onClick={handleClose}>
          ×
        </span>
        <iframe
          src={
            modalIframe ||
            "https://www.youtube.com/embed/p4ArtUtsj-A?si=VsbM3Dvdk969-OHv"
          }
          title="MVN Location Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen=""
        ></iframe>
      </Modal>
    </section>
  );
};

export default MicroLocationMap;
