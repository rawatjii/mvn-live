import React, { Suspense, useState } from "react";
import InitialLoading from "../frontend/skeleton/Initial/Index";
import Layout from "../frontend/components/Layout";
// const Homepage = React.lazy(() => import("../frontend/pages/Homepage"));
// const Homepage = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("../frontend/pages/Homepage")), 1000)
//   )
// );

const FrontendRoute = ({children})=>{
  const [loadingCount, setLoadingCount] = useState(0);

  return(
    <Suspense fallback={<InitialLoading loadingCount={loadingCount} setLoadingCount={setLoadingCount} onComplete={()=>console.log('Loading complete')}/>}>
      {children}
        {/* <Homepage loadingCount={loadingCount} setLoadingCount={setLoadingCount} /> */}
    </Suspense>
  )
}

export default FrontendRoute;