import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from "../Card";
gsap.registerPlugin(ScrollTrigger);
import Button from "../../../common/Button/Button";
import CustomModal from "../../../common/Modal";
import { useState } from "react";

const LifeStyleSec = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const pointersRef = useRef(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpenBrochureModal = () => {
    setIsShowModal(true);
  };
  const isHideModal = () => {
    setIsShowModal(false);
  };
  const defaultValues = {
    radius: 522,
    strokeWidth: 2,
    strokeColor: "#E6D49C",
    backgroundStrokeColor: "#E6D49C",
    backgroundStrokeOpacity: 0.3,
    dashArray: "10 10",
    startAngle: -250,
    initialOpacity: 0,
    initialY: 30,
    initialScale: 0.8,
    activeColor: "#E6D49C",
    inactiveColor: "#E6D49C",
    fadedOpacity: 0.3,
    normalOpacity: 1,
    showOffset: 0,
    hideOffset: 0,
    animationDuration: 0.3,
  };

  useEffect(() => {
    if(window.innerWidth<=767){return}
    const section = sectionRef.current;
    const circle = circleRef.current;
    const pointers = pointersRef.current?.children;

    if (!section || !circle || !pointers) return;

    const circumference = 2 * Math.PI * defaultValues.radius;
    const totalPoints = 4;
    const segmentLength = (circumference + 1100) / totalPoints;
    const firstPointOffset = circumference - segmentLength;

    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: firstPointOffset,
      strokeWidth: defaultValues.strokeWidth,
      stroke: defaultValues.strokeColor,
    });

    // Initialize pointers and text
    gsap.set(pointers, {
      opacity: defaultValues.initialOpacity,
      scale: defaultValues.initialScale,
      display: "block",
    });

    gsap.set(pointers[0], {
      opacity: defaultValues.normalOpacity,
      scale: 1,
    });

    let lastActiveIndex = 0;
    ScrollTrigger.create({
      trigger: section,
      start: window.innerWidth<1441?"top top":window.innerWidth>1535?"top top+=40":"top top+=50",
      end: "+=300%",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const direction = self.direction;
        const dashOffset =
          firstPointOffset - (circumference - segmentLength) * progress;
        gsap.set(circle, {
          strokeDashoffset: dashOffset,
          strokeWidth: defaultValues.strokeWidth,
        });
        const activeIndex = Math.min(
          Math.floor((progress + 0.02) * totalPoints),
          totalPoints - 1
        );

        // Animate pointers and text
        Array.from(pointers).forEach((pointer, index) => {
          if (index <= activeIndex) {
            gsap.to(pointer, {
              opacity: defaultValues.normalOpacity,
              scale: 1,
              duration: defaultValues.animationDuration,
              ease: "power2.out",
            });
          } else {
            gsap.to(pointer, {
              opacity: defaultValues.initialOpacity,
              scale: defaultValues.initialScale,
              duration: defaultValues.animationDuration,
              ease: "power2.out",
            });
          }
        });

        lastActiveIndex = activeIndex;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="large-elevation lifestyle_sec"
      id="largeElevationSection"
    >
      <div className={`bottom_img_div`}>
        <div className="bg_overlay"></div>
        <div className={``}>
          <div className="">
            <ul ref={pointersRef} className="ponters">
              <li className="pr_name">Residence</li>
              <li className="pr_name">Office</li>
              <li className="pr_name">Mall</li>
              <li className="pr_name">Hotels</li>
            </ul>
            <div className="svg_container">
                <svg
                  width="1129"
                  height="1091"
                  viewBox="0 0 1129 1091"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="596.5"
                    cy="536.5"
                    r={defaultValues.radius}
                    stroke={defaultValues.backgroundStrokeColor}
                    strokeOpacity={defaultValues.backgroundStrokeOpacity}
                    strokeDasharray={defaultValues.dashArray}
                    fill="none"
                  />
                  <circle
                    ref={circleRef}
                    cx="596.5"
                    cy="536.5"
                    r={defaultValues.radius}
                    stroke={defaultValues.strokeColor}
                    strokeWidth={defaultValues.strokeWidth}
                    fill="transparent"
                    strokeLinecap="round"
                    transform={`rotate(${defaultValues.startAngle} 596.5 536.5)`}
                  />
                  <circle
                    cx="252.5"
                    cy="144.5"
                    r="12.5"
                    fill={defaultValues.strokeColor}
                  />
                  <circle
                    cx="619.5"
                    cy="12.5"
                    r="12.5"
                    fill={defaultValues.strokeColor}
                  />
                  <circle
                    cx="1116.5"
                    cy="498.5"
                    r="12.5"
                    fill={defaultValues.strokeColor}
                  />
                  <circle
                    cx="971.5"
                    cy="171.5"
                    r="12.5"
                    fill={defaultValues.strokeColor}
                  />
                </svg>
            </div>
          </div>
         <picture>
  <source 
    srcSet="/assets/images/lifeStylePng-mob.png" 
    media="(max-width: 767px)" 
  />
  <img 
    src="/assets/images/liststyle.png" 
    alt="LifeStyle Image" 
    height="200" 
    className="img-fluid img_in w-100 object-fit-cover" 
  />
</picture>
        </div>
      </div>
      <div className="content_section">
        <Container>
          <div className="about">
            <h3 className="pr_name">
             Find Every Desire At The Pinnacle Of Luxury Living

            </h3>
            <p>
              Step into a realm of unparalleled indulgence, where every facet of refined living—hotel, mall, office, and residence—merges to create a life of exceptional ease and opulence.
            </p>
          </div>
          <Button
            type="button"
            onClick={handleOpenBrochureModal}
            className="btn btn_style3 r_100"
          >
            view details
          </Button>
          <CustomModal
            hide={isHideModal}
            show={isShowModal}
            type="enquire"
          />
        </Container>
      </div>
      <CustomCard
        className="px_sm_0 pb-0"
      />
    </div>
  );
};

export default React.memo(LifeStyleSec);