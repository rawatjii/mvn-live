import React, { useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";

import headingIconImg from "../assets/images/icons/heading-icon-img.webp";

import { useDispatch } from "react-redux";
import { setSelectedBlog } from "../../redux/blogsSlice";
import ScrollToTop from "./../../common/ScrollToTop";
import InitialLoading from "../skeleton/Initial/Index";
import Layout from "../components/Layout";
import BlogLists from "../components/blog/BlogLists";

function Blog() {
  window.scrollTo(0, 0);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );

  const dispatch = useDispatch();
  const titleRef = useRef();
  const desRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem("count")));
  }, [localStorage.getItem("count")]);

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
      <div className="blog_page inner_section" ref={containerRef}>
        <MicroBanner page_section="blog-banner" page="blog" bg={BlogImg} data={breadcrumbs} />
        <div className="micro_content">
          <div className="micro_data">
            <div className="content_col position-relative page-header-main-heading">
              <Container>
                <div className="heading_div mb_sm_30">
                  <img
                    src={headingIconImg}
                    alt="mvn vertical icon"
                    className="img-fluid title_plane1"
                  />
                  <h4 ref={titleRef} className="title title_style1 text-center">
                    Perspectives That Redefine: Welcome to Our Blogs
                  </h4>
                </div>
              </Container>
            </div>
          </div>

          <BlogLists />


        </div>
      </div>
    </Layout>
  );
}

export default Blog;
