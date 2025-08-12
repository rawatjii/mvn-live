import React, { useEffect, useState, useRef, Suspense } from "react";
import MicroOverview from "../components/MicroPage/Overview";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Footer from "../components/Footer";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Helmet } from "react-helmet";
import MicroHeader from "../components/MicroHeader";
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import SliderTypology from "../components/MicroPage/bangalore/SliderTypology";
import AthensBanner from "../components/MicroPage/athens/AthensBanner";
const FeatureSection = React.lazy(() => import("../components/MicroPage/athens/FeatureSection"));
const ParallaxSection = React.lazy(() => import("../../common/ParallaxSection"));

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
 
const MicroPageGurgaonPhase2 = ({ data, loadingCount, setLoadingCount }) => {
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

  return (
    <>

      
      <Helmet>

        <title> MVN Athens Phase-2 | Modern Residences in Sector-5, Sohna, Gurugram </title>
        <meta name="keywords" content="MVN Athens Phase-2, MVN Athens Sohna, MVN Athens Gurugram, Residential projects in Sohna, Flats in Sector-5 Sohna, Affordable housing Sohna Gurugram" />
        <meta name="description" content="MVN Athens Phase-2 in Sector-5, Sohna, Gurugram offers stylish, well-connected homes with modern amenities for a comfortable lifestyle." />
        <link rel="canonical" href="https://www.mvn.in/mvn-athens-gurgaon-phase-2" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="MVN Athens Gurugram" />  
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="YahooSeeker" content="noindex, nofollow" />
        <meta name="msnbot" content="noindex, nofollow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="safe for kids" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MVN Athens Phase-2 | Modern Residences in Sector-5, Sohna, Gurugram" />
        <meta property="og:description" content="MVN Athens Phase-2, MVN Athens Sohna, MVN Athens Gurugram, Residential projects in Sohna, Flats in Sector-5 Sohna, Affordable housing Sohna Gurugram." />
        <meta property="og:url" content="https://www.mvn.in/mvn-athens-gurgaon-phase-2" />
        <meta property="og:site_name" content="MVN Athens Gurugram" />
        <meta property="og:image" content="https://img.websitedesigningcompany.co.in/public/assets/logo_white.webp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@MVN_infra" />        
        <meta name="twitter:title" content="MVN Athens Phase-2 | Modern Residences in Sector-5, Sohna, Gurugram" />
        <meta name="twitter:description" content="MVN Athens Phase-2 in Sector-5, Sohna, Gurugram offers stylish, well-connected homes with modern amenities for a comfortable lifestyle." />
        <meta name="twitter:creator" content="@MVN_infra" />
        <meta name="twitter:image" content="https://img.websitedesigningcompany.co.in/public/assets/logo_white.webp" />

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
              <img  alt="facebook" height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=562105226581202&ev=PageView&noscript=1" />
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

      <MicroHeader scrollToSection={scrollToSection} data={data.header} isFixed={ isHeaderFixed }/>
      <div id="smooth-wrapper">
        <div id="smooth-content">

        <div ref={bannerRef}
          >
          <AthensBanner data={data.banner}
            onBannerExit={setIsHeaderFixed} 
            isMainBanner={true}/>
          </div>
          
          <div
            ref={(el) =>
              (sectionRefs.current.microOverview = el)
            }
          >
          <MicroOverview data={data.overview} heroLoadedStatus={heroLoaded} /> {/*no isssue*/}
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
            <DownloadBrochure name="DOWNLOAD MVN ATHENS ID BROCHURE" projectName="MVN Athens Gurgaon PH-2" />
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.gallery = el)
            }
          >
            <ImagesGallery data={data.gallery}/>
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.features = el)
            }
          >
          <Suspense>
            <FeatureSection data={data.features}/>
          </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroAmenities = el)
            }>
              <Suspense>
                <ParallaxSection section_data={data.amenities} />
              </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroTypology = el)
            }
          >
            <SliderTypology data={data.typologies} onLoadComplete={() => setTypologyLoaded(true)} projectName="MVN Athens Gurgaon PH-2" />
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
            className="container-fluid micro_footer"
            ref={(el) => (sectionRefs.current.Enuqiry = el)}
          >
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Enquire />
              </div>
              <div className="col-sm-6 px-0">
                <EnquireForm
                  projectName={"MVN Athens Gurgaon PH-2"}
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

export default MicroPageGurgaonPhase2;
