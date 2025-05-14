import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdInformationCircleOutline,IoIosImage } from "react-icons/io";
import { BsBuildingUp } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { MdVideoSettings,MdOutline360,MdOutlineLiving  } from "react-icons/md";
import { TbView360Number } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { LuPartyPopper } from "react-icons/lu";
import { MdBedroomParent } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { BiLandscape } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

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

          <NavLink to={"elevation"}>
            <div className="nav">
              <div className="icon">
                <BsBuildingUp fontSize={24} />
              </div>
              <div className="description">Elevation</div>
            </div>
          </NavLink>

            <NavLink to={"walkthrough"}>
            <div className="nav">
              <div className="icon">
                <MdVideoSettings  fontSize={24} />
              </div>
              <div className="description">Walkthrough</div>
            </div>
          </NavLink>

            <NavLink to={"threesixtyview"}>
            <div className="nav">
              <div className="icon">
                <TbView360Number   fontSize={24} />
              </div>
              <div className="description">360°</div>
            </div>
          </NavLink>
            <NavLink to={"livingroom"}>
            <div className="nav">
              <div className="icon">
                <MdOutlineLiving   fontSize={24} />
              </div>
              <div className="description">Living Room</div>
            </div>
          </NavLink>
             <NavLink to={"party"}>
            <div className="nav">
              <div className="icon">
                <LuPartyPopper   fontSize={24} />
              </div>
              <div className="description">Party</div>
            </div>
          </NavLink>
          <NavLink to={"masterbedroom"}>
            <div className="nav">
              <div className="icon">
                <MdBedroomParent   fontSize={24} />
              </div>
              <div className="description">MasterBedroom</div>
            </div>
          </NavLink>
           <NavLink to={"consultant"}>
            <div className="nav">
              <div className="icon">
                <FaUserCog   fontSize={24} />
              </div>
              <div className="description">Consultant</div>
            </div>
          </NavLink>
           <NavLink to={"landscape"}>
            <div className="nav">
              <div className="icon">
                <BiLandscape   fontSize={24} />
              </div>
              <div className="description">Land Scape</div>
            </div>
          </NavLink>
            <NavLink to={"sm-elevation"}>
            <div className="nav">
              <div className="icon">
                <HiOutlineBuildingStorefront   fontSize={24} />
              </div>
              <div className="description">Small Elevation</div>
            </div>
          </NavLink>
          </>}
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default MicroSidebar;
