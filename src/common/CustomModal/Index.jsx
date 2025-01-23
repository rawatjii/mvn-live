import React, {forwardRef, useState, useImperativeHandle} from "react";
import Modal from 'react-bootstrap/Modal';
import './customModal.css'

const CustomModal = forwardRef((props, ref)=>{
    
    const [showModal, setShowModal] = useState(false);

    // Expose a method to open the modal using useImperativeHandle
    // useImperativeHandle(ref, () => ({
    //     openModal: () => {
    //         setShowModal(true);
    //     },
    //     closeModal: () => {
    //         setShowModal(false);
    //     }
    // }));

    switch(props.type){
        case 'enquire':
            return(
                <Modal className="custom_modal" animation={false} centered show={props.show} onHide={() => setShowModal(false)}>
                    <Modal.Header>
                        {/* <Modal.Title><small>Interested In</small> Brigade Orchards</Modal.Title> */}
                        <Modal.Title><small>Interested In</small> {props.property}</Modal.Title>
                        <span className="close" onClick={props.handleClose}>&times;</span>
                    </Modal.Header>
                    <Modal.Body>
                        {props.children}
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary">
                            Close
                        </Button>
                        <Button variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            )

        case 'brochure':
            return(
                <Modal className="custom_modal" animation={false} centered show={props.show} onHide={() => setShowModal(false)}>
                    <Modal.Header>
                        <Modal.Title><small>Interested In</small> Download MVN ID Brochure</Modal.Title>
                        <span className="close" onClick={props.handleClose}>&times;</span>
                    </Modal.Header>
                    <Modal.Body>
                        {props.children}
                    </Modal.Body>
                </Modal>
            )

        case 'job':
            return(
                <Modal className="custom_modal" animation={false} centered show={props.show} onHide={() => setShowModal(false)}>
                    <Modal.Header>
                        <Modal.Title><small>Apply For</small> {props.property}</Modal.Title>
                        <span className="close" onClick={props.handleClose}>&times;</span>
                    </Modal.Header>
                    <Modal.Body>
                        {props.children}
                    </Modal.Body>
                </Modal>
            )

        default:
            return(
                <Modal className="custom_modal" animation={false} centered show={props.show} onHide={() => setShowModal(false)}>
                    <Modal.Header>
                        <Modal.Title><small>Enquire Now</small> Get in Touch with Us</Modal.Title>
                        <span className="close" onClick={props.handleClose}>&times;</span>
                    </Modal.Header>
                    <Modal.Body>
                        {props.children}
                    </Modal.Body>
                </Modal>
            )
    }
})

export default CustomModal;