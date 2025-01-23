import React, { useEffect, useRef, useState } from "react";
import Loader from "common/Loader/loader";
// import Request from "root/config/JsonRequest";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from "common/Pagination/Pagination";
import * as CONFIG from "root/config/config";
import pdfIcon from "./assets/images/icons/pdf.svg";

const JobApplications = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setnotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [lastPage, setLastPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    try {
      const filteredJobApplications = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setFilteredData(filteredJobApplications);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="d-flex title_col justify-content-between align-items-center">
        <h4 className="page_title">Job Applications</h4>
      </div>

      <div className="card mt-4 card_style1">
        <div className="d-flex align-items-center">
          <h5 className="mb-0">All Job Applications</h5>

          <div className="searchInput ms-auto">
            <label htmlFor="search" className="visually-hidden">
              Search by name
            </label>
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search by name"
              onChange={findHandler}
            />
          </div>
        </div>

        <table className="mt_40">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job Title</th>
              <th>CV</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>test name</td>
              <td>test@gmail.com</td>
              <td>+91-9898989898</td>
              <td>test designation</td>
              <td>
                <a href="test">
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="img-fluid"
                    width="40"
                  />
                </a>
              </td>
              <td>
                {new Date("25 October 2024").toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </td>
            </tr>
          </tbody>
        </table>

        {filteredData.length ? (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        ) : null}

        {notFound && <h5 className="no_record">No Record Found!</h5>}
      </div>
    </>
  );
};

export default JobApplications;
