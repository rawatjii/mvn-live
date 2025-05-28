import React, { useState } from "react";
import "./assets/css/admin.css";
import "./assets/css/dashboard.css";
import {
  FaAddressCard,
  FaEnvelopeOpen,
  FaShareSquare,
  FaEye,
  FaBuilding,
  FaAngleRight,
  FaIdCard,
  FaCity,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosEye, IoIosAddCircleOutline } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineNavigateNext } from "react-icons/md";
import amenityIcon from "/assets/icons/amenity.png";
import CustomTitle from "./components/dashboard/utilities/CustomTitle";
import { IoLogoMicrosoft } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { Box, TopBox } from "./components/dashboard/utilities/CutomTags";
import { RiPagesFill } from "react-icons/ri";
import { FaImage } from "react-icons/fa";


import { FaUser,  FaPhoneAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { PiBuildingOffice } from "react-icons/pi";
import TotalProjects from "./components/dashboard/TotalProjects";
import Testimonials from "./components/dashboard/Testimonials";
import Pages from './components/dashboard/Pages/Index'
import { Link } from "react-router-dom";
import { FRONTEND_URL } from "../config/config";

const data = [
  { id: 1, name: "Godrej Properties", hot: true, calculator: true },
  { id: 2, name: "DLF Group", hot: true, calculator: true },
  // Add more entries as needed
];

const tableData = [
  { name: "DLF Group", newQuery: "+8" },
  { name: "Godrej Properties", newQuery: "+9" },
  { name: "M3M Group", newQuery: "+12" },
  { name: "ATS Properties", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
  { name: "M3M", newQuery: "+12" },
];

const otherSection = [
  {
    name: "Platter",
    icon: <FaCity className="mr-3 box-icon" />,
    link: "/admin/platter",
  },
  // {
  //   name: "State name",
  //   icon: <FaCity className="mr-3 box-icon" />,
  //   link: "state.html",
  // },
  // {
  //   name: "City name",
  //   icon: <FaCity className="mr-3 box-icon" />,
  //   link: "city.html",
  // },
  // {
  //   name: "Location",
  //   icon: <FaCity className="mr-3 box-icon" />,
  //   link: "location.html",
  // },
  // {
  //   name: "Sub Locality",
  //   icon: <FaCity className="mr-3 box-icon" />,
  //   link: "#",
  // },
  // {
  //   name: "Developer Logo",
  //   icon: <FaCity className="mr-3 box-icon" />,
  //   link: "developer-logo.html",
  // },
  // {
  //   name: "Property Type",
  //   icon: <FaCity className="mr-3 box-icon" />,
  //   link: "property-type.html",
  // },
  {
    name: "Amenities Logo",
    image: amenityIcon,
    icon: <FaCity className="mr-3 box-icon" />,
    link: "/admin/amenities",
  },
  { name: "Other Page", icon: <FaCity className="mr-3 box-icon" />, link: "#" },
];
const PageCommonSection = [
  {
    name: "Verticals",
    icon: <FaUser className="mr-3 box-icon" />,
    link: "admin/verticals",
  },
  {
    name: "About US",
    icon: <FaUser className="mr-3 box-icon" />,
    link: "/admin/page/about-us",
  },
  {
    name: "Media Centre",
    icon: <FaRegNewspaper className="mr-3 box-icon" />,
    link: "/admin/page/media-centre",
  },
  {
    name: "Blogs",
    icon: <SiBloglovin className="mr-3 box-icon" />,
    link: "/admin/page/blogs",
  },
  {
    name: "Career",
    icon: <PiBuildingOffice className="mr-3 box-icon" />,
    link: "/admin/page/career",
  },
  {
    name: "Contact US",
    icon: <FaPhoneAlt className="mr-3 box-icon" />,
    link: "/admin/page/contact-us",
  }
];



// social media
const socialData = [
  {
    id: 1,
    platform: "Friends",
    count: "35K",
    activity: "Feeds",
    activityCount: "128",
    icon: FaFacebookF, // React icon component
  },
  {
    id: 2,
    platform: "Followers",
    count: "35K",
    activity: "Tweets",
    activityCount: "128",
    icon: FaTwitter, // React icon component
  },
  {
    id: 3,
    platform: "Followers",
    count: "35K",
    activity: "Feeds",
    activityCount: "128",
    icon: RiInstagramFill, // React icon component
  },
  {
    id: 4,
    platform: "Contacts",
    count: "35K",
    activity: "Feeds",
    activityCount: "128",
    icon: FaLinkedinIn, // React icon component
  },
];

const Dashboard = () => {
  const [items, setItems] = useState(data);

  const handleToggle = (id, field) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: !item[field] } : item
      )
    );
  };

  return (
    <>
      <section className="body-detail">
        <div className="inner-sec">
          <div className="left-area">
            <div className="inner-left">
              <TopBox>
                <TotalProjects />
                {/* review start */}
                  <Testimonials />
                {/* review end */}
              </TopBox>
            </div>

            <div className="bottom-box">
              <div className="inner-bottom-box">
                <CustomTitle
                  icon={<IoLogoMicrosoft />}
                  title=" Microsite Sections"
                />
                <div className="inner-other">
                  {otherSection.map((item, index) => (
                    <div className="box" key={index}>
                      <div className="media">
                        <span className="inner-sec">
                          {item?.image ? (
                            <img src={item.image} className="mr-3 box-icon" />
                          ) : (
                            item.icon
                          )}
                        </span>
                        <div className="media-body">
                          <h5>{item.name}</h5>
                          <a href={item.link}>
                            <span>View Detail</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bottom-box">
              <div className="inner-bottom-box">
                <Pages />
              </div>
            </div>


            <div className="bottom-box">
              <div className="inner-bottom-box">
                <CustomTitle
                  icon={<RiPagesFill />}
                  title="Other Sections"
                />
                <div className="inner-other">
                  {PageCommonSection.map((item, index) => (
                    <div className="box" key={index}>
                      <div className="media">
                        <span className="inner-sec">
                          {item?.image ? (
                            <img src={item.image} className="mr-3 box-icon" />
                          ) : (
                            item.icon
                          )}
                        </span>
                        <div className="media-body">
                          <h5>{item.name}</h5>
                          <Link to={FRONTEND_URL + item.link}>
                            <span>View Detail</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="middle-box">
              <div className="inner-bottom-box">
                <CustomTitle
                  icon={<IoShareSocial />}
                  title="Social Media Details"
                />

                <div className="inner-other">
                  {socialData.map((item) => {
                    const IconComponent = item.icon; // Store the component in a variable
                    return (
                      <div key={item.id} className="box">
                        <div className="media">
                          <span className="inner-sec">
                            <IconComponent className="mr-3 box-icon" />
                          </span>
                          <div className="media-body">
                            <div className="inner-media">
                              <h5>
                                {item.platform} <span>{item.count}</span>
                              </h5>
                              <h5>
                                {item.activity}{" "}
                                <span>{item.activityCount}</span>
                              </h5>
                            </div>
                            <div className="media-btn">
                              <a href="">
                                <MdOutlineNavigateNext />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <!--------inner-other----------> */}
              </div>
            </div>
          </div>
          {/* <!----------left-area---------> */}

          <div className="right-area">
            <div className="inner-left">
              <div className="box">
                <h6>
                  <i className="fa fa-envelope-open" aria-hidden="true"></i>{" "}
                  Latest Query
                </h6>
                <div className="inner-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Builder Name</th>
                        <th>New Query</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.name}</td>
                          <td>{row.newQuery}</td>
                          <td>
                            <IoIosEye />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!----------right-area---------> */}

            <div className="inner-left">
              <div className="box">
                <h6>
                  <i className="fa fa-building" aria-hidden="true"></i> Project
                  List
                </h6>
                <div className="inner-table switch-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Hot</th>
                        <th>Calculator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td
                            className={
                              item.name === "Godrej Properties"
                                ? "name-heading"
                                : ""
                            }
                          >
                            {item.name}
                          </td>
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={item.hot}
                                onChange={() => handleToggle(item.id, "hot")}
                              />
                              <span className="slider round"></span>
                            </label>
                          </td>
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={item.calculator}
                                onChange={() =>
                                  handleToggle(item.id, "calculator")
                                }
                              />
                              <span className="slider round"></span>
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!----------right-area---------> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
