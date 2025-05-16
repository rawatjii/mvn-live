import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../../data/blogsdata";
import { FRONTEND_API_BASE_URL, BACKEND_IMAGE_URL } from "../../../config/config";

export default function BlogLists() {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(`${FRONTEND_API_BASE_URL}blog`);
        const response = await data.json();

        if (!response.status) {
          throw new Error("Error while fetching data");
        }

        setBlogData(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="blogs_content mb-5">
      <div className="container">
        {loading ? (
          <div className="text-center py-5">Loading...</div>
        ) : blogData && blogData.length === 0 ? (
          <div className="text-center py-5">No records found</div>
        ) : (
          <div className="row row-gap-3">
            {blogData &&
              blogData.length > 0 &&
              blogData.map((el, i) => (
                <div className="col-sm-4" key={`blog-${i}`}>
                  <div className="blog-platter-box">
                    <div className="blog-platter-img">
                      <img
                        className="img-fluid"
                        src={BACKEND_IMAGE_URL+el.image}
                        alt="mvn blog image"
                      />
                    </div>
                    <div className="blog-platter-detail">
                      <h4>{el.title}</h4>
                      <div className="blog-platter-detail-btn">
                        <p>{el.date}</p>
                        <Link
                          to={`/blogs/details/${el.slug}`}
                          className="btn btn_style2"
                          onClick={() => {
                            localStorage.setItem("selectedBlog", i);
                            dispatch(setSelectedBlog(i));
                          }}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
