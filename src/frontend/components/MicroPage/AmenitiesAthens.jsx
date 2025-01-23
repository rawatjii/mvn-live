import React from "react";
import * as CONFIG from '../../../config/config';

function AmenitiesAthens() {
    const imgICON = CONFIG.IMAGE_URL
    

  return (
    <section className="section amenities-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/swimming-pool.png`} alt="mvn amenity SWIMMING POO" />
              </div>
              <h4>SWIMMING POOL</h4>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/runner.png`} alt="mvn amenity JOGGING CRECHE" />
              </div>
              <h4>JOGGING CRECHE</h4>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/rain-water-harvesting.png`} alt="mvn amenity RAINWATER HARVESTING" />
              </div>
              <h4>RAINWATER HARVESTING</h4>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/environment.png`}  alt="mvn amenity CLEAN ENVIRONMENT" />
              </div>
              <h4>CLEAN ENVIRONMENT</h4>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/gym.png`} alt="mvn amenity GYM & GROUP EXERCISE" />
              </div>
              <h4>GYM & GROUP EXERCISE</h4>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/lawn.png`} alt="mvn amenity LAWN" />
              </div>
              <h4>LAWN</h4>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/playground.png`}alt="mvn amenity CHILDREN'S PLAY AREA" />
              </div>
              <h4>CHILDREN'S PLAY AREA</h4>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="amenities-details">
              <div className="amenity-icon">
                <img src={`${imgICON}/athens/icons/guard.png`} alt="mvn amenity 24/7 SECURITY" />
              </div>
              <h4>24/7 SECURITY</h4>
            </div>
          </div>

          <div className="amemity-btn">
            <button className="btn amenity-query-btn">View More Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmenitiesAthens;
