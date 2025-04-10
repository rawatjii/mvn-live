import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

// css
import "./styles.css";

const AdminLayout = (props) => {
  const location = useLocation();

  // Check if current path includes "login"
  const isLoginPage = location.pathname.includes("login");

  return (
    <>{!isLoginPage ?
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
     
      : <div className="loginContainer"><Outlet /></div> 
    }
    </>

  );
};

export default AdminLayout;
