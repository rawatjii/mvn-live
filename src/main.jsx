import React, {  Suspense} from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import Layout from "./frontend/components/Layout.jsx";

// import InitialLoading from "./frontend/skeleton/Initial/Index.jsx";
import { data } from "./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx";
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
        path: "disclaimer",
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
