import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import MicroHeader from "../components/MicroHeader";
import HeroSection from "../components/MicroPage/Hero/Index";
import MicroOverview from "../components/MicroPage/Overview";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import YtIframe from "../components/MicroPage/YtIframe";
import DownloadBrochure from "../components/MicroPage/DownloadBrochure";
import CustomIframe from "../components/MicroPage/CustomIframe";
import View360 from "../components/MicroPage/360";
import PeacockSection from "../components/MicroPage/PeacockSection";
import Consultant from "../components/MicroPage/Consultant";
import ImagesGallery from "../components/MicroPage/ImagesGallery";
import ConstructionTechnology from "../components/MicroPage/ConstructionTechnology";
import ParallaxSection from "../../common/ParallaxSection";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import MvnMall from "../components/MicroPage/MvnMall";
import Typology from "../components/homepage/Typology";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Footer from "../components/Footer";
import { API_URL } from "../../config/config";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/apiHelper";
import LazyLoadComponent from "../../common/LazyLoadComponent";
import SliderTypology from "../components/MicroPage/bangalore/SliderTypology";
import FeatureSection from "../components/MicroPage/athens/FeatureSection";
import MicroFloorPlan from "../components/MicroPage/FloorPlan";

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
  const [overviewIframe, setOverviewIframe] = useState(null);
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const { projectName } = useParams();

  const { data: basicData, loading } = useFetchData(`project/${projectName}`);
  const { data: projectSections, loading: sectionsLoading } = useFetchData(
    `project/${basicData?.id}/project-section`
  );

  // Sort projectSections by seq
  // const sortedProjectSections = projectSections
  //   ? [...projectSections].sort((a, b) => a.seq - b.seq)
  //   : [];

  // useEffect(() => {
  //   if (sortedProjectSections.length > 0) {
  //     console.log(sortedProjectSections, "Sorted Project Sections");
  //   }
  // }, [sortedProjectSections]);

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
  }, [basicData,projectSections]);

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

          {projectSections?.map((section, secIndex) => {
            const sectionKey = `${section.section_type}_${secIndex}`;
            return (
              <React.Fragment key={sectionKey}>
                {section.section_type === "overview" && (
                  <LazyLoadComponent margin="200px" debugName="overview">
                    <div ref={(el) => (sectionRefs.current.microOverview = el)}>
                      <MicroOverview rera={basicData?.rera_no} data={section} setOverviewIframe={setOverviewIframe} />
                      {/* {section.yt_url && <CustomIframe data={section.yt_url} />} */}
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "elevation" && (
                  <LazyLoadComponent margin="200px" debugName="elevation">
                    <div
                      ref={(el) =>
                        (sectionRefs.current[`elevation_${secIndex}`] = el)
                      }
                    >
                      <LargeElevationSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}



                {section.section_type === "walkthrough" && (
                  <LazyLoadComponent margin="200px" debugName="walkthrough">
                    <div ref={(el) => (sectionRefs.current.Walkthrough = el)}>
                      <YtIframe data={section} subs_btn={true} />
                    </div>
                  </LazyLoadComponent>
                )}

                {projectSections?.length > 0 && projectName.includes('mvn-mall') && secIndex==1 && (
                  <LazyLoadComponent margin="200px" debugName="downloadBrochure">
                    <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
                      <DownloadBrochure
                        showAwards={basicData?.batch}
                        name={basicData?.name}
                      />
                    </div>
                  </LazyLoadComponent>
                )}

                {overviewIframe && projectSections?.length > 0 && projectName.includes('mvn-mall') && secIndex==1 && (
                  <LazyLoadComponent margin="200px" debugName="mvn-mall">
                    <CustomIframe data={overviewIframe} />
                  </LazyLoadComponent>
                )}
              
                {section.section_type === "threesixtyview" && (
                  <LazyLoadComponent margin="200px" debugName="threesixtyview">
                    <View360
                      sectionId={section.section_type + secIndex}
                      data={section}
                      onLoadComplete={() => ScrollTrigger.refresh()}
                    />
                  </LazyLoadComponent>
                )}

                {section.section_type === "Peacock" && (
                  <LazyLoadComponent margin="200px" debugName="livingroom">
                    <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
                      <PeacockSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "party" && (
                  <LazyLoadComponent margin="200px" debugName="party">
                    <div ref={(el) => (sectionRefs.current.party = el)}>
                      <PeacockSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "masterbedroom" && (
                  <LazyLoadComponent margin="200px" debugName="masterbedroom">
                    <div ref={(el) => (sectionRefs.current.masterbedroom = el)}>
                      <PeacockSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "consultant" && (
                  <LazyLoadComponent margin="200px" debugName="consultant">
                    <div ref={(el) => (sectionRefs.current.consultant = el)}>
                      <Consultant data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {(section.section_type === "landscape" ||
                  section.section_type === "galleries" ||
                  section.section_type === "landscapes" ||
                  section.section_type === "sm-elevation" ||
                  section.section_type === "apartment") && (
                  <LazyLoadComponent margin="200px" debugName={section.section_type}>
                    <div ref={(el) => (sectionRefs.current.MicroLandscape = el)}>
                      <ImagesGallery
                        section_name={
                          section.section_type === "landscape"
                            ? "landscapes"
                            : section.section_type === "sm-elevation"
                            ? "elevation"
                            : ""
                        }
                        data={section}
                        showTitle={
                          section.section_type === "landscapes" ||
                          section.section_type === "galleries"
                            ? false
                            : true
                        }
                      />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "key-highlights" && (
                  <LazyLoadComponent margin="200px" debugName="keyHighlights">
                    <div
                      ref={(el) =>
                        (sectionRefs.current.constructionTechnology = el)
                      }
                    >
                      <FeatureSection data={section}/>
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "construction" && (
                  <LazyLoadComponent margin="200px" debugName="construction">
                    <div
                      ref={(el) =>
                        (sectionRefs.current.constructionTechnology = el)
                      }
                    >
                      <ConstructionTechnology data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {(section.section_type === "amenities" ||
                  section.section_type === "connection-mall") && (
                  <LazyLoadComponent margin="200px" debugName={section.section_type}>
                    <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
                      <ParallaxSection section_data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "typologies" && (
                  <LazyLoadComponent margin="200px" debugName="typologies">
                    <div ref={(el) => (sectionRefs.current.MicroTypology = el)}>
                      <Typology data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "location-map" && (
                  <LazyLoadComponent margin="200px" debugName="location-map">
                    <div
                      ref={(el) => (sectionRefs.current.MicroLocationMap = el)}
                    >
                      <MicroLocationMap data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "mvn-mall" && (
                  <LazyLoadComponent margin="200px" debugName="mvn-mall">
                    <div ref={(el) => (sectionRefs.current.MVNMALL = el)}>
                      <MvnMall data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "floor-plan" && (
                  <LazyLoadComponent margin="200px" debugName="floor-plan">
                    <div ref={(el) => (sectionRefs.current.MVNMALL = el)}>
                      {section.is_type == 'video' ? <MicroFloorPlan data={section} /> : <SliderTypology data={section} />}
                    </div>
                  </LazyLoadComponent>
                )}
              </React.Fragment>
            );
          })}

        

          {projectSections?.length > 0 && (
            <>
              <LazyLoadComponent margin="200px">
                <div className="container-fluid micro_footer">
                  <div className="row">
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