import React, { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
import Button from 'common/Button/Button'
 
import * as CONFIG from 'root/config/config';

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const AddBlog = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [blogCategory, setBlogCategory] = useState(null);
    const [showEditEnableImage, setShowEditEnableImage] = useState(null);
    const titleRef = useRef(null);
    const shortDescriptionRef = useRef(null);
    const descriptionRef = useRef(null);
    const blogCategoryRef = useRef(null);
    const imageRef = useRef(null);

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

    const addCategoryHandler = ()=>{
        setShowSidebar(!showSidebar)
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
                <h4 className="page_title">Add Blog</h4>
                <button type="button" className="btn ms-auto btn_primary btn-sm" onClick={addCategoryHandler}>Add Blog</button>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>Add Blog</h5>
                </div>
                
                <Form onSubmit={addSubmitHandler} className="mt_40">
                    <Form.Group className="mb_15 form-group">
                        <Form.Label htmlFor="title">Title*</Form.Label>
                        <Form.Control id="title" ref={titleRef} className="" type="text" placeholder="Enter Blog Title" />
                        {errors.heading && <div className="errMsg text-danger">{errors.heading}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label htmlFor="short-description">Short Description*</Form.Label>
                        <textarea id="short-description" ref={shortDescriptionRef} className="form-control" required type="text" placeholder="Enter Short Description" />
                        {errors.short_description && <div className="errMsg text-danger">{errors.short_description}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label htmlFor="Description">Description*</Form.Label>
                        <ReactQuill id="Description" ref={descriptionRef} placeholder="Enter Description"   />
                        {/* <textarea className="form-control" required type="text"  name="description"  /> */}
                        {errors.description && <div className="errMsg text-danger">{errors.description}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label htmlFor="blog-category">Blog Category*</Form.Label>
                        <select ref={blogCategoryRef} className="form-control" id="blog-category" name="category">
                            <option defaultValue={true} disabled>Select Blog Category</option>
                            {blogCategory?.map((category, index)=>(
                                <option key={index} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        {errors.category && <div className="errMsg text-danger">{errors.category}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label htmlFor="image">Image*
                            <small className="size">(Size 1200px x 750px)</small>
                        </Form.Label>
                        <Form.Control id="image" ref={imageRef} className="form-control" required type="file" />
                        {errors.image && <div className="errMsg text-danger">{errors.image}</div>}
                        {showEditEnableImage ? <img width="100" alt="edit image" src={showEditEnableImage}/> : null }
                    </Form.Group>

                    <Button type="submit" className="btn btn_primary">Add</Button>

                </Form>
            </div>
        </>
    )
}

export default AddBlog;