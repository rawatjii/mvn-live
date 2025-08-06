import React, { useState, useEffect, useCallback } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import { BACKEND_IMAGE_URL, FRONTEND_API_BASE_URL ,FRONTEND_URL} from "../../config/config";
import RelatedBlogs from "../components/blog/RelatedBlogs";
import { Helmet } from "react-helmet";

function BlogDetails() {
  window.scrollTo(0, 0);
  const [pageMetaData, setPageMetaData] = useState(null);
  const [metaDataArray, setMetaData] = useState([])
  const [selectedBlog, setSelectedBlog] = useState({});
  const [loading, setLoading] = useState(false);
  // const [newLoadingCount, setNewLoadingCount] = useState(
  //   Number(localStorage.getItem("count"))
  // );
  const { slug } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const breadcrumbs = {
    title: "Blogs",
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

  const fetchData =async () => {
    setLoading(true);
    try {
      const data = await fetch(`${FRONTEND_API_BASE_URL}blog/${slug}`);
      const response = await data.json();

      if (!response.status) {
        throw new Error("Error while fetching data");
      }

      setSelectedBlog(response.data);
    } catch (err) {
      setSelectedBlog({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location,slug]);

  // useEffect(()=>{
  //   setPageMetaData(metaData?.[0])
  // }, [metaData])

  useEffect(()=>{
    const headDataArray = pageMetaData?.head_data?.split('\n')

    // Convert each string element to its appropriate type
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
        {selectedBlog && selectedBlog.meta_title && (
          <title>{selectedBlog.meta_title}</title>
        )}
        {selectedBlog && selectedBlog.meta_description && (
          <meta name="description" content={selectedBlog.meta_description} />
        )}
        {selectedBlog && selectedBlog.meta_keywords && (
          <meta name="keywords" content={selectedBlog.meta_keywords} />
        )}
        <link rel="canonical" href={location && `https://www.mvn.in${location.pathname}`}/>

        {location.pathname.includes('mvn-aero-one-gurgaon-residences') && (
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.mvn.in/blogs/mvn-aero-one-gurgaon-residences"
                },
                "headline": "MVN Aero One in Gurgaon: The Ultimate Residential Choice for 2025",
                "description": "Discover why MVN Aero One in Gurgaon is the ultimate residential choice for 2025. Explore luxury living with spacious layouts, premium amenities, and prime connectivity in Gurgaon’s fastest-growing neighborhood.",
                "image": "https://mvnbackend.gtftechnologies.com/uploads/blog/1750248386782.webp",  
                "author": {
                  "@type": "",
                  "name": "MVN Aero One"
                },  
                "publisher": {
                  "@type": "Organization",
                  "name": "",
                  "logo": {
                    "@type": "ImageObject",
                    "url": ""
                  }
                },
                "datePublished": "2025-07-06"
              }
            `}
            </script>
          )}
        
      </Helmet>
      <Layout>
        <div className="blog_page">
          <MicroBanner type="blog" page={slug} data={breadcrumbs} />
          <Container className="text-center py-5"></Container>
          <div className="container">
            <div className="row row-gap-3">
              <div className="col-sm-12 col-md-8 col-lg-8 main_content">
                {loading ? (
                  <h1>Loading...</h1>
                ) : !loading &&
                  selectedBlog &&
                  Object.keys(selectedBlog).length === 0 ? (
                  <div className="text-center py-5">No records found</div>
                ) : (
                  <>
                    <div className="mb-5">
                      <img
                        src={BACKEND_IMAGE_URL + selectedBlog?.image}
                        alt="mvn blog image"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedBlog?.description,
                      }}
                    >
                      {/* {selectedBlog.description?.map((item) => {
                        return (
                          <>
                            <div className="mb-2">
                              <h2
                                className="blog-detail-page-heading"
                                dangerouslySetInnerHTML={{ __html: item.heading }}
                              ></h2>
                              <div
                                className="blog-deatail-page-description"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                              />
                            </div>
                          </>
                        );
                      })} */}
                    </div>
                  </>
                )}
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="row">
                  <h3>Related Blogs</h3>
                  <RelatedBlogs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogDetails;
