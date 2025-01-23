import React, { useState } from "react";
import Button from '../../../common/Button/Button';
import CustomModal from "../../../common/Modal";
import { Container } from "react-bootstrap";

const DownloadBrochure = ()=>{
  const [isShowModal, setIsShowModal] = useState(false)

  const isHideModal = () => {
    setIsShowModal(false);
  };

  const handleOpenBrochureModal = () => {
    setIsShowModal(true)
  };

  return(
    <section className="download_brochure_section text-center">
      <Container>
        <Button type="button" className="btn btn_style3 r_100" onClick={handleOpenBrochureModal}>Download MVN ID Brochure</Button>


        <CustomModal hide={isHideModal} show={isShowModal} type="enquire" projectName="MVN Aeroone"  />
      </Container>
      
    </section>
  )
}

export default DownloadBrochure;