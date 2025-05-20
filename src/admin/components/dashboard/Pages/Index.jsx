import React, { useEffect } from "react";
import CustomTitle from "../utilities/CustomTitle";
import { RiPagesFill } from "react-icons/ri";
import { FaUser,  FaPhoneAlt, FaRegNewspaper } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { PiBuildingOffice } from "react-icons/pi";
import { Link } from "react-router-dom";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";

export default function pages() {

  const allpagesApi = generateApi("distinct-all-pages");
  const { data } = useCrud(allpagesApi);
  console.log('all pages', data);

  return (
    <>
      <CustomTitle icon={<RiPagesFill />} title="Page Sections" />
      <div className="inner-other">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <div className="media">
              <span className="inner-sec d-flex">
              <FaRegNewspaper className="mr-3 box-icon" />
              </span>
              <div className="media-body">
                <h5>{item.page_name}</h5>
                  <Link to={`${import.meta.env.VITE_APP_ADMIN_ROOT}page/${item.slug}`}>
                    <span>View Detail</span>
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
