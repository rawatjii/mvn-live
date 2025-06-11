import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
import MicroHighlights from "../components/MicroPage/Highlights";
import MicroPrice from "../components/MicroPage/Price";
import MicroAmenities from "../components/MicroPage/Amenities";
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
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import Renders from "../components/MicroPage/Renders";
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";
import Rera from "../components/MicroPage/Rera";
import LivingRoomVideo from "../components/MicroPage/LivingRoomVideo";
import GallerySlider from "../components/GallerySlider";
import SecTitle from "../../common/SecTitle/Index";
import MicroHeader from "../components/MicroHeader";
import { API_URL } from "../../config/config";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/apiHelper";
import IframeSection from "../components/MicroPage/IframeSection";
import HeroSection from "../components/MicroPage/Hero/Index";
import YtIframe from "../components/MicroPage/YtIframe";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import View360 from "../components/MicroPage/360";
import Consultant from "../components/MicroPage/Consultant";
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import ConstructionTechnology from "../components/MicroPage/ConstructionTechnology";
import ParallaxSection from "../../common/ParallaxSection";
import Footer from "../components/Footer";
import MvnMall from "../components/MicroPage/MvnMall";
import MicroSizes from "../components/MicroPage/Sizes";
import Typology from "../components/homepage/Typology";
import CustomIframe from "../components/MicroPage/CustomIframe";
import LazyLoadComponent from "../../common/LazyLoadComponent";

const headerSidebarDesktopImg = `${API_URL}images/aero-gurgaon/header/sidebar.webp`;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const headerData = {
  sidebarAsset: {
    desktop: headerSidebarDesktopImg,
    mobile: headerSidebarDesktopImg,
  },
  title: "MVN AeroOne, Gurugram",
  sidebar_section: [
    {
      section_title: "Overview",
      link: "microOverview",
    },
    {
      section_title: "Walkthrough",
      link: "Walkthrough",
    },
    {
      section_title: "MVN ID Brochure",
      link: "downloadBrochure",
    },
    {
      section_title: "The Living Room",
      link: "LIVINGROOM",
    },
    {
      section_title: "Landscape",
      link: "MicroLandscape",
    },
    {
      section_title: "Elevation",
      link: "MicroElevation",
    },
    {
      section_title: "Apartment",
      link: "MicroApartment",
    },
    {
      section_title: "Construction Technology",
      link: "constructionTechnology",
    },
    {
      section_title: "Amenities",
      link: "MicroAmenities",
    },
    {
      section_title: "Typology",
      link: "MicroTypology",
    },
    {
      section_title: "Floor Plans",
      link: "MicroFloorPlan",
    },
    {
      section_title: "Location Map",
      link: "MicroLocationMap",
    },
    {
      section_title: "MVN Mall",
      link: "MVNMALL",
    },
    {
      section_title: "Connections MVN Mall",
      link: "NoPolutionZone",
    },
  ],
};

const MicroPage = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const { projectName } = useParams();

  const { data: basicData, loading } = useFetchData(`project/${projectName}`);
  const { data: projectSections, loading: sectionsLoading } = useFetchData(
    `project/${basicData?.id}/project-section`
  );

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
  }, [basicData, projectSections]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && basicData && basicData.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <>
      <MicroHeader
        scrollToSection={scrollToSection}
        data={headerData}
        isFixed={isHeaderFixed}
      />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection projectId={basicData?.id} />

          {projectSections &&
            projectSections.map((section, secIndex) => {
              const sectionKey = `${section.section_type}_${secIndex}`;
              return(
                <React.Fragment key={sectionKey}>
                  {section.section_type === "overview" && (
                    <div ref={(el) => (sectionRefs.current.microOverview = el)}>
                      <MicroOverview rera={basicData?.rera_no} data={section} />
                    </div>
                  )}
                  
                  {section.section_type === "elevation" && (
                    <LazyLoadComponent
                      margin="200px"
                      debugName="elevation"
                    >
                      <div ref={(el) => (sectionRefs.current[`elevation_${secIndex}`] = el)}>
                        <LargeElevationSection data={section} />
                      </div>
                    </LazyLoadComponent>
                  )}

                  {section.section_type === "walkthrough" && (
                    <LazyLoadComponent
                      margin="200px"
                      debugName="walkthrough"
                    >
                      <div ref={(el) => (sectionRefs.current.Walkthrough = el)}>
                        <YtIframe data={section} subs_btn={true} />
                      </div>
                    </LazyLoadComponent>
                  )}

                </React.Fragment>
              )
            })}

            {projectSections && (
              <LazyLoadComponent margin="200px" debugName="downloadBrochure">
                <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
                  <DownloadBrochure
                    showAwards={basicData?.batch}
                    name={basicData?.name}
                  />
                </div>
              </LazyLoadComponent>
            )}
          

          {projectSections &&
            projectSections.map((section, secIndex) => {

              if (section.section_type == "overview" && section.yt_url){
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <CustomIframe
                      data={section.yt_url}
                    />
                  </LazyLoadComponent>
                );
              }

              if (section.section_type == "360-views"){
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <View360
                      sectionId={section.section_type + secIndex}
                      data={section}
                      onLoadComplete={() => ScrollTrigger.refresh()}
                    />
                  </LazyLoadComponent>
                );
              }
                

              if (section.section_type == "livingroom") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
                      <PeacockSection
                        data={section}
                        onLoadComplete={() => setPeacockLoaded(true)}
                      />
                    </div>
                  </LazyLoadComponent>
                );
              }

              if (section.section_type == "party") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div ref={(el) => (sectionRefs.current.party = el)}>
                      <PeacockSection
                        data={section}
                        onLoadComplete={() => setPeacockLoaded(true)}
                      />
                    </div>
                  </LazyLoadComponent>
                );
              }

              if (section.section_type == "masterbedroom") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div ref={(el) => (sectionRefs.current.party = el)}>
                      <PeacockSection
                        data={section}
                        onLoadComplete={() => setPeacockLoaded(true)}
                      />
                    </div>
                  </LazyLoadComponent>
                );
              }

              if (section.section_type == "consultant") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div ref={(el) => (sectionRefs.current.consultant = el)}>
                      <Consultant data={section} />
                    </div>
                  </LazyLoadComponent>
                );
              }

              if (
                section.section_type == "landscape" ||
                section.section_type == "galleries" ||
                section.section_type == "landscapes" ||
                section.section_type == "sm-elevation" ||
                section.section_type == "apartment"
              ) {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div ref={(el) => (sectionRefs.current.MicroLandscape = el)}>
                      <ImagesGallery section_name={section.section_type == "landscape" ? 'landscapes' : section.section_type == "sm-elevation" ? 'elevation' : ''} data={section} showTitle={section.section_type == "landscapes" || section.section_type == "galleries"  ? false : true} />
                    </div>
                  </LazyLoadComponent>
                );
              }

              if (section.section_type == "construction") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div
                      ref={(el) =>
                        (sectionRefs.current.constructionTechnology = el)
                      }
                    >
                      <ConstructionTechnology data={section} />
                    </div>
                  </LazyLoadComponent>
                  
                );
              }

              if (section.section_type == "amenities" || section.section_type == "connection-mall") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
                      <ParallaxSection section_data={section} />
                    </div>
                  </LazyLoadComponent>
                  
                );
              }

              if (section.section_type == "typologies" ) {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
                      <Typology data={section} onLoadComplete={() => setTypologyLoaded(true)} />
                    </div>
                  </LazyLoadComponent>
                  
                );
              }

              if (section.section_type == "location-map") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div
                      ref={(el) => (sectionRefs.current.MicroLocationMap = el)}
                    >
                      <MicroLocationMap data={section} />
                    </div>
                  </LazyLoadComponent>
                  
                );
              }

              if (section.section_type == "mvn-mall") {
                return (
                  <LazyLoadComponent margin="200px" debugName={section.section_type} >
                    <div
                      ref={(el) => (sectionRefs.current.MicroLocationMap = el)}
                    >
                      <MvnMall data={section} />
                    </div>
                  </LazyLoadComponent>
                  
                );
              }
            })}

            {projectSections && (
              <>
                <LazyLoadComponent margin="200px">
                  <div className="container-fluid micro_footer">
                    <div className="row ">
                      <div className="col-sm-6 px-0">
                        <Enquire />
                      </div>
                      <div className="col-sm-6 px-0">
                        <EnquireForm projectName={projectName} />
                      </div>
                    </div>
                  </div>
                </LazyLoadComponent>

                <LazyLoadComponent margin="200px">
                  <Footer />
                </LazyLoadComponent>
              </>
            )}

            

          
        </div>
      </div>
    </>
  );
};

export default MicroPage;
