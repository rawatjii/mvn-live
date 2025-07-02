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
import { setCommonState } from "../../redux/commonSlice";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import injectScripts from "../components/InjectScripts";

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
  const [metaData, setMetaData] = useState([]);
  const dispatch = useDispatch();

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
    dispatch(setCommonState({ id: basicData?.id, isMicro: true }));

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
  }, [basicData, dispatch]);

  useEffect(() => {
    const headDataArray = basicData?.head_data?.split("\n");

    // Convert each string element to its appropriate type
    const parsedArray = headDataArray?.map((item) => item);

    parsedArray?.map((item) => {
      setMetaData((prevState) => [...prevState, item]);
    });
  }, [basicData]);

  useEffect(() => {
    var headDataContainer;
    if (basicData?.head_data) {
      headDataContainer = document.createElement("div");
      headDataContainer.innerHTML = basicData.head_data;
      Array.from(headDataContainer.children).forEach((child) => {
        document.head.appendChild(child);
      });
    }

    return () => {
      if (headDataContainer) {
        Array.from(headDataContainer.children).forEach((child) => {
          document.head.removeChild(child);
        });
      }
    };
  }, [basicData]);

  if (loading){
    return (
      <div className="loading_screen" style={{position:'relative'}}>
        {projectName?.includes('aeroone-gurgaon') ? (
          <img src={window.innerWidth < 768 ? API_URL + "images/aero-gurgaon/loader_sm.webp" : API_URL + "loader/homepage_loading.webp"} alt="loading screen" className="img-fluid w-100" />
        ) : projectName?.includes('mvn-mall') ? <img src={window.innerWidth < 768 ? API_URL + "loader/mvnMall_loader_sm.webp" : API_URL + "loader/mvnMall_loader.webp"} alt="loading screen" className="img-fluid w-100" /> : projectName?.includes('mvn-athens-gurgaon-phase-1') ? <img src={window.innerWidth < 768 ? API_URL + "images/athens-ph1/loader_sm.webp" : API_URL + "images/athens-ph1/loader.webp"} alt="loading screen" className="img-fluid w-100" /> : projectName?.includes('mvn-athens-gurgaon-phase-2') ? <img src={window.innerWidth < 768 ? API_URL + "images/athens-ph2/loader_sm.webp" : API_URL + "images/athens-ph2/loader.webp"} alt="loading screen" className="img-fluid w-100" /> : projectName?.includes('mvn-athens-faridabad') ? <img src={window.innerWidth < 768 ? API_URL + "images/athens-faridabad/loader_sm.webp" : API_URL + "images/athens-faridabad/loader.webp"} alt="loading screen" className="img-fluid w-100" /> : undefined}
        
        <p className="loading" style={{position:'fixed ', top:'calc(100vh - 40px)', width:'100%', textAlign:'center', textTransform:'uppercase', fontSize:window.innerWidth < 768 ? '11px' : '14px', letterSpacing:'3px', textShadow:'0 0 10px #000', fontWeight:600}}>Loading Experience...</p>
      </div>
    ) ;
  }
  if (!loading && basicData && basicData.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <>
      <Helmet>
        {basicData?.meta_title && <title>{basicData.meta_title}</title>}
        {basicData?.meta_description && (
          <meta name="description" content={basicData.meta_description} />
        )}
        {basicData?.meta_keywords && (
          <meta name="keywords" content={basicData.meta_keywords} />
        )}
        {/* {metaData && metaData?.length && metaData?.map((item,index)=>(item))} */}
        {basicData?.head_data && (
          <div dangerouslySetInnerHTML={{ __html: basicData.head_data }} />
        )}
        {basicData?.footer_data && parse(basicData.footer_data)}
      </Helmet>
      
      <MicroHeader
        scrollToSection={scrollToSection}
        data={headerData}
        isFixed={isHeaderFixed}
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection projectId={basicData?.id} projectName={projectName} />

          {projectSections?.map((section, secIndex) => {
            const sectionKey = `${section.section_type}_${secIndex}`;
            return (
              <React.Fragment key={sectionKey}>
                {(section.section_type === "overview") && (
                    <div ref={(el) => {sectionRefs.current.overview = el, sectionRefs.current.sizes = el}}>
                      <MicroOverview
                        rera={basicData?.rera_no}
                        data={section}
                        setOverviewIframe={setOverviewIframe}
                        onBannerExit={setIsHeaderFixed} 
                      />
                      {/* {section.yt_url && <CustomIframe data={section.yt_url} />} */}
                    </div>
                )}

                {section.section_type === "elevation" && (
                  <LazyLoadComponent margin="200px" debugName="elevation">
                    <div ref={(el) => (sectionRefs.current.elevation = el)}>
                      <LargeElevationSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "walkthrough" && (
                  <LazyLoadComponent margin="200px" debugName="walkthrough">
                    <div ref={(el) => (sectionRefs.current.walkthrough = el)}>
                      <YtIframe data={section} subs_btn={true} />
                    </div>
                  </LazyLoadComponent>
                )}

                {/* {projectSections?.length > 0 && projectName.includes('mvn-mall') && secIndex==1 && (
                  <LazyLoadComponent margin="200px" debugName="downloadBrochure">
                    <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
                      <DownloadBrochure
                        showAwards={basicData?.batch}
                        name={basicData?.name}
                      />
                    </div>
                  </LazyLoadComponent>
                )} */}

                {projectSections?.length > 0 &&
                  (projectName.includes("mvn-mall") ||
                    projectName.includes("mvn-athens-gurgaon-phase-1") ||
                    projectName.includes("mvn-athens-gurgaon-phase-2") ||
                    projectName.includes("mvn-athens-faridabad")) &&
                  secIndex == 1 && (
                    <LazyLoadComponent
                      margin="200px"
                      debugName="downloadBrochure"
                    >
                      <div
                        ref={(el) =>
                          (sectionRefs.current.downloadBrochure = el)
                        }
                      >
                        <DownloadBrochure
                          showAwards={basicData?.batch}
                          name={basicData?.name}
                        />
                      </div>
                    </LazyLoadComponent>
                  )}

                {projectSections?.length > 0 &&
                  projectName.includes("aeroone-gurgaon") &&
                  secIndex == 5 && (
                    <LazyLoadComponent
                      margin="200px"
                      debugName="downloadBrochure"
                    >
                      <div
                        ref={(el) =>
                          (sectionRefs.current.downloadBrochure = el)
                        }
                      >
                        <DownloadBrochure
                          showAwards={basicData?.batch}
                          name={basicData?.name}
                        />
                      </div>
                    </LazyLoadComponent>
                  )}

                {overviewIframe &&
                  projectSections?.length > 0 &&
                  projectName.includes("mvn-mall") &&
                  secIndex == 1 && (
                    <LazyLoadComponent margin="200px" debugName="mvn-mall">
                      <CustomIframe data={overviewIframe} />
                    </LazyLoadComponent>
                  )}

                {section.section_type === "threesixtyview" && (
                  <LazyLoadComponent margin="200px" debugName="threesixtyview">
                    <div ref={(el) => (sectionRefs.current[section.section_type] = el)}>
                      <View360
                        sectionId={section.section_type + secIndex}
                        data={section}
                        onLoadComplete={() => ScrollTrigger.refresh()}
                      />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "Peacock" && (
                  <LazyLoadComponent margin="200px" debugName="livingroom"> 
                    <div ref={(el) => (sectionRefs.current[section.section_type] = el)}>
                      <PeacockSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "party" && (
                  <LazyLoadComponent margin="200px" debugName="party">
                    <div ref={(el) => (sectionRefs.current[section.section_type] = el)}>
                      <PeacockSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "masterbedroom" && (
                  <LazyLoadComponent margin="200px" debugName="masterbedroom">
                    <div ref={(el) => (sectionRefs.current[section.section_type] = el)}>
                      <PeacockSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "consultant" && (
                  <LazyLoadComponent margin="200px" debugName="consultant">
                    <div ref={(el) => (sectionRefs.current[section.section_type] = el)}>
                      <Consultant data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {(section.section_type === "landscape" ||
                  section.section_type === "galleries" ||
                  section.section_type === "landscapes" ||
                  section.section_type === "sm-elevation" ||
                  section.section_type === "apartment") && (
                  <LazyLoadComponent
                    margin="200px"
                    debugName={section.section_type}
                  >
                    <div
                      ref={(el) => (sectionRefs.current[section.section_type] = el)}
                    >
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
                        (sectionRefs.current[section.section_type] = el)
                      }
                    >
                      <FeatureSection data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "construction" && (
                  <LazyLoadComponent margin="200px" debugName="construction">
                    <div
                      ref={(el) =>
                        (sectionRefs.current[section.section_type] = el)
                      }
                    >
                      <ConstructionTechnology data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {(section.section_type === "amenities" ||
                  section.section_type === "connection-mall") && (
                  <LazyLoadComponent
                    margin="200px"
                    debugName={section.section_type}
                  >
                    <div
                      ref={(el) => {sectionRefs.current[section.section_type] = el}}
                    >
                      <ParallaxSection section_data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "typologies" && (
                  <LazyLoadComponent margin="200px" debugName="typologies">
                      {/* <div
                        ref={(el) => (sectionRefs.current[section.section_type] = el)}
                       className="outer_section">
                        <Typology data={section} />
                      </div> */}
                      <Typology data={section} />
                  </LazyLoadComponent>
                )}

                {section.section_type === "location-map" && (
                  <LazyLoadComponent margin="200px" debugName="location-map">
                    <div
                      ref={(el) => (sectionRefs.current[section.section_type] = el)}
                    >
                      <MicroLocationMap
                        data={section}
                        projectName={projectName}
                      />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "mvn-mall" && (
                  <LazyLoadComponent margin="200px" debugName="mvn-mall">
                    <div ref={(el) => (sectionRefs.current[section.section_type] = el)}>
                      <MvnMall data={section} />
                    </div>
                  </LazyLoadComponent>
                )}

                {section.section_type === "floor-plan" && (
                  <LazyLoadComponent margin="200px" debugName="floor-plan">
                    <div ref={(el) => (sectionRefs.current[section.section_type] = el)}>
                      {section.is_type == "video" ? (
                        <MicroFloorPlan data={section} />
                      ) : (
                        <SliderTypology data={section} />
                      )}
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
