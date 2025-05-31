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

  console.log("projectSections", projectSections);

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
              if (section.section_type == "overview") {
                return (
                  <div ref={(el) => (sectionRefs.current.microOverview = el)}>
                    <MicroOverview rera={basicData?.rera_no} data={section} />
                  </div>
                );
              }
              if (section.section_type == "elevation")
                return <LargeElevationSection data={section} />;
              if (section.section_type == "walkthrough") {
                return (
                  <div ref={(el) => (sectionRefs.current.Walkthrough = el)}>
                    <YtIframe data={section} subs_btn={true} />
                  </div>
                );
              }
            })}

          <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
            <DownloadBrochure
              showAwards={basicData?.batch}
              name={basicData?.name}
            />
          </div>

          {projectSections &&
            projectSections.map((section, secIndex) => {
              if (section.section_type == "threesixtyview")
                return (
                  <View360
                    data={section}
                    onLoadComplete={() => ScrollTrigger.refresh()}
                    // isMobile={isMobile}
                  />
                );

              if (section.section_type == "livingroom") {
                return (
                  <div ref={(el) => (sectionRefs.current.LIVINGROOM = el)}>
                    <Suspense fallback="">
                      <PeacockSection
                        data={section}
                        onLoadComplete={() => setPeacockLoaded(true)}
                      />
                    </Suspense>
                  </div>
                );
              }

              if (section.section_type == "party") {
                return (
                  <div ref={(el) => (sectionRefs.current.party = el)}>
                    <Suspense fallback="">
                      <PeacockSection
                        data={section}
                        onLoadComplete={() => setPeacockLoaded(true)}
                      />
                    </Suspense>
                  </div>
                );
              }

              if (section.section_type == "masterbedroom") {
                return (
                  <div ref={(el) => (sectionRefs.current.party = el)}>
                    <PeacockSection
                      data={section}
                      onLoadComplete={() => setPeacockLoaded(true)}
                    />
                  </div>
                );
              }

              if (section.section_type == "consultant") {
                return (
                  <div ref={(el) => (sectionRefs.current.consultant = el)}>
                    <Consultant data={section} />
                  </div>
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
                  <div ref={(el) => (sectionRefs.current.MicroLandscape = el)}>
                    <ImagesGallery data={section} />
                  </div>
                );
              }

              if (section.section_type == "construction") {
                return (
                  <div
                    ref={(el) =>
                      (sectionRefs.current.constructionTechnology = el)
                    }
                  >
                    <ConstructionTechnology data={section} />
                  </div>
                );
              }

              if (section.section_type == "amenities") {
                return (
                  <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
                    <ParallaxSection section_data={section} />
                  </div>
                );
              }

              if (section.section_type == "location-map") {
                return (
                  <div
                    ref={(el) => (sectionRefs.current.MicroLocationMap = el)}
                  >
                    <MicroLocationMap data={section} />
                  </div>
                );
              }
            })}

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

          <Footer />

          {/*
          {data.rera && data.rera.isshow === true && <Rera data={data.rera} />}
          {data.LargeElevationSection &&
            data.LargeElevationSection.isAllow === true && (
              <LargeElevationSection data={data.LargeElevationSection} />
            )}
          {data.video1 && data.video1.isVdo === true && (
            <PeacockSection data={data} />
          )}
          /~ {data.video2.isVdo === true && <Video2 data={data} />} ~/
          {data.living_room_video && data.living_room_video.isVdo === true && (
            <LivingRoomVideo data={data} />
          )}
          {data.video3 && data.video3.isVdo === true && (
            <PartyVideo data={data} />
          )}

          {data.masterBedroom && data.masterBedroom.isVdo === true && (
            <MasterBedroom data={data} />
          )}

          {data.walkthrough && data.walkthrough.isshow === true && (
            <Walkthrough data={data} />
          )}
          {data.highlightbg && data.highlightbg.isshow ? (
            <div
              style={{ backgroundImage: `url(${data.highlightbg.img})` }}
              className="highlightbg"
            >
              <MicroHighlights data={data.highlight} />
            </div>
          ) : (
            <MicroHighlights data={data.highlight} />
          )}

          <MicroPrice />
          {data.amenities && <MicroAmenities data={data.amenities} />}
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <MicroMasterPlan data={data.masterImage} />
              </div>
              <div className="col-sm-6">
                <MicroFloorPlan data={data.floorPlan} />
              </div>
            </div>
          </div>

          <MicroLocationMap data={data.locationAdvantage} />
          {data.gallery && (
            <div className="container py-5 my-5">
              <SecTitle className="text-center color style1">
                <h4 className="title">Gallery</h4>
              </SecTitle>
              {data.gallery && data.gallery.isshow === true && (
                <GallerySlider
                  data={data.gallery}
                  slidesPerView={3}
                  spaceBetween={20}
                  navigation={true}
                />
              )}
            </div>
          )}

          {data.Slides && data.Slides.isshow === true && (
            <Slides data={data.Slides} />
          )}

          <div className="container-fluid micro_footer">
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Enquire />
              </div>
              <div className="col-sm-6 px-0">
                <EnquireForm projectName={projectName} />
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default MicroPage;
