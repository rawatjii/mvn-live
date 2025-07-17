import React, { useState } from "react";
import { API_URL } from "../../../config/config";
import CustomModal from "../../../common/Modal";
import { useLocation } from "react-router-dom";

const Strip = React.memo(()=>{
  const [isShowModal, setIsShowModal] = useState(false);
  const {pathname} = useLocation();

  console.log('pathname',pathname);
  

  const isHideModal = () => {
    setIsShowModal(false);
  };

  return(
    <>
      <section className={`section strip_section pt_sm_0 ${pathname.includes('mvn-mall') ? 'pt-4' : ''}`} onClick={()=>setIsShowModal(true)}>
        <img src={`${API_URL}assets/strip/strip_desktop.webp`} alt="mvn strip image" class="img-fluid w-100 d-none d-md-block" style={{cursor:'pointer'}} loading="lazy" />
        <img src={`${API_URL}assets/strip/strip_mobile.webp`} alt="mvn strip image" class="img-fluid w-100 d-md-none" style={{cursor:'pointer'}} loading="lazy" />
      </section>

      <CustomModal type="enquire" hide={isHideModal} show={isShowModal} projectName="MVN Mall Dwarka Expressway"/>
    </>
  )
})

export default Strip;