import React,{useState,useEffect } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/blog.jpg";
import { Container,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



import {blogData} from '../../data/blogsdata';
import InitialLoading from "../skeleton/Initial/Index";
import Layout from "../components/Layout";

function BlogDetails() {
  window.scrollTo(0, 0);
  // const selectedBlog = useSelector((state) => state.blogs.selectedBlog);
  const [selectedBlog, setSelectedBlog] = useState({});
  const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));
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
    return  blogData.find((blog) => blog.slug === slug);

  };

  useEffect(() => {
    // Side effect code here
  const result=findBlogBySlug(slug);
  setSelectedBlog(result);
  }, [slug]);

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem('count')));
  }, [localStorage.getItem('count')]);
  return (
    <Layout>
      <div className="blog_page">
        <MicroBanner bg={Desktopmicro_bg} data={breadcrumbs} />
        <Container className="text-center py-5">
        </Container>
        <div className="container">
          <div className="row row-gap-3">
          <div className="col-sm-12 col-md-8 col-lg-8">
  
          <div className="">
              <img
                src={selectedBlog?.img}
                alt="mvn blog image"
                className="w-100 rounded-3"
              />
            </div>
            <div>
                  {selectedBlog?.description?.map((item)=>{
                    return <>
                    <div className="mb-2">
                      
                    <h2 className="blog-detail-page-heading" dangerouslySetInnerHTML={{ __html: item.heading }} ></h2> 
                    <div className="blog-deatail-page-description" dangerouslySetInnerHTML={{ __html: item.description }} />

                    </div>
                    </>
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
                            <img className="img-fluid" src={el.img} alt="mvn blog image" />
                          </div>
                          <div className="blog-platter-detail">
                            <h4>{el.title}</h4>
                            <div className="blog-platter-detail-btn">
                              <p>{el.date}</p>
                              <Link className="btn btn_style2"   to={`/blogs/details/${el.slug}`}>
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
    
  );
}

export default BlogDetails;
