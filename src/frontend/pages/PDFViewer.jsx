import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MicroBanner from "../components/MicroBanner/Index";
import Layout from "../components/Layout";
import { API_URL } from "../../config/config";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import * as CONFIG from "../../config/config";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import useFetchData from "../utils/apiHelper";

const Desktopmicro_bg = `${API_URL}images/disclaimer-head-bg-desktop.jpg`;

const PDFViewer = () => {
  // Scroll to top when the component loads
  window.scrollTo(0, 0);

  // State to manage background image
  const [microBg, setMicroBg] = useState(Desktopmicro_bg);
  const { pathname } = useLocation();
  const { pdfName } = useParams();
  const [searchParams] = useSearchParams();

  const { data, loading } = useFetchData("media/compliance");

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && data && data.length === 0)
    return <div className="text-center py-5">No records found</div>;

  // Breadcrumb data
  const breadcrumbs = {
    title: "Disclaimer",
    links: [{ name: "Home", link: "/" }, { name: "Disclaimer" }],
  };

  const currentPdfData = data?.filter((item) => {
    return item.links.includes(searchParams.get('slug'));
  });

  return (
    <>
      {/* <Layout> */}
      <section className="py-6">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "100vh",
            }}
          >
            {currentPdfData && (
              <Viewer
                fileUrl={
                  CONFIG.BACKEND_IMAGE_URL + currentPdfData?.[0].brochure
                }
              />
            )}
          </div>
        </Worker>
      </section>
      {/* </Layout> */}
    </>
  );
};

export default PDFViewer;
