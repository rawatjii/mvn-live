import React, { useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/1865.jpg";
import BlogImg from "../assets/images/blogs/blog.jpg";

import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";

import headingIconImg from "../assets/images/icons/heading-icon-img.webp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedBlog } from "../../redux/blogsSlice";
import { blogData } from "../../data/blogsdata";
import ScrollToTop from './../../common/ScrollToTop';
import InitialLoading from "../skeleton/Initial/Index";
import Layout from "../components/Layout";

function Blog() {
  window.scrollTo(0, 0);
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));
  
  const dispatch = useDispatch();
  const titleRef = useRef();
  const desRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem('count')));
  }, [localStorage.getItem('count')]);

  const breadcrumbs = {
    title: "Blogs",
    content: "Insights into Luxurious Living",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blogs",
      },
    ],
  };
  return (
    <Layout>
      <div className="blog_page inner_section" ref={containerRef} >
        <MicroBanner bg={BlogImg} data={breadcrumbs} />
        <div className="micro_content">
          <div className="micro_data">
            <div className="content_col position-relative page-header-main-heading">
              <Container>
                <div className="heading_div mb_sm_30">
                  <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
                  <h4 ref={titleRef} className="title title_style1 text-center">
                  Perspectives That Redefine: Welcome to Our Blogs
                  </h4>
                </div>
              </Container>
            </div>
          </div>

          <div className="blogs_content mb-5">
          <div className="container">
            <div className="row row-gap-3">
              {blogData &&
                blogData.map((el, i) => (
                  <div className="col-sm-4" key={`blog-${i}`}>
                    <div className="blog-platter-box">
                      <div className="blog-platter-img">
                        <img className="img-fluid" src={el.img} alt="mvn blog image" />
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
                ))
              }
            </div>
          </div>
        </div>
        </div>
        
        
      </div>
    </Layout>
    
  );
}

export default Blog;
