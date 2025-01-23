import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import ContentLayout from './components/ContentLayout/ContentLayout'

import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = ()=>{
  const location = useLocation();

  useEffect(()=>{
    // Add 'admin_body' class when on admin routes
    document.body.classList.add('admin_body');

    // Cleanup function to remove the class when leaving admin routes
    return()=>{
      document.body.classList.remove('admin_body');
    }
  }, [location])

  return(
    <>
      <Header />
      <h1>Admin Layout</h1>
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <ToastContainer />
    </>
  )
}

export default AdminLayout