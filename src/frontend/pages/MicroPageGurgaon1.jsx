import React, { useEffect, useState, useRef, Suspense } from "react";
import { Helmet } from "react-helmet";
import ScrollSmoother from "gsap/ScrollSmoother";


const MicroHeader = React.lazy(()=>import("../components/MicroHeader"));
const MicroHero = React.lazy(()=>import("../components/MicroPage/Hero"));
const MicroOverview = React.lazy(()=>import("../components/MicroPage/Overview"));
const LargeElevationSection = React.lazy(()=>import("../components/MicroPage/LargeElevationSection"));
const Walkthrough = React.lazy(()=>import("../components/MicroPage/Walkthrough"));
const DownloadBrochure = React.lazy(()=>import("../components/MicroPage/DownloadBrochure"));
const PeacockSection = React.lazy(()=>import("../components/MicroPage/PeacockSection"));
const LivingRoomVideoGurugram = React.lazy(()=>import("../components/MicroPage/LivingRoomVideoGurugram"));
const PartyVideo = React.lazy(()=>import("../components/MicroPage/PartyVideo"));
const MasterBedroom = React.lazy(()=>import("../components/MicroPage/MasterBedroom"));
const Consultant = React.lazy(()=>import("../components/MicroPage/Consultant"));
const MicroLandscape = React.lazy(()=>import("../components/MicroPage/Landscape"));
const MicroElevation = React.lazy(()=>import("../components/MicroPage/MicroElevation"));
const MicroApartment = React.lazy(()=>import("../components/MicroPage/MicroApartment"));
const ConstructionTechnology = React.lazy(()=>import("../components/MicroPage/ConstructionTechnology"));
const MicroAmenities = React.lazy(()=>import("../components/MicroPage/Amenities"));
const Typology = React.lazy(()=>import("../components/homepage/Typology"));
const MicroFloorPlan = React.lazy(()=>import("../components/MicroPage/FloorPlan"));
const MicroLocationMap = React.lazy(()=>import("../components/MicroPage/LocationMap"));
const MvnMall = React.lazy(()=>import("../components/MicroPage/MvnMall"));
const NoPolutionZone = React.lazy(()=>import("../components/MicroPage/NoPolutionZone"));
const Enquire = React.lazy(()=>import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(()=>import("../components/homepage/EnquireForm"));
const Footer = React.lazy(()=>import("../components/Footer"));


const MicroPageGurgaon1 = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T7YNXS59XR"></script>

        <script>
          {`
            gtag('js', new Date());

            gtag('config', 'G-T7YNXS59XR');
          `}
        </script>


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

      <Suspense fallback="">
        <MicroHeader scrollToSection={scrollToSection} sectionsMenus={pageSections} projectName={projectName} />
      </Suspense>
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          

          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
            <Suspense fallback="">
              <MicroHero />
            </Suspense>
          </div>

          <Suspense fallback="">
            <MicroOverview data={data} /> 
          </Suspense>
          
          <Suspense fallback="">
            <LargeElevationSection data={data.LargeElevationSection} />
          </Suspense>
          
          <div
            ref={(el) =>
              (sectionRefs.current.Walkthrough = el)
            }
          >
            <Suspense fallback="">
              <Walkthrough data={data.Walkthrough} />
            </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <Suspense fallback="">
              <DownloadBrochure />
            </Suspense>
          </div>


          <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
            <Suspense fallback="">
              <PeacockSection
                data={data}
                onLoadComplete={() => setPeacockLoaded(true)}
                isMobile={isMobile}
              />
            </Suspense>
          </div>


          <Suspense fallback="">
            <div>
              <LivingRoomVideoGurugram
                data={data}
                onLoadComplete={() => setLivingRoomLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div>
              <PartyVideo
                data={data}
                onLoadComplete={() => setPartyLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div>
              <MasterBedroom
                data={data}
                isMobile={isMobile}
                onLoadComplete={() =>
                  setMasterBedroomLoaded(true)
                }
              />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.consultant = el)
              }
            >
              <Consultant data={data.consultant} />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroLandscape = el)
              }
            >
              <MicroLandscape />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroElevation = el)
              }
            >
              <MicroElevation />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroApartment = el)
              }
            >
              <MicroApartment />
            </div>
          </Suspense>
         
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.constructionTechnology = el)
              }
            >
              <ConstructionTechnology />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroAmenities = el)
              }>
              <MicroAmenities data={data.amenities} />
            </div>
          </Suspense>

          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroTypology = el)
              }
            >
              <Typology onLoadComplete={() => setTypologyLoaded(true)} />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroFloorPlan = el)
              }
            >
              <MicroFloorPlan data={data.floorPlan} />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.MicroLocationMap = el)
              }
            >
              <MicroLocationMap
                data={data.locationAdvantage}
              />
            </div>  
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) => (sectionRefs.current.MVNMALL = el)}
            >
              <MvnMall />
            </div>
          </Suspense>
          
          <Suspense fallback="">
            <div
              ref={(el) =>
                (sectionRefs.current.NoPolutionZone = el)
              }
            >
              <NoPolutionZone data={data.noPollutionZone} />
            </div>
          </Suspense>

          <div
            className="container-fluid micro_footer"
            ref={(el) => (sectionRefs.current.Enuqiry = el)}
          >
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Suspense fallback="">
                  <Enquire />
                </Suspense>
              </div>
              <div className="col-sm-6 px-0">
                <Suspense fallback="">
                  <EnquireForm
                    projectName={"MVN Aeroone"}
                  />
                </Suspense>
              </div>
            </div>
          </div>

          <Suspense fallback="">
            <Footer />
          </Suspense>
        </div>
      </div>

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaon1;
