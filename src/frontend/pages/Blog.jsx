import React, { useEffect, useRef, useState } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import BlogLists from "../components/blog/BlogLists";
import { API_URL } from "../../config/config";
import useFetchData from "../utils/apiHelper";
import { Helmet } from "react-helmet";

const headingIconImg = `${API_URL}images/icons/heading-icon-img.webp`;

function Blog() {
  window.scrollTo(0, 0);
  const [pageMetaData, setPageMetaData] = useState(null);
  const [metaDataArray, setMetaData] = useState([]) 
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );
  const { data, loading } = useFetchData("page/page-section/blog");
  const { data: metaData } = useFetchData(`get-page-meta/5`);

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

  useEffect(()=>{
    setPageMetaData(metaData?.[0]);
  }, [metaData])

  useEffect(()=>{
    const headDataArray = pageMetaData?.head_data?.split('\n')

    const parsedArray = headDataArray?.map(item => item);
  
    parsedArray?.map(item=>{
        setMetaData(prevState=>([
            ...prevState,
            item,
        ]))
    })
    
  }, [pageMetaData])

  useEffect(()=>{
      var headDataContainer;
      if (pageMetaData?.head_data) {
          headDataContainer = document.createElement('div');
          headDataContainer.innerHTML = pageMetaData.head_data;
          Array.from(headDataContainer.children).forEach(child => {
              document.head.appendChild(child);
          });
      }

      return ()=>{
          if (headDataContainer) {
              Array.from(headDataContainer.children).forEach(child => {
                document.head.removeChild(child);
              });
          }
      }
  }, [pageMetaData])

  return (
    <>
      <Helmet>
        {pageMetaData && pageMetaData.meta_title && <title>{pageMetaData.meta_title}</title>}
        {pageMetaData && pageMetaData.meta_description && <meta name="description" content={pageMetaData.meta_description} />}
        {pageMetaData && pageMetaData.meta_keyword && <meta name="keywords" content={pageMetaData.meta_keyword} />}
        {pageMetaData && pageMetaData.head_data && <div dangerouslySetInnerHTML={{__html:pageMetaData.head_data}} />}
      </Helmet>
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
    </>
  );
}

export default Blog;
