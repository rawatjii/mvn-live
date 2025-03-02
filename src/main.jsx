import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import Layout from "./frontend/components/Layout.jsx";

// import InitialLoading from "./frontend/skeleton/Initial/Index.jsx";
import { data } from "./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx";
import FrontendRoute from "./common/FrontendRoute.jsx";
import ErrorBoundary from "./frontend/components/ErrorBoundary.tsx";

const Homepage = React.lazy(() => import("./frontend/pages/Homepage.jsx"));
const AboutUs = React.lazy(() => import("./frontend/pages/AboutUs.jsx"));
const MediaCenter = React.lazy(() => import("./frontend/pages/MediaCenter.jsx"));
const Blog = React.lazy(() => import("./frontend/pages/Blog.jsx"));
const BlogDetails = React.lazy(() => import("./frontend/pages/BlogDetails.jsx"));
const Career = React.lazy(() => import("./frontend/pages/Career.jsx"));
const ContactPage = React.lazy(() => import("./frontend/pages/ContactUs.jsx"));
import PrPolcy from './frontend/pages/PrPolcy.jsx';
import Disclaimer from "./frontend/pages/Disclaimer.jsx";
const PageNotFound = React.lazy(() => import("./common/PageNotFound/Index.jsx"));
import ThankYou from "./frontend/pages/ThankYou.jsx";
// const Gallery = React.lazy(() => import('./frontend/pages/Gallery.jsx'));
// const Csr = React.lazy(() => import('./frontend/pages/Csr.jsx'));
const MicroPageGurgaon1 = React.lazy(() => import("./frontend/pages/MicroPageGurgaon1.jsx"));
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

import { bangaloreData } from './frontend/pages/micro/mvn-aeroone-bangalore/Index.jsx';
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
          <ErrorBoundary>
            <FrontendRoute loaderType="homepage">
              <Homepage />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "about-us",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="about-us" >
              <AboutUs />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "aeroone-gurgaon",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="aeroone-gurgaon">
              <MicroPageGurgaon1 data={data} />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "aeroone-bangalore1",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="aeroone-bangalore1" >
              <MicroPageBangalore data={bangaloreData} />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "mvn-athens-faridabad",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="mvn-athens-faridabad">
              <MicroPageFaridabad data={faridabadData} />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "mvn-athens-gurgaon-phase-1",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="mvn-athens-gurgaon-phase-1">
              <MicroPageGurgaonPhase1 data={athensGurgaonPhase1Data} />
            </FrontendRoute>
          </ErrorBoundary>

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
          <ErrorBoundary>
            <FrontendRoute loaderType="media-centre">
              <MediaCenter />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "blogs",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="blogs">
              <Blog />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "blogs/details/:slug",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="blog-detail">
              <BlogDetails />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "career",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="career">
              <Career />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },

      {
        path: "contact-us",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="contact-us">
              <ContactPage />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "thanks",
        element: (
          <ErrorBoundary>
            <ThankYou />
          </ErrorBoundary>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="">
              <PrPolcy />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "mvn-mall-1",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="mvn-mall-1">
              <MvnMall1 data={mvnMallData} />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "disclaimer",
        element: (
          <ErrorBoundary>
            <FrontendRoute loaderType="">
              <Disclaimer />
            </FrontendRoute>
          </ErrorBoundary>

        ),
      },
      {
        path: "*",
        element: (
          <ErrorBoundary>
            <Suspense fallback="">
              <PageNotFound />
            </Suspense>
          </ErrorBoundary>

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
