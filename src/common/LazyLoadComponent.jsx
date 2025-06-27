import React, { useEffect } from "react";
import {useInView} from 'react-intersection-observer';

import ScrollTrigger from "gsap/ScrollTrigger";

const LazyLoadComponent = ({children, margin, debugName, smootherRef})=>{
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0,
    rootMargin:margin ? margin : '100px',
    root: document.querySelector('#smooth-wrapper'),
  });

  useEffect(() => {
    if (inView && smootherRef?.current) {
      const scrollY = window.scrollY || smootherRef?.current?.offset() || 0;
      const timeoutId = setTimeout(() => {
        try {
          ScrollTrigger.refresh();
          smootherRef.current.scrollTo(scrollY, false);
        }catch(error){

        }
        
      }, 200);

      return()=>clearTimeout(timeoutId); 
    }
  }, [inView, debugName, smootherRef]);

  return(
    <div ref={ref}>
      {inView && children}
    </div>
  )
}

export default LazyLoadComponent;