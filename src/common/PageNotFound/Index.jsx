import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./page_not_found.css";
import { API_URL } from "../../config/config";

const notFoundGif = `${API_URL}images/page_not_found/404.gif`;

const PageNotFound = () => {
  return (
    <>
      <div className="page_not_found micro_page">
        {/* <Header /> */}

        <img
          src={notFoundGif}
          alt="page not found image"
          className="img-fluid thumbnail"
        />

        <Container>
          <div className="content d-block">
            <h2 className="title">404</h2>
            <h3 className="sub_title">Look like you're lost</h3>
            <p className="para">The page you are looking for not avaible!</p>
            <Link to="/" className="btn btn_style3">Go To Home</Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PageNotFound;
