import React, { memo, useState, useRef, useEffect } from "react";
import { NavLink, Outlet, useParams, useSearchParams } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosImage, IoMdInformationCircleOutline } from "react-icons/io";
import { BsBuildingUp } from "react-icons/bs";
import {
  MdVideoSettings,
  MdOutlineLiving,
  MdOutlineFeaturedPlayList,
  MdShareLocation,
  MdStoreMallDirectory,
  MdBedroomParent,
} from "react-icons/md";
import { TbView360Number } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { FaUserCog } from "react-icons/fa";
import { BiLandscape } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiBuildingApartment, PiStrategyBold } from "react-icons/pi";
import { MdOutlineConstruction } from "react-icons/md";
// Import react-bootstrap components
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { VITE_APP_URL } from "../../../../config/config";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";

const navItems = [
  // { to: "", icon: <FaRegFileAlt fontSize={24} />, description: "Basic", exact: true },
  // { to: "banner", icon: <IoIosImage fontSize={28} />, description: "Banner" },
  { name: "Overview", icon: <IoMdInformationCircleOutline fontSize={28} /> },
  { name: "Large Elevation", icon: <BsBuildingUp fontSize={24} /> },
  { name: "Walkthrough", icon: <MdVideoSettings fontSize={24} /> },
  { name: "360 Views", icon: <TbView360Number fontSize={24} /> },
  { name: "Peacock", icon: <MdOutlineLiving fontSize={24} /> },
  { name: "Party", icon: <LuPartyPopper fontSize={24} /> },
  { name: "Master Bed Room", icon: <MdBedroomParent fontSize={24} />},
  { name: "Architect", icon: <FaUserCog fontSize={24} /> },
  { name: "Landscapes", icon: <BiLandscape fontSize={24} /> },
  { name: "Elevation", icon: <HiOutlineBuildingStorefront fontSize={24} /> },
  { name: "Apartment", icon: <PiBuildingApartment fontSize={24} /> },
  { name: "Construction Technology", icon: <MdOutlineConstruction fontSize={24} />},
  { name: "Amenities", icon: <MdOutlineConstruction fontSize={24} /> },
  { name: "Typologies", icon: <MdOutlineFeaturedPlayList fontSize={24} /> },
  { name: "Floor Plan", icon: <PiStrategyBold fontSize={24} />},
  { name: "Location Map", icon: <MdOutlineConstruction fontSize={24} /> },
  { name: "Mvn Mall", icon: <MdShareLocation fontSize={24} /> },
  { name: "Connection Mall", icon: <MdStoreMallDirectory fontSize={24} /> },
  { name: "Gallery", icon: <IoIosImage fontSize={28} /> },
  { name: "Key Highlights", icon: <IoMdInformationCircleOutline fontSize={28} /> },
];

const MicroSidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  const { project_id } = useParams();
  const [searchParams] = useSearchParams();
  const themeId = searchParams.get("theme");

  const basicApi = generateApi(`project-section-list?is_theme=${themeId}`);
  const { data, loading, error, createItem, editItem, deleteItem } =useCrud(basicApi);

  // Function to create tooltip
  const renderTooltip = (content) => (
    <Tooltip id={`tooltip-${content}`}>{content}</Tooltip>
  );

  // useEffect(() => {
  //   setNavItems(data);
  // }, [themeId, data]);

  return (
    <>
      <section className={`right-side right-sidenav`}>
        <div className={`sidenav right ${sidebarIsOpen ? "active" : ""}`}>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip(
              sidebarIsOpen ? "Close Sidebar" : "Open Sidebar"
            )}
          >
            <button
              onClick={toggleSidebar}
              className={`toggle ${sidebarIsOpen ? "active" : ""}`}
            ></button>
          </OverlayTrigger>

          <div className="nav-container">
            

              <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 100 }}
                  overlay={renderTooltip('Basic')}
                >
                  {({ ref, ...triggerHandler }) => (
                    <NavLink
                      ref={ref}
                      to={VITE_APP_URL + `admin/microsite/${project_id}?theme=${themeId}`}
                      end="true"
                      className={({ isActive }) =>
                        `nav ${isActive ? "active" : ""}`
                      }
                      {...triggerHandler}
                    >
                      <div className="icon"><FaRegFileAlt fontSize={24} /></div>
                      <div className="description">Basic</div>
                    </NavLink>
                  )}
              </OverlayTrigger>

              <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 100 }}
                  overlay={renderTooltip('Banner')}
                >
                  {({ ref, ...triggerHandler }) => (
                    <NavLink
                      ref={ref}
                      to={VITE_APP_URL + `admin/microsite/${project_id}/banner?theme=${themeId}`}
                      end="true"
                      className={({ isActive }) =>
                        `nav ${isActive ? "active" : ""}`
                      }
                      {...triggerHandler}
                    >
                      <div className="icon"><IoIosImage fontSize={28} /></div>
                      <div className="description">Banner</div>
                    </NavLink>
                  )}
              </OverlayTrigger>
            {data?.map((item, index) => {
              if (!project_id && index !== 0) return null;

              if(item.slug === 'location-advantage' || item.slug === 'sizes') return null;

              return (
                <OverlayTrigger
                  key={item.slug}
                  placement="left"
                  delay={{ show: 250, hide: 100 }}
                  overlay={renderTooltip(item.name)}
                >
                  {({ ref, ...triggerHandler }) => (
                    <NavLink
                      ref={ref}
                      to={VITE_APP_URL + `admin/microsite/${project_id}/${item.slug}?theme=${themeId}`}
                      end="true"
                      className={({ isActive }) =>
                        `nav ${isActive ? "active" : ""}`
                      }
                      {...triggerHandler}
                    >
                      {/* {Object.} */}
                      <div className="icon">
                        {navItems.map((navItem, index)=>{
                          if(navItem.name == item.name){
                            return navItem.icon;
                          }
                        })}</div>
                      <div className="description">{item.name}</div>
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
