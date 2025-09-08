import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.js";
// import Layout from "./frontend/components/Layout.jsx";
// import InitialLoading from "./frontend/skeleton/Initial/Index.jsx";
import { data } from "./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx";
import FrontendRoute from "./common/FrontendRoute.jsx";
import PrPolcy from "./frontend/pages/PrPolcy.jsx";
import Disclaimer from "./frontend/pages/Disclaimer.jsx";
import ThankYou from "./frontend/pages/ThankYou.jsx";
import { bangaloreData } from "./frontend/pages/micro/mvn-aeroone-bangalore/Index.jsx";
import { faridabadData } from "./frontend/pages/micro/Athens/Index.jsx";
import { athensGurgaonPhase1Data } from "./frontend/pages/micro/athens-gurgaon-phase-1/Index.jsx";
import { athensGurgaonPhase2Data } from "./frontend/pages/micro/athens-gurgaon-phase-2/Index.jsx";
import { mvnMallData } from "./frontend/pages/micro/mvnMall/Index.jsx";
import { PersistGate } from "redux-persist/integration/react";
const Homepage = React.lazy(() => import("./frontend/pages/Homepage.jsx"));
const AboutUs = React.lazy(() => import("./frontend/pages/AboutUs.jsx"));
const MediaCenter = React.lazy(() =>
  import("./frontend/pages/MediaCenter.jsx")
);
const Blog = React.lazy(() => import("./frontend/pages/Blog.jsx"));
const BlogDetails = React.lazy(() =>
  import("./frontend/pages/BlogDetails.jsx")
);
const Career = React.lazy(() => import("./frontend/pages/Career.jsx"));
const ContactPage = React.lazy(() => import("./frontend/pages/ContactUs.jsx"));
const PageNotFound = React.lazy(() =>
  import("./common/PageNotFound/Index.jsx")
);
// const Gallery = React.lazy(() => import('./frontend/pages/Gallery.jsx'));
// const Csr = React.lazy(() => import('./frontend/pages/Csr.jsx'));
const MicroPageGurgaon1 = React.lazy(() =>
  import("./frontend/pages/MicroPageGurgaon1.jsx")
);
const MicroPageBangalore = React.lazy(() =>
  import("./frontend/pages/MicroPageBangalore.jsx")
);
const MicroPageFaridabad = React.lazy(() =>
  import("./frontend/pages/MicroPageFaridabad.jsx")
);
const MicroPageGurgaonPhase1 = React.lazy(() =>
  import("./frontend/pages/MicroPageGurgaonPhase1.jsx")
);
const MicroPageGurgaonPhase2 = React.lazy(() =>
  import("./frontend/pages/MicroPageGurgaonPhase2.jsx")
);
const MvnMall1 = React.lazy(() => import("./frontend/pages/mvnMall.jsx"));
// const MicroPageGurgaon1 = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("./frontend/pages/MicroPageGurgaon1.jsx")), 100000)
//   )
// );

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./awaneesh.css";
import "./savan.css";
import "./adarsh.css";
import "./admin/assets/css/microsite.css";

import PDFViewer from "./frontend/pages/PDFViewer.jsx";
import AdminLayout from "./admin/components/ContentLayout/AdminLayout.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import Amenities from "./admin/components/dashboard/microsite/Amenities.jsx";
import Banner from "./admin/components/dashboard/banner/Banner.jsx";
import AdminAboutUs from "./admin/AboutUs.jsx";
import AdminBlog from "./admin/Blog.jsx";
import AdminCareer from "./admin/Career.jsx";
import AdminMediaCentre from "./admin/MediaCentre.jsx";
import AdminContactUs from "./admin/ContactUs.jsx";
import BasicMicroSite from "./admin/components/dashboard/microsite/Basic.jsx";
import Login from "./admin/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminProtectedRoute from "./AdminProtectedRoute.jsx";
import MicroSidebar from "./admin/components/ContentLayout/microSidebar/MicroSidebar.jsx";
import OverviewMicroSite from "./admin/components/dashboard/microsite/Overview.jsx";
import HeroSection from "./admin/components/dashboard/microsite/HeroSection.jsx";
import ProjectList from "./admin/ProjectList.jsx";
import Platter from "./admin/components/platter/Platter.jsx";
import Elevation from "./admin/components/dashboard/microsite/Elevation.jsx";
import Walkthrough from "./admin/components/dashboard/microsite/Walkthrough.jsx";
import ThreesixtyView from "./admin/components/dashboard/microsite/ThreesixtyView.jsx";
import LivingRoom from "./admin/components/dashboard/microsite/LivingRoom.jsx";
import Party from "./admin/components/dashboard/microsite/Party.jsx";
import MasterBedroom from "./admin/components/dashboard/microsite/MasterBedroom.jsx";
import Consultant from "./admin/components/dashboard/microsite/Consultant.jsx";
import LandScape from "./admin/components/dashboard/microsite/LandScape.jsx";
import Galleries from "./admin/components/dashboard/microsite/Gallery.jsx";
import SmElevation from "./admin/components/dashboard/microsite/SmElevation.jsx";
import Apartment from "./admin/components/dashboard/microsite/Apartment.jsx";
import ConstructionTechnology from "./admin/components/dashboard/microsite/Construction_tech.jsx";
import AmenitiesAdmin from "./admin/components/dashboard/microsite/Amenities.jsx";
import ConnectionMvnMall from "./admin/components/dashboard/microsite/ConnectionMvnmall.jsx";
import Typologies from "./admin/components/dashboard/microsite/Typologies.jsx";
import FloorPlans from "./admin/components/dashboard/microsite/FloorPlan.jsx";
import LocationMap from "./admin/components/dashboard/microsite/LocationMap.jsx";
import MvnMall from "./admin/components/dashboard/microsite/mvn-mall.jsx";
import SinglePage from "./admin/pages/Index.jsx";
import AdminWorkCulture from "./admin/WorkCulture.jsx";
import MicroPage from "./frontend/pages/Micro.jsx";
import Verticals from "./admin/Verticals.jsx";
import Infrastructure from "./admin/Infrastructure.jsx";
import BrandEthos from "./admin/brandEthos.jsx";
import Testimonials from "./admin/Testimonials.jsx";
import OurValues from "./admin/OurValues.jsx";
import Timeline from "./admin/components/aboutus/Timeline.jsx";
import Team from "./admin/components/aboutus/Team.jsx";
import Sizes from "./admin/components/dashboard/microsite/Sizes.jsx";
import KeyHighlights from "./admin/components/dashboard/microsite/KeyHighlights.jsx";
import PagesMeta from "./admin/components/PagesMeta.jsx";
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
          <MicroPage />
          // <FrontendRoute>
          // </FrontendRoute>
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
          { path: "amenities", element: <Amenities /> },
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
