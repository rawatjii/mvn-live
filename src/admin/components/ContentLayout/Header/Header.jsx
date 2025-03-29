import React from "react";
import logo from '../../../assets/images/logo.webp';

// icons
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";


import "./styles.css";

export default function Header() {
  return (
    <section className="top-header">
      <div className="box-area">
        <div className="left">
          <a href="index.html">
            <img src={logo} />
          </a>
        </div>
        <div className="right">
          <div className="admin-search">
            <div className="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-menu"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <button className="input-group-text" style={{height:'100%', borderTopLeftRadius:0, borderBottomLeftRadius:0}}>
                    <FaSearch size={14} />
                  </button>
                </div>
              </div>
              <select className="form-control select-width">
                <option>All</option>
              </select>
            </div>
            {/* search */}

            <div className="login">
              <ul>
                <li className="noti">
                  <FaBell size={20} />
                  <span>2</span>
                </li>
                {/* <li>
                  <img src="images/icon/login.png" />
                </li> */}
                <li>
                  <span className="admin-name">Admin</span>
                </li>
                <li>
                  <img src="images/icon/logout.png" />{" "}
                  <sapn className="admin-name">Logout</sapn>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
