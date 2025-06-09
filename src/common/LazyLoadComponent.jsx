import React from "react";
import {useInView} from 'react-intersection-observer';

const LazyLoadComponent = ({children})=>{
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold:0,
    rootMargin:'0px'
  });

  return(
    <div ref={ref}>
      {inView && children}
    </div>
  )
}

export default LazyLoadComponent;