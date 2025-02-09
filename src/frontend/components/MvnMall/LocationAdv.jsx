import React from "react";

const LocationAdv = () => {
  return (
    <section className="section location-section" aria-label="Location Section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="map-image-section">
              <div className="map-top-content">
                <p>AT THE FIRST AND ONLY DROP OF</p>
                <h4>The 22 km Stone Elevated Dwarka Expressway</h4>
              </div>
              <img className="img-fluid w-100" src="images/map.png" alt="mvn location image" />
              <div className="map-bottom-content">
                <p>Location Advantage</p>
                <h4>The Location As Inviting As Its Allure</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdv;
