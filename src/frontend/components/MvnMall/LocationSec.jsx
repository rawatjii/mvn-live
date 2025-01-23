import React from "react";
import MapImg from "../../assets/images/mvn-mall/map.png";

const thumbnails = [
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
];

const LocationSec = () => {
  return (
    <section className="section location-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="map-image-section">
              <img className="img-fluid w-100" src={MapImg} alt="mvn location image" />
              <div className="map-bottom-content">
                <p>Location Advantage</p>
                <h4>The Location Is Inviting As Its Allure</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <ul className="location_points">
            <span className="left_road"></span>
            <span className="top_road"></span>
            {thumbnails.map((item,index)=>(
              <li key={index}>
                <h3 className="distance">1 Km</h3>
                <p>Delhi</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSec;
