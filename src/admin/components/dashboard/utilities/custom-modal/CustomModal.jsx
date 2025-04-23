// src/components/CustomModal.jsx
import React from "react";
import "./custom-modal.css";
import { IoMdClose } from "react-icons/io";

const CustomModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="ImageModalOverlay" onClick={onClose}>
      <div className="ImageModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="ModalHeader">
          {title && <h3 className="ModalTitle">{title}</h3>}
          <button className="ModalCloseBtn" onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="ModalBody">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
