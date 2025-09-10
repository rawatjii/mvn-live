import React, { useEffect } from "react";
import {useInView} from 'react-intersection-observer';

const LazyLoadComponent = ({children, margin, debugName})=>{
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0,
    rootMargin:margin ? margin : '100px',
  });

  useEffect(() => {
    if (inView) {
      const scrollY = window.scrollY;
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: scrollY, behavior: "auto" });
      }, 200);

      return()=>clearTimeout(timeoutId); 
    }
  }, [inView, debugName]);

  return(
    <div ref={ref}>
      {inView && children}
    </div>
  )
}

export default LazyLoadComponent;