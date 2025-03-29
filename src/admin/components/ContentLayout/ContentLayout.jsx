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
      <div className={`content_layout`}>
        <Header />

        <div className="layout_sidebar">
          <Sidebar />
        </div>

        {/* <Sidebar onclick={props.onclick} /> */}
        <div className="layout_content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
