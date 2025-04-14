import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";


const MicroSidebar = () => {
  return (
    <>
      <section className="right-side right-sidenav">
        <div className="sidenav right">
          <NavLink to={import.meta.env.VITE_APP_URL + "admin/microsite"}>
            <div className="nav active">
              <div className="icon">
                <FaRegFileAlt fontSize={24} />
              </div>
              <div className="description">Basic</div>
            </div>
          </NavLink>

          <NavLink to={import.meta.env.VITE_APP_URL + "admin/microsite/overview"}>
            <div className="nav">
              <div className="icon">
                <IoMdInformationCircleOutline fontSize={28} />
              </div>
              <div className="description">Overview</div>
            </div>
          </NavLink>

          <NavLink to={import.meta.env.VITE_APP_URL + "admin/microsite/pricelist"}>
            <div className="nav">
              <div className="icon">
                <LuIndianRupee fontSize={24} />
              </div>
              <div className="description">Price List</div>
            </div>
          </NavLink>

          <a href="location-advantage.html">
            <div className="nav">
              <div className="icon">
                <img src="images/icon/location.png" />
              </div>
              <div className="description">Location</div>
            </div>
          </a>

          <a href="amenities.html">
            <div className="nav">
              <div className="icon">
                <img src="images/icon/resources.png" />
              </div>
              <div className="description">Amenities</div>
            </div>
          </a>

          <a href="floor-plan.html">
            <div className="nav">
              <div className="icon">
                <img src="images/icon/blueprint.png" />
              </div>
              <div className="description">Floor Plan</div>
            </div>
          </a>

          <a href="about-builder.html">
            <div className="nav">
              <div className="icon">
                <img src="images/icon/constructor.png" />{" "}
              </div>
              <div className="description">Builder</div>
            </div>
          </a>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default MicroSidebar;
