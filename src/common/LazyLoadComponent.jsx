import React, { useEffect } from "react";
import {useInView} from 'react-intersection-observer';

const LazyLoadComponent = ({children, margin, debugName})=>{
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0,
    rootMargin:margin ? margin : '100px',
    root: document.querySelector('#smooth-wrapper'),
  });

  useEffect(() => {
    if (inView) {
      const scrollY = window.scrollY || smootherRef.current?.offset() || 0;
      setTimeout(() => {
        ScrollTrigger.refresh();
        window.scrollTo(0, scrollY); // Restore scroll position
      }, 100);
    }
  }, [inView, debugName]);

  return(
    <div ref={ref}>
      {inView && children}
    </div>
  )
}

export default LazyLoadComponent;