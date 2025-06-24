import React from "react";
import { createPortal } from "react-dom";
import { Button, Modal } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setModalHide } from "../../redux/commonSlice";

const DeleteConfirmModal = () => {
  const isModalShow = useSelector(state=>state.commonState.isModalShow)
  const dispatch = useDispatch()

  const handleCancel = ()=>{
    dispatch(setModalHide())
  }

  return createPortal(
    <Modal
      show={isModalShow}
      centered
      backdrop="static"
      keyboard={false}
      className="delete-confirmation-modal"
    >
      {/* <Modal.Header closeButton className="modal-header">
      <Modal.Title>Confirm Deletion</Modal.Title>
    </Modal.Header> */}
      <Modal.Body className="text-center">
        <IoIosCloseCircleOutline
          size={80}
          className="d-table mx-auto mb-4"
          style={{ color: "#f15e5e" }}
        />
        <h3 className="title mb-3">Are You Sure?</h3>
        <p style={{ color: "#999" }}>
          Are you sure you want to delete? This action cannot be undone.
        </p>
        <div className="btns mt-4 d-flex gap-3 justify-content-center">
          <Button
            variant="secondary"
            onClick={handleCancel}
            className="cancel-btn"
            disabled={false}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            // onClick={onConfirm}
            className="delete-btn text-white"
            disabled={false}
          >
            Delete
          </Button>
        </div>
      </Modal.Body>
    </Modal>,
    document.body
  );
};

export default DeleteConfirmModal;
