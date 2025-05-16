import React from "react";
import { Box, TopBox } from "../../components/dashboard/utilities/CutomTags";
import CustomTitle from "../../components/dashboard/utilities/CustomTitle";
import { IoIosEye, IoMdHome, IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import useCrud from "../../hooks/useCrud";
import generateApi from "../../api/generateApi";

export default function TotalProjects() {

  const aboutsApi = generateApi("project");
  const { data } =useCrud(aboutsApi);

  return (
    <Box>
      <CustomTitle icon={<IoMdHome />} title="Total Project" />
      <div className="media">
        <span className="no-project">{data.length < 10 ? '0'+data.length : data.length}</span>
        <div className="media-body">
          <h4>No. of Project</h4>
          <ul className="d-flex align-items-center project_card">
            <li>
              <Link to="project-list"> View Details</Link>
            </li>
            <li className="project_btn">
              <Link to={`${import.meta.env.VITE_APP_ADMIN_ROOT}microsite`}>
                <span>
                  <IoIosAddCircleOutline />
                </span>
                <p>Add More Project</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
}
