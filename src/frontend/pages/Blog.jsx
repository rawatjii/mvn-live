import React, { useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import BlogLists from "../components/blog/BlogLists";
import { API_URL } from "../../config/config";
import useFetchData from "../utils/apiHelper";

const headingIconImg = `${API_URL}images/icons/heading-icon-img.webp`;

function Blog() {
  window.scrollTo(0, 0);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );
  const { data, loading } = useFetchData("page/page-section/blog");

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
        <MicroBanner page_section="blog-banner" page="blog" data={breadcrumbs} />
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
                    {data?.[1].heading}
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
