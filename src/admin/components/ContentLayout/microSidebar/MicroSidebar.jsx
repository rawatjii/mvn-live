import React, { memo, useState, useRef } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosImage, IoMdInformationCircleOutline } from "react-icons/io";
import { BsBuildingUp } from "react-icons/bs";
import { MdVideoSettings, MdOutlineLiving, MdOutlineFeaturedPlayList, MdShareLocation, MdStoreMallDirectory, MdBedroomParent } from "react-icons/md";
import { TbView360Number } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { FaUserCog } from "react-icons/fa";
import { BiLandscape } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiBuildingApartment, PiStrategyBold } from "react-icons/pi";
import { MdOutlineConstruction } from "react-icons/md";
// Import react-bootstrap components
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const navItems = [
  { to: "", icon: <FaRegFileAlt fontSize={24} />, description: "Basic", exact: true },
  { to: "banner", icon: <IoIosImage fontSize={28} />, description: "Banner" },
  { to: "overview", icon: <IoMdInformationCircleOutline fontSize={28} />, description: "Overview" },
  { to: "elevation", icon: <BsBuildingUp fontSize={24} />, description: "Elevation" },
  { to: "walkthrough", icon: <MdVideoSettings fontSize={24} />, description: "Walkthrough" },
  { to: "threesixtyview", icon: <TbView360Number fontSize={24} />, description: "360°" },
  { to: "livingroom", icon: <MdOutlineLiving fontSize={24} />, description: "Living Room" },
  { to: "party", icon: <LuPartyPopper fontSize={24} />, description: "Party" },
  { to: "masterbedroom", icon: <MdBedroomParent fontSize={24} />, description: "MasterBedroom" },
  { to: "consultant", icon: <FaUserCog fontSize={24} />, description: "Consultant" },
  { to: "landscape", icon: <BiLandscape fontSize={24} />, description: "Land Scape" },
  { to: "sm-elevation", icon: <HiOutlineBuildingStorefront fontSize={24} />, description: "SmallElevation" },
  { to: "apartment", icon: <PiBuildingApartment fontSize={24} />, description: "Apartment" },
  { to: "construction", icon: <MdOutlineConstruction fontSize={24} />, description: "Construction" },
  { to: "amenities", icon: <MdOutlineConstruction fontSize={24} />, description: "Amenities" },
  { to: "typologies", icon: <MdOutlineFeaturedPlayList fontSize={24} />, description: "Typologies" },
  { to: "floor-plans", icon: <PiStrategyBold fontSize={24} />, description: "Floor Plan" },
  { to: "location-map", icon: <MdOutlineConstruction fontSize={24} />, description: "Location Map" },
  { to: "mvn-mall", icon: <MdShareLocation fontSize={24} />, description: "MVN Mall" },
  { to: "connection-mvn-mall", icon: <MdStoreMallDirectory fontSize={24} />, description: "Connection MVN Mall" },
];

const MicroSidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  const { project_id } = useParams();

  // Function to create tooltip
  const renderTooltip = (content) => (
    <Tooltip id={`tooltip-${content}`}>
      {content}
    </Tooltip>
  );

  return (
    <>
      <section className={`right-side right-sidenav`}>
        <div className={`sidenav right ${sidebarIsOpen ? 'active' : ''}`}>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip(sidebarIsOpen ? "Close Sidebar" : "Open Sidebar")}
          >
            <button 
              onClick={toggleSidebar} 
              className={`toggle ${sidebarIsOpen ? "active" : ""}`}
            >
            </button>
          </OverlayTrigger>
          
          <div className="nav-container">
            {navItems.map((item, index) => {
              if (!project_id && index !== 0) return null;
              
              return (
                <OverlayTrigger
                  key={item.to}
                  placement="left"
                  delay={{ show: 250, hide: 100 }}
                  overlay={renderTooltip(item.description)}
                >
                  {({ ref, ...triggerHandler }) => (
                    <NavLink
                      ref={ref}
                      to={item.to}
                      end={item.exact}
                      className={({ isActive }) => `nav ${isActive ? 'active' : ''}`}
                      {...triggerHandler}
                    >
                      <div className="icon">{item.icon}</div>
                      <div className="description">{item.description}</div>
                    </NavLink>
                  )}
                </OverlayTrigger>
              );
            })}
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default memo(MicroSidebar);