import React, { useState } from "react";
import "./assets/css/admin.css";
import "./assets/css/dashboard.css";
import {
  FaAddressCard,
  FaEnvelopeOpen,
  FaShareSquare,
  FaEye,
  FaBuilding,
  FaCalendar,
  FaAngleRight,
  FaIdCard,
  FaCity,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosEye, IoMdHome, IoIosAddCircleOutline } from "react-icons/io";
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
import { Link } from "react-router-dom";

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
    name: "State name",
    icon: <FaCity className="mr-3 box-icon" />,
    link: "state.html",
  },
  {
    name: "City name",
    icon: <FaCity className="mr-3 box-icon" />,
    link: "city.html",
  },
  {
    name: "Location",
    icon: <FaCity className="mr-3 box-icon" />,
    link: "location.html",
  },
  {
    name: "Sub Locality",
    icon: <FaCity className="mr-3 box-icon" />,
    link: "#",
  },
  {
    name: "Developer Logo",
    icon: <FaCity className="mr-3 box-icon" />,
    link: "developer-logo.html",
  },
  {
    name: "Property Type",
    icon: <FaCity className="mr-3 box-icon" />,
    link: "property-type.html",
  },
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
    name: "About US",
    icon: <FaImage className="mr-3 box-icon" />,
    link: "/admin/page/about-us",
  },
  {
    name: "Media Centre",
    icon: <FaImage className="mr-3 box-icon" />,
    link: "/admin/page/media-centre",
  },
  {
    name: "Blogs",
    icon: <FaImage className="mr-3 box-icon" />,
    link: "/admin/page/blogs",
  },
  {
    name: "Career",
    icon: <FaImage className="mr-3 box-icon" />,
    link: "/admin/page/career",
  },
  {
    name: "Contact US",
    icon: <FaImage className="mr-3 box-icon" />,
    link: "/admin/page/contact-us",
  }
];

// reviews
const reviews = [
  {
    id: 1,
    name: "Sanjay Kapoor",
    initial: "S",
    date: "24 Jun",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
  {
    id: 2,
    name: "Renu Singh",
    initial: "R",
    date: "24 Jun",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
  },
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
                <Box>
                  <CustomTitle icon={<IoMdHome />} title="Total Project" />
                  <div className="media">
                    <span className="no-project">245</span>
                    <div className="media-body">
                      <h4>No. of Project</h4>
                      <ul>
                        <li>
                          <a href="Project-list.html"> View Details</a>
                        </li>
                        <li>
                          <Link to={`${import.meta.env.VITE_APP_ADMIN_ROOT}microsite`}>
                            <span>
                              <IoIosAddCircleOutline />
                            </span>
                            Add More Project
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Box>
                {/* review start */}
                <Box>
                  <div className="box-review">
                    <CustomTitle icon={<FaIdCard />} title="Latest Review" />
                    {reviews.map((review) => (
                      <div key={review.id} className="review">
                        <div className="l-review">
                          <span>{review.initial}</span>
                        </div>
                        <div className="r-review">
                          <h4>{review.name}</h4>
                          <p>
                            {review.text} <a href="#">Read More</a>
                          </p>
                          <ul>
                            <li>
                              <FaCalendar className="icon" /> {review.date}
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Box>
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
                <CustomTitle
                  icon={<RiPagesFill />}
                  title=" Page Sections"
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
