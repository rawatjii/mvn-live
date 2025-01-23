import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Request from "root/config/Request";
import './assets/css/admin.css';

import * as CONFIG from 'root/config/config'

import projectIcon from './assets/images/icons/project.svg'
import blogIcon from './assets/images/icons/blogs.svg'
import enquireIcon from './assets/images/icons/enquire.svg'

const Dashboard = ()=>{
    const [data, setData] = useState({});

    const listHandler = async () => {
        var response=await Request('admin/dashboard', 'GET');
        try {
            if (response.status && response.statusCode == 200) {
                setData(response.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listHandler()
    }, []);

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">   
                <h4 className="page_title">Dashboard</h4>   
            </div>

            <div className="row cards_row">
                <div className="col-md-4 single_col">
                    <div className="card card_style1 color_card">
                        <img src={projectIcon} alt="project" className="img-fluid icon"  />
                        <h4 className="count">{data?.project?.count}</h4>
                        <p className="title">Total {data?.project?.name}</p>
                    </div>
                </div>

                <div className="col-md-4 single_col">
                    <div className="card card_style1 color_card">
                        <img src={blogIcon} alt="blogs" className="img-fluid icon"  />
                        <h4 className="count">{data?.blog?.count}</h4>
                        <p className="title">Total {data?.blog?.name}</p>
                    </div>
                </div>

                <div className="col-md-4 single_col">
                    <div className="card card_style1 color_card">
                        <img src={enquireIcon} alt="enquire" className="img-fluid icon"  />
                        <h4 className="count">{data?.total_enquiry?.count}</h4>
                        <p className="title">Total {data?.total_enquiry?.name}</p>
                    </div>
                </div>
            </div>

            {/* <div className="card mt-4 card_style1">
                <h5>Recent Added Projects</h5>

                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Project
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Featured
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="table_pr">
                                    <div className="thumb">
                                        <img src={FRONTEND_IMG_URL + 'properties/properties1.jpg'} alt="property" className="img-fluid" />
                                    </div>

                                    <div className="content">
                                        <h6 className="pr_name">Brigade Orchards</h6>
                                        <small className="location">Devanahalli, Bangalore</small>
                                        <h5 className="price"><small>₹</small>41 L*</h5>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <CustomDropdown className="form-control" defaultVal="Select --" options={statusOptions} onSelect={handleStatusSelect} />
                            </td>

                            <td>
                                <CustomSwitch id='1' />
                            </td>

                            <td>
                                <a href="#" className="action_btn">
                                    <img src={ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                </a>

                                <button className="btn action_btn">
                                    <img src={ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete" />
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="table_pr">
                                    <div className="thumb">
                                        <img src={FRONTEND_IMG_URL + 'properties/properties1.jpg'} alt="property" className="img-fluid" />
                                    </div>
                                    
                                    <div className="content">
                                        <h6 className="pr_name">Brigade Orchards</h6>
                                        <small className="location">Devanahalli, Bangalore</small>
                                        <h5 className="price"><small>₹</small>41 L*</h5>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <CustomDropdown className="form-control" defaultVal="Select --" options={statusOptions} onSelect={handleStatusSelect} />
                            </td>

                            <td>
                                <CustomSwitch id='1' />
                            </td>

                            <td>
                                <a href="#" className="action_btn">
                                    <img src={ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                </a>

                                <button className="btn action_btn">
                                    <img src={ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete" />
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="table_pr">
                                    <div className="thumb">
                                        <img src={FRONTEND_IMG_URL + 'properties/properties1.jpg'} alt="property" className="img-fluid" />
                                    </div>
                                    
                                    <div className="content">
                                        <h6 className="pr_name">Brigade Orchards</h6>
                                        <small className="location">Devanahalli, Bangalore</small>
                                        <h5 className="price"><small>₹</small>41 L*</h5>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <CustomDropdown className="form-control" defaultVal="Select --" options={statusOptions} onSelect={handleStatusSelect} />
                            </td>

                            <td>
                                <CustomSwitch id='1' />
                            </td>

                            <td>
                                <a href="#" className="action_btn">
                                    <img src={ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                </a>

                                <button className="btn action_btn">
                                    <img src={ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete" />
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>

                <h5 className="no_record">No Projects Found!</h5>
            </div> */}

            <div className="row">
                <div className="col-md-12">
                    <div className="row">
  
                        <div className="col-md-3">
                            <div className="card mt-4 card_style1 card_sm">
                                <h4 className="count">{data?.developer?.count}</h4>
                                <p>Total {data?.developer?.name}</p>
                                <Link to={CONFIG.ADMIN_ROOT + 'developers'} className="btn">View</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card mt-4 card_style1 card_sm">
                                <h4 className="count">{data?.amenities?.count}</h4>
                                <p>Total {data?.amenities?.name}</p>
                                <Link to={CONFIG.ADMIN_ROOT + 'amenities'} className="btn">View</Link>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card mt-4 card_style1 card_sm">
                                <h4 className="count">{data?.blog?.count}</h4>
                                <p>Total {data?.blog?.name}</p>
                                <Link to={CONFIG.ADMIN_ROOT + 'blogs'} className="btn">View</Link>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card mt-4 card_style1 card_sm">
                                <h4 className="count">{data?.testimonials?.count}</h4>
                                <p>Total {data?.testimonials?.name}</p>
                                <Link to={CONFIG.ADMIN_ROOT + 'testimonials'} className="btn">View</Link>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card mt-4 card_style1 card_sm">
                                <h4 className="count">{data?.jobApplication?.count}</h4>
                                <p>Total {data?.jobApplication?.name}</p>
                                <Link to={CONFIG.ADMIN_ROOT + 'job-application'} className="btn">View</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="col-md-5">
                    <div className="card mt-4 card_style1">
                        <h5>Latest Queries</h5>

                        <table className="mt_40">
                            <thead>
                                <tr>
                                    <th>
                                        Builder
                                    </th>
                                    <th>
                                        Total Query
                                    </th>
                                    <th>
                                        View
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                    Ireo Grand Arch	
                                    </td>

                                    <td>
                                        3
                                    </td>

                                    <td>
                                        <Link to={CONFIG.ADMIN_ROOT + 'projects-query'}>
                                            <img src={ADMIN_IMG_URL + 'icons/eye.svg'} alt="view" className="img-fluid view_icon" />
                                        </Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                    Ireo Grand Arch	
                                    </td>

                                    <td>
                                        3
                                    </td>

                                    <td>
                                        <Link to={CONFIG.ADMIN_ROOT + 'projects-query'}>
                                            <img src={ADMIN_IMG_URL + 'icons/eye.svg'} alt="view" className="img-fluid view_icon" />
                                        </Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                    Ireo Grand Arch	
                                    </td>

                                    <td>
                                        3
                                    </td>

                                    <td>
                                        <Link to={CONFIG.ADMIN_ROOT + 'projects-query'}>
                                            <img src={ADMIN_IMG_URL + 'icons/eye.svg'} alt="view" className="img-fluid view_icon" />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>

                        </table> 
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Dashboard