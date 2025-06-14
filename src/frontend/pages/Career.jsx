import React, { Suspense, useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import "../../dinesh.css";

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
