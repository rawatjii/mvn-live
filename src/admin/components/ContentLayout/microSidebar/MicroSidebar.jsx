import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdInformationCircleOutline,IoIosImage } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { useParams } from "react-router-dom";
const MicroSidebar = () => {
  const getProject_id=useParams();
  console.log(getProject_id,"asd")
  // const location=useLocation();
  // const urlLastSegment=location.split("/").pop();
  // console.log(urlLastSegment)
  // console.log()
  return (
    <>
      <section className="right-side right-sidenav">
        <div className="sidenav right">
          <NavLink to={""}>
            <div className={`nav active`}>
              <div className="icon">
                <FaRegFileAlt fontSize={24} />
              </div>
              <div className="description">Basic</div>
            </div>
          </NavLink>
          {getProject_id['project_id']
&&
          <>
          <NavLink to={"banner"}>
            <div className="nav">
              <div className="icon">
                <IoIosImage fontSize={28} />
              </div>
              <div className="description">Banner</div>
            </div>
          </NavLink>

          <NavLink to={"overview"}>
            <div className="nav">
              <div className="icon">
                <IoMdInformationCircleOutline fontSize={28} />
              </div>
              <div className="description">Overview</div>
            </div>
          </NavLink>

          <NavLink to={"pricelist"}>
            <div className="nav">
              <div className="icon">
                <LuIndianRupee fontSize={24} />
              </div>
              <div className="description">Price List</div>
            </div>
          </NavLink>

          <NavLink to={"location"}>
            <div className="nav">
              <div className="icon">
                <GrLocation  fontSize={24} />
              </div>
              <div className="description">Location</div>
            </div>
          </NavLink>

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
          </>}
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default MicroSidebar;
