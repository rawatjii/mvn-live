import React from "react";
import logo from '../../../assets/images/logo.webp';

// icons
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

import './styles.css';

export default function Sidebar() {
  return (
    <div class="navigation">
      <ul>
        <li>
          <a href="index.html">
            <span class="icon">
              <img src={logo} />
            </span>
            <span class="title">
              <img src={logo} />
            </span>
          </a>
        </li>
        <li>
          <a href="index.html" class="active">
            <span class="icon">
              <AiFillHome size={24} />
            </span>
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <FaUser size={20} />
            </span>
            <span class="title">About Us</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <FaLock size={20} />
            </span>
            <span class="title">Register</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span class="icon">
              <BsCreditCardFill size={22} />
            </span>
            <span class="title">Loans</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <FaPhone size={20} />
            </span>
            <span class="title">Contact Us</span>
          </a>
        </li>
      </ul>
      <div class="toggle"></div>
    </div>
  );
}
