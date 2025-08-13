import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from 'react-dom/server';
import { BrowserRouter, MemoryRouter } from "react-router-dom";


// Prerender function for vite-prerender-plugin

// import Layout from "./frontend/components/Layout.jsx";

// import InitialLoading from "./frontend/skeleton/Initial/Index.jsx";
// import { data } from "./frontend/pages/micro/mvn-aeroone-gurgaon1/Index.jsx";
import FrontendRoute from "./common/FrontendRoute.jsx";
// import PrPolcy from "./frontend/pages/PrPolcy.jsx";
// import Disclaimer from "./frontend/pages/Disclaimer.jsx";
// import ThankYou from "./frontend/pages/ThankYou.jsx";
// import { bangaloreData } from "./frontend/pages/micro/mvn-aeroone-bangalore/Index.jsx";
// import { faridabadData } from "./frontend/pages/micro/Athens/Index.jsx";
// import { athensGurgaonPhase1Data } from "./frontend/pages/micro/athens-gurgaon-phase-1/Index.jsx";
// import { athensGurgaonPhase2Data } from "./frontend/pages/micro/athens-gurgaon-phase-2/Index.jsx";
// import { mvnMallData } from "./frontend/pages/micro/mvnMall/Index.jsx";

const Homepage = React.lazy(() => import("./frontend/pages/Homepage.jsx"));
const AboutUs = React.lazy(() => import("./frontend/pages/AboutUs.jsx"));


const routes=[
  {
    path: "/",
    // element:<Layout />,
    children: [
      
      {
        path: "about-us",
        element: (
          <FrontendRoute loaderType="about-us">
            <AboutUs />
          </FrontendRoute>
        ),
      },
      
    ],
  }
]

export default RouterRouterArr=()=>{
    return routes
}