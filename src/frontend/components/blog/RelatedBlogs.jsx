import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../utils/apiHelper";
import { BACKEND_IMAGE_URL, FRONTEND_URL } from "../../../config/config";
import { DEFAULT_IMAGE } from "../../../config/config";

const RelatedBlogs = () => {
  const { data, loading } = useFetchData("blog");

  if(loading) return <div className="text-center py-5">Loading...</div>;
  if(!loading && data && data.length === 0) return <div className="text-center py-5">No records found</div>;

  return (
    <>
      {data && data.map((singleBlog) => (
        <div
          className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mb-2"
          // key={`blog-${i}`}
        >
          <div className="blog-platter-box">
            <div className="blog-platter-img">
              <img className="img-fluid" src={BACKEND_IMAGE_URL+singleBlog.image} alt="mvn blog image" onError={(e)=>{
                e.target.onerror = null;
                e.target.src=DEFAULT_IMAGE
              }} />
            </div>
            <div className="blog-platter-detail">
              <h4>{singleBlog.heading}</h4>
              <div className="blog-platter-detail-btn">
                <p>{new Date(singleBlog.created_at).toLocaleDateString('en-US', {
                  day:'numeric',
                  month:'long',
                  year: 'numeric'
                })}</p>
                <Link className="btn btn_style2" to={`${FRONTEND_URL}blogs/details/${singleBlog.slug}`}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedBlogs;
