import React, {
  Suspense,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import parse from "html-react-parser";

// ✅ Static imports for small or critical components
import MicroHeader from "../components/MicroHeader";
import Footer from "../components/Footer";
import { API_URL } from "../../config/config";
import { setCommonState } from "../../redux/commonSlice";
import { fetchProject, clearProject } from "../../redux/projectDataSlice";
import { fetchSectionById, clearSection } from "../../redux/sectionDataSlice";

import WhatsappBtn from "../components/Whatsapp";
const ContactInfo = React.lazy(() => import("../components/ContactInfo"));
const PageNotFound = React.lazy(() =>
  import("../../common/PageNotFound/Index")
);
const Construction = React.lazy(() => import("./Construction"));

// ✅ Dynamically loaded components using React.lazy (for code-splitting)
import HeroSection from "../components/MicroPage/Hero/Index"
// const HeroSection = React.lazy(() =>
//   import("../components/MicroPage/Hero/Index")
// );
const MicroOverview = React.lazy(() =>
  import("../components/MicroPage/Overview")
);
const LargeElevationSection = React.lazy(() =>
  import("../components/MicroPage/LargeElevationSection")
);
const LargeElevationSection1 = React.lazy(() =>
  import("../components/MicroPage/LargeElevationSection1")
);
const YtIframe = React.lazy(() => import("../components/MicroPage/YtIframe"));
const DownloadBrochure = React.lazy(() =>
  import("../components/MicroPage/DownloadBrochure")
);
const CustomIframe = React.lazy(() =>
  import("../components/MicroPage/CustomIframe")
);
// import View360 from "../components/MicroPage/360";
// const View360 = React.lazy(() => import("../components/MicroPage/360"));
const PeacockSection = React.lazy(() =>
  import("../components/MicroPage/PeacockSection")
);
const Consultant = React.lazy(() =>
  import("../components/MicroPage/Consultant")
);
const ImagesGallery = React.lazy(() =>
  import("../components/MicroPage/ImagesGallery")
);
const ConstructionTechnology = React.lazy(() =>
  import("../components/MicroPage/ConstructionTechnology")
);
import ParallaxSection from "../../common/ParallaxSection";
const MicroLocationMap = React.lazy(() =>
  import("../components/MicroPage/LocationMap")
);
const MvnMall = React.lazy(() => import("../components/MicroPage/MvnMall"));
import Typology from "../components/homepage/Typology";
// const Typology = React.lazy(() => import("../components/homepage/Typology"));
const Enquire = React.lazy(() => import("../components/homepage/Enquire"));
const EnquireForm = React.lazy(() =>
  import("../components/homepage/EnquireForm")
);
const Strip = React.lazy(() => import("../components/homepage/Strip11"));
const SliderTypology = React.lazy(() =>
  import("../components/MicroPage/bangalore/SliderTypology")
);
const FeatureSection = React.lazy(() =>
  import("../components/MicroPage/athens/FeatureSection")
);
const MicroFloorPlan = React.lazy(() =>
  import("../components/MicroPage/FloorPlan")
);


// ✅ Asset reference
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
    {
      section_title: "Construction Technology",
      link: "constructionTechnology",
    },
    { section_title: "Amenities", link: "MicroAmenities" },
    { section_title: "Typology", link: "MicroTypology" },
    { section_title: "Floor Plans", link: "MicroFloorPlan" },
    { section_title: "Location Map", link: "MicroLocationMap" },
    { section_title: "MVN Mall", link: "MVNMALL" },
    { section_title: "Connections MVN Mall", link: "NoPolutionZone" },
  ],
};

const elevationData = [
  {
    image: {
      desktop: "floors.webp",
      mobile: "floors_sm.webp",
    },
    title: "Villas in the Sky",
    desc: "Experience elevated living with unmatched luxury above the clouds.",
  },
  {
    image: {
      desktop: "assets/images/aeroone/jacuzzi/desktop.webp",
      mobile: "assets/images/aeroone/jacuzzi/mobile.webp",
    },
    title: "Soak in Serenity",
    desc: "Immerse in luxury with a private jacuzzi, offering relaxation and stunning vistas.",
  },
  {
    image: {
      desktop: "assets/images/aeroone/zen-garden/desktop.webp",
      mobile: "assets/images/aeroone/zen-garden/mobile.webp",
    },
    title: "Embrace Tranquility",
    desc: "Experience peace in a meticulously crafted Zen garden, a sanctuary of balance and beauty.",
  },
];

const MicroPage = () => {
  const { projectName } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const sectionRefs = useRef({});
  const [isHeaderFixed, setIsHeaderFixed] = React.useState(false);
  const [overviewIframe, setOverviewIframe] = React.useState(null);

  const { project: basicData, loading } = useSelector((state) => state.project);
  const { sectionData: projectSections, loading: sectionLoading } = useSelector(
    (state) => state.section
  );

  const project = useMemo(() => basicData?.data, [basicData]);
  const sections = useMemo(() => {
    if (!projectSections?.data) return [];
    return [...projectSections.data].sort((a, b) => a.seq - b.seq);
  }, [projectSections]);

  const scrollToSection = useCallback((sectionKey) => {
    const target = sectionRefs.current[sectionKey];
   
  }, []);
  useEffect(() => {
    dispatch(setCommonState({ id: project?.id, isMicro: true }));
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
      Array.from(headDataContainer.children).forEach((child) =>
        document.head.appendChild(child)
      );
      return () => {
        Array.from(headDataContainer.children).forEach((child) =>
          document.head.removeChild(child)
        );
      };
    }
  }, [project?.head_data]);

  const getProjectDisplayName = useCallback(() => {
    if (pathname.includes("mvn-athens-gurgaon-phase-1"))
      return "MVN Athens Ph-1";
    if (pathname.includes("mvn-athens-gurgaon-phase-2"))
      return "MVN Athens Ph-2";
    if (pathname.includes("mvn-athens-gurgaon-phase-3"))
      return "MVN Athens Ph-3";
    if (pathname.includes("mvn-athens-faridabad"))
      return "MVN Athens Faridabad";
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
        <div ref={(el) => (sectionRefs.current.elevation = el)}>
          <Suspense fallback={<p>Loading...</p>}>
            <LargeElevationSection {...sectionProps} />
          </Suspense>
        </div>
      ),
      overview: (
        <div ref={(el) => (sectionRefs.current.overview = el)}>
          <Suspense fallback={<p>Loading...</p>}>
            <MicroOverview
              rera={project?.rera_no}
              data={section}
              setOverviewIframe={setOverviewIframe}
              onBannerExit={setIsHeaderFixed}
            />
          </Suspense>
        </div>
      ),
      walkthrough: (
        <div ref={(el) => (sectionRefs.current.walkthrough = el)}>
          <Suspense fallback={<p>Loading...</p>}>
            <YtIframe {...sectionProps} subs_btn={true} />
          </Suspense>
        </div>
      ),
      // threesixtyview: (
      //   <div {...sectionProps}>
      //     <div ref={(el) => (sectionRefs.current.view_360 = el)}>
      //         <View360
      //           sectionId={sectionKey}
      //           data={section}
      //           onLoadComplete={() => ScrollTrigger.refresh()}
      //         />
      //     </div>
      //   </div>
      // ),
      Peacock: (
        <div {...sectionProps}>
          <Suspense fallback={<p>Loading...</p>}>
            <PeacockSection {...sectionProps} />
          </Suspense>
        </div>
      ),
      party: (
        <div {...sectionProps}>
          <Suspense fallback={<p>Loading...</p>}>
            <PeacockSection
              {...sectionProps}
              watermarkClass="style5"
              desktop_img="assets/images/aeroone/party/desktop.webp"
              mobile_img="assets/images/aeroone/party/mobile.webp"
            />
          </Suspense>
        </div>
      ),
      masterbedroom: (
        <div {...sectionProps}>
          <Suspense fallback={<p>Loading...</p>}>
            <PeacockSection
              {...sectionProps}
              watermarkClass="style5"
              desktop_img="assets/images/aeroone/bedroom/desktop.webp"
              mobile_img="assets/images/aeroone/bedroom/mobile.webp"
            />
          </Suspense>
        </div>
      ),
      consultant: (
        <div {...sectionProps}>
          <div ref={(el) => (sectionRefs.current.about_architect = el)}>
            <Suspense fallback={<p>Loading...</p>}>
              <Consultant {...sectionProps} />
            </Suspense>
          </div>
        </div>
      ),
      landscape: (
        <div {...sectionProps}>
          <Suspense fallback={<p>Loading...</p>}>
            <ImagesGallery
              section_name={
                section.section_type === "landscape"
                  ? "landscapes"
                  : section.section_type
              }
              data={section}
              showTitle={
                ["landscapes", "galleries"].includes(section.section_type)
                  ? false
                  : true
              }
            />
          </Suspense>
        </div>
      ),
      "key-highlights": (
        <div {...sectionProps}>
          <Suspense fallback={<p>Loading...</p>}>
            <FeatureSection {...sectionProps} />
          </Suspense>
        </div>
      ),
      construction: (
        <div {...sectionProps}>
          <div ref={(el) => (sectionRefs.current.construction_technology = el)}>
            <Suspense fallback={<p>Loading...</p>}>
              <ConstructionTechnology {...sectionProps} />
            </Suspense>
          </div>
        </div>
      ),
      amenities: (
        <div {...sectionProps}>
            <ParallaxSection section_data={section} />
        </div>
      ),
      typologies: (
        <div {...sectionProps} className="outer_section">
            <Typology {...sectionProps} />
        </div>
      ),
      "location-map": (
        <div {...sectionProps}>
          <div ref={(el) => (sectionRefs.current.location_map = el)}>
            <Suspense fallback={<p>Loading...</p>}>
              <MicroLocationMap data={section} projectName={projectName} />
            </Suspense>
          </div>
        </div>
      ),
      "mvn-mall": (
        <div {...sectionProps}>
          <div ref={(el) => (sectionRefs.current.mvn_mall = el)}>
            <Suspense fallback={<p>Loading...</p>}>
              <MvnMall {...sectionProps} />
            </Suspense>
          </div>
        </div>
      ),
      "floor-plan": (
        <div {...sectionProps}>
          <div ref={(el) => (sectionRefs.current.floor_plan = el)}>
            {section.is_type === "video" ? (
              <Suspense fallback={<p>Loading...</p>}>
                <MicroFloorPlan {...sectionProps} />
              </Suspense>
            ) : (
              <Suspense fallback={<p>Loading...</p>}>
                <SliderTypology {...sectionProps} />
              </Suspense>
            )}
          </div>
        </div>
      ),
      "construction-technology": pathname.includes(
        "mvn-athens-gurgaon-phase-3"
      ) && (
        <div {...sectionProps}>
          <Suspense fallback={<p>Loading...</p>}>
            <Construction {...sectionProps} />
          </Suspense>
        </div>
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
        {isAeroone &&
          secIndex === 2 &&
          elevationData?.map((item, index) => (
            <div key={index}>
              <div className="mt_80 mt_sm_30 mb-md-5">
                <Suspense fallback={<p>Loading...</p>}>
                  <LargeElevationSection1 {...item} />
                </Suspense>
              </div>
            </div>
          ))}
        {isMvnProject && secIndex === 1 && (
          <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
            <Suspense fallback={<p>Loading...</p>}>
              <DownloadBrochure
                showAwards={project?.batch}
                name={project?.name}
                projectName={getProjectDisplayName()}
              />
            </Suspense>
          </div>
        )}
        {isAeroone && secIndex === 5 && (
          <div ref={(el) => (sectionRefs.current.downloadBrochure = el)}>
            <Suspense fallback={<p>Loading...</p>}>
              <DownloadBrochure
                showAwards={project?.batch}
                name={project?.name}
              />
            </Suspense>
          </div>
        )}
        {overviewIframe &&
          projectName.includes("mvn-mall") &&
          secIndex === 1 && (
            <Suspense fallback={<p>Loading...</p>}>
              <CustomIframe data={overviewIframe} />
            </Suspense>
          )}
        {isAeroone && secIndex === 5 && (
          <div ref={(el) => (sectionRefs.current.dgm_sales = el)}>
            <Suspense fallback={<p>Loading...</p>}>
              <ContactInfo white={true} />
            </Suspense>
          </div>
        )}
      </>
    );
  };

  if (loading || sectionLoading) return renderLoadingScreen();
  if (!loading && project?.length === 0)
    return (
      <Suspense fallback={<p>Loading page not found...</p>}>
        <PageNotFound />
      </Suspense>
    );

  return (
    <>
      <Helmet>
        {project?.meta_title && <title>{project.meta_title}</title>}
        {project?.meta_description && (
          <meta name="description" content={project.meta_description} />
        )}
        {project?.meta_keywords && (
          <meta name="keywords" content={project.meta_keywords} />
        )}
        {project?.head_data && (
          <div dangerouslySetInnerHTML={{ __html: project.head_data }} />
        )}
        {project?.footer_data && parse(project.footer_data)}
      </Helmet>

      <MicroHeader
        scrollToSection={scrollToSection}
        data={headerData}
        isFixed={isHeaderFixed}
      />
      {pathname.includes("aeroone-gurgaon") && <WhatsappBtn />}
          {/* hero section */}
            <HeroSection projectId={project?.id} projectName={projectName} />

          {pathname.includes("mvn-mall") && (
            <div className="mt-5 mt-md-0 mb-md-5">
              <Suspense fallback={<p>Loading...</p>}>
                <Strip />
              </Suspense>
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
                    <Suspense fallback={<p>Loading...</p>}>
                      <Enquire />
                    </Suspense>
                  </div>
                  <div className="col-sm-6 px-0">
                    <Suspense fallback={<p>Loading...</p>}>
                      <EnquireForm projectName={getProjectDisplayName()} />
                    </Suspense>
                  </div>
                </div>
              </div>
              <Footer />
            </>
          )}
    </>
  );
};

export default MicroPage;
