import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/Sidebar";
import BackdropPortal from "common/Portal/Backdrop";
// import SideModal from "admin/components/Modal/SideModal/Index";
import Form from "react-bootstrap/Form";
// import * as CONFIG from 'root/config/config';
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
// import Request from 'root/config/Request';
import ReactQuill from "react-quill";
import { Link, useAsyncError } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const Blogs = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [editId, setEditId] = useState(false);
  const [blogData, setBlogData] = useState(null);
  const titleRef = useRef(null);
  const shortDescriptionRef = useRef(null);
  const descriptionRef = useRef(null);
  const blogCategoryRef = useRef(null);
  const imageRef = useRef(null);
  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [showEditEnableImage, setShowEditEnableImage] = useState("");

  const handleStatusSelect = async (selectedValue, id) => {
    setSelectedStatus(selectedValue);
    await updateStatusHandler(id, selectedValue);
  };

  const updateStatusHandler = async (id, selectedStatus) => {
    try {
      const formData = new FormData();
      formData.append("status", selectedStatus);

      var response = await Request(
        "admin/blog/" + id + "/status",
        "POST",
        formData
      );

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        toast.error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
      }
    } catch (error) {
    } finally {
    }
  };

  useState(() => {
    const blogSubCategory = async () => {
      try {
        var response = await Request("admin/blog-category", "GET");
        if (response.status && response.statusCode === 200) {
          setBlogCategory(response.data.data);
        }
      } catch (err) {}
    };

    blogSubCategory();
  }, []);

  const resetFields = () => {
    nameRef.current = null;
    setErrors({});
    setEditId(false);
    setenableEdit(false);
  };

  const addCategoryHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("heading", titleRef.current.value);
      formData.append("short_description", shortDescriptionRef.current.value);
      formData.append("description", descriptionRef.current.value);
      formData.append("category", blogCategoryRef.current.value);
      formData.append("image", imageRef.current.files[0]);

      var response = await Request("admin/blog", "POST", formData);

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        listHandler();
        cancelHandler();
        resetFields();
        return toast.success(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editHandler = async (id) => {
    try {
      var response = await Request("admin/blog/" + id, "GET");
      if (response.status && response.statusCode === 200) {
        setBlogData(response.data);
        setShowEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.image);
        setEditId(id);
        setenableEdit(true);
        setShowSidebar(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  const deleteHandler = async (id) => {
    try {
      var response = await Request("admin/blog/" + id, "DELETE");
      if (response.status && response.statusCode === 200) {
        toast.success(response.message);
        listHandler();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
    } finally {
    }
  };

  const listHandler = async (search = "") => {
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/blog?search=" + search + "&page=" + currentPage,
      "GET"
    );
    if (!response.status && response.statusCode !== 200) {
      return;
    }

    setData(response.data.data);
    setLastPage(response.data.last_page);
    setIsLoadingTableData(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const updateHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("heading", titleRef.current.value);
    formData.append("short_description", shortDescriptionRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("category", blogCategoryRef.current.value);
    if (imageRef.current.files[0]) {
      formData.append("image", imageRef.current.files[0]);
    }

    var response = await Request(
      "admin/blog/" + editId + "/update",
      "POST",
      formData
    );

    if (response.status && response.statusCode === 200) {
      listHandler();
      cancelHandler();
    } else if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    }
  };

  useEffect(() => {
    if (blogData) {
      titleRef.current.value = blogData.heading;
      shortDescriptionRef.current.value = blogData.short_description;
      descriptionRef.current.value = blogData.description;
      blogCategoryRef.current.value = blogData.category;
      setDescValue(blogData.description);
    }
    listHandler();
  }, [currentPage, blogData]);

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    listHandler(searchTerm);
  };

  return (
    <>
      <div className="d-flex title_col justify-content-between align-items-center">
        <h4 className="page_title">Blogs</h4>
        {/* <button className="btn ms-auto btn_primary btn-sm" onClick={addCategoryHandler}>Add Blog</button> */}
        <Link
          className="btn ms-auto btn_primary btn-sm"
          to={`${CONFIG.ADMIN_ROOT}blogs/add`}
        >
          Add Blog
        </Link>
      </div>

      <div className="card mt-4 card_style1">
        <div className="d-flex align-items-center">
          <h5 className="mb-0">All Blogs </h5>

          <div className="searchInput ms-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              onChange={findHandler}
            />
          </div>
        </div>

        {/* <form >
                    <input ref={fileRef} type="file" className="form-control" />
                    <input type="text" className="form-control" placeholder="Enter Amenity Name" />
                    <button type="submit" className="btn btn_primary">Save</button>
                </form> */}

        <table className="mt_40">
          <thead>
            <tr>
              <th>Title</th>
              <th>Short Description</th>
              <th>Show</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoadingTableData && (
              <tr>
                <td colSpan={4}>
                  <div className="text-center">
                    <ScaleLoader color="#ddd" className="w-100" />
                  </div>
                </td>
              </tr>
            )}

            {!isLoadingTableData && data.length
              ? data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.heading}</td>
                    <td>{item.short_description}</td>
                    <td>
                      <CustomDropdown
                        className="form-control"
                        defaultVal={item.status}
                        options={statusOptions}
                        onSelect={(selectedValue) =>
                          handleStatusSelect(selectedValue, item.id)
                        }
                      />
                    </td>

                    <td>
                      <Link
                        className="btn action_btn"
                        to={CONFIG.ADMIN_ROOT + "blogs/edit/" + item.id}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                          alt="edit icon"
                          className="img-fluid icon"
                        />
                      </Link>

                      <button
                        className="btn action_btn"
                        onClick={() => deleteHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"}
                          alt="delete icon"
                          className="img-fluid icon delete"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              : !isLoadingTableData && (
                  <tr>
                    <td colSpan="4">
                      <h5 className="no_record">No Data Found!</h5>
                    </td>
                  </tr>
                )}
          </tbody>
        </table>

        {!isLoadingTableData && data.length ? (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </>
  );
};

export default Blogs;
