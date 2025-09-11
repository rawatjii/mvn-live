import React, { useCallback, useState } from "react";
import Button from "../../../common/Button/Button";
import CustomModal from "../../../common/Modal";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";

const DownloadBrochure = React.memo(
  ({ projectName, name, show360Video, is360Available = false, showAwards }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const isHideModal = useCallback(() => {
      setIsShowModal(false);
    }, []);

    const handleOpenBrochureModal = useCallback(() => {
      setIsShowModal(true);
      setIsVideoModalOpen(false);
    }, []);

    // const openVideoModal = useCallback(()=>{
    //   setIsShowModal(true)
    //   setIsVideoModalOpen(true);
    //   show360Video()
    // }, [])

    return (
      <section
        className="download_brochure_section text-center"
        aria-label="Brochure Section"
      >
        <Container>
          {showAwards ? (
            <div className="awards">
              <img
                src={`${showAwards}`}
                alt="awards icon"
                height={"150"}
                className="mb-5"
              />
            </div>
          ) : undefined}

          <Button
            type="button"
            className="btn btn_style3 r_100"
            onClick={handleOpenBrochureModal}
          >
            {name=="MVN Aeroone" || name=="MVN Mall" ? "Download MVN ID Brochure" : (name=="MVN Athens" || name=="MVN Athens PH-2"||name=="MVN Athens PH-3") ? "Download MVN Athens ID Brochure" : name}
          </Button>
          {is360Available && (
            <Button
              type="button"
              className="btn btn_style3 r_100 ms-2 ms-md-3"
              onClick={() => show360Video()}
            >
              {name ? name : "360° View"}
            </Button>
          )}

            

          <CustomModal
            hide={isHideModal}
            show={isShowModal}
            type="enquire"
            projectName={projectName ? projectName : "MVN Aeroone"}
            isVideoModal={isVideoModalOpen}
          />
        </Container>
      </section>
    );
  }
);

export default DownloadBrochure;

DownloadBrochure.propTypes = {
  projectName: PropTypes.string.isRequired,
};
