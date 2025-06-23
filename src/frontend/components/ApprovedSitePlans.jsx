import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import * as CONFIG from "../../config/config";

const sitePlans = [
    {
      src: `${CONFIG.API_URL}images/mediacenter/site_plans/principle_approval_letter.pdf`,
      title: "In-Principle Approval Letter",
    },
    {
      src: `${CONFIG.API_URL}images/mediacenter/site_plans/approved_site_plan_ph1.pdf`,
      title: "Approved Site Plan for Phase-I",
    },
    {
      src: `${CONFIG.API_URL}images/mediacenter/site_plans/approved_site_plan_ph1_ph2.pdf`,
      title: "In-Principle Approved Site Plan for Phase-I & II",
    },
  ];

function ApprovedSitePlans() {
    return (
        <div className="approvedSitePlans">
            <div className="row">
                {sitePlans?.map((item, index)=>(
                    <div className="col-md-4">
                        <article className="awa_card awa_shadow app_site_plan_box">
                            <div>
                                <img src={CONFIG.API_URL + 'images/icons/pdf_icon.svg'} alt={item.title} className="pressRelease-Img" style={{objectFit:'contain'}} />
                            </div>
                            <div>
                                <h6 className="title">{item.title}</h6>
                                <p className="text-capitalize" onClick={() => window.open(item.src, "_blank")}>View Full PDF</p>
                            </div>
                        </article>
                    </div>
                ))}
                
            </div>

           
        </div>
    );
}

export default ApprovedSitePlans;
