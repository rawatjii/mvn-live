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
import { Helmet } from "react-helmet";
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
import InitialLoading from "../skeleton/Initial/Index";
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
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const smootherRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRefs = useRef({
    MicroAmenitiesDesktop: null,
    MicroAmenities: null,
  });

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem('count')));
  }, [localStorage.getItem('count')]);

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
    if(heroLoaded){
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Smoothing duration
        effects: true, // Enable data-speed and data-lag effects
        smoothTouch: 1.4, // Smooth scrolling on touch devices
      });
    }
    

    // if (window.innerWidth >= 768) {
    //   setPeacockLoaded(true);
    // }

    // return () => {
    //   if (smootherRef.current) {
    //     smootherRef.current.kill();
    //     smootherRef.current = null;
    //   }
    // };
  }, [heroLoaded, newLoadingCount]);

  useEffect(() => {
    if (heroLoaded) {
      smootherRef.current.refresh(); // Refresh ScrollSmoother after hero loads
    }
  }, [heroLoaded]);

  useEffect(() => {
    if (newLoadingCount === 100) {
      const timer = setTimeout(() => {
        setNewLoadingCount(101);
      }, 500); // 1 seconds delay before removing InitialLoading

      return () => clearTimeout(timer);
    }
  }, [newLoadingCount]);

  if (newLoadingCount <= 100) {
    return <InitialLoading loadingCount={newLoadingCount} setLoadingCount={setNewLoadingCount} fast="true" second="true" />;
  }

  return (
    <>
      <Helmet>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
          `}
        </script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P7MQ5KWWGL"
        ></script>

        <script>
          {`
            gtag('js', new Date());
            gtag('config', 'G-P7MQ5KWWGL');
          `}
        </script>

        {/* Google tag (gtag.js) */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T7YNXS59XR"></script>

        <script>
          {`
            gtag('js', new Date());

            gtag('config', 'G-T7YNXS59XR');
          `}
        </script>

        {/* Meta Pixel Code */}

        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '562105226581202');
            fbq('track', 'PageView');
            `}
          </script>

          <noscript>
            {`
              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=562105226581202&ev=PageView&noscript=1" />
            `}
          </noscript>

      </Helmet>

      
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

          <MicroOverview data={data} /> {/*no isssue*/}
          <LargeElevationSection data={data.LargeElevationSection} />
          <Container>
            <div className="about">
              <CustomCard className="px-0" title="ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE" extra="THIS ARCHITECTURAL MASTERPIECE SEAMLESSLY BLENDS CUTTING-EDGE DESIGN WITH NEW-AGE SOPHISTICATION. EVERY CURVE, EVERY DETAIL, IS METICULOUSLY CRAFTED TO ELEVATE YOUR LIVING EXPERIENCE. EMBRACE A  RESIDENCE WHERE INNOVATION MEETS BEAUTY, CREATING A LANDMARK OF LUXURIOUS URBAN LIVING. YOUR NEW HOME AWAITS." />
            </div>
          </Container>
          <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
            <PeacockSection
              data={data}
              onLoadComplete={() => setPeacockLoaded(true)}
              isMobile={isMobile}
            />
          </div>
          <div>
            <LivingRoomVideoGurugram
              data={data}
              onLoadComplete={() => setLivingRoomLoaded(true)}
              isMobile={isMobile}
            />
          </div>
          <div>
            <PartyVideo
              data={data}
              onLoadComplete={() => setPartyLoaded(true)}
              isMobile={isMobile}
            />
          </div>
          <div>
            <MasterBedroom
              data={data}
              onLoadComplete={() =>
                setMasterBedroomLoaded(true)
              }
              isMobile={isMobile}
            />
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.Walkthrough = el)
            }
          >
            <Walkthrough data={data.Walkthrough} />{" "}
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <DownloadBrochure />
          </div>

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
          </div>

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
                  projectName={"MVN Aeroone"}
                />
              </div>
            </div>
          </div>

          <Footer />

          

          
        </div>
      </div>
    </>
  );
};

export default MicroPageGurgaon1;
