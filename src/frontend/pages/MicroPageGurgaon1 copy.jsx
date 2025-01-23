import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroAmenitiesDesktop from "../components/MicroPage/AmenitiesDesktop";
import Typology from "../components/homepage/Typology";
import MicroHeader from "../components/MicroHeader";
import Footer from "../components/Footer";
import InitialLoading from "../skeleton/Initial/Index";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MicroPageGurgaon1 = ({ data }) => {
  const [newLoadingCount, setNewLoadingCount] = useState(() =>
    Number(localStorage.getItem("count")) || 0
  );
  const [isContentVisible, setIsContentVisible] = useState(false); // Tracks if the content should show
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sectionRefs = useRef({});
  const smootherRef = useRef(null);

  useEffect(() => {
    // Initialize from localStorage only once
    if (newLoadingCount <= 100) {
      const interval = setInterval(() => {
        setNewLoadingCount((prev) => {
          const nextCount = prev + 1;
          localStorage.setItem("count", nextCount); // Update localStorage
          return nextCount;
        });
      }, 50); // Adjust speed as needed

      return () => clearInterval(interval);
    } else {
      setIsContentVisible(true); // Show content when loading completes
    }
  }, [newLoadingCount]);

  useEffect(() => {
    // Update screen size on window resize
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isContentVisible) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 1.4,
      });

      return () => {
        if (smootherRef.current) {
          smootherRef.current.kill();
          smootherRef.current = null;
        }
      };
    }
  }, [isContentVisible]);

  if (!isContentVisible) {
    return (
      <InitialLoading
        loadingCount={newLoadingCount}
        setLoadingCount={setNewLoadingCount}
        fast="true"
        second="true"
      />
    );
  }

  return (
    <>
      <MicroHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <MicroHero data={data} />
          <MicroOverview data={data} />
          <LargeElevationSection data={data.LargeElevationSection} />
          <Container>
            {/* Other components */}
          </Container>
          {isMobile ? (
            <MicroAmenities data={data.amenities} />
          ) : (
            <MicroAmenitiesDesktop data={data.amenities} />
          )}
          <Typology />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MicroPageGurgaon1;
