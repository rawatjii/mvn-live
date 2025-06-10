import React, { useEffect } from "react";
import {useInView} from 'react-intersection-observer';

const LazyLoadComponent = ({children, margin, debugName, smootherRef})=>{
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0,
    rootMargin:margin ? margin : '100px',
    root: document.querySelector('#smooth-wrapper'),
  });

  useEffect(() => {
    if (inView) {
      const scrollY = window.scrollY || smootherRef?.current?.offset() || 0;
      setTimeout(() => {
        ScrollTrigger.refresh();
        if (smootherRef?.current) {
          smootherRef.current.scrollTo(scrollY, false);
        } else {
          window.scrollTo(0, scrollY);
        }
      }, 100);
    }
  }, [inView, debugName, smootherRef]);

  return(
    <div ref={ref}>
      {inView && children}
    </div>
  )
}

export default LazyLoadComponent;