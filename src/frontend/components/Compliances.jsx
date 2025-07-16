import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useFetchData from "../utils/apiHelper";
import { API_URL } from "../../config/config";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCompliancePdf } from "../../redux/commonSlice";

function Compliances({slidesPerView, spaceBetween }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    const { data, loading } = useFetchData("media/compliance");

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && data && data.length === 0)
    return <div className="text-center py-5">No records found</div>;

  const setPdfHandler = (item)=>{
    dispatch(setCompliancePdf(item?.brochure));
    window.open(import.meta.env.VITE_APP_URL + `pdf/view?slug=${item.links}`, '_blank');
  }


  return (
    <div className="approvedSitePlans">
        <div className="row">
            {data?.map((item, index)=>(
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
                    <article className="awa_card awa_shadow app_site_plan_box">
                        <div>
                            <img src={API_URL + 'images/icons/pdf_icon.svg'} alt={item.alt} className="pressRelease-Img" style={{objectFit:'contain'}} />
                        </div>
                        <div>
                            <h6 className="title">{item.heading}</h6>
                            <div className="awa_posted d-md-flex justify-content-between align-items-center mt-1 mt-md-3 mb-0">
                                <span className="text-capitalize"><time>{
                                  new Date(item.date_at).toLocaleDateString('en-GB',{
                                    day:'numeric',
                                    month:"long",
                                    year:"numeric"
                                  })}
                                </time></span>
                                <button type="button" className="text-capitalize" onClick={()=>setPdfHandler(item)}>View Full PDF</button>
                                {/* <Link type="button" className="text-capitalize" target="_blank" to={import.meta.env.VITE_APP_URL + `pdf/${item.links}`}>View Full PDF</Link> */}
                            </div>
                        </div>
                    </article>
                     {/*<article className="awa_card awa_shadow d-block">
                        <div className="d-block">
                            <h6 className="title">{item.title}</h6>
                            <Link className="text-capitalize" target="_blank" to={import.meta.env.VITE_APP_URL + `pdf/${item.slug}`}>View Full PDF</Link>
                            /~ <p className="text-capitalize" onClick={() => window.open(item.src, "_blank")}>View Full PDF</p> ~/
                        </div>
                    </article>*/}
                </div>
            ))}
            
        </div>

       
    </div>
);
}

export default Compliances;
