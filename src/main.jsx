import React, {  Suspense} from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import Layout from "./frontend/components/Layout.jsx";

// import InitialLoading from "./frontend/skeleton/Initial/Index.jsx";
import { data } from "./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx";
import {bangaloreData} from "./frontend/pages/micro/mvn-aeroone-bangalore/Index.jsx"
import { faridabadData } from "./frontend/pages/micro/Athens/Index.jsx";
import { athensGurgaonPhase1Data } from "./frontend/pages/micro/athens-gurgaon-phase-1/Index.jsx";
import { athensGurgaonPhase2Data } from "./frontend/pages/micro/athens-gurgaon-phase-2/Index.jsx";
import FrontendRoute from "./common/FrontendRoute.jsx";

const Homepage = React.lazy(() => import("./frontend/pages/Homepage.jsx"));
const AboutUs = React.lazy(() => import("./frontend/pages/AboutUs.jsx"));
const MediaCenter = React.lazy(() => import("./frontend/pages/MediaCenter.jsx"));
const Blog = React.lazy(() => import("./frontend/pages/Blog.jsx")); 
const BlogDetails = React.lazy(() => import("./frontend/pages/BlogDetails.jsx")); 
const Career = React.lazy(() => import("./frontend/pages/Career.jsx"));
const ContactPage = React.lazy(() => import("./frontend/pages/ContactUs.jsx"));
const PrPolcy = React.lazy(() => import('./frontend/pages/PrPolcy.jsx'));
const Disclaimer = React.lazy(() => import("./frontend/pages/Disclaimer.jsx"));
const PageNotFound = React.lazy(() => import("./common/PageNotFound/Index.jsx"));
const ThankYou = React.lazy(() => import("./frontend/pages/ThankYou.jsx"));
// const Gallery = React.lazy(() => import('./frontend/pages/Gallery.jsx'));
// const Csr = React.lazy(() => import('./frontend/pages/Csr.jsx'));
const MicroPageGurgaon1 = React.lazy(()=>import("./frontend/pages/MicroPageGurgaon1.jsx"));
import MicroPageBangalore from "./frontend/pages/MicroPageBangalore.jsx";
import MicroPageFaridabad from "./frontend/pages/MicroPageFaridabad.jsx";
import MicroPageGurgaonPhase1 from "./frontend/pages/MicroPageGurgaonPhase1.jsx";
import MicroPageGurgaonPhase2 from "./frontend/pages/MicroPageGurgaonPhase2.jsx";
// const MicroPageGurgaon1 = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("./frontend/pages/MicroPageGurgaon1.jsx")), 100000)
//   )
// );

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./awaneesh.css";
import "./savan.css";
import './adarsh.css'
import MicroPageBangalore from "./frontend/pages/MicroPageBangalore.jsx";
import MicroPageFaridabad from "./frontend/pages/MicroPageFaridabad.jsx";
import MicroPageGurgaonPhase1 from "./frontend/pages/MicroPageGurgaonPhase1.jsx";
import MicroPageGurgaonPhase2 from "./frontend/pages/MicroPageGurgaonPhase2.jsx";

import {bangaloreData} from './frontend/pages/micro/mvn-aeroone-bangalore/Index.jsx';
import { faridabadData } from "./frontend/pages/micro/Athens/Index.jsx";
import { athensGurgaonPhase1Data } from "./frontend/pages/micro/athens-gurgaon-phase-1/Index.jsx";
import { athensGurgaonPhase2Data } from "./frontend/pages/micro/athens-gurgaon-phase-2/Index.jsx";
import { mvnMallData } from "./frontend/pages/micro/mvnMall/Index.jsx";
import MvnMall1 from "./frontend/pages/mvnMall.jsx";


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
          <FrontendRoute loaderType="about-us" >
            <AboutUs />
          </FrontendRoute>
        ),
      },
      {
        path: "aeroone-gurgaon",
        element: (
          <FrontendRoute loaderType="aeroone-gurgaon">
            <MicroPageGurgaon1 data={data} />
          </FrontendRoute>
        ),
      },
      {
        path: "aeroone-bangalore1",
        element: (
          <FrontendRoute loaderType="aeroone-bangalore1">
            <MicroPageBangalore data={bangaloreData} />
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-athens-faridabad",
        element: (
          <FrontendRoute loaderType="mvn-athens-faridabad">
            <MicroPageFaridabad data={faridabadData} />
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-athens-gurgaon-phase-1",
        element: (
          <FrontendRoute loaderType="mvn-athens-gurgaon-phase-1">
            <MicroPageGurgaonPhase1 data={athensGurgaonPhase1Data} />
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-athens-gurgaon-phase-2",
        element: (
          <FrontendRoute loaderType="mvn-athens-gurgaon-phase-2">
            <MicroPageGurgaonPhase2 data={athensGurgaonPhase2Data} />
          </FrontendRoute>
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
        path: "blogs/details/:slug",
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
        element: (
          <FrontendRoute loaderType="">
              <ThankYou />
          </FrontendRoute>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <FrontendRoute loaderType="">
            <PrPolcy />
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-mall-1",
        element: (
          <FrontendRoute  loaderType="mvn-mall-1">
          <MvnMall1 data={mvnMallData}/>
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-university-haryana",
        element: (
          <FrontendRoute loaderType="">
            <Disclaimer />
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
      {/*{
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
      },*/}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
