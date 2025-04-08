import React from 'react'
import { TbAirConditioning } from "react-icons/tb";

const CustomTable = () => {
  return (
   <>
     <div className="amenities-box">
          <div className="inner-amenities-box">
            <span className="amen-img"><TbAirConditioning /></span>
            <h4>Security</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/filtration.png" /></span>
            <h4>RO Water System</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/air-conditioner.png" /></span>
            <h4>Air Conditioned</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/fire-extinguisher.png" /></span>
            <h4>Fire Fighting Equipment</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/charger-back.png" /></span>
            <h4>Power Back Up</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/swimming.png" /></span>
            <h4>Swimming Pool</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>
          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/club.png" /></span>
            <h4>Club House</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/elevator.png" /></span>
            <h4>Elevator</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/parking.png" /></span>
            <h4>Reserved Parking</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

          <div className="inner-amenities-box">
            <span className="amen-img"><img srcset="images/amenities/park.png" /></span>
            <h4>Park</h4>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" value=""/>
          </div>
          </div>

        </div>
   </>
  )
}

export default CustomTable