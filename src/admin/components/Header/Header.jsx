import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import * as CONFIG from "root/config/config";
import Button from "common/Button/Button";
import Dropdown from "react-bootstrap/Dropdown";
// import * as actionTypes from 'root/store/actions'
import { Link, useNavigate } from "react-router-dom";
import {
  toggleMenuCount,
  toggleAscending,
} from "../../../redux/adminSidebarSlice";

import "./header.css";

import userImg from "../../assets/images/icons/default_user.png";

const Header = (props) => {
  const toggleCount = useSelector((state) => state.adminSideMenu.toggleCount);
  const currentMenuCount = useSelector(
    (state) => state.adminSideMenu.currentMenuCount
  );
  const isAscending = useSelector((state) => state.adminSideMenu.isAscending);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    if (currentMenuCount === toggleCount.length - 1) {
      dispatch(toggleAscending());
      dispatch(toggleMenuCount(currentMenuCount - 1));
    } else if (currentMenuCount === 0) {
      dispatch(toggleAscending());
      dispatch(toggleMenuCount(currentMenuCount + 1));
    } else {
      if (isAscending) {
        dispatch(toggleMenuCount(currentMenuCount + 1));
      } else {
        dispatch(toggleMenuCount(currentMenuCount - 1));
      }
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    // dispatch(actionTypes.logout())
    navigate(CONFIG.ADMIN_ROOT + "login");
    return toast.success("Logout Successful");
  };

  return (
    <>
      <Navbar className="">
        <Container fluid>
          <div className="hamburger" onClick={toggleMenuHandler}>
            <span className="sm"></span>
            <span className="lg"></span>
          </div>

          <div className="logo">
            <img
              src={CONFIG.IMAGE_URL + "logo.webp"}
              alt="logo"
              className="img-fluid logo"
            />
          </div>

          <div className="user">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="name">Admin</span>
                <img src={userImg} alt="user" className="user_img" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
