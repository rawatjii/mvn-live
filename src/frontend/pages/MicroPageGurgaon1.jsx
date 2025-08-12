import React, {
  useEffect,
  useState,
  useRef,
  Suspense,
  useCallback,
} from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Helmet } from "react-helmet";

import MicroHeader from "../components/MicroHeader";
import MicroHero from "../components/MicroPage/Hero";
import { useMatches } from "../../theme/theme";
import MicroAmenities from "../components/MicroPage/Amenities";
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";
import View360 from "../components/MicroPage/360";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import LazyLoadComponent from "../../common/LazyLoadComponent";

const MicroOverview = React.lazy(() =>
  import("../components/MicroPage/Overview")
);
const LargeElevationSection = React.lazy(() =>
  import("../components/MicroPage/LargeElevationSection")
);
const Walkthrough = React.lazy(() =>
  import("../components/MicroPage/Walkthrough")
);
const DownloadBrochure = React.lazy(() =>
  import("../components/MicroPage/DownloadBrochure")
);
const ParallaxSection = React.lazy(() =>
  import("../../common/ParallaxSection")
);

const PeacockSection = React.lazy(() =>
  import("../components/MicroPage/PeacockSection")
);

const PartyVideo = React.lazy(() =>
  import("../components/MicroPage/PartyVideo")
);

const MasterBedroom = React.lazy(() =>
  import("../components/MicroPage/MasterBedroom")
);

const Consultant = React.lazy(() =>
  import("../components/MicroPage/Consultant")
);
const ImageGallery = React.lazy(() =>
  import("../components/MicroPage/ImagesGallery")
);
const ConstructionTechnology = React.lazy(() =>
  import("../components/MicroPage/ConstructionTechnology")
);
const Typology = React.lazy(() => import("../components/homepage/Typology"));
const MicroFloorPlan = React.lazy(() =>
  import("../components/MicroPage/FloorPlan")
);
const MicroLocationMap = React.lazy(() =>
  import("../components/MicroPage/LocationMap")
);
const MvnMall = React.lazy(() => import("../components/MicroPage/MvnMall"));

const Enquire = React.lazy(() => import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(() =>
  import("../components/homepage/EnquireForm")
);
const Footer = React.lazy(() => import("../components/Footer"));

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MicroPageGurgaon1 = ({ data, loadingCount, setLoadingCount }) => {
  const [heroLoaded, setHeroLoaded] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [peacockLoaded, setPeacockLoaded] = useState(false);
  const [livingRoomLoaded, setLivingRoomLoaded] = useState(false);
  const [partyLoaded, setPartyLoaded] = useState(false);
  const [masterBedroomLoaded, setMasterBedroomLoaded] = useState(false);
  const [typologyLoaded, setTypologyLoaded] = useState(false);
  const [is360Show, setIs360Show] = useState(true);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const { pageSections, projectName } = data;
  const { isMobile } = useMatches();

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const bannerRef = useRef(null);

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

  const show360Video = useCallback(() => {
    setIs360Show(true);
  }, [is360Show]);

  return (
    <>
      <Helmet>
        <title>
          MVN Aero One Gurugram | 5.5 BHK Luxury Residencies | Dwarka Expressway
        </title>
        <meta
          name="description"
          content="MVN Aero One Gurugram 5.5 BHK Residencies, the largest ultra-luxury apartments on Dwarka Expressway. 360° Panoramic View."
        />
        <meta
          name="keywords"
          content="MVN Infrastructure, MVN Gurgaon, MVN MALL Gurugram, MVN Aero one, 5BHK in Gurugram, Aero one, MVN Bangalore, mvn.in, MVN Developer."
        />

        <link rel="canonical" href="https://www.mvn.in/aeroone-gurgaon" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MVN Aero One" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="safe for kids" />
        <meta name="allow-search" content="yes" />
        <meta name="expires" content="never" />

        {/* Open Graph data */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MVN Aero One Gurugram | 5.5 BHK Luxury Residencies | Dwarka Expressway"
        />
        <meta
          property="og:description"
          content="MVN Aero One Gurugram 5.5 BHK Residencies, the largest ultra-luxury apartments on Dwarka Expressway. 360° Panoramic View."
        />
        <meta property="og:url" content="https://www.mvn.in/aeroone-gurgaon" />
        <meta property="og:site_name" content="MVN Aero One" />
        <meta
          property="og:image"
          content="https://www.mvn.in/assets/images/micro/hero/aeroone-gurgaon/desktop.webp"
        />

        {/* Twitter Card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.mvn.in/aeroone-gurgaon" />
        <meta
          name="twitter:image"
          content="https://www.mvn.in/assets/images/micro/hero/aeroone-gurgaon/desktop.webp"
        />
        <meta name="twitter:creator" content="@MVN_infra" />
        <meta
          name="twitter:title"
          content="MVN Aero One Gurugram | 5.5 BHK Luxury Residencies | Dwarka Expressway"
        />
        <meta
          name="keywords"
          content="MVN Aero one Gurgaon, MVN MALL Gurugram, MVN Aero one, 5BHK in Gurugram, Aero one, MVN Bangalore, mvn.in, MVN Infrastructure, MVN Gurgaon, MVN Developer"
        />
        <script async>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
          `}
        </script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P7MQ5KWWGL"
        ></script>

        <script async>
          {`
            gtag('js', new Date());
            gtag('config', 'G-P7MQ5KWWGL');
          `}
        </script>

        {/* Google tag (gtag.js) */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T7YNXS59XR"
        ></script>

        <script async>
          {`
            gtag('js', new Date());

            gtag('config', 'G-T7YNXS59XR');
          `}
        </script>

        {/* conversion code */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"
        ></script>

        <script async>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11490416244');
          `}
        </script>

        {/* Meta Pixel Code */}

        <script async>
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
              <img alt="facebook" height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=562105226581202&ev=PageView&noscript=1" />
            `}
        </noscript>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"
        ></script>
        <script async>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-11490416244');
            `}
        </script>

        <script async>
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

        <script async>
          {`
              (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187169642", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
            `}
        </script>

        <script async type="text/javascript">
          {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "q0h6tk9s1j");
            `}
        </script>
      </Helmet>

      <MicroHeader
        scrollToSection={scrollToSection}
        data={data.header}
        isFixed={isHeaderFixed}
      />

      <div class="floating_whatsapp_btn">
        <a
          rel="noopener noreferrer"
          href="https://wa.me/message/6RWQT5CDTMA7C1"
          target="_blank"
        >
          <div class="contact_icon">
            <img src="https://www.mvn.in/assets/icons/whatsapp.png" alt="whatsapp" />
          </div>
        </a>
        <p class="text_icon">Talk to us?</p>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* <div ref={bannerRef}>
            <MicroHero onBannerExit={setIsHeaderFixed} isMainBanner={true} />
          </div> */}

          <div>
            <LivingRoomVideoGurugram
              onBannerExit={setIsHeaderFixed}
              isMainBanner={true}
              data={data.living_room}
              onLoadComplete={() => setLivingRoomLoaded(true)}
              isMobile={isMobile}
            />
          </div>

          <MicroOverview data={data.overview} />

            <div ref={(el) => (sectionRefs.current.Walkthrough = el)}>
              <Walkthrough data={data.walkthrough} />
            </div>

          <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
            <DownloadBrochure
              is360Available={false}
              show360Video={show360Video}
              showAwards={true}
            />
          </div>
          <LargeElevationSection data={data.LargeElevationSection} />

          <LazyLoadComponent
            margin="200px"
            debugName="View360"
            smootherRef={smootherRef}
          >
            {is360Show ? (
              <View360
                data={data.view360}
                onLoadComplete={() => ScrollTrigger.refresh()}
                isMobile={isMobile}
              />
            ) : null}
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="PeacockSection"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
              <PeacockSection
                data={data.peacock_section}
                onLoadComplete={() => setPeacockLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="PartyVideo"
            smootherRef={smootherRef}
          >
            <div>
              <PartyVideo
                data={data.party_video}
                onLoadComplete={() => setPartyLoaded(true)}
                isMobile={isMobile}
              />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MasterBedroom"
            smootherRef={smootherRef}
          >
            <div>
              <MasterBedroom
                data={data.masterBedroom}
                onLoadComplete={() => setMasterBedroomLoaded(true)}
                isMobile={isMobile}
                showAwards={true}
              />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="Consultant"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.consultant = el)}>
              <Consultant data={data.consultant} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MicroLandscape"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MicroLandscape = el)}>
              <ImageGallery data={data.landscape} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MicroElevation"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MicroElevation = el)}>
              <ImageGallery data={data.microElevation} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MicroApartment"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MicroApartment = el)}>
              <ImageGallery data={data.microApartment} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="ConstructionTechnology"
            smootherRef={smootherRef}
          >
            <div
              ref={(el) => (sectionRefs.current.constructionTechnology = el)}
            >
              <ConstructionTechnology data={data.construction_technology} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MicroAmenities"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
              <ParallaxSection section_data={data.amenities} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MicroTypology"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MicroTypology = el)}>
              <Typology onLoadComplete={() => setTypologyLoaded(true)} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MicroFloorPlan"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MicroFloorPlan = el)}>
              <MicroFloorPlan data={data.floorPlan} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MicroLocationMap"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MicroLocationMap = el)}>
              <MicroLocationMap data={data.locationAdvantage} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="MvnMall"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.MVNMALL = el)}>
              <MvnMall data={data.mvnMall} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="NoPolutionZone"
            smootherRef={smootherRef}
          >
            <div ref={(el) => (sectionRefs.current.NoPolutionZone = el)}>
              <ParallaxSection section_data={data.noPollutionZone} />
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent
            margin="200px"
            debugName="FooterForm"
            smootherRef={smootherRef}
          >
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
                    <EnquireForm projectName={"MVN Aeroone"} />
                  </Suspense>
                </div>
              </div>
            </div>
          </LazyLoadComponent>

          <LazyLoadComponent smootherRef={smootherRef}>
            <Footer />
          </LazyLoadComponent>
        </div>
      </div>

      {/* <ScrollTop /> */}
    </>
  );
};

export default MicroPageGurgaon1;
