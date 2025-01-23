import React, { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import {useNavigate, useParams } from 'react-router-dom';
import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
import Button from 'common/Button/Button'
 
import * as CONFIG from 'root/config/config';

const EditBlog = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        heading:'',
        short_description:'',
        description:'',
        image:'',
        category:'',
        previewImage:''
    });
    const [errors, setErrors] = useState({});
    const [blogCategory, setBlogCategory] = useState(null);

    const navigate = useNavigate();
    const params = useParams().id
    
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

    useState(()=>{
        const fetchBlogData = async()=>{
            setIsLoading(true)
            try{
                var response=await Request(`admin/blog/${params}`,'GET');
                if (response.status && response.statusCode === 200) {
                    setData(prevData=>({
                        ...prevData,
                        ...response.data,
                        previewImage:response.data.image
                    }))
                    setIsLoading(false)
                }else{
                    setData({})
                }
            }catch(err){
                
            }finally{
                setIsLoading(false)
            }
        }

        fetchBlogData()
    }, [params])

    const updateSubmitHandler = async(event)=>{
        event.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append('heading', data.heading);
            formData.append('short_description', data.short_description);
            formData.append('description', data.description);
            formData.append('category', data.category);
            formData.append('image', data.image);
           
            var response = await Request(`admin/blog/${params}/update`,'POST', formData);

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

    const changeHandler = (e)=>{
        const { name, value, files } = e.target;

        if(files && files.length){
            setData(prevData => ({
                ...prevData,
                image:files[0],
                previewImage:''
            }));
        }else{
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
        
    }

    const resetFields=()=>{
        setErrors({});
    }

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    const setDescription=(value)=>{
        setData(prevData => ({
            ...prevData,
            description: value
        }));
    }

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Edit Blog</h4>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>Edit Blog</h5>
                </div>
                
                <Form onSubmit={updateSubmitHandler} className="mt_40">
                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Title*</Form.Label>
                        <Form.Control className="" type="text" placeholder="Enter Blog Title" name="heading" value={data.heading} onChange={changeHandler} />
                        {errors.heading && <div className="errMsg text-danger">{errors.heading}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Short Description*</Form.Label>
                        <textarea className="form-control" required type="text" placeholder="Enter Short Description" name="short_description" value={data.short_description} onChange={changeHandler} />
                        {errors.short_description && <div className="errMsg text-danger">{errors.short_description}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Description*</Form.Label>
                        <ReactQuill placeholder="Enter Description" value={data.description} name="description" onChange={setDescription} />
                        {/* <textarea className="form-control" required type="text"  name="description"  /> */}
                        {errors.description && <div className="errMsg text-danger">{errors.description}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Blog Category*</Form.Label>
                        <select className="form-control" defaultValue={data.category}  name="category" onChange={changeHandler}>
                            <option defaultValue={true} disabled>Select Blog Category</option>
                            {blogCategory?.map((category, index)=>(
                                <option key={index} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        {errors.category && <div className="errMsg text-danger">{errors.category}</div>}
                    </Form.Group>

                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Image*
                            <small className="size">(Size 1200px x 750px)</small>
                        </Form.Label>
                        <Form.Control className="form-control" required type="file" name="image" onChange={changeHandler} />
                        {errors.image && <div className="errMsg text-danger">{errors.image}</div>}
                        {data.previewImage ? <img width="100" src={CONFIG.VITE_APP_STORAGE+ data.previewImage}/> : null }
                    </Form.Group>

                    <Button className="btn btn_primary mt_20">Save Changes</Button>

                </Form>
            </div>
        </>
    )
}

export default EditBlog;