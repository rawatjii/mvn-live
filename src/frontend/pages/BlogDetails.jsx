import React, { useState, useEffect } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import { API_URL } from "../../config/config";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { blogData } from "../../data/blogsdata";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Desktopmicro_bg = `${API_URL}images/blogs/blog.jpg`;

function BlogDetails() {
  window.scrollTo(0, 0);
  // const selectedBlog = useSelector((state) => state.blogs.selectedBlog);
  const [selectedBlog, setSelectedBlog] = useState({});
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );
  const { slug } = useParams();

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

  const findBlogBySlug = (slug) => {
    return blogData.find((blog) => blog.slug === slug);
  };

  useEffect(() => {
    // Side effect code here
    const result = findBlogBySlug(slug);
    setSelectedBlog(result);
  }, [slug]);

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem("count")));
  }, [localStorage.getItem("count")]);
  return (
    <>
      <Helmet>
        <title>{selectedBlog?.meta_title}</title>
        <meta name="description" content={selectedBlog?.meta_description} />
        <link rel="canonical" href={selectedBlog?.colonical} />
      </Helmet>
      <Layout>
        <div className="blog_page">
          <MicroBanner bg={Desktopmicro_bg} data={breadcrumbs} />
          <Container className="text-center py-5"></Container>
          <div className="container">
            <div className="row row-gap-3">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="">
                  <img
                    src={selectedBlog?.img}
                    alt={selectedBlog.alt ? selectedBlog.alt : "mvn blog image"}
                    className="w-100 rounded-3"
                  />
                </div>
                <div className="blog-deatail-page-description my-5" dangerouslySetInnerHTML={{__html: selectedBlog?.content}}></div>
                <div>
                  {selectedBlog?.description?.map((item) => {
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

                        {item?.table && (
                          <div dangerouslySetInnerHTML={{__html:item.table}}></div>
                        )}

                        <div className="my-4">

                          {item?.otherContents?.map((otherItem)=>{
                            return (
                              <div className="mb-4">
                                <h5
                                    className="mb-3"
                                    dangerouslySetInnerHTML={{ __html: otherItem.title }}
                                  ></h5> 
                                  <div
                                    className="blog-deatail-page-description"
                                    dangerouslySetInnerHTML={{ __html: otherItem.para }}
                                  />

                                  <div className="mt-3">
                                    {otherItem.points && otherItem.points.map((point)=>{
                                      return <li dangerouslySetInnerHTML={{__html:point}}></li>
                                    })}
                                  </div>
                                  
                              </div>
                            )
                          })}

                        </div>
                      </>
                    );
                  })}
               
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="row">
                  <h3>Related Blogs</h3>
                  {blogData &&
                    blogData.map((el, i) => (
                      <div
                        className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mb-2"
                        key={`blog-${i}`}
                      >
                        <div className="blog-platter-box">
                          <div className="blog-platter-img">
                            <img
                              className="img-fluid"
                              src={el.img}
                              alt={el.alt ? el.alt : "mvn blog image"}
                            />
                          </div>
                          <div className="blog-platter-detail">
                            <h4>{el.title}</h4>
                            <div className="blog-platter-detail-btn">
                              <p>{el.date}</p>
                              <Link
                                className="btn btn_style2"
                                to={`/blogs/${el.slug}`}
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
