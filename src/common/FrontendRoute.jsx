import React, { Suspense, useEffect, useState } from "react";
import InitialLoading from "../frontend/skeleton/Initial/Index";
import Layout from "../frontend/components/Layout";
import PropTypes from "prop-types";
import * as CONFIG from '../config/config';
// const Homepage = React.lazy(() => import("../frontend/pages/Homepage"));
// const Homepage = React.lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import("../frontend/pages/Homepage")), 1000)
//   )
// );

const FrontendRoute = ({children, loaderType})=>{
  const [loadingCount, setLoadingCount] = useState(0);
  const [loaderImage, setLoaderImage] = useState({
    desktop:null,
    mobile:null,
  });

  useEffect(()=>{
    if(loaderType == 'homepage'){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/homepage/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/homepage/mobile.webp',
      })
    }else if(loaderType == "aeroone-gurgaon"){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/aeroone-gurgaon/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/aeroone-gurgaon/mobile.webp',
      })
    }else if(loaderType == "about-us"){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/about-us/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/about-us/mobile.webp',
      })
    }else if(loaderType == 'media-centre'){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/media-centre/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/media-centre/mobile.webp',
      })
    }else if(loaderType == 'blogs'){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/blogs/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/blogs/mobile.webp',
      })
    }
    else if(loaderType == 'blog-detail'){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/blogs/detail/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/blogs/detail/mobile.webp',
      })
    }
    else if(loaderType == 'career'){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/career/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/career/mobile.webp',
      })
    }
    else if(loaderType == 'contact-us'){
      setLoaderImage({
        desktop: CONFIG.IMAGE_URL + 'loader/contact-us/desktop.webp',
        mobile: CONFIG.IMAGE_URL + 'loader/contact-us/mobile.webp',
      })
    }
  }, [loaderType])

  return(
    <Suspense fallback={<InitialLoading loadingCount={loadingCount} loadingImg={loaderImage} setLoadingCount={setLoadingCount} onComplete={()=>console.log('Loading complete')}/>}>
      {children}
        {/* <Homepage loadingCount={loadingCount} setLoadingCount={setLoadingCount} /> */}
    </Suspense>
  )
}

FrontendRoute.propTypes = {
  loaderType:PropTypes.string.isRequired,
}

export default FrontendRoute;