import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdInformationCircleOutline,IoIosImage } from "react-icons/io";
import { BsBuildingUp } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { MdVideoSettings,MdOutline360,MdOutlineLiving,MdOutlineFeaturedPlayList,MdShareLocation,MdStoreMallDirectory    } from "react-icons/md";
import { TbView360Number } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { LuPartyPopper } from "react-icons/lu";
import { MdBedroomParent } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { BiLandscape } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiBuildingApartment } from "react-icons/pi";
import { MdOutlineConstruction } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";

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
              <div className="description">SmallElevation</div>
            </div>
          </NavLink>
           <NavLink to={"apartment"}>
            <div className="nav">
              <div className="icon">
                <PiBuildingApartment   fontSize={24} />
              </div>
              <div className="description"> Apartment</div>
            </div>
          </NavLink>
           <NavLink to={"construction"}>
            <div className="nav">
              <div className="icon">
                <MdOutlineConstruction   fontSize={24} />
              </div>
              <div className="description"> Construction</div>
            </div>
          </NavLink>
           <NavLink to={"amenities"}>
            <div className="nav">
              <div className="icon">
                <MdOutlineConstruction   fontSize={24} />
              </div>
              <div className="description"> Amenities</div>
            </div>
          </NavLink>
              <NavLink to={"typologies"}>
            <div className="nav">
              <div className="icon">
                <MdOutlineFeaturedPlayList   fontSize={24} />
              </div>
              <div className="description">Typologies</div>
            </div>
          </NavLink>
            <NavLink to={"floor-plan"}>
            <div className="nav">
              <div className="icon">
                <PiStrategyBold   fontSize={24} />
              </div>
              <div className="description">Floor Plan</div>
            </div>
          </NavLink>
          <NavLink to={"location-map"}>
            <div className="nav">
              <div className="icon">
                <MdOutlineConstruction   fontSize={24} />
              </div>
              <div className="description">Location Map</div>
            </div>
          </NavLink>
             <NavLink to={"mvn-mall"}>
            <div className="nav">
              <div className="icon">
                <MdShareLocation   fontSize={24} />
              </div>
              <div className="description">MVN Mall</div>
            </div>
          </NavLink>
           <NavLink to={"connection-mvn-mall"}>
            <div className="nav">
              <div className="icon">
                <MdStoreMallDirectory   fontSize={24} />
              </div>
              <div className="description">Location Map</div>
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
