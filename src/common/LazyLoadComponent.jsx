import React, { useEffect } from "react";
import gsap from 'gsap';
import {useInView} from 'react-intersection-observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LazyLoadComponent = ({children, margin, debugName, smootherRef})=>{
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0,
    rootMargin:margin ? margin : '100px',
    root: document.querySelector('#smooth-wrapper'),
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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