import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ApprovedSitePlans({ data, slidesPerView, spaceBetween }) {
    return (
        <div className="approvedSitePlans">
            <div className="row">
                {data?.map((item, index)=>(
                    <div className="col-md-4">
                        <article className="awa_card awa_shadow d-block">
                            <div className="d-block">
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
