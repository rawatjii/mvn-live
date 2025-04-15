import React, { useCallback, useState } from "react";
import Button from '../../../common/Button/Button';
import CustomModal from "../../../common/Modal";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const DownloadBrochure = React.memo(({projectName, name, is360Available=false})=>{
  const [isShowModal, setIsShowModal] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const isHideModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  const handleOpenBrochureModal = useCallback(() => {
    setIsShowModal(true)
    setIsVideoModalOpen(false);
  }, []);

  const openVideoModal = useCallback(()=>{
    setIsShowModal(true)
    setIsVideoModalOpen(true);
  }, [])

  return(
    <section className="download_brochure_section text-center" aria-label="Brochure Section">
      <Container>
        <Button type="button" className="btn btn_style3 r_100" onClick={handleOpenBrochureModal}>{name ? name : 'Download MVN ID Brochure'}</Button>
        {is360Available && (
          <Button type="button" className="btn btn_style3 r_100 ms-3" onClick={openVideoModal}>{name ? name : '360° View'}</Button>
        )}


        <CustomModal hide={isHideModal} show={isShowModal} type="enquire" projectName={projectName ? projectName : 'MVN Aeroone'} isVideoModal={isVideoModalOpen}  />
      </Container>
      
    </section>
  )
})

export default DownloadBrochure;

DownloadBrochure.propTypes = {
  projectName:PropTypes.string.isRequired,
}