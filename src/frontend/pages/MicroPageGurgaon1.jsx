import React, { useEffect, useState, useRef } from "react";
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
import Walkthrough from "../components/MicroPage/Walkthrough";
import MvnMall from "../components/MicroPage/MvnMall";
import Footer from "../components/Footer";
import Typology from "../components/homepage/Typology";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import InitialLoading from "../skeleton/Initial/Index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import GurgaonLoader1 from "../../common/Loader/micro/gurgaon1/Index";
import { Helmet } from "react-helmet";
import MicroHeader from "../components/MicroHeader";
import CustomCard from "../components/Card";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import PartyVideo from "../components/MicroPage/PartyVideo";
import PartyVideo1 from "../components/MicroPage/PartyVideo1";
import MasterBedroom from "../components/MicroPage/MasterBedroom";
import MicroLandscape from "../components/MicroPage/Landscape";
import MicroElevation from "../components/MicroPage/MicroElevation";
import MicroApartment from "../components/MicroPage/MicroApartment";
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";

import * as CONFIG from '../../config/config';
import Consultant from "../components/MicroPage/Consultant";
import ConstructionTechnology from "../components/MicroPage/ConstructionTechnology";
import ScrollTop from "../../common/ScrollToTop/Index";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MicroPageGurgaon1 = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Math.floor(localStorage.getItem('count') || 0)
  );
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  };

  useEffect(() => {
    if (heroLoaded) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 1.4,
      });
    }
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [heroLoaded]);

  useEffect(() => {
    if (newLoadingCount >= 100 && peacockLoaded && livingRoomLoaded && partyLoaded) {
      const timer = setTimeout(() => {
        setNewLoadingCount(101);
        setIsPageLoaded(true); // Mark page as loaded
      }, 500); // 1 seconds delay before removing InitialLoading

      return () => clearTimeout(timer);
    }
  }, [newLoadingCount]);

  return (
    <>
      {(!peacockLoaded || !livingRoomLoaded || !partyLoaded) && (
        <>
          <InitialLoading
            fast="false"
            second="true"
            loadingCount={newLoadingCount}
            setLoadingCount={setNewLoadingCount}
          />
          {/* <GurgaonLoader1 /> */}
        </>
      )}

      
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

        {/* conversion code */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"></script>

        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11490416244');
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

          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-11490416244');
            `}
          </script>

          <script>
              {`
                <script type='text/javascript'>
                window._tfa = window._tfa || [];
                window._tfa.push({notify: 'event', name: 'page_view', id: 1787600});
                !function (t, f, a, x) {
                      if (!document.getElementById(x)) {
                          t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
                      }
                }(document.createElement('script'),
                document.getElementsByTagName('script')[0],
                '//cdn.taboola.com/libtrc/unip/1787600/tfa.js',
                'tb_tfa_script');
              </script>
              `}
          </script>

          <script>
            {`
              (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187169642", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
            `}
          </script>

      </Helmet>

      <MicroHeader scrollToSection={scrollToSection} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          

          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
            <MicroHero isMobile={isMobile} data={data} onLoadComplete={() => setHeroLoaded(true)} />
          </div>

          {/* Render other components only after Hero Section is loaded */}

          <MicroOverview data={data} heroLoadedStatus={heroLoaded} /> {/*no isssue*/}
          <LargeElevationSection data={data.LargeElevationSection} />

          
          <div
            ref={(el) =>
              (sectionRefs.current.Walkthrough = el)
            }
          >
            <Walkthrough data={data.Walkthrough} />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <DownloadBrochure />
          </div>

          {/*<Container>
            <div className="about">
              <CustomCard className="px-0 pb-0" title="ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE" desc="This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a  residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits." />
            </div>
          </Container>*/}
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
              isMobile={isMobile}
              onLoadComplete={() =>
                setMasterBedroomLoaded(true)
              }
            />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.consultant = el)
            }
          >
            <Consultant data={data.consultant} />
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

          <div
            ref={(el) =>
              (sectionRefs.current.constructionTechnology = el)
            }
          >
            <ConstructionTechnology />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroAmenities = el)
            }>
            <MicroAmenities data={data.amenities} />
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroTypology = el)
            }
          >
            <Typology onLoadComplete={() => setTypologyLoaded(true)} />
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
            <NoPolutionZone data={data.noPollutionZone} />
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

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaon1;
