import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import LazyLoad from "react-lazyload";
import { API_URL } from "../../../config/config";

const data = [
  {
    img: `${API_URL}images/timeline/mvnschool-sector-17.webp`,
    year: "1983",
    title: "MVN School",
    location: "Sector-17, Faridabad",
  },
  {
    img: `${API_URL}images/timeline/mvnschool-aravalihills.webp`,
    year: "2000",
    title: "MVN School",
    location: "Aravali Hills, Faridabad",
  },
  {
    img: `${API_URL}images/timeline/athens-faridabad-2008.webp`,
    year: "2008",
    title: "Luxury Apartments | Project by Gopal Global Developers Pvt Ltd",
    location: "MVN Athens, Faridabad",
  },
  {
    img: `${API_URL}images/timeline/gopalsharma-institute-of-engineering-and-technology-palwal.webp`,
    year: "2008",
    title:
      "MVN Athens, Faridabad | Luxury Apartments | Project by Gopal Global Developers Pvt Ltd",
    location: "Palwal, Haryana",
  },
  {
    img: `${API_URL}images/timeline/mvn-school-palwal.webp`,
    year: "2009",
    title: "MVN School",
    location: "Haryana",
  },
  {
    img: `${API_URL}images/timeline/mvn-school-khambi.webp`,
    year: "2009",
    title: "Gopal Sharma Modern Vidya Niketan School ",
    location: "Khambi",
  },
  {
    img: `${API_URL}images/timeline/mvn-university-palwal.webp`,
    year: "2012",
    title: "MVN University",
    location: "Haryana",
  },
  {
    img: `${API_URL}images/timeline/mvninfrastructure-athens-sohna.webp`,
    year: "2014",
    title:
      "MVN Athens | Residential Apartments | Project by MVN Infrastructure Pvt Ltd ",
    location: "(Phase-I), Gurugram",
  },
  {
    img: `${API_URL}images/timeline/mvnschool-sec88.webp`,
    year: "2017",
    title: "MVN School",
    location: "Sector-88, Greater Faridabad",
  },
  {
    img: `${API_URL}images/timeline/mvn-infrastructure-athens-sohna-phase-two.webp`,
    year: "2019",
    title:
      "MVN Athens | Residential Apartments | Project by MVN Infrastructure Pvt Ltd",
    location: "(Phase-II), Gurugram",
  },
  {
    img: `${API_URL}images/timeline/mvn-aeroone-bangalore.webp`,
    year: "2021",
    title:
      "MVN Aero One | Luxury Residential Apartments | Project by MF Farmlands Pvt Ltd",
    location: "Bengaluru",
  },
  {
    img: `${API_URL}images/timeline/mvn-aeroone-bengaluru.webp`,
    year: "2023",
    title: "MVN Aeroone | Luxury Apartments",
    location: "(Phase-II) Bengaluru",
  },
  {
    img: `${API_URL}images/timeline/mvn-school-sports-academy.webp`,
    year: "2023",
    title: "MVN School Sports Academy",
    location: "Sector - 88, Greater Faridabad",
  },
  {
    img: `${API_URL}images/timeline/aeroone_gurgaon.webp`,
    year: "2024",
    title: "MVN Aero One Gurugram",
    location: "Dwarka Expressway, Sector-37D, Gurugram",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const titleRef = useRef();
  const contentRefs = useRef([]);
  const imageRefs = useRef([]);
  const planeRef = useRef();
  const timelineRef = useRef();

  const [imagesLoaded, setImagesLoaded] = useState(0);

  const initializeAnimations = () => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      },
    });

    // Content animations
    contentRefs.current.forEach((contentRef) => {
      if (contentRef) {
        gsap.from(contentRef, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef,
            start: "top 90%",
          },
        });
      }
    });

    // Image animations
    imageRefs.current.forEach((imageRef) => {
      if (imageRef) {
        gsap.from(imageRef, {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef,
            start: "top 90%",
          },
        });
      }
    });

    let isClassAdded = false;

    // Plane animation
    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top 50%",
      onEnter: () => {
        if (planeRef.current && !isClassAdded) {
          planeRef.current.classList.add("rotated");
          isClassAdded = true;
        }
      },
      onUpdate: (self) => {
        if (planeRef.current) {
          if (self.direction === -1 && isClassAdded) {
            planeRef.current.classList.remove("rotated");
            isClassAdded = false;
          }
          if (self.direction === 1 && !isClassAdded) {
            planeRef.current.classList.add("rotated");
            isClassAdded = true;
          }
        }
      },
      onLeave: () => {
        if (planeRef.current) {
          planeRef.current.classList.remove("rotated");
          isClassAdded = false;
        }
      },
    });

    // Pin the plane at the center and release at the end
    gsap.to(planeRef.current, {
      yPercent: -50,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 50%",
        end: "bottom 55%",
        pin: planeRef.current,
        pinSpacing: false,
        scrub: true,
      },
    });
  };

  useEffect(() => {
    if (imagesLoaded === data.length) {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }

    // Refresh ScrollTrigger on resize
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <section
      className="section timeline_section pb-0"
      aria-label="Timeline Section"
    >
      <LazyLoad className="timeline_bg">
        <img
          src={`${API_URL}images/timeline/bg.webp`}
          alt="mvn timeline background image"
          className="img-fluid bg"
        />
      </LazyLoad>

      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img
            src={`${API_URL}images/icons/heading-icon-img.webp`}
            alt="mvn overview image"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 ref={titleRef} className="title title_style1 text-center">
            Our Timeline
          </h4>
        </div>
        <ul ref={timelineRef} className="timeline_content">
          <li ref={planeRef} className="plane">
            <img
              src={`${API_URL}images/icons/heading-icon-img.webp`}
              alt="mvn plan icon"
              className="img-fluid plan_icon"
              loading="lazy"
            />
          </li>
          {data.map((item, index) => (
            <li
              key={index}
              className={`single ${index % 2 !== 0 ? "right" : ""}`}
            >
              <div
                ref={(el) => (imageRefs.current[index] = el)}
                className="thumbnail"
              >
                <img
                  src={item.img}
                  alt="mvn timeline image"
                  className="img-fluid"
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="content"
              >
                <p className="year">{item.year}</p>
                <p className="title">{item.title}</p>
                <p className="location">{item.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Timeline;
