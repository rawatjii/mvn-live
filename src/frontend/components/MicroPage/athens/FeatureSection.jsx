import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./feature_section.css";

const FeatureSection = ({ data }) => {
  const{title,desc,src,list,bgImg}=data;
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
                
          <div class="box-title m-v">
        <h1 class="main-title">{title}</h1>
        <p class="main-pera">{desc}</p>
      </div>
      <img
        className="d-v elevation reveal"
        src={src}
        alt="Elevation feature"
      />
        <div class="m-v overlap" >
    <img class="elevation bg-elevation" src={bgImg} />
     <img class="elevation fr-elevation" src={src}/>      
  </div>
            </div>
            <div className="col-lg-6">
            <div className="elevation-content">
        <div className="container">
          <div className="inner-box" data-speed="clamp(0.9)">
            <h1 className="main-title d-v">{title}</h1>
            <p className="main-pera d-v">{desc}</p>


            <ul>
              {list.map((feature, index) => (
                <li key={index}>{feature}</li>
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