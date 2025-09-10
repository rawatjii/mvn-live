// 🔹 React Core
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// 🔹 Routing & State Management
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

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
// const MicroPage = lazy(() => import("./frontend/pages/Micro.jsx"));
import MicroPage from "./frontend/pages/Micro.jsx";
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
const AdminLayout = lazy(() =>
  import("./admin/components/ContentLayout/AdminLayout.jsx")
);
const MicroSidebar = lazy(() =>
  import("./admin/components/ContentLayout/microSidebar/MicroSidebar.jsx")
);

// ==========================================================
// 🟣 Microsite Components (Admin Dashboard)
// ==========================================================
const AmenitiesAdmin = lazy(() =>
  import("./admin/components/dashboard/microsite/Amenities.jsx")
);
const Apartment = lazy(() =>
  import("./admin/components/dashboard/microsite/Apartment.jsx")
);
const BasicMicroSite = lazy(() =>
  import("./admin/components/dashboard/microsite/Basic.jsx")
);
const ConnectionMvnMall = lazy(() =>
  import("./admin/components/dashboard/microsite/ConnectionMvnmall.jsx")
);
const ConstructionTechnology = lazy(() =>
  import("./admin/components/dashboard/microsite/Construction_tech.jsx")
);
const Elevation = lazy(() =>
  import("./admin/components/dashboard/microsite/Elevation.jsx")
);
const FloorPlans = lazy(() =>
  import("./admin/components/dashboard/microsite/FloorPlan.jsx")
);
const Galleries = lazy(() =>
  import("./admin/components/dashboard/microsite/Gallery.jsx")
);
const HeroSection = lazy(() =>
  import("./admin/components/dashboard/microsite/HeroSection.jsx")
);
const KeyHighlights = lazy(() =>
  import("./admin/components/dashboard/microsite/KeyHighlights.jsx")
);
const LandScape = lazy(() =>
  import("./admin/components/dashboard/microsite/LandScape.jsx")
);
const LivingRoom = lazy(() =>
  import("./admin/components/dashboard/microsite/LivingRoom.jsx")
);
const LocationMap = lazy(() =>
  import("./admin/components/dashboard/microsite/LocationMap.jsx")
);
const MasterBedroom = lazy(() =>
  import("./admin/components/dashboard/microsite/MasterBedroom.jsx")
);
const MvnMall = lazy(() =>
  import("./admin/components/dashboard/microsite/mvn-mall.jsx")
);
const OverviewMicroSite = lazy(() =>
  import("./admin/components/dashboard/microsite/Overview.jsx")
);
const Party = lazy(() =>
  import("./admin/components/dashboard/microsite/Party.jsx")
);
const Sizes = lazy(() =>
  import("./admin/components/dashboard/microsite/Sizes.jsx")
);
const SmElevation = lazy(() =>
  import("./admin/components/dashboard/microsite/SmElevation.jsx")
);
const ThreesixtyView = lazy(() =>
  import("./admin/components/dashboard/microsite/ThreesixtyView.jsx")
);
const Consultant = lazy(() =>
  import("./admin/components/dashboard/microsite/Consultant.jsx")
);
const Typologies = lazy(() =>
  import("./admin/components/dashboard/microsite/Typologies.jsx")
);
const Walkthrough = lazy(() =>
  import("./admin/components/dashboard/microsite/Walkthrough.jsx")
);

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
          // <FrontendRoute loaderType="media-centre">
            <MicroPage />
          // </FrontendRoute>
          // <FrontendRoute>
          // </FrontendRoute>
        ),
      },
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
        element: <FrontendRoute loaderType=""><ThankYou /></FrontendRoute>,
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
    ],
  },
  {
    path: "/admin/login",
    element: <Suspense fallback=""><Login /></Suspense>,
  },
  {
    path: "/admin",
    element: <Suspense fallback=""><AdminProtectedRoute /></Suspense>,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        children: [
          { path: "", element: <FrontendRoute loaderType=""><Dashboard /></FrontendRoute> },
          { path: "amenities", element: <FrontendRoute loaderType=""><AmenitiesAdmin /></FrontendRoute> },
          { path: "about-us", element: <FrontendRoute loaderType=""><AdminAboutUs /></FrontendRoute> },
          { path: "verticals", element: <FrontendRoute loaderType=""><Verticals /></FrontendRoute> },
          { path: "infrastructure", element: <FrontendRoute loaderType=""><Infrastructure /></FrontendRoute> },
          { path: "brand-ethos", element: <FrontendRoute loaderType=""><BrandEthos /></FrontendRoute> },
          { path: "testimonials", element: <FrontendRoute loaderType=""><Testimonials /></FrontendRoute> },
          { path: "our-values", element: <FrontendRoute loaderType=""><OurValues /></FrontendRoute> },
          { path: "timeline", element: <FrontendRoute loaderType=""><Timeline /></FrontendRoute> },
          { path: "team", element: <FrontendRoute loaderType=""><Team /></FrontendRoute> },
          { path: "blogs", element: <FrontendRoute loaderType=""><AdminBlog /></FrontendRoute> },
          { path: "work-culture", element: <FrontendRoute loaderType=""><AdminWorkCulture /></FrontendRoute> },
          { path: "career", element: <FrontendRoute loaderType=""><AdminCareer /></FrontendRoute> },
          { path: "media-centre", element: <FrontendRoute loaderType=""><AdminMediaCentre /></FrontendRoute>},
          { path: "contact-us", element: <FrontendRoute loaderType=""><AdminContactUs /></FrontendRoute> },
          { path: "project-list", element: <FrontendRoute loaderType=""><ProjectList /></FrontendRoute> },
          { path: "platter", element: <FrontendRoute loaderType=""><Platter /></FrontendRoute> },
          { path: "pages-meta", element: <FrontendRoute loaderType=""><PagesMeta /></FrontendRoute> },
          // { path: "page/index", element: <AdminHomepage /> },
          { path: "page/:pageName", element: <FrontendRoute loaderType=""><SinglePage /></FrontendRoute> },
          {
            path: "microsite",
            element: <FrontendRoute loaderType=""><MicroSidebar /></FrontendRoute>,
            children: [
              { path: "", element: <FrontendRoute loaderType=""><BasicMicroSite /></FrontendRoute> },
              //   {path:"overview", element:<OverviewMicroSite />},
              //   {path:"banner", element:<HeroSection />},
            ],
          },
          {
            path: "microsite/:project_id",
            element: <FrontendRoute loaderType=""><MicroSidebar /></FrontendRoute>,
            children: [
              { path: "", element: <FrontendRoute loaderType=""><BasicMicroSite /></FrontendRoute> },
              { path: "overview", element: <FrontendRoute loaderType=""><OverviewMicroSite /></FrontendRoute> },
              { path: "sizes", element: <FrontendRoute loaderType=""><Sizes /></FrontendRoute> },
              { path: "large-elevation", element: <FrontendRoute loaderType=""><Elevation /></FrontendRoute> },
              { path: "banner", element: <FrontendRoute loaderType=""><HeroSection /></FrontendRoute> },
              { path: "walkthrough", element: <FrontendRoute loaderType=""><Walkthrough /></FrontendRoute> },
              { path: "360-views", element: <FrontendRoute loaderType=""><ThreesixtyView /></FrontendRoute> },
              { path: "Peacock", element: <FrontendRoute loaderType=""><LivingRoom /></FrontendRoute> },
              { path: "party", element: <FrontendRoute loaderType=""><Party /></FrontendRoute> },
              { path: "master-Bed-room", element:  <FrontendRoute loaderType=""><MasterBedroom /></FrontendRoute> },
              { path: "architect", element: <FrontendRoute loaderType=""><Consultant /></FrontendRoute> },
              { path: "landscape", element:  <FrontendRoute loaderType=""><LandScape /></FrontendRoute> },
              { path: "landscapes", element: <FrontendRoute loaderType=""><LandScape /></FrontendRoute> },
              { path: "galleries", element: <FrontendRoute loaderType=""><Galleries /></FrontendRoute> },
              { path: "elevation", element: <FrontendRoute loaderType=""><SmElevation /></FrontendRoute> },
              { path: "apartment", element: <FrontendRoute loaderType=""><Apartment /></FrontendRoute> },
              {
                path: "construction-technology",
                element: <FrontendRoute loaderType=""><ConstructionTechnology /></FrontendRoute>,
              },
              { path: "amenities", element: <FrontendRoute loaderType=""><AmenitiesAdmin /> </FrontendRoute>},
              { path: "connection-mall", element: <FrontendRoute loaderType=""><ConnectionMvnMall /></FrontendRoute> },
              { path: "typologies", element:<FrontendRoute loaderType=""> <Typologies /></FrontendRoute> },
              { path: "floor-plan", element: <FrontendRoute loaderType=""> <FloorPlans /> </FrontendRoute>},
              { path: "location-map", element: <FrontendRoute loaderType=""><LocationMap /></FrontendRoute> },
              { path: "key-highlights", element: <FrontendRoute loaderType=""><KeyHighlights /></FrontendRoute> },
              { path: "mvn-mall", element: <FrontendRoute loaderType=""><MvnMall /></FrontendRoute> },
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
        <App />
      </RouterProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  </Provider>
);
