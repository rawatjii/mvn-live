import React, {useRef, useEffect, useState} from "react";
import { NavLink, Link, useLocation, useParams } from "react-router-dom";
import PerfectScrollbar from 'perfect-scrollbar';
import { useDispatch, useSelector } from "react-redux";
// import * as actionTypes from 'root/store/actions';
import * as CONFIG from 'root/config/config';
// import Request from 'root/config/Request';

import { setCurrentPage, shortCount, normalCount } from "../../../redux/adminSidebarSlice";

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './sidebar.css';

const IMG_URL = import.meta.env.VITE_APP_ADMIN_IMAGE_URL;

import dashboardIcon from '../../assets/images/icons/dashboard.png'
import dashboardColorIcon from '../../assets/images/icons/dashboard_color.png'
import projectsColorIcon from '../../assets/images/icons/projects_color.png'
import projectsIcon from '../../assets/images/icons/projects.png'
import platterIcon from '../../assets/images/icons/platter.png'
import platterColorIcon from '../../assets/images/icons/platter_color.png'
import locationIcon from '../../assets/images/icons/locations.png'
import locationColorIcon from '../../assets/images/icons/locations_color.png'
import amenityIcon from '../../assets/images/icons/amenities.png'
import amenityColorIcon from '../../assets/images/icons/amenities_color.png'
import pagesIcon from '../../assets/images/icons/pages.png'
import pagesColorIcon from '../../assets/images/icons/pages_color.png'
import developersIcon from '../../assets/images/icons/developers.png'
import developersColorIcon from '../../assets/images/icons/developers_color.png'
import typologyIcon from '../../assets/images/icons/typologies.png'
import typologyColorIcon from '../../assets/images/icons/typologies_color.png'
import cmsIcon from '../../assets/images/icons/cms.png'
import cmsColorIcon from '../../assets/images/icons/cms_color.png'
import enquireIcon from '../../assets/images/icons/message.png'
import enquireColorIcon from '../../assets/images/icons/message_color.png'
import dashboardSvgIcon from '../../assets/images/icons/dashboard.svg'


const Sidebar = (props)=>{
  const containerRef = useRef(null);
  const dispatch = useDispatch()
  const location = useLocation(); // Get current location
  const currentPage = useSelector(state=>state.adminSideMenu.currentPage)
  const [categoryList, setCategoryList] = useState([]);

  const currentUrl = location.pathname.split('/admin')[1];
  const actualUrl = currentUrl.split('/')[1] ? currentUrl.split('/')[1] : '';

  useEffect(() => {
    dispatch(setCurrentPage(actualUrl))

    switch(actualUrl){
      case '':
      case 'states':
      case 'amenities':
      case 'developers':
        dispatch(shortCount())
        return

      default:
        dispatch(normalCount())
    }

  }, [dispatch, location.pathname]); // Listen for changes in location.pathname


  const getlist=async ()=>{
    var response=await Request('admin/category','GET');
    if(response.status && response.statusCode==200){
       setCategoryList(response.data.data);
    }
  }
  
  useEffect(() => {
    const scrollbar = new PerfectScrollbar(containerRef.current);
    // getlist()
    return () => {
      scrollbar.destroy();
    };
  }, [currentPage]);

  // useEffect(()=>{
  //   switch(currentMenuCount){
  //     case 0:
  //       setMenuClasses('')
  //     break;
  
  //     case 1:
  //       setMenuClasses('test');
  //     break;
      
  //     case 2:
  //       setMenuClasses('test test1')
  //     break;
  
  //     default:
  //       setMenuClasses('')
  //   }
  // }, [currentMenuCount]);

  // const toggleMenuHandler = ()=>{
  //   if(currentMenuCount === toggleCount.length - 1){
  //     setCurrentMenuCount((state)=>state - 1);
  //     setIsAscending(!isAscending);
  //   }
    
  //   else if(currentMenuCount === 0){
  //     setCurrentMenuCount(state=>state + 1)
  //     setIsAscending(!isAscending)
  //   }

  //   else{
  //     setCurrentMenuCount(state=>{
  //       if(isAscending){
  //         return state + 1
  //       }else{
  //         return state - 1
  //       }
  //     })
  //   }
    
  // }

  // const toggleSubMenusHandler = (e, menu)=>{
  //   e.stopPropagation();
  //   setMenuClasses('test test1')
  //   setMenusCounts(menu);
  // }

  return(
    <>
      {/* <button className={`ms-auto float-right ${menuClasses}`} onClick={toggleMenuHandler} style={{position:'absolute', right:'10px', zIndex:'9999', top:'100px'}}>
        testing
      </button> */}

      <div className={`sidebar`}>
        <div className="main-menu" ref={containerRef}>
          <NavLink to={`${CONFIG.ADMIN_ROOT}`} className="sidebar_link">
            <span className="icon">
              <img src={dashboardIcon} alt="dashboard icon" className="img-fluid default" />
              <img src={dashboardColorIcon} alt="dashboard icon" className="img-fluid color" />
            </span>
            <span>Dashboard</span>
          </NavLink>

          <Link className="sidebar_link hasSubMenu" onClick={(e)=>props.toggleSubMenusHandler(e, 'projects')}>
            <span className="icon">
              <img src={projectsIcon} alt="projects icon" className="img-fluid default" />
              <img src={projectsColorIcon} alt="projects icon" className="img-fluid color" />
            </span>
            <span>Projects</span>
          </Link>

          <NavLink className="sidebar_link hasSubMenu" to={`${CONFIG.ADMIN_ROOT}platter-page`}>
            <span className="icon">
              <img src={platterIcon} alt="platter icon" className="img-fluid default" />
              <img src={platterColorIcon} alt="platter icon" className="img-fluid color" />
            </span>
            <span>Platter Page</span>
          </NavLink>
        

          <NavLink className="sidebar_link hasSubMenu" to={`${CONFIG.ADMIN_ROOT}states`}>
            <span className="icon">
              <img src={locationIcon} alt="location icon" className="img-fluid default" />
              <img src={locationColorIcon} alt="location icon" className="img-fluid color" />
            </span>
              <span>Locations</span>
          </NavLink>

          <NavLink className="sidebar_link" to={`${CONFIG.ADMIN_ROOT}amenities`}>
            <span className="icon">
              <img src={amenityIcon} alt="amenities icon" className="img-fluid default" />
              <img src={amenityColorIcon} alt="amenities icon" className="img-fluid color" />
            </span>
              <span>Amenities</span>
          </NavLink>

          <NavLink className="sidebar_link"  onClick={(e)=>props.toggleSubMenusHandler(e, 'pages')}>
            <span className="icon">
              <img src={pagesIcon} alt="pages icon" className="img-fluid default" />
              <img src={pagesColorIcon} alt="pages icon" className="img-fluid color" />
            </span>
            <span>Pages</span>
          </NavLink>

          <NavLink className="sidebar_link" to={`${CONFIG.ADMIN_ROOT}developers`}>
            <span className="icon">
              <img src={developersIcon} alt="developers icon" className="img-fluid default" />
              <img src={developersColorIcon} alt="developers icon" className="img-fluid color" />
            </span>
              <span>Developers</span>
          </NavLink>

          {/* to={`${CONFIG.ADMIN_ROOT}typologies`} */}
          <NavLink className="sidebar_link" onClick={(e)=>props.toggleSubMenusHandler(e, 'typologies')}>
            <span className="icon">
              <img src={typologyIcon} alt="typologies icon" className="img-fluid default" />
              <img src={typologyColorIcon} alt="typologies icon" className="img-fluid color" />
            </span>
            <span>Typologies</span>
          </NavLink>

          <NavLink className="sidebar_link" onClick={(e)=>props.toggleSubMenusHandler(e, 'cms')}>
            <span className="icon">
              <img src={cmsIcon} alt="cms icon" className="img-fluid default" />
              <img src={cmsColorIcon} alt="cms icon" className="img-fluid color" />
            </span>
            <span>CMS</span>
          </NavLink>

          <NavLink className="sidebar_link" onClick={(e)=>props.toggleSubMenusHandler(e, 'enquiry')}>
            <span className="icon">
              <img src={enquireIcon} alt="message icon" className="img-fluid default" />
              <img src={enquireColorIcon} alt="message icon" className="img-fluid color" />
            </span>
            <span>Enquiry</span>
          </NavLink>
        </div>

        {props.isSubMenuOpen && (
          <div className="sub-menu">
         {currentPage === 'projects' && (
            categoryList ? (
              categoryList.map((item, index) => {
                if(item.slug === 'residentials'){
                  return <NavLink key={item+index} className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT+'projects/'+item.slug}`}>
                    <span className="icon">
                      <img src={IMG_URL + 'icons/residential.png'} alt="residential icon" className="img-fluid default" />
                      <img src={IMG_URL + 'icons/residential_color.png'} alt="residential icon" className="img-fluid color" />
                    </span>
                    <span>{item.name}</span>
                  </NavLink>
                }

                else if(item.slug === 'commercial'){
                  return <NavLink key={item+index} className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT+'projects/'+item.slug}`}>
                  <span className="icon">
                    <img src={IMG_URL + 'icons/commercial.png'} alt="commercial icon" className="img-fluid default" />
                    <img src={IMG_URL + 'icons/commercial_color.png'} alt="commercial icon" className="img-fluid color" />
                  </span>
                  <span>{item.name}</span>
                </NavLink>
                }
              })
            ) : (
             null
            )
          )}
            {currentPage == 'pages' && (
              <>
              <NavLink className="sub_menu_link" to={CONFIG.ADMIN_ROOT + 'page-meta'}>
                  <span className="icon">
                    <img src={IMG_URL + 'icons/commercial.png'} alt="commercial icon" className="img-fluid default" />
                    <img src={IMG_URL + 'icons/commercial_color.png'} alt="commercial icon" className="img-fluid color" />
                  </span>
                  <span>Meta Details</span>
                </NavLink>
               
                <NavLink className="sub_menu_link">
                  <span className="icon">
                    <img src={IMG_URL + 'icons/commercial.png'} alt="commercial icon" className="img-fluid default" />
                    <img src={IMG_URL + 'icons/commercial_color.png'} alt="commercial icon" className="img-fluid color" />
                  </span>
                  <span>About Company</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={CONFIG.ADMIN_ROOT + 'careers'}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Career</span>
                </NavLink>

                <NavLink className="sub_menu_link">
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>NRI Services</span>
                </NavLink>

                <NavLink className="sub_menu_link">
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>FAQs</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}blogs`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Blogs</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}contact-us`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Contact Us</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}contact-us`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>User Agreement</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}contact-us`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Privacy Policy</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}contact-us`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>How To Buy</span>
                </NavLink>
              </>
            )}

            {currentPage == 'typologies' && (
              <>
                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}typologies`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Typologies</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}sub-typologies`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Sub Typologies</span>
                </NavLink>
              </>
            )}

            {currentPage == 'cms' && (
              <>
                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}home-banner`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Home Banner</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}category`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Category</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}top-cities`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Top Cities</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}offers`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Offers</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}process`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Process</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}blogs/categories`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Blogs Categories</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}blogs`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Blogs</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}testimonials`}>
                  <img src={IMG_URL + 'icons/dashboard.svg'} alt="dashboard icon" className="img-fluid icon" />
                  <span>Testimonials</span>
                </NavLink>
              </>
            )}

            {currentPage == 'enquiry' && (
              <>
                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}job-application`}>
                  <img src={dashboardSvgIcon} alt="dashboard icon" className="img-fluid icon" />
                  <span>Job Application</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}contact-query`}>
                  <img src={dashboardSvgIcon} alt="dashboard icon" className="img-fluid icon" />
                  <span>Contact Query</span>
                </NavLink>

                <NavLink className="sub_menu_link" to={`${CONFIG.ADMIN_ROOT}projects-query`}>
                  <img src={dashboardSvgIcon} alt="dashboard icon" className="img-fluid icon" />
                  <span>Projects Query</span>
                </NavLink>
              </>
            )}
          </div>
        )}
        
      </div>

      {/* <button
        className="btn btn-secondary float-right"
        onClick={toggleMenuHandler}
        style={{marginLeft:'auto', display:'table'}}>
          test
      </button> */}

    </>
  )
}

export default Sidebar;