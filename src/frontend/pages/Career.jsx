import React, { Suspense, useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";

import careerbg from "../assets/images/career/tables-chairs-office.png";
import ContactPage from "../components/contact/Index";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";

import supportIcon from "../assets/images/icons/contact/career.png";
import careerIMG from "../assets/images/career/career.png";

import leftArrow from "../assets/images/career/left-arrow.png";

import LazyLoad from "react-lazyload";
import "../../dinesh.css";

import CareerImg from "../assets/images/career/career-img.jpg";
import InitialLoading from "../skeleton/Initial/Index";
import Layout from "../components/Layout";
import CareerOverview from "../components/career/Overview";
import LifeAtMvn from "../components/career/Life";

function Career() {
  window.scrollTo(0, 0);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );

  const breadcrumbs = {
    title: "Career",
    content: "Be a Part of Our Legacy of Luxury",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Career",
      },
    ],
  };

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem("count")));
  }, [localStorage.getItem("count")]);


  return (
    <Layout>
      <div className="career_page inner_section">
        <MicroBanner
          page_section="career-banner"
          page="career"
          bg={CareerImg}
          data={breadcrumbs}
        />

        <div className="micro_content">
          <CareerOverview page="career" />

          <LifeAtMvn />

          <section
            className="oppotunities padding"
            aria-label="Oppotunities Section"
          >
            <div className="container">
              <div className="inn_oppor">
                <div className="left text-center mx-auto">
                  <h2 className="title">Shape Your Future with MVN</h2>
                  <div className="content">
                    <p className="des_style1">
                      At MVN, your career isn’t just a job—it’s a journey of
                      growth, learning, and limitless opportunities. We empower
                      individuals to explore their potential, embrace
                      challenges, and achieve excellence in a dynamic and
                      supportive environment. Join us to build a rewarding
                      future where your ideas and ambitions find their true
                      place.
                    </p>
                    <div className="job_mail">
                      <div>
                        <p className="mb-0">Send your Resume to </p>
                        <a
                          href="mailto:careers@mvninfrastructure.com"
                          className="jobmail"
                        >
                          {" "}
                          careers@mvninfrastructure.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Career;
