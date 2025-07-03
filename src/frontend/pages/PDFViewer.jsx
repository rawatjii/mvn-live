import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MicroBanner from "../components/MicroBanner/Index";
import Layout from "../components/Layout";
import { API_URL } from "../../config/config";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as CONFIG from "../../config/config";
import { useLocation, useParams } from "react-router-dom";

const Desktopmicro_bg = `${API_URL}images/disclaimer-head-bg-desktop.jpg`;

const PDFViewer = () => {
  // Scroll to top when the component loads
  window.scrollTo(0, 0);
  
  // State to manage background image
  const [microBg, setMicroBg] = useState(Desktopmicro_bg);
  const {pathname} = useLocation();
  const {pdfName} = useParams()

  // Breadcrumb data
  const breadcrumbs = {
    title: "Disclaimer",
    links: [{ name: "Home", link: "/" }, { name: "Disclaimer" }],
  };

  return (
    <>
      {/* <Layout> */}
        <section className="py-6">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <div
                  style={{
                      border: '1px solid rgba(0, 0, 0, 0.3)',
                      height: '100vh',
                  }}
              >
                {pdfName && (
                  <Viewer fileUrl={`${CONFIG.API_URL}images/mediacenter/site_plans/${pdfName}.pdf`} />
                )}
              </div>
          </Worker>
        </section>
      {/* </Layout> */}
    </>
  );
};

export default PDFViewer;