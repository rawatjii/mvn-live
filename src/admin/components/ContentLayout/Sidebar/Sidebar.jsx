import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/plan-logo-icon.webp";
import logo2 from "../../../assets/images/logo2.webp";

// icons
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { PiBuildingOffice } from "react-icons/pi";

import "./styles.css";

export default function Sidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const location = useLocation();


  console.log(location.pathname,"path");
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  const menuItems = [
    { title: "Dashboard", icon: <AiFillHome size={24} />, link: "/admin" },
    { title: "About Us", icon: <FaUser size={20} />, link: "/about-us" },
    { title: "Media Centre", icon: <FaRegNewspaper size={20} />, link: "/admin/media-center" },
    { title: "Blogs", icon: <SiBloglovin size={22} />, link: "/admin/blogs" },
    { title: "Career", icon: <PiBuildingOffice size={22} />, link: "/admin/career" },
    { title: "Contact Us", icon: <FaPhoneAlt size={20} />, link: "/contact-us" },
  ];

  return (
    <div className={`navigation ${sidebarIsOpen ? "active" : "closed"}`}>
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <img src={logo} alt="Company Logo" />
            </span>
            <span className="title">
              <img src={logo2} alt="Company Logo" />
            </span>
          </Link>
        </li>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className={location.pathname === item.link ? "active" : ""}>
              <span className="icon">{item?.icon || 'No Icon'}</span>
              <span className="title">{item?.title || 'No Title'}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleSidebar} className={`toggle ${sidebarIsOpen ? "active" : ""}`}>
      </button>
    </div>
  );
}