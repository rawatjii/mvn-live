import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./feature_section.css";
import { BACKEND_IMAGE_URL } from '../../../../config/config';
import useFetchData from '../../../utils/apiHelper';

const FeatureSection = ({ data }) => {
  const { heading, sub_heading, image, alternative_image, alt, optional_images, project_id } = data;
  const { data:keyHighlightsData, loading } = useFetchData(`project/${project_id}/key-highlight`);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      const image = container.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 })
        .from(container, {
          xPercent: -100,
          duration: 1.5,
          ease: "power2.out",
        })
        .from(
          image,
          {
            xPercent: 100,
            scale: 1.3,
            duration: 1.5,
            delay: -1.5,
            ease: "power2.out",
          },
          0
        );
    });

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="feature" aria-label="Feature Section">
      <div className="row">
        <div className="col-lg-6">

          <div className="box-title m-v">
            <h1 className="main-title">{heading}</h1>
            <p className="main-pera">{sub_heading}</p>
          </div>
          <picture className='d-v'>
            <source srcset={BACKEND_IMAGE_URL + alternative_image} />
            <img className="d-v elevation reveal" src={BACKEND_IMAGE_URL + image} alt="Elevation feature" />
          </picture>
          
          <div className="m-v overlap" >
            <img className="elevation bg-elevation" src={BACKEND_IMAGE_URL + optional_images} alt="elevation background image" />
            <img className="elevation fr-elevation" src={BACKEND_IMAGE_URL + image} alt='elevation front image' />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="elevation-content">
            <div className="container">
              <div className="inner-box" data-speed="clamp(0.9)">
                <h1 className="main-title d-v">{heading}</h1>
                <p className="main-pera d-v">{sub_heading}</p>


                <ul>
                  {keyHighlightsData?.map((feature, index) => (
                    <li key={index}>{feature.heading}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

FeatureSection.propTypes = {
  data: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};


export default FeatureSection