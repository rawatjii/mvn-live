import React, { useEffect, useState, useRef ,Suspense} from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import MicroHeader from "../components/MicroHeader";
const MicroOverview = React.lazy(()=>import("../components/MicroPage/Overview"));
const MicroAmenities = React.lazy(()=>import("../components/MicroPage/Amenities"));
const MicroLocationMap = React.lazy(()=>import("../components/MicroPage/LocationMap"));
const Enquire = React.lazy(()=>import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(()=>import("../components/homepage/EnquireForm"));
const Walkthrough = React.lazy(()=>import("../components/MicroPage/Walkthrough"));
const Footer = React.lazy(()=>import("../components/Footer"));
const DownloadBrochure = React.lazy(()=>import("../components/MicroPage/DownloadBrochure"));
const ImagesGallery = React.lazy(()=>import("../components/MicroPage/ImagesGallery"));
const ScrollTriggerFrames = React.lazy(()=>import("../components/MicroPage/ScrollTriggerFrames"));
const LottieAnimationSection = React.lazy(()=>import("../components/MicroPage/LottieAnimationSection"));
const BangaloreElevationSection = React.lazy(()=>import("../components/MicroPage/bangalore/BangaloreElevationSection"));
const SliderTypology = React.lazy(()=>import("../components/MicroPage/bangalore/SliderTypology"));
import bannerImg from "../assets/bangalore/laoder/banner.png"
import livingRoomImg from "../assets/bangalore/laoder/living-room.webp"
import masterBedroomImg from "../assets/bangalore/laoder/master-bedroom.webp"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MicroPageBangalore = ({ data, loadingCount, setLoadingCount }) => {
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


      <MicroHeader scrollToSection={scrollToSection} data={data.header} isFixed={ isHeaderFixed }/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          <div ref={bannerRef}>
            <LottieAnimationSection 
            data={data.micro_hero_section}
            onLoadComplete={() => setHeroLoaded(true)}
            onBannerExit={setIsHeaderFixed} 
            isMainBanner={true} 
            backgroundImg={bannerImg}
            />
          </div>
          {/* Render other components only after Hero Section is loaded */}
          <div ref={(el) => (sectionRefs.current.microOverview = el)}>
          <Suspense fallback="">
            <MicroOverview data={data.overview} />
          </Suspense>
          </div>
          <BangaloreElevationSection/>

          
          <div
            ref={(el) =>
              (sectionRefs.current.Walkthrough = el)
            }
          >
          <Suspense fallback="">
            <Walkthrough data={data.walkthrough}/>
            </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.downloadBrochure = el)
            }
          >
          <Suspense fallback="">
            <DownloadBrochure name="Download MVN AERO ONE ID Brochure" />
            </Suspense>
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.livingRoom = el)
            }>
          <Suspense fallback="">
            <LottieAnimationSection data={data.living_room} 
            backgroundImg={livingRoomImg}/>
            {/* <ScrollTriggerFrames 
            data={data.living_room}
            onLoadComplete={() => setLivingRoomLoaded(true)}
            /> */}
            </Suspense>
          </div>
          <div 
            ref={(el) =>
              (sectionRefs.current.masterBedroom = el)
            }>
          <Suspense fallback="">
            <LottieAnimationSection 
            data={data.masterBedroom}
            onLoadComplete={() => setMasterBedroomLoaded(true)}
            isMainBanner={true} 
            backgroundImg={masterBedroomImg}
            />
            </Suspense>
          </div>
          <div
            ref={(el) =>
              (sectionRefs.current.MicroLandscape = el)
            }
          >
          <Suspense fallback="">
            <ImagesGallery data={data.landscape}/>
            </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroElevation = el)
            }
          >
          <Suspense fallback="">
            <ImagesGallery data={data.microElevation}/>
            </Suspense>
          </div>

         <div
            ref={(el) =>
              (sectionRefs.current.MicroApartment = el)
            }
          >
          <Suspense fallback="">
            <ImagesGallery data={data.microApartment}/>
            </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroAmenities = el)
            }>
          <Suspense fallback="">
            <MicroAmenities section_data={data.amenities} />
            </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroTypology = el)
            }
          >
          <Suspense fallback="">
            <SliderTypology data={data.typologies} onLoadComplete={() => setTypologyLoaded(true)} />
            </Suspense>
          </div>

          <div
            ref={(el) =>
              (sectionRefs.current.MicroLocationMap = el)
            }
          >
          <Suspense fallback="">
            <MicroLocationMap
              data={data.locationAdvantage}
            />
            </Suspense>
          </div>

          <div
            className="container-fluid micro_footer"
            ref={(el) => (sectionRefs.current.enquiryForm = el)}
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

export default MicroPageBangalore;



