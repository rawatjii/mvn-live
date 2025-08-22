import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Button from "../../../common/Button/Button";
import CustomModal from "../../../common/Modal";
import { useState } from "react";

const LifeStyleSec = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const pointersRef = useRef(null);
 const [isShowModal, setIsShowModal] = useState(false);

     const handleOpenBrochureModal =() => {
       setIsShowModal(true);
    //    setIsVideoModalOpen(false);
     };
      const isHideModal = () => {
           setIsShowModal(false);
         }
  const defaultValues = {
    radius: 522,
    strokeWidth: 2,
    strokeColor: "#E6D49C",
    backgroundStrokeColor: "#E6D49C",
    backgroundStrokeOpacity: 0.3,
    dashArray: "10 10",
    startAngle: -270,
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
    const section = sectionRef.current;
    const circle = circleRef.current;
    const pointers = pointersRef.current;

    if (!section || !circle || !pointers) return;

    const circumference = 2 * Math.PI * defaultValues.radius;
    const totalPoints = 4; // Number of pointers (Residence, Office, Mall, Hotels)
    const segmentLength = (circumference+1800) / totalPoints; // Length of each segment
    const firstPointOffset = circumference - segmentLength; // Align to first pointer (Residence)

    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: firstPointOffset, // Start at first pointer on load
      strokeWidth: defaultValues.strokeWidth,
      stroke: defaultValues.strokeColor,
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top -80",
      end: "+=300%",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        // Animate from first pointer to the last
        const dashOffset = firstPointOffset - (circumference - segmentLength) * progress;
        gsap.set(circle, {
          strokeDashoffset: dashOffset,
          strokeWidth: defaultValues.strokeWidth,
        });
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
                {/* Background circle with default values */}
                <circle
                  cx="596.5"
                  cy="536.5"
                  r={defaultValues.radius}
                  stroke={defaultValues.backgroundStrokeColor}
                  strokeOpacity={defaultValues.backgroundStrokeOpacity}
                  strokeDasharray={defaultValues.dashArray}
                  fill="none"
                />
                {/* Animated progress circle with default values */}
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
                {/* Default marker circles */}
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
          <img
            src={"/assets/images/lifeStylePng.png"}
            alt={"LifeStyle Image"}
            height={"200"}
            className={`img-fluid img_in w-100 object-fit-cover`}
          />
        </div>
      </div>
      <div className="content_section">
        <Container>
          <div className="about">
            <h3 className="pr_name">
              A Lifestyle That Works  Around
              the Clock
            </h3>
            <p>
              A lifestyle that works around the clock. Because true luxury means
              never compromising.
            </p>
          </div>
          <Button type="button"              onClick={handleOpenBrochureModal}
 className="btn btn_style3 r_100">
            view details
          </Button>
            <CustomModal
            hide={isHideModal}
            show={isShowModal}
            type="enquire"
            // projectName={projectName ? projectName : "MVN Aeroone"}
            // isVideoModal={isVideoModalOpen}
          />
        </Container>
      </div>
    </div>
  );
};

export default React.memo(LifeStyleSec);