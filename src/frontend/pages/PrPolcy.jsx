import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MicroBanner from "../components/MicroBanner/Index";
import Layout from "../components/Layout";
import { API_URL } from "../../config/config";
import useFetchData from "../utils/apiHelper";

const PrPolcy = () => {
  const [policyData, setPolicyData] = useState(null);

  window.scrollTo(0, 0);
  const { data } = useFetchData('page/page-section/privacy-policy')

  useEffect(()=>{
    setPolicyData(data)
  }, [data])

  // Breadcrumb data
  const breadcrumbs = {
    title: "Privacy Policy",
    links: [{ name: "Home", link: "/" }, { name: "Privacy Policy" }],
  };


  return (
    <>
      <Layout>
        <MicroBanner page_section="privacy-banner" data={breadcrumbs} page="privacy-policy" />

        <section className="section " aria-label="PrPolicy Section">
          <Container className="privacy-policy-content">
          <div dangerouslySetInnerHTML={{__html: policyData?.[2]?.description}} />

          </Container>
        </section>
      </Layout>
    </>
  );
};

export default PrPolcy;
