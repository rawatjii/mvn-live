import React, { useCallback, useState } from "react";
import { API_URL } from "../../../config/config";
import CustomModal from "../../../common/Modal";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Strip = ()=>{
  const [isShowModal, setIsShowModal] = useState(false);
  const {pathname} = useLocation();

  const isHideModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  return(
    <>
      <section className={`section strip_section pt_sm_0 ${pathname.includes('mvn-mall') ? 'pt-4' : ''}`} >
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
          <SwiperSlide onClick={()=>setIsShowModal(true)}>
            <img src={`assets/images/strips/strip1.webp`} alt="mvn strip image" class="img-fluid w-100 d-none d-md-block" style={{cursor:'pointer'}} loading="lazy" />
            <img src={`assets/images/strips/strip1_sm.webp`} alt="mvn strip image" class="img-fluid w-100 d-md-none" style={{cursor:'pointer'}} loading="lazy" />
          </SwiperSlide>

          <SwiperSlide onClick={()=>setIsShowModal(true)}>
            <img src={`assets/images/strips/strip2.webp`} alt="mvn strip image" class="img-fluid w-100 d-none d-md-block" style={{cursor:'pointer'}} loading="lazy" />
            <img src={`assets/images/strips/strip2_sm.webp`} alt="mvn strip image" class="img-fluid w-100 d-md-none" style={{cursor:'pointer'}} loading="lazy" />
          </SwiperSlide>
        </Swiper>
        
      </section>

      <CustomModal type="enquire" hide={isHideModal} show={isShowModal} projectName="MVN Mall Dwarka Expressway"/>
    </>
  )
}

export default Strip;