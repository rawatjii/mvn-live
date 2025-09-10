import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from '../../../config/config'

gsap.registerPlugin(ScrollTrigger);

const RendersSliding = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const items = gsap.utils.toArray(wrapper.querySelectorAll(".accordion-item"));

    const tl = gsap.timeline({
      defaults: { ease: "none", duration: 1 },
      scrollTrigger: {
        trigger: wrapper,
        start: "top 70px",
        end: "+=600%",
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    tl.to({}, { duration: 0.15 }); // Small delay at the start

    items.forEach((item) => {
      const body = item.querySelector(".accordion-body");
      const hasChild = body.dataset.haschild;

      // Expand the accordion body
      tl.to(
        body,
        {
          height: 700, // Fixed height
          onStart: () => item.classList.add("active"),
          onReverseComplete: () => item.classList.remove("active"),
        },
        "+=0.5"
      );

      // Scroll cards vertically if the body has child elements
      if (hasChild) {
        const cardsContainer = body.querySelector(".cards-container");
        const scrollHeight = cardsContainer.scrollHeight;
        const containerHeight = 700; // Fixed accordion content height

        // Animate the cards vertically
        tl.to(
          cardsContainer,
          {
            y: -(scrollHeight - containerHeight), // Scroll to bring the last card into view
            duration: 4, // Adjust the duration as needed
          },
          "+=0.2"
        );
      }

      // Collapse the accordion body
      tl.to(
        body,
        {
          height: 0,
          onComplete: () => item.classList.remove("active"),
        },
        "-=0.3"
      );
    });

    tl.to({}, { duration: 0.25 }); // Small delay at the end

    // Cleanup GSAP instances when the component unmounts
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="renders_section wrapper center" ref={wrapperRef}>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header main_am">
            <div className="sec_title text-center color style1">
              <h4 className="title">Landscape</h4>
            </div>
          </div>
          <div className="accordion-body" data-haschild="true">
            <div className="content">
              <div className="vertical center">
                <div className="cards-container">
                  <div className="card center gradient-green">
                    <img src={CONFIG.IMAGE_URL + 'renders/landscape/1.webp'} alt="mvn landscape 1" />
                  </div>
                  <div className="card center gradient-blue">
                    <img src={CONFIG.IMAGE_URL + 'renders/landscape/2.webp'} alt="mvn landscape 2" />
                  </div>
                  <div className="card center gradient-purple">
                    <img src={CONFIG.IMAGE_URL + 'renders/landscape/3.webp'} alt="mvn landscape 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header main_am">
            <div className="sec_title text-center color style1">
              <h4 className="title">Elevation</h4>
            </div>
          </div>
          <div className="accordion-body" data-haschild="true">
            <div className="content">
              <div className="vertical center">
                <div className="cards-container">
                  <div className="card center gradient-green">
                    <img src={CONFIG.IMAGE_URL + 'renders/elevation/1.webp'} alt="mvn elevation 1" />
                  </div>
                  <div className="card center gradient-blue">
                    <img src={CONFIG.IMAGE_URL + 'renders/elevation/2.webp'} alt="mvn elevation 2" />
                  </div>
                  <div className="card center gradient-purple">
                    <img src={CONFIG.IMAGE_URL + 'renders/elevation/3.webp'} alt="mvn elevation 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header main_am">
            <div className="sec_title text-center color style1">
              <h4 className="title">Apartment</h4>
            </div>
          </div>
          <div className="accordion-body" data-haschild="true">
            <div className="content">
              <div className="vertical center">
                <div className="cards-container">
                  <div className="card center gradient-green">
                    <img src={CONFIG.IMAGE_URL + 'renders/apartment/1.webp'} alt="mvn apartment 1" />
                  </div>
                  <div className="card center gradient-blue">
                    <img src={CONFIG.IMAGE_URL + 'renders/apartment/2.webp'} alt="mvn apartment 2" />
                  </div>
                  <div className="card center gradient-purple">
                    <img src={CONFIG.IMAGE_URL + 'renders/apartment/3.webp'} alt="mvn apartment 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RendersSliding;
