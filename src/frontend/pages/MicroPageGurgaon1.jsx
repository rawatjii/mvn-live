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
import ScrollTriggerFrames from "../components/MicroPage/ScrollTriggerFrames";
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
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import LottieAnimationSection from "../components/MicroPage/LottieAnimationSection";

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
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const {pageSections, projectName} = data;




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

      <MicroHeader scrollToSection={scrollToSection} data={data.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          

          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
            <MicroHero  data={data} onLoadComplete={() => setHeroLoaded(true)} />
          </div>

          {/* Render other components only after Hero Section is loaded */}

          <MicroOverview data={data} heroLoadedStatus={heroLoaded} /> {/*no isssue*/}
          <LargeElevationSection data={data.LargeElevationSection} />

          
          <div
            ref={(el) =>
              (sectionRefs.current.Walkthrough = el)
            }
          >
            <Walkthrough data={data.Walkthrough}/>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <DownloadBrochure />
          </div>
          <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
            <PeacockSection
              data={data.peacock_section}
              onLoadComplete={() => setPeacockLoaded(true)}
            />
          </div>
          {/* <div>
            <LivingRoomVideoGurugram
              data={data}
              onLoadComplete={() => setLivingRoomLoaded(true)}
            />
          </div> */}
          <div>
            {/* <ScrollTriggerFrames data={data.ScrollFramesData}
              onLoadComplete={() => setLivingRoomLoaded(true)}
              /> */}
            <LottieAnimationSection
            data={data.living_room}
            onLoadComplete={() => setLivingRoomLoaded(true)}
            />
          </div>
          <div>
            {/* <PartyVideo
              data={data}
              onLoadComplete={() => setPartyLoaded(true)}
            /> */}
            <LottieAnimationSection
            data={data.party_video}
            onLoadComplete={() => setPartyLoaded(true)}
            />
          </div>
          <div>
            {/* <MasterBedroom
              data={data}
              onLoadComplete={() =>
                setMasterBedroomLoaded(true)
              }
            /> */}
            <LottieAnimationSection
              data={data.masterBedroom}
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
            {/* <MicroLandscape  data={data.landscape}/> */}
            <ImagesGallery data={data.landscape}/>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroElevation = el)
            }
          >
            {/* <MicroElevation /> */}
            <ImagesGallery data={data.microElevation}/>
          </div>

         <div
            ref={(el) =>
              (sectionRefs.current.MicroApartment = el)
            }
          >
            {/* <MicroApartment /> */}
            <ImagesGallery data={data.microApartment}/>
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
            <MicroAmenities section_data={data.amenities} />
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

          {/* <div
            ref={(el) =>
              (sectionRefs.current.NoPolutionZone = el)
            }
          >
            <NoPolutionZone data={data.noPollutionZone} />
          </div> */}
          <div
            ref={(el) =>
              (sectionRefs.current.NoPolutionZone = el)
            }
          >
            <MicroAmenities section_data={data.noPollutionZone} />
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
