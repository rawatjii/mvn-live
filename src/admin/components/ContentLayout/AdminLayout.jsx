import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

// css
// import "./styles.css";

const AdminLayout = (props) => {
  const location = useLocation();
  const [isMicroPage, setIsMicroPage] = useState(false);

  const isLoginPage = location.pathname.includes("login");

  useEffect(()=>{
    if(location.pathname.includes("microsite")){
      setIsMicroPage(true)
    }
  }, [location.pathname])

  return (
    <>
      {!isLoginPage ? (
        <div className={`content_layout Admin_Container`}>
          <div className="layout_sidebar">
            <Sidebar />
          </div>

          <div className={`custom_width ${isMicroPage ? "micro_page" : undefined}`}>
            <Header />
          </div>

          <div className="layout_content">
            <div className={`main_container custom_width pt-0 ${isMicroPage ? "micro_page" : undefined}`}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="loginContainer">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default AdminLayout;
