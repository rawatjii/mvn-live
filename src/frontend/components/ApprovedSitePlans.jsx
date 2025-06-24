import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Worker, Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as CONFIG from "../../config/config";
import { Link } from "react-router-dom";

const sitePlans = [
    {
      src: `${CONFIG.API_URL}images/mediacenter/site_plans/principle_approval_letter.pdf`,
      slug:`principle_approval_letter`,
      title: "In-Principle Approval Letter",
    },
    {
      src: `${CONFIG.API_URL}images/mediacenter/site_plans/approved_site_plan_ph1.pdf`,
      slug:`approved_site_plan_ph1`,
      title: "Approved Site Plan for Phase-I",
    },
    {
      src: `${CONFIG.API_URL}images/mediacenter/site_plans/approved_site_plan_ph1_ph2.pdf`,
      slug:`approved_site_plan_ph1_ph2`,
      title: "In-Principle Approved Site Plan for Phase-I & II",
    },
];

function ApprovedSitePlans() {
    return (
        <div className="approvedSitePlans">
            <div className="row">
                {sitePlans?.map((item, index)=>(
                    <div className="col-md-4">
                        {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '450px',
                                }}
                            >
                                <Viewer fileUrl={item.src} />
                            </div>
                        </Worker> */}
                        {/* <article className="awa_card awa_shadow app_site_plan_box">
                            <div>
                                <img src={CONFIG.API_URL + 'images/icons/pdf_icon.svg'} alt={item.title} className="pressRelease-Img" style={{objectFit:'contain'}} />
                            </div>
                            <div>
                                <h6 className="title">{item.title}</h6>
                                <Link className="text-capitalize" target="_blank" to={import.meta.env.VITE_APP_URL + `pdf/${item.slug}`}>View Full PDF</Link>
                            </div>
                        </article> */}
                         <article className="awa_card awa_shadow d-block">
                            <div className="d-block">
                                <h6 className="title">{item.title}</h6>
                                <Link className="text-capitalize" target="_blank" to={import.meta.env.VITE_APP_URL + `pdf/${item.slug}`}>View Full PDF</Link>
                                {/* <p className="text-capitalize" onClick={() => window.open(item.src, "_blank")}>View Full PDF</p> */}
                            </div>
                        </article>
                    </div>
                ))}
                
            </div>

           
        </div>
    );
}

export default ApprovedSitePlans;
