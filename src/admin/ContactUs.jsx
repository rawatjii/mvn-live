import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/Sidebar";
import BackdropPortal from 'common/Portal/Backdrop'
// import SideModal from "admin/components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import Pagination from 'common/Pagination/Pagination';
import {useNavigate } from 'react-router-dom';
// import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
import Button from 'common/Button/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAsyncError } from "react-router-dom";
 
import * as CONFIG from 'root/config/config';

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const ContactUs = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [showSidebar, setShowSidebar] = useState(false);
    const [enableEdit, setenableEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [editId, setEditId] = useState(false);
    const [blogCategory, setBlogCategory] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [showEditEnableImage, setShowEditEnableImage] = useState(null);
    const [blogData, setBlogData] = useState(null)
    const ivrRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const mapRef = useRef(null);

    const navigate = useNavigate();

    useState(()=>{
        const blogSubCategory = async()=>{
            try{
                var response=await Request('admin/blog-category','GET');
                if (response.status && response.statusCode === 200) {
                    setBlogCategory(response.data.data)
                }
            }catch(err){
            }
        }

        blogSubCategory()
    }, [])

    const resetFields=()=>{
        setErrors({});
    }

    const addSubmitHandler = async (event)=>{
        event.preventDefault();

        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.append('heading', titleRef.current.value);
            formData.append('short_description', shortDescriptionRef.current.value);
            formData.append('description', descriptionRef.current.value);
            formData.append('category', blogCategoryRef.current.value);
            formData.append('image', imageRef.current.files[0]);
           
            var response = await Request('admin/blog','POST', formData);

            if(response.status && response.statusCode == 403){
                setErrors(response.errors);
                setIsLoading(false);
                throw new Error(response.message);

            }else if(response.status && response.statusCode==200){
                resetFields();
                setIsLoading(false);
                toast.success(response.message);
                return navigate(CONFIG.ADMIN_ROOT+'blogs')
            }
        }
        catch (error) {
            setIsLoading(false);
            toast.error(error.message)
        }
    }

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Contact Us</h4>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>Contact Us</h5>
                </div>
                
                <Form onSubmit={addSubmitHandler} className="mt_40">
                    <Row>
                        <Form.Group as={Col} md="4" className="mb_15 form-group">
                            <Form.Label htmlFor="ivrNumber">IVR Number*</Form.Label>
                            <Form.Control id="ivrNumber" ref={ivrRef} className="" type="text" placeholder="Enter IVR Number" />
                            {errors.heading && <div className="errMsg text-danger">{errors.heading}</div>}
                        </Form.Group>

                        <Form.Group as={Col} md="4" className="mb_15 form-group">
                            <Form.Label htmlFor="email">Email*</Form.Label>
                            <Form.Control id="email" ref={emailRef} className="" type="text" placeholder="Enter Email" />
                            {errors.emailRef && <div className="errMsg text-danger">{errors.emailRef}</div>}
                        </Form.Group>

                        <Form.Group as={Col} md="4" className="mb_15 form-group">
                            <Form.Label htmlFor="address">Address*</Form.Label>
                            <Form.Control id="address" ref={addressRef} className="" type="text" placeholder="Enter address" />
                            {/* <textarea className="form-control" required type="text"  name="address"  /> */}
                            {errors.address && <div className="errMsg text-danger">{errors.address}</div>}
                        </Form.Group>

                        <Form.Group as={Col} md="12" className="mb_15 form-group">
                            <Form.Label htmlFor="mapUrl">Map Url*</Form.Label>
                            <Form.Control id="mapUrl" ref={mapRef} className="" type="text" placeholder="Enter map Url" />
                            {errors.map && <div className="errMsg text-danger">{errors.map}</div>}
                        </Form.Group>
                    </Row>

                    <Button type="submit" className="btn btn_primary mt-3">Save Changes</Button>

                </Form>
            </div>
        </>
    )
}

export default ContactUs;