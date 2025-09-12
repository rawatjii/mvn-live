import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Watermark from "../../../common/watermark/Index";
import { useMatches } from "../../../theme/theme";
import { BACKEND_IMAGE_URL } from "../../../config/config";

const MvnMallAeroone = ({ data }) => {
  const imageRef = useRef(null);
  const iframeRef = useRef(null);
  const { isMobile } = useMatches();
  const [iframeVisible, setIframeVisible] = useState(false);
  const mallData = data.data;
  // const { data: mallData, loading } = useFetchData(`project/${data?.project_id}/mvn-mall`);

  const { heading, description } = data;

  // if (loading) return <div className="text-center py-5"></div>;
  // if (!loading && mallData && mallData.length === 0) return <div className="text-center py-5">No records found</div>;

  return (
    <>
 
    <section
      className="section mvn_mall_section micro_design1 pb-0 mb-md-5"
      aria-label="MVN Mall Section"
    >
      {window.innerWidth < 768 ? (
        <>
          <Container>
            <div className="heading_div mb_60 mb_sm_30">
              <h4 className="title title_style1 text-center">{heading}</h4>
            </div>
            <p className="des_style1 text-center mb_20">
              {description}
            </p>
          </Container>

          {data.iframe && (
            <div className="walkthrough" ref={iframeRef}>
              {iframeVisible && (
                <>
                  <iframe
                    src={data.iframe}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    playsInline
                    className="mb-4"
                  ></iframe>
                  <hr />
                </>
              )}
            </div>
          )}
 
            <div className="image_animation position-relative w-100 mb-3">
              <img
                ref={imageRef}
                src="assets/images/mvn-mall/mvn-full.webp"
                alt="mvn mall animation"
                className="img-fluid"
              />
              <Watermark isMvnLogo={true} />
            </div>

            <div className="image_animation position-relative w-100">
              <img
                ref={imageRef}
                src={BACKEND_IMAGE_URL + mallData?.[2].image}
                alt="mvn mall animation"
                className="img-fluid"
              />
              <Watermark isMvnLogo={true} />
            </div>
        </>
      ) : (
        <Container>
          <div className="heading_div mb_60 mb_sm_30">
            <h4 className="title title_style1 text-center">{heading}</h4>
          </div>

          <p className="des_style1 text-center mb_40">
            {description}
          </p>

          {data.iframe && (
            <div className="walkthrough mb-5" ref={iframeRef}>
              {iframeVisible && (
                <>
                  <iframe
                    src={data.iframe}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    playsInline
                    className="mb-4"
                  ></iframe>
                  <hr />
                </>
              )}
            </div>
          )}

          <div className="row">

            {mallData?.map((item, index) => {
              if (index == 0) {
                return <div key={index} className="col-sm-12 col-md-6 col-lg-6 mvn_mall_left_col">
                  <div className="position-relative">
                    <img src={BACKEND_IMAGE_URL + item.image} alt="mvn mall icon" className="img-fluid w-100" />
                    <Watermark isMvnLogo="true" />
                  </div>
                </div>
              }
            })}



            <div className="col-sm-12 col-md-6 col-lg-6 mvn_mall_right_col">
              {mallData?.map((item, index) => {
                if(index !== 0){
                  return (
                    <div key={index} className="position-relative mb-4">
                      <img
                        src={BACKEND_IMAGE_URL + item.image}
                        alt="mvn mall icon"
                        className="img-fluid"
                      />
                      <Watermark isMvnLogo="true" />
                    </div>
                  )
                }
                
              })}

            </div>
          </div>
        </Container>
      )}
    </section>
    </>
  );
};

export default MvnMallAeroone;
