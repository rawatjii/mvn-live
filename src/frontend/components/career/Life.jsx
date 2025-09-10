import React from "react";
import useFetchData from "../../utils/apiHelper";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
const BlankIMG = `${API_URL}images/career/bg.png`;

const LifeAtMvn = () => {

  const { data, loading } = useFetchData(`work-culture`);

  return (
    <section className="front-page-all" aria-label="Career Section">
      <div className="container">
        <div className="grid-left">
          <div className="img-left">
            <div className="inner-sec">
              <div className="half">
                <div className="img-in-left">
                  <picture className="microbanner_bg">
                    <source srcset={BACKEND_IMAGE_URL+data?.[0].image} type="image/webp" />
                    <img className="w-100" src={BACKEND_IMAGE_URL+data?.[0].alternative_image} alt="Culture image" />
                  </picture>
                  {/* <img src={CultureImg} width="100%;" alt="Culture image" /> */}
                </div>
              </div>
              <div className="half">
                <div className="content-half h-100">
                  <div>
                    <h2>{data?.[0].heading}</h2>
                    <p className="des_style1" dangerouslySetInnerHTML={{__html:data?.[0]?.description}} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-left-right">
            <div className="img-left-right">
              <div className="item ">
              
                <img
                  className="blank-img d-none d-md-block"
                  src={BlankIMG}
                  alt="Blank image"
                  width="100%"
                />
                <div className="content-right-img">
                  <div className="gd-inner h-100 d-grid align-items-center">
                    <div>
                      <h2>{data?.[1].heading}</h2>
                      <p className="des_style1" dangerouslySetInnerHTML={{__html:data?.[1]?.description}} />
                    </div>
                  </div>
                </div>
                <div className="overlay right-overlay">
                  <div className="img-hov">
                  <picture className="microbanner_bg">
                    <source srcset={BACKEND_IMAGE_URL+data?.[1].image} type="image/webp" />
                    <img className="blank-img w-100" src={BACKEND_IMAGE_URL+data?.[1].alternative_image} alt="Development image"/>
                  </picture>
                    {/* <img
                      src={peopleDevelopmentImg}
                      alt="Development image"
                      width="100%"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-right">
          <div className="grid-left-right">
            <div className="img-left-right">
              <div className="item ">
                <img
                  className="blank-img d-none d-md-block"
                  src={BlankIMG}
                  alt="Blank image"
                  width="100%"
                />
                <div className="content-right-img">
                  <div className="gd-inner h-100 d-grid align-items-center">
                    <div>
                      <h2>{data?.[2].heading}</h2>
                      <p className="des_style1" dangerouslySetInnerHTML={{__html:data?.[1]?.description}} />
                    </div>
                  </div>
                </div>
                <div className="overlay right-overlay">
                  <div className="img-hov">
                    <picture className="microbanner_bg">
                      <source srcset={BACKEND_IMAGE_URL+data?.[2].image} type="image/webp" />
                      <img className="blank-img w-100" src={BACKEND_IMAGE_URL+data?.[2].alternative_image} alt="Rewards image" />
                    </picture>
                    {/* <img src={RewardsImg} alt="Rewards image" width="100%" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="img-left">
            <div className="inner-sec">
              <div className="half">
                <div className="img-in-left">
                  <picture className="microbanner_bg">
                    <source srcset={BACKEND_IMAGE_URL+data?.[3].image} type="image/webp" />
                    <img className="blank-img w-100" src={BACKEND_IMAGE_URL+data?.[3].alternative_image} alt="life at mvn image" width="100%" />
                  </picture>
                  {/* <img src={ligemvnImg} alt="life at mvn image" width="100%;" /> */}
                </div>
              </div>
              <div className="half">
                <div className="content-half h-100">
                  <div>
                    <h2>{data?.[3].heading}</h2>
                    <p className="des_style1" dangerouslySetInnerHTML={{__html:data?.[3]?.description}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtMvn;
