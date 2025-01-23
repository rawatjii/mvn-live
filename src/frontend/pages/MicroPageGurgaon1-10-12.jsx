import React, { Suspense, useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import MicroHighlights from "../components/MicroPage/Highlights";
import MicroPrice from "../components/MicroPage/Price";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroAmenitiesDesktop from "../components/MicroPage/AmenitiesDesktop";
import MicroMasterPlan from "../components/MicroPage/MasterPlan";
import MicroFloorPlan from "../components/MicroPage/FloorPlan";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import PeacockSection from "../components/MicroPage/PeacockSection";
import Video2 from "../components/MicroPage/Video2";
import PartyVideo from "../components/MicroPage/PartyVideo";
import MasterBedroom from "../components/MicroPage/MasterBedroom";
import Slides from "../components/MicroPage/Slides";
import Walkthrough from "../components/MicroPage/Walkthrough";
import Renders from "../components/MicroPage/Renders";
import LivingRoomVideo from "../components/MicroPage/LivingRoomVideo";
import GurgaonLoader1 from "../../common/Loader/micro/gurgaon1/Index";
import Typology from "../components/homepage/Typology";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import SecSliding from "../components/MicroPage/SecSliding";
import MicroAmenities1 from "../components/MicroPage/Amenities1";

import Testing from "../components/MicroPage/Testing";
import RendersSliding from "../components/MicroPage/Testing";
import Renders1 from "../components/MicroPage/Renders1";
import CustomModal from "../../common/Modal";
import MicroHeader from "../components/MicroHeader";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";
import NoPolutionZone1 from "../components/MicroPage/NoPolutionZone1";
import MicroLandscape from "../components/MicroPage/Landscape";
import MicroElevation from "../components/MicroPage/MicroElevation";
import MicroApartment from "../components/MicroPage/MicroApartment";
import Footer from "../components/Footer";
import living_area_cam_peacock from "../../../public/assets/images/peacock/peacock.webp";
import CustomCard from "../components/Card";
import Amenities2 from "../components/MicroPage/Amenities2";
import MvnMall from "../components/MicroPage/MvnMall";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import NoPollutionZone1 from "../components/MicroPage/NoPolutionZone1";
// import HomeSliderBg from "../../../public/assets/images/micro/hero/home-bg-img.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const MicroPageGurgaon1 = ({ data }) => {
  window.scrollTo(0, 0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const smootherRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRefs = useRef({
    MicroAmenitiesDesktop: null,
    MicroAmenities: null,
  });

  useEffect(() => {
    // Update screen size on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  };

  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Smoothing duration
      effects: true, // Enable data-speed and data-lag effects
      smoothTouch: 1.4, // Smooth scrolling on touch devices
    });

    if (window.innerWidth >= 768) {
      setPeacockLoaded(true);
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <MicroHeader scrollToSection={scrollToSection} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Show Loader until hero section is loaded */}
          {!heroLoaded && <GurgaonLoader1 />}

          {/* Render Hero Section */}

          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
            <MicroHero data={data} onLoadComplete={() => setHeroLoaded(true)} />
          </div>

          {/* Render other components only after Hero Section is loaded */}

          {heroLoaded && (
            <>
              <MicroOverview data={data} /> {/*no isssue*/}
              <LargeElevationSection data={data.LargeElevationSection} />
              <Container>
                <div className="about">
                  <CustomCard className="px-0" title="ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE" extra="THIS ARCHITECTURAL MASTERPIECE SEAMLESSLY BLENDS CUTTING-EDGE DESIGN WITH NEW-AGE SOPHISTICATION. EVERY CURVE, EVERY DETAIL, IS METICULOUSLY CRAFTED TO ELEVATE YOUR LIVING EXPERIENCE. EMBRACE A  RESIDENCE WHERE INNOVATION MEETS BEAUTY, CREATING A LANDMARK OF LUXURIOUS URBAN LIVING. YOUR NEW HOME AWAITS." />
                </div>
              </Container>
              <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
                {" "}
                <PeacockSection
                  data={data}
                  onLoadComplete={() => setPeacockLoaded(true)}
                  isMobile={isMobile}
                />{" "}
              </div>


              {peacockLoaded && (
                <>
                  <div>
                    <LivingRoomVideoGurugram
                      data={data}
                      onLoadComplete={() => setLivingRoomLoaded(true)}
                      isMobile={isMobile}
                    />
                  </div>

                  {livingRoomLoaded && (
                    <>
                      <div>
                        <PartyVideo
                          data={data}
                          onLoadComplete={() => setPartyLoaded(true)}
                          isMobile={isMobile}
                        />
                      </div>

                      {partyLoaded && (
                        <>
                          <div>
                            <MasterBedroom
                              data={data}
                              onLoadComplete={() =>
                                setMasterBedroomLoaded(true)
                              }
                              isMobile={isMobile}
                            />{" "}
                            {/*no isssue*/}
                          </div>

                          {masterBedroomLoaded && (
                            <>
                              <div
                                ref={(el) =>
                                  (sectionRefs.current.Walkthrough = el)
                                }
                              >
                                <Walkthrough data={data.Walkthrough} />{" "}
                                {/*no isssue*/}
                              </div>

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.downloadBrochure = el)
                                }
                              >
                                <DownloadBrochure />
                              </div>

                              {/*<div>
                                  <Renders data={data} />  /~no isssue~/
                                </div>*/}

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.MicroLandscape = el)
                                }
                              >
                                <MicroLandscape />
                              </div>

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.MicroElevation = el)
                                }
                              >
                                <MicroElevation />
                              </div>

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.MicroApartment = el)
                                }
                              >
                                <MicroApartment />
                              </div>

                              {/* <Renders1 /> */}
                              {/* <div>

                                  {data?.renders.map((render, index) => (
                                    <SecSliding key={index} data={render} />
                                  ))}

                                </div> */}

                              {/* <div>
                                  {data?.renders.map((render, index)=>(
                                    <SecSliding key={index} data={render} />
                                  ))}
                                </div> */}

                              {/* No polution zone location */}
                              {/* <div><MicroHighlights data={data.highlight} />  </div>*/}
                              {/* <MicroAmenities1 data={data.amenities} /> */}

                              {/* Conditionally Render Components Based on Screen Size */}
                              {isMobile ? (
                                <div
                                  ref={(el) =>
                                    (sectionRefs.current.MicroAmenities = el)
                                  }
                                >
                                  <MicroAmenities data={data.amenities} />
                                </div>
                              ) : (
                                <div
                                  ref={(el) =>
                                    (sectionRefs.current.MicroAmenitiesDesktop =
                                      el)
                                  }
                                >
                                  <MicroAmenitiesDesktop
                                    data={data.amenities}
                                  />
                                </div>
                              )}

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.MicroTypology = el)
                                }
                              >
                                <Typology />
                              </div>

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.MicroFloorPlan = el)
                                }
                              >
                                <MicroFloorPlan data={data.floorPlan} />
                              </div>

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.MicroLocationMap = el)
                                }
                              >
                                <MicroLocationMap
                                  data={data.locationAdvantage}
                                />
                              </div>

                              <div
                                ref={(el) => (sectionRefs.current.MVNMALL = el)}
                              >
                                <MvnMall />
                              </div>

                              <div
                                ref={(el) =>
                                  (sectionRefs.current.NoPolutionZone = el)
                                }
                              >
                                <NoPolutionZone data={data.noPollutionZone} />{" "}
                                {/*no isssue*/}
                              </div>

                              {/* <div>
                                    <MicroPrice /> 
                                  </div> */}
                              {/* <MicroAmenities data={data.menities_section} /> */}
                              {/* <MicroFloorPlan data={data.floorPlan} /> */}
                              {/* <MicroLocationMap data={data.locationAdvantage} /> */}
                              {/* <Slides /> */}
                              <div
                                className="container-fluid micro_footer"
                                ref={(el) => (sectionRefs.current.Enuqiry = el)}
                              >
                                <div className="row ">
                                  <div className="col-sm-6 px-0">
                                    <Enquire />
                                  </div>
                                  <div className="col-sm-6 px-0">
                                    <EnquireForm
                                      projectName={"MVN-AeroOne-Gurgaon"}
                                    />
                                  </div>
                                </div>
                              </div>

                              <Footer />
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}



            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MicroPageGurgaon1;
