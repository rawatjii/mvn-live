import React, { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import * as CONFIG from './config/config.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import Layout from "./frontend/components/Layout.jsx";
const Homepage = React.lazy(() => import("./frontend/pages/Homepage.jsx"));
import MvnMall  from "./frontend/pages/MvnMallGurgaon.jsx";
const AboutUs = React.lazy(() => import("./frontend/pages/AboutUs.jsx"));
const MicroPage = React.lazy(() => import("./frontend/pages/Micro.jsx"));
const AeroOneGurgaon = React.lazy(() => import("./frontend/pages/micro/mvn-aeroone-gurgaon/Index.jsx"));
const AeroOneGurgaon1 = React.lazy(() => import("./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx"));
const Athens = React.lazy(() => import("./frontend/pages/micro/Athens/Index.jsx"));

const ContactPage = React.lazy(() => import("./frontend/pages/ContactUs.jsx"));
import Career from "./frontend/pages/Career.jsx";

const ThankYou = React.lazy(() => import("./frontend/pages/ThankYou.jsx"));
import MediaCenter from "./frontend/pages/MediaCenter.jsx";

import Blog from "./frontend/pages/Blog.jsx"; 
import BlogDetails from "./frontend/pages/BlogDetails.jsx"; 

// admin

import AdminLayout from "./admin/Layout.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import Login from "./admin/Login.jsx";
import JobApplications from "./admin/JobApplications.jsx";

import ContactQuery from "./admin/ContactQuery.jsx";
import ContactUs from "./admin/Contactus.jsx";
import InitialLoading from "./frontend/skeleton/Initial/Index.jsx";

import PageNotFound from "./common/PageNotFound/Index.jsx";

import AeroOneBangalore from "./frontend/pages/micro/mvn-aeroone-bangalore/Index.jsx";
import MvnMallGurgaon from "./frontend/pages/MvnMallGurgaon1.jsx";
import MvnAthensSohna from "./frontend/pages/MvnAthensSohna.jsx";
import MvnAthensPh2Sohna from "./frontend/pages/MvnAthensPh2Sohna.jsx";
import MvnAthensFaridabad from "./frontend/pages/MvnAthensFaridabad.jsx";
import MvnUniversityHaryana from "./frontend/pages/MvnUniversityHaryana.jsx";
import Gallery from './frontend/pages/Gallery.jsx';
import Csr from './frontend/pages/Csr.jsx';
import PrPolcy from './frontend/pages/PrPolcy.jsx';
import Disclaimer from "./frontend/pages/Disclaimer.jsx";
const MicroPageGurgaon1 = React.lazy(()=>import("./frontend/pages/MicroPageGurgaon1.jsx"));
// const MicroPageGurgaon1 = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("./frontend/pages/MicroPageGurgaon1.jsx")), 100000)
//   )
// );

import { data } from "./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx";
import {dataMvnMall} from "./frontend/pages/micro/mvn-mall-guragaon/Index.jsx";
import FrontendRoute from "./common/FrontendRoute.jsx";




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
          <FrontendRoute  loaderType="aeroone-gurgaon">
            <MicroPageGurgaon1 data={data} />
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-mall",
        element: (
          <FrontendRoute >
            <MvnMall data={dataMvnMall} />
          </FrontendRoute>
        ),
      },
      {
        path: "aeroone-bangalore",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <AeroOneBangalore />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "aeroone-bangalore1",
        element: (
          <FrontendRoute  loaderType="aeroone-bangalore1">
            <MicroPageBangalore data={bangaloreData} />
          </FrontendRoute>
        ),
      },
      {
        path: "athens",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <Athens />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "micro",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <MicroPage projectName={'MVN-Micro'}/>
            </Layout>
          </Suspense>
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
        path: "career",
        element: (
          <FrontendRoute loaderType="career">
            <Career />
          </FrontendRoute>
        ),
      },
      {
        path: "thanks",
        element: (
          <FrontendRoute>
              <ThankYou />
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
        path: "mvn-mall-gurgaon",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <MvnMallGurgaon />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-athens-sohna",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <MvnAthensSohna />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-athens-ph2-sohna",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <MvnAthensPh2Sohna />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-athens-faridabad-old",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <MvnAthensFaridabad />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "mvn-athens-faridabad",
        element: (
          <FrontendRoute  loaderType="mvn-athens-faridabad">
          <MicroPageFaridabad data={faridabadData}/>
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-athens-gurgaon-phase-1",
        element: (
          <FrontendRoute  loaderType="mvn-athens-gurgaon-phase-1">
          <MicroPageGurgaonPhase1 data={athensGurgaonPhase1Data}/>
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-athens-gurgaon-phase-2",
        element: (
          <FrontendRoute  loaderType="mvn-athens-gurgaon-phase-2">
          <MicroPageGurgaonPhase2 data={athensGurgaonPhase2Data}/>
          </FrontendRoute>
        ),
      },
      {
        path: "mvn-university-haryana",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <MvnUniversityHaryana />
            </Layout>
          </Suspense>
        ),
      },
      {
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
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <PrPolcy />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "disclaimer",
        element: (
          <Suspense fallback={<InitialLoading onComplete={()=>console.log('Loading complete')} />}>
            <Layout>
              <Disclaimer />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "job-application",
        element: <JobApplications />,
      },
      {
        path: "contact-query",
        element: <ContactQuery />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      // {
      //   path: "blogs",
      //   element: <Blogs />,
      // },
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
