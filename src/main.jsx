// 🔹 React Core
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// 🔹 Routing & State Management
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // (optional, but often needed if using persisted state)
import store, { persistor } from "./store/store.js";

// 🔹 Third-Party Libraries & Styles
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

// 🔹 Global Styles
import "./index.css";
import "./awaneesh.css";
import "./savan.css";
import "./adarsh.css";
import "./admin/assets/css/microsite.css";

// 🔹 App Entry
import App from "./App.jsx";

// 🔹 Static Data
import { data } from "./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx";
// import { bangaloreData } from "...";
// import { faridabadData } from "...";

// ==========================================================
// 🟢 Frontend Pages (Lazy Loaded)
// ==========================================================
const Homepage = lazy(() => import("./frontend/pages/Homepage.jsx"));
const AboutUs = lazy(() => import("./frontend/pages/AboutUs.jsx"));
const MediaCenter = lazy(() => import("./frontend/pages/MediaCenter.jsx"));
const Blog = lazy(() => import("./frontend/pages/Blog.jsx"));
const BlogDetails = lazy(() => import("./frontend/pages/BlogDetails.jsx"));
const Career = lazy(() => import("./frontend/pages/Career.jsx"));
const ContactPage = lazy(() => import("./frontend/pages/ContactUs.jsx"));
const PageNotFound = lazy(() => import("./common/PageNotFound/Index.jsx"));
const PrPolcy = lazy(() => import("./frontend/pages/PrPolcy.jsx"));
const Disclaimer = lazy(() => import("./frontend/pages/Disclaimer.jsx"));
const ThankYou = lazy(() => import("./frontend/pages/ThankYou.jsx"));
const PDFViewer = lazy(() => import("./frontend/pages/PDFViewer.jsx"));
const MicroPage = lazy(() => import("./frontend/pages/Micro.jsx"));
const FrontendRoute = lazy(() => import("./common/FrontendRoute.jsx"));

// ==========================================================
// 🟡 Admin Pages (Lazy Loaded)
// ==========================================================
const AdminAboutUs = lazy(() => import("./admin/AboutUs.jsx"));
const AdminBlog = lazy(() => import("./admin/Blog.jsx"));
const AdminCareer = lazy(() => import("./admin/Career.jsx"));
const AdminContactUs = lazy(() => import("./admin/ContactUs.jsx"));
const AdminMediaCentre = lazy(() => import("./admin/MediaCentre.jsx"));
const AdminProtectedRoute = lazy(() => import("./AdminProtectedRoute.jsx"));
const AdminWorkCulture = lazy(() => import("./admin/WorkCulture.jsx"));
const BrandEthos = lazy(() => import("./admin/brandEthos.jsx"));
const Dashboard = lazy(() => import("./admin/Dashboard.jsx"));
const Infrastructure = lazy(() => import("./admin/Infrastructure.jsx"));
const Login = lazy(() => import("./admin/Login.jsx"));
const ProjectList = lazy(() => import("./admin/ProjectList.jsx"));
const SinglePage = lazy(() => import("./admin/pages/Index.jsx"));
const Testimonials = lazy(() => import("./admin/Testimonials.jsx"));
const OurValues = lazy(() => import("./admin/OurValues.jsx"));
const Verticals = lazy(() => import("./admin/Verticals.jsx"));

// ==========================================================
// 🔵 Admin Layout & Structure
// ==========================================================
const AdminLayout = lazy(() => import("./admin/components/ContentLayout/AdminLayout.jsx"));
const MicroSidebar = lazy(() => import("./admin/components/ContentLayout/microSidebar/MicroSidebar.jsx"));

// ==========================================================
// 🟣 Microsite Components (Admin Dashboard)
// ==========================================================
const AmenitiesAdmin = lazy(() => import("./admin/components/dashboard/microsite/Amenities.jsx"));
const Apartment = lazy(() => import("./admin/components/dashboard/microsite/Apartment.jsx"));
const BasicMicroSite = lazy(() => import("./admin/components/dashboard/microsite/Basic.jsx"));
const ConnectionMvnMall = lazy(() => import("./admin/components/dashboard/microsite/ConnectionMvnmall.jsx"));
const ConstructionTechnology = lazy(() => import("./admin/components/dashboard/microsite/Construction_tech.jsx"));
const Elevation = lazy(() => import("./admin/components/dashboard/microsite/Elevation.jsx"));
const FloorPlans = lazy(() => import("./admin/components/dashboard/microsite/FloorPlan.jsx"));
const Galleries = lazy(() => import("./admin/components/dashboard/microsite/Gallery.jsx"));
const HeroSection = lazy(() => import("./admin/components/dashboard/microsite/HeroSection.jsx"));
const KeyHighlights = lazy(() => import("./admin/components/dashboard/microsite/KeyHighlights.jsx"));
const LandScape = lazy(() => import("./admin/components/dashboard/microsite/LandScape.jsx"));
const LivingRoom = lazy(() => import("./admin/components/dashboard/microsite/LivingRoom.jsx"));
const LocationMap = lazy(() => import("./admin/components/dashboard/microsite/LocationMap.jsx"));
const MasterBedroom = lazy(() => import("./admin/components/dashboard/microsite/MasterBedroom.jsx"));
const MvnMall = lazy(() => import("./admin/components/dashboard/microsite/mvn-mall.jsx"));
const OverviewMicroSite = lazy(() => import("./admin/components/dashboard/microsite/Overview.jsx"));
const Party = lazy(() => import("./admin/components/dashboard/microsite/Party.jsx"));
const Sizes = lazy(() => import("./admin/components/dashboard/microsite/Sizes.jsx"));
const SmElevation = lazy(() => import("./admin/components/dashboard/microsite/SmElevation.jsx"));
const ThreesixtyView = lazy(() => import("./admin/components/dashboard/microsite/ThreesixtyView.jsx"));
const Consultant = lazy(() => import("./admin/components/dashboard/microsite/Consultant.jsx"));
const Typologies = lazy(() => import("./admin/components/dashboard/microsite/Typologies.jsx"));
const Walkthrough = lazy(() => import("./admin/components/dashboard/microsite/Walkthrough.jsx"));

// ==========================================================
// 🔶 About Us Subcomponents (Admin)
// ==========================================================
const Team = lazy(() => import("./admin/components/aboutus/Team.jsx"));
const Timeline = lazy(() => import("./admin/components/aboutus/Timeline.jsx"));

// ==========================================================
// 🔺 Admin Utilities
// ==========================================================
const PagesMeta = lazy(() => import("./admin/components/PagesMeta.jsx"));
const Platter = lazy(() => import("./admin/components/platter/Platter.jsx"));



const router = createBrowserRouter([
  {
    path: "/",
    // element:<Layout />,
    children: [
      {
        path: "",
        element: (
          <FrontendRoute loaderType="homepage">
            <Homepage />
          </FrontendRoute>
        ),
      },
      {
        path: "about-us",
        element: (
          <FrontendRoute loaderType="about-us">
            <AboutUs />
          </FrontendRoute>
        ),
      },
      {
        path: ":projectName",
        element: (
          <FrontendRoute loaderType="about-us">
          <MicroPage />
          </FrontendRoute>
          // <FrontendRoute>
          // </Fronten  dRoute>
        ),
      },
      // {
      //   path: "aeroone-gurgaon",
      //   element: (
      //     <FrontendRoute loaderType="aeroone-gurgaon">
      //       <MicroPageGurgaon1 data={data} />
      //     </FrontendRoute>
      //   ),
      // },
      // {
      //   path: "aeroone-bangalore",
      //   element: (
      //     <FrontendRoute loaderType="aeroone-bangalore" >
      //       <MicroPageBangalore data={bangaloreData} />
      //     </FrontendRoute>
      //   ),
      // },
      // {
      //   path: "mvn-athens-faridabad",
      //   element: (
      //     <FrontendRoute loaderType="mvn-athens-faridabad">
      //       <MicroPageFaridabad data={faridabadData} />
      //     </FrontendRoute>
      //   ),
      // },
      // {
      //   path: "mvn-athens-gurgaon-phase-1",
      //   element: (
      //     <FrontendRoute loaderType="mvn-athens-gurgaon-phase-1">
      //       <MicroPageGurgaonPhase1 data={athensGurgaonPhase1Data} />
      //     </FrontendRoute>
      //   ),
      // },
      // {
      //   path: "mvn-athens-gurgaon-phase-2",
      //   element: (
      //     <FrontendRoute loaderType="mvn-athens-gurgaon-phase-2">
      //       <MicroPageGurgaonPhase2 data={athensGurgaonPhase2Data} />
      //     </FrontendRoute>
      //   ),
      // },
      {
        path: "media-centre",
        element: (
          <FrontendRoute loaderType="media-centre">
            <MediaCenter />
          </FrontendRoute>
        ),
      },
      {
        path: "blogs",
        element: (
          <FrontendRoute loaderType="blogs">
            <Blog />
          </FrontendRoute>
        ),
      },
      {
        path: "blogs/:slug",
        element: (
          <FrontendRoute loaderType="blog-detail">
            <BlogDetails />
          </FrontendRoute>
        ),
      },
      {
        path: "career",
        element: (
          <FrontendRoute loaderType="career">
            <Career />
          </FrontendRoute>
        ),
      },

      {
        path: "contact-us",
        element: (
          <FrontendRoute loaderType="contact-us">
            <ContactPage />
          </FrontendRoute>
        ),
      },
      {
        path: "thanks",
        element: <ThankYou />,
      },
      {
        path: "privacy-policy",
        element: (
          <FrontendRoute loaderType="">
            <PrPolcy />
          </FrontendRoute>
        ),
      },
      // {
      //   path: "mvn-mall",
      //   element: (
      //     <FrontendRoute  loaderType="mvn-mall-1">
      //     <MvnMall1 data={mvnMallData}/>
      //     </FrontendRoute>
      //   ),
      // },
      {
        path: "disclaimer",
        element: (
          <FrontendRoute loaderType="">
            <Disclaimer />
          </FrontendRoute>
        ),
      },
      {
        path: "pdf/view",
        element: (
          <FrontendRoute loaderType="">
            <PDFViewer />
          </FrontendRoute>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback="">
            <PageNotFound />
          </Suspense>
        ),
      },
      {
        /*{
        path: "gallery",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <Gallery />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "csr",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <Csr />
            </Layout>
          </Suspense>
        ),
      },*/
      },
    ],
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminProtectedRoute />,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        children: [
          { path: "", element: <Dashboard /> },
          { path: "amenities", element: <AmenitiesAdmin /> },
          { path: "about-us", element: <AdminAboutUs /> },
          { path: "verticals", element: <Verticals /> },
          { path: "infrastructure", element: <Infrastructure /> },
          { path: "brand-ethos", element: <BrandEthos /> },
          { path: "testimonials", element: <Testimonials /> },
          { path: "our-values", element: <OurValues /> },
          { path: "timeline", element: <Timeline /> },
          { path: "team", element: <Team /> },
          { path: "blogs", element: <AdminBlog /> },
          { path: "work-culture", element: <AdminWorkCulture /> },
          { path: "career", element: <AdminCareer /> },
          { path: "media-centre", element: <AdminMediaCentre /> },
          { path: "contact-us", element: <AdminContactUs /> },
          { path: "project-list", element: <ProjectList /> },
          { path: "platter", element: <Platter /> },
          { path: "pages-meta", element: <PagesMeta /> },
          // { path: "page/index", element: <AdminHomepage /> },
          { path: "page/:pageName", element: <SinglePage /> },
          {
            path: "microsite",
            element: <MicroSidebar />,
            children: [
              { path: "", element: <BasicMicroSite /> },
              //   {path:"overview", element:<OverviewMicroSite />},
              //   {path:"banner", element:<HeroSection />},
            ],
          },
          {
            path: "microsite/:project_id",
            element: <MicroSidebar />,
            children: [
              { path: "", element: <BasicMicroSite /> },
              { path: "overview", element: <OverviewMicroSite /> },
              { path: "sizes", element: <Sizes /> },
              { path: "large-elevation", element: <Elevation /> },
              { path: "banner", element: <HeroSection /> },
              { path: "walkthrough", element: <Walkthrough /> },
              { path: "360-views", element: <ThreesixtyView /> },
              { path: "Peacock", element: <LivingRoom /> },
              { path: "party", element: <Party /> },
              { path: "master-Bed-room", element: <MasterBedroom /> },
              { path: "architect", element: <Consultant /> },
              { path: "landscape", element: <LandScape /> },
              { path: "landscapes", element: <LandScape /> },
              { path: "galleries", element: <Galleries /> },
              { path: "elevation", element: <SmElevation /> },
              { path: "apartment", element: <Apartment /> },
              {
                path: "construction-technology",
                element: <ConstructionTechnology />,
              },
              { path: "amenities", element: <AmenitiesAdmin /> },
              { path: "connection-mall", element: <ConnectionMvnMall /> },
              { path: "typologies", element: <Typologies /> },
              { path: "floor-plan", element: <FloorPlans /> },
              { path: "location-map", element: <LocationMap /> },
              { path: "key-highlights", element: <KeyHighlights /> },
              { path: "mvn-mall", element: <MvnMall /> },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <RouterProvider router={router}>
{/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}>        */}
 <App />
        {/* </PersistGate> */}
      </RouterProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  </Provider>
);
