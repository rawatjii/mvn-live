import React, { Suspense, useEffect, useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import MicroHeader from "../components/MicroHeader";
import HeroSection from "../components/MicroPage/Hero/Index";
import MicroOverview from "../components/MicroPage/Overview";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import LargeElevationSection1 from "../components/MicroPage/LargeElevationSection1";
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
import WhatsappBtn from "../components/Whatsapp";
import ContactInfo from "../components/ContactInfo";
import PageNotFound from "../../common/PageNotFound/Index";
import Construction from "./Construction";
import Strip from "../components/homepage/Strip11";
import SliderTypology from "../components/MicroPage/bangalore/SliderTypology";
import FeatureSection from "../components/MicroPage/athens/FeatureSection";
import MicroFloorPlan from "../components/MicroPage/FloorPlan";
import LazyLoadComponent from "../../common/LazyLoadComponent";
import { API_URL } from "../../config/config";
import { setCommonState } from "../../redux/commonSlice";
import { fetchProject, clearProject } from "../../redux/projectDataSlice";
import { fetchSectionById, clearSection } from "../../redux/sectionDataSlice";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const headerSidebarDesktopImg = `${API_URL}images/aero-gurgaon/header/sidebar.webp`;

const headerData = {
  sidebarAsset: {
    desktop: headerSidebarDesktopImg,
    mobile: headerSidebarDesktopImg,
  },
  title: "MVN Athens Gurgaon Phase III",
  sidebar_section: [
    { section_title: "Overview", link: "microOverview" },
    { section_title: "Walkthrough", link: "Walkthrough" },
    { section_title: "MVN ID Brochure", link: "downloadBrochure" },
    { section_title: "The Living Room", link: "LIVINGROOM" },
    { section_title: "Landscape", link: "MicroLandscape" },
    { section_title: "Elevation", link: "MicroElevation" },
    { section_title: "Apartment", link: "MicroApartment" },
    { section_title: "Construction Technology", link: "constructionTechnology" },
    { section_title: "Amenities", link: "MicroAmenities" },
    { section_title: "Typology", link: "MicroTypology" },
    { section_title: "Floor Plans", link: "MicroFloorPlan" },
    { section_title: "Location Map", link: "MicroLocationMap" },
    { section_title: "MVN Mall", link: "MVNMALL" },
    { section_title: "Connections MVN Mall", link: "NoPolutionZone" },
  ],
};

const MicroPage = () => {
  const { projectName } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const smootherRef = useRef(null);
  const sectionRefs = useRef({});
  const [isHeaderFixed, setIsHeaderFixed] = React.useState(false);
  const [overviewIframe, setOverviewIframe] = React.useState(null);

  const { project: basicData, loading } = useSelector((state) => state.project);
  const { sectionData: projectSections, loading: sectionLoading } = useSelector((state) => state.section);

  const project = useMemo(() => basicData?.data, [basicData]);
  const sections = useMemo(() => {
    if (!projectSections?.data) return [];
    return [...projectSections.data].sort((a, b) => a.seq - b.seq);
  }, [projectSections]);

  const scrollToSection = useCallback((sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  }, []);
useEffect(() => {
  dispatch(setCommonState({ id: project?.id, isMicro: true }));

  const wrapper = document.querySelector("#smooth-wrapper");
  const content = document.querySelector("#smooth-content");

  if (!wrapper || !content) {
    console.error("ScrollSmoother: Missing wrapper or content element");
    return;
  }

  smootherRef.current = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
    smoothTouch: 1.4,
    onUpdate: (self) => {
      console.log("ScrollSmoother progress:", self.progress);
    },
  });

  console.log("ScrollSmoother initialized:", smootherRef.current);

  // Refresh ScrollTrigger after sections load
  if (!sectionLoading && sections.length > 0) {
    ScrollTrigger.refresh();
    smootherRef.current?.refresh();
  }

  return () => {
    smootherRef.current?.kill();
    smootherRef.current = null;
    console.log("ScrollSmoother cleaned up");
  };
}, [project?.id, projectName, sectionLoading, sections]);

  useEffect(() => {
    dispatch(fetchProject(projectName));
  }, [dispatch, projectName]);

  useEffect(() => {
    if (project?.id) {
      dispatch(clearSection());
      dispatch(fetchSectionById(project.id));
    }
  }, [dispatch, project?.id]);

  useEffect(() => {
    if (project?.head_data) {
      const headDataContainer = document.createElement("div");
      headDataContainer.innerHTML = project.head_data;
      Array.from(headDataContainer.children).forEach((child) => document.head.appendChild(child));
      return () => {
        Array.from(headDataContainer.children).forEach((child) => document.head.removeChild(child));
      };
    }
  }, [project?.head_data]);

  const getProjectDisplayName = useCallback(() => {
    if (pathname.includes("mvn-athens-gurgaon-phase-1")) return "MVN Athens Ph-1";
    if (pathname.includes("mvn-athens-gurgaon-phase-2")) return "MVN Athens Ph-2";
    if (pathname.includes("mvn-athens-gurgaon-phase-3")) return "MVN Athens Ph-3";
    if (pathname.includes("mvn-athens-faridabad")) return "MVN Athens Faridabad";
    if (pathname.includes("mvn-mall")) return "MVN Mall Dwarka Expressway";
    return "MVN Aeroone";
  }, [pathname]);

  const renderLoadingScreen = () => {
    const projectImages = {
      "aeroone-gurgaon": {
        mobile: `${API_URL}images/aero-gurgaon/loader_sm.webp`,
        desktop: `${API_URL}loader/homepage_loading.webp`,
      },
      "mvn-mall": {
        mobile: `${API_URL}loader/mvnMall_loader_sm.webp`,
        desktop: `${API_URL}loader/mvnMall_loader.webp`,
      },
      "mvn-athens-gurgaon-phase-1": {
        mobile: `${API_URL}images/athens-ph1/loader_sm.webp`,
        desktop: `${API_URL}images/athens-ph1/loader.webp`,
      },
      "mvn-athens-gurgaon-phase-2": {
        mobile: `${API_URL}images/athens-ph2/loader_sm.webp`,
        desktop: `${API_URL}images/athens-ph2/loader.webp`,
      },
      "mvn-athens-faridabad": {
        mobile: `${API_URL}images/athens-faridabad/loader_sm.webp`,
        desktop: `${API_URL}images/athens-faridabad/loader.webp`,
      },
    };

    const imageSrc = projectImages[projectName] || {};
    return (
      <div className="loading_screen" style={{ position: "relative" }}>
        <img
          src={window.innerWidth < 768 ? imageSrc.mobile : imageSrc.desktop}
          alt="loading screen"
          className="img-fluid w-100"
        />
        <p
          className="loading"
          style={{
            position: "fixed",
            top: "calc(100vh - 40px)",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: window.innerWidth < 768 ? "11px" : "14px",
            letterSpacing: "3px",
            textShadow: "0 0 10px #000",
            fontWeight: 600,
          }}
        >
          Loading Experience...
        </p>
      </div>
    );
  };

  const renderSection = (section, secIndex) => {
    const sectionKey = `${section.section_type}_${secIndex}`;
    const sectionProps = {
      data: section,
      ref: (el) => (sectionRefs.current[section.section_type] = el),
    };

    const sectionComponents = {
      elevation: (
        <LazyLoadComponent margin="200px" debugName="elevation">
          <div ref={(el) => (sectionRefs.current.elevation = el)}>
            <LargeElevationSection {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
      overview: (
        <div ref={(el) => (sectionRefs.current.overview = el)}>
          <MicroOverview
            rera={project?.rera_no}
            data={section}
            setOverviewIframe={setOverviewIframe}
            onBannerExit={setIsHeaderFixed}
          />
        </div>
      ),
      walkthrough: (
        <LazyLoadComponent margin="200px" debugName="walkthrough">
          <div ref={(el) => (sectionRefs.current.walkthrough = el)}>
            <YtIframe {...sectionProps} subs_btn={true} />
          </div>
        </LazyLoadComponent>
      ),
      threesixtyview: (
        <LazyLoadComponent margin="200px" debugName="threesixtyview">
          <div {...sectionProps}>
            <View360
              sectionId={sectionKey}
              data={section}
              onLoadComplete={() => ScrollTrigger.refresh()}
            />
          </div>
        </LazyLoadComponent>
      ),
      Peacock: (
        <LazyLoadComponent margin="200px" debugName="livingroom">
          <div {...sectionProps}>
            <PeacockSection {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
      party: (
        <LazyLoadComponent margin="200px" debugName="party">
          <div {...sectionProps}>
            <PeacockSection {...sectionProps} watermarkClass="style5" />
          </div>
        </LazyLoadComponent>
      ),
      masterbedroom: (
        <LazyLoadComponent margin="200px" debugName="masterbedroom">
          <div {...sectionProps}>
            <PeacockSection {...sectionProps} watermarkClass="style5" />
          </div>
        </LazyLoadComponent>
      ),
      consultant: (
        <LazyLoadComponent margin="200px" debugName="consultant">
          <div {...sectionProps}>
            <Consultant {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
      landscape: (
        <LazyLoadComponent margin="200px" debugName={section.section_type}>
          <div {...sectionProps}>
            <ImagesGallery
              section_name={section.section_type === "landscape" ? "landscapes" : section.section_type}
              data={section}
              showTitle={["landscapes", "galleries"].includes(section.section_type) ? false : true}
            />
          </div>
        </LazyLoadComponent>
      ),
      "key-highlights": (
        <LazyLoadComponent margin="200px" debugName="keyHighlights">
          <div {...sectionProps}>
            <FeatureSection {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
      construction: (
        <LazyLoadComponent margin="200px" debugName="construction">
          <div {...sectionProps}>
            <ConstructionTechnology {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
      amenities: (
        <LazyLoadComponent margin="200px" debugName={section.section_type}>
          <div {...sectionProps}>
            <ParallaxSection section_data={section} />
          </div>
        </LazyLoadComponent>
      ),
      typologies: (
        <LazyLoadComponent margin="200px" debugName="typologies">
          <div {...sectionProps} className="outer_section">
            <Typology {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
      "location-map": (
        <LazyLoadComponent margin="200px" debugName="location-map">
          <div {...sectionProps}>
            <MicroLocationMap data={section} projectName={projectName} />
          </div>
        </LazyLoadComponent>
      ),
      "mvn-mall": (
        <LazyLoadComponent margin="200px" debugName="mvn-mall">
          <div {...sectionProps}>
            <MvnMall {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
      "floor-plan": (
        <LazyLoadComponent margin="200px" debugName="floor-plan">
          <div {...sectionProps}>
            {section.is_type === "video" ? (
              <MicroFloorPlan {...sectionProps} />
            ) : (
              <SliderTypology {...sectionProps} />
            )}
          </div>
        </LazyLoadComponent>
      ),
      "construction-technology": pathname.includes("mvn-athens-gurgaon-phase-3") && (
        <LazyLoadComponent margin="200px" debugName="construction-technology">
          <div {...sectionProps}>
            <Construction {...sectionProps} />
          </div>
        </LazyLoadComponent>
      ),
    };

    return sectionComponents[section.section_type] || null;
  };

  // Conditional sections
  const renderConditionalSections = (secIndex) => {
    const isAeroone = pathname.includes("aeroone-gurgaon");
    const isMvnProject = [
      "mvn-mall",
      "mvn-athens-gurgaon-phase-1",
      "mvn-athens-gurgaon-phase-2",
      "mvn-athens-gurgaon-phase-3",
      "mvn-athens-faridabad",
    ].some((path) => projectName.includes(path));

    return (
      <>
        {isAeroone && secIndex === 2 && <LargeElevationSection1 />}
        {isMvnProject && secIndex === 1 && (
          <LazyLoadComponent margin="200px" debugName="downloadBrochure">
            <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
              <DownloadBrochure showAwards={project?.batch} name={project?.name} projectName={getProjectDisplayName()} />
            </div>
          </LazyLoadComponent>
        )}
        {isAeroone && secIndex === 5 && (
          <LazyLoadComponent margin="200px" debugName="downloadBrochure">
            <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
              <DownloadBrochure showAwards={project?.batch} name={project?.name} />
            </div>
          </LazyLoadComponent>
        )}
        {overviewIframe && projectName.includes("mvn-mall") && secIndex === 1 && (
          <LazyLoadComponent margin="200px" debugName="mvn-mall">
            <CustomIframe data={overviewIframe} />
          </LazyLoadComponent>
        )}
        {isAeroone && secIndex === 5 && <ContactInfo white={true} />}
      </>
    );
  };

  if (loading || sectionLoading) return renderLoadingScreen();
  if (!loading && project?.length === 0) return <div className="text-center py-5">No records found!!</div>;
  if (!project) return <PageNotFound />;

  return (
    <>
      <Helmet>
        {project?.meta_title && <title>{project.meta_title}</title>}
        {project?.meta_description && <meta name="description" content={project.meta_description} />}
        {project?.meta_keywords && <meta name="keywords" content={project.meta_keywords} />}
        {project?.head_data && <div dangerouslySetInnerHTML={{ __html: project.head_data }} />}
        {project?.footer_data && parse(project.footer_data)}
      </Helmet>

      <MicroHeader scrollToSection={scrollToSection} data={headerData} isFixed={isHeaderFixed} />
      {pathname.includes("aeroone-gurgaon") && <WhatsappBtn />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection projectId={project?.id} projectName={projectName} />
          {pathname.includes("mvn-mall") && (
            <div className="mt-5 mt-md-0 mb-md-5">
              <Strip />
            </div>
          )}
          {sections.map((section, secIndex) => (
            <React.Fragment key={`${section.section_type}_${secIndex}`}>
              {renderConditionalSections(secIndex)}
              {renderSection(section, secIndex)}
            </React.Fragment>
          ))}
          {sections.length > 0 && (
            <>
              
                <div className="container-fluid micro_footer">
                  <div className="row">
                    <div className="col-sm-6 px-0">
                      <Enquire />
                    </div>
                    <div className="col-sm-6 px-0">
                      <EnquireForm projectName={getProjectDisplayName()} />
                    </div>
                  </div>
                </div>
                <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MicroPage;