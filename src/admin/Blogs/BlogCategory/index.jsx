import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/Sidebar";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "admin/components/Modal/SideModal/Index";
import Form from "react-bootstrap/Form";
import * as CONFIG from "root/config/config";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
import Request from "root/config/JsonRequest";
import { Link } from "react-router-dom";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const BlogCategory = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [enableEdit, setenableEdit] = useState(false);

  const nameRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);

  const resetFields = () => {
    nameRef.current = null;
    setErrors({});
    setEditId(false);
    setenableEdit(false);
  };

  const handleStatusSelect = async (selectedValue, id) => {
    setSelectedStatus(selectedValue);
    await updateStatusHandler(id, selectedValue);
  };

  const updateStatusHandler = async (id, selectedStatus) => {
    setIsLoading(true);

    var response = await Request(
      "admin/blog-category/" + id + "/status",
      "POST",
      {
        status: selectedStatus,
      }
    );

    setIsLoading(false);

    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      toast.success(response.message);
    }
  };

  const addCategoryHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    var response = await Request("admin/blog-category", "POST", {
      name: nameRef.current.value,
    });

    setIsLoading(false);
    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      listHandler();
      cancelHandler();
      resetFields();
      toast.success(response.message);
    }
  };

  const editHandler = async (id) => {
    setShowSidebar(true);

    var response = await Request("admin/blog-category/" + id, "GET");

    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      nameRef.current.value = response.data.name;
    }
  };

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    var response = await Request("admin/blog-category/" + id, "DELETE");
    if (response.status && response.statusCode === 200) {
      toast.success(response.message);
      listHandler();
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };
  const listHandler = async () => {
    var response = await Request(
      "admin/blog-category?page=" + currentPage,
      "GET"
    );
    if (!response.status && response.statusCode !== 200) {
      setIsLoading(false);
      return;
    }

    setData(response.data.data);
    setLastPage(response.data.last_page);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const updateHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    var response = await Request(
      "admin/blog-category/" + editId + "/update",
      "POST",
      {
        name: nameRef.current.value,
      }
    );
    setIsLoading(false);

    if (response.status && response.statusCode === 200) {
      listHandler();
      cancelHandler();
    } else if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    }
  };

  useEffect(() => {
    listHandler();
  }, [currentPage]);

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="d-flex title_col justify-content-between align-items-center">
        <h4 className="page_title">Blogs Categories</h4>
        <button
          className="btn ms-auto btn_primary btn-sm"
          onClick={addCategoryHandler}
        >
          Add Blog Category
        </button>
      </div>

      <div className="card mt-4 card_style1">
        <div className="d-flex">
          <h5>All Categories</h5>
        </div>

        <table className="mt_40">
          <thead>
            <tr>
              <th>Name</th>

              <th>Show</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {!isLoading && data.length
              ? data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
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
                      <button
                        className="btn action_btn"
                        onClick={() => editHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                          alt="edit icon"
                          className="img-fluid icon"
                        />
                      </button>

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
              : !isLoading && (
                  <tr>
                    <td colSpan="3">
                      <h5 className="no_record">No Data Found!</h5>
                    </td>
                  </tr>
                )}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={lastPage}
          onPageChange={handlePageChange}
        />
      </div>

      {showSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateHandler : addSubmitHandler}
            >
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                  id="name"
                    ref={nameRef}
                    className=""
                    required
                    type="text"
                    placeholder="Enter Category Name"
                  />
                  {errors.name}
                </Form.Group>
              </Form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default BlogCategory;
