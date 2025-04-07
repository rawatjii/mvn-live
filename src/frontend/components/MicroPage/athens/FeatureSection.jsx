import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import './feature_section.css';

const FeatureSection = ({ data }) => {
  const { title, desc, src, list, bgImg } = data;
  const revealRef = useRef(null);
  const location = useLocation(); // Detect route change

  useEffect(() => {
    const container = revealRef.current;
    if (!container) return;

    const image = container.querySelector('img');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'restart none none reset',
      },
    });

    tl.set(container, { autoAlpha: 1 })
      .from(container, {
        xPercent: -100,
        duration: 1.5,
        ease: 'power2.out',
      })
      .from(
        image,
        {
          xPercent: 100,
          scale: 1.3,
          duration: 1.5,
          delay: -1.5,
          ease: 'power2.out',
        },
        0
      );

    // Refresh ScrollTrigger to ensure proper positioning
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [location.pathname]); // Re-run on route change

  return (
    <section className="feature" aria-label="Feature Section">
      <div className="row">
        <div className="col-lg-6">
          <div className="box-title m-v">
            <h1 className="main-title">{title}</h1>
            <p className="main-pera">{desc}</p>
          </div>

          <div className="" ref={revealRef}>
            <img src={src} className='d-v elevation reveal' alt="Elevation feature" />
          </div>

          <div className="m-v overlap">
            <img className="elevation bg-elevation" src={bgImg} alt="elevation background image" />
            <img className="elevation fr-elevation" src={src} alt="elevation front image" />
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
    bgImg: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default FeatureSection;
