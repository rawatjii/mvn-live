import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar/Sidebar";
// import * as actionTypes from 'root/store/actions'
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";

// css
import "./styles.css";

const AdminLayout = (props) => {
  return (
    <>
      <div className={`content_layout Admin_Container`}>
        <div className="layout_sidebar">
          <Sidebar />
        </div>
        <div className="custom_width">
        <Header />
        </div>

        <div className="layout_content">
          <div className="main_container custom_width pt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
