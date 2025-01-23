import React from 'react';
import './loader.css';



const Loader = ({action}) => {
  return (
    
   <div className='loadercontainer'>
     <div className="spinner " >
      <div className="react1"></div>
      <div className="react2"></div>
      <div className="react3"></div>
      <div className="react4"></div>
      <div className="react5"></div>
</div>
   </div>
  );
};

export default Loader;