import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

import LazyLoad from "react-lazyload";
import { API_URL } from "../../../config/config";


const Enquire = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const [imageSrc, setImageSrc] = useState(`${API_URL}images/enquire/form-bg.webp`);

  useEffect(() => {
    // Set the correct image on mount and window resize
    const updateImageSrc = () => {
      setImageSrc(window.innerWidth <= 768 ? `${API_URL}images/enquire/form-bg.webp` : `${API_URL}images/enquire/form-bg.webp`);
    };

    updateImageSrc(); // Initial check
    window.addEventListener("resize", updateImageSrc); // Listen for window resize

    return () => {
      window.removeEventListener("resize", updateImageSrc); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="section enquire_section pt-0" aria-label="Enquiry Section">
      <LazyLoad>
        <img src={imageSrc} alt="mvn enquire background" className="img-fluid enquire_bg" />
      </LazyLoad>

      <Container>
        <h4 ref={titleRef} className="title_style1 hide_after text-center">Excited To Meet Us?</h4>
        <p ref={contentRef}>Every query gets answered. You got questions, we got answers.</p>
      </Container>
    </section>
  );
};

export default Enquire;
