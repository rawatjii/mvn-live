import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "./config/config";
import axios from "axios";

const AdminProtectedRoute = () => {
  const [authStatus, setAuthStatus] = useState({ isAuthenticated: null, isLoading: true });
  const token = localStorage.getItem("token"); // or however you store auth
  const {pathname} = useLocation();
  
  useEffect(()=>{
    const checkAuth = async()=>{

      if(!token){
        setAuthStatus({ isAuthenticated: false, isLoading: false });
        return;
      }

      try{
        // debugger
        const response = await axios.post(`${API_BASE_URL}/validate-token`, {}, {
          headers:{
            Authorization:`Bearer ${token}`
          }
        })

        setAuthStatus({
          isAuthenticated: response.status == 200,
          isLoading: false,
        });
        
      }catch(err){
        console.error(err)
        setAuthStatus({ isAuthenticated: false, isLoading: false });
      }
      
    }

    checkAuth()
  }, [token,pathname])

  if (authStatus.isLoading) {
    return <div className="loading" style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
  }

  return authStatus.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/login" state={{ from: location.pathname }} replace />
  );
};

export default AdminProtectedRoute;
