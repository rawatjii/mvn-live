import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MicroBanner from "../components/MicroBanner/Index";
import Layout from "../components/Layout";
import { API_URL } from "../../config/config";
import useFetchData from "../utils/apiHelper";

const Disclaimer = () => {
  const [disclaimerData, setDisclaimerData] = useState(null);
  // Scroll to top when the component loads
  window.scrollTo(0, 0);

  const { data } = useFetchData('page/page-section/disclaimer')

  

  useEffect(()=>{
    setDisclaimerData(data)
  }, [data])
  

  // Breadcrumb data
  const breadcrumbs = {
    title: "Disclaimer",
    links: [{ name: "Home", link: "/" }, { name: "Disclaimer" }],
  };

  return (
    <>
      <Layout>
        <MicroBanner page_section="disclaimer-banner" page="disclaimer" data={breadcrumbs} />

        {/* Main Content Section */}
        <section className="section" aria-label="Disclaimer Section">
          {/* upcoming_page */}
          {/* <div className="micro_content">
                    <div className="micro_data">
                        <div className="content_col position-relative page-header-main-heading">
                      
                        </div>
                    </div>
                </div> */}

          <Container className="terms-condition-content">
            <div dangerouslySetInnerHTML={{__html: disclaimerData?.[1]?.description, }} />
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Disclaimer;
