import React, { useEffect, useState } from "react";
import {
  CustomSection,
  LeftArea,
  MicroBox,
  RightArea,
} from "./components/dashboard/utilities/CutomTags";
import CustomTitle from "./components/dashboard/utilities/CustomTitle";
import CustomForm from "./components/dashboard/utilities/CustomForm";
import CustomTable from "./components/dashboard/utilities/custom-table/CustomTable";
import CustomPagination from "./components/dashboard/utilities/pagination/CustomPagination";
import generateApi from "./api/generateApi";
import useCrud from "./hooks/useCrud";
import CustomModal from "./components/dashboard/utilities/custom-modal/CustomModal"; // Simulated backend response
import { useDispatch, useSelector } from "react-redux";
import { setDeleteId, toggleModal } from "../redux/commonSlice";

const metaFields = [
  { name: "heading", label: "Title", type: "text", col: 4, isRequired: true },
  { name: "slug", label: "Slug", type: "text", col: 4, isRequired: true },
  { name: "date_at", label: "Date", type: "date", col: 4, isRequired: true },
  { name: "alt", label: "Alt Tag", type: "text", col: 4, isRequired: true },
  { name: "image", label: "Image", type: "file", col: 4, isRequired: true },
  {
    name: "mb_image",
    label: "Mobile Image",
    type: "file",
    col: 4,
    isRequired: true,
  },
  {
    name: "alternative_image",
    label: "Alternative Image",
    type: "file",
    col: 6,
    isWebpAllowed: false,
    isRequired: true,
  },
  {
    name: "mb_alternative_image",
    label: "Mobile Alternative Image",
    type: "file",
    col: 6,
    isWebpAllowed: false,
    isRequired: true,
  },
  {
    name: "description",
    label: "Description",
    type: "editor",
    col: 12,
    isRequired: true,
  },
  { name: "meta_title", label: "Meta Title", type: "text", col: 4},
  { name: "meta_keywords", label: "Meta Keywords", type: "text", col: 4},
  { name: "meta_description", label: "Meta Description", type: "text", col: 4},
  { name: "head_data", label: "Head Scripts", type: "textarea", col: 6, row:6},
  { name: "footer_data", label: "Body Scripts", type: "textarea", col: 6, row:6},
];

const columns = [
  { key: "id", label: "S.No." },
  { key: "heading", label: "Heading" },
  { key: "description", label: "Description" },
  // { key: "date", label: "Date" },
  // { key: "image", label: "Image" },
  // { key: "mobile_image", label: "Mobile Image" },
];

const AdminBlog = () => {
  const aboutsApi = generateApi("blog"); // ✅ Adjust endpoint if needed
  const { data, loading, error, createItem, updateItem, editItem, deleteItem } =
    useCrud(aboutsApi);
  const [editModalData, setEditModalData] = useState(null);
  const dispatch = useDispatch();
  const {isDeleteConfirm, deleteId} = useSelector(state=>state.commonState)

  const handleCreate = (formData) => createItem(formData);

  const handleEditSubmit = (formData) => {
    setEditModalData(null);
    editItem(editModalData.id, formData);
  };

  useEffect(()=>{
    if(isDeleteConfirm){
      deleteItem(deleteId);
      dispatch(toggleModal(false));
    }
  }, [isDeleteConfirm])

  const handleDelete = (row) => {
    dispatch(setDeleteId(row.id));
    dispatch(toggleModal(true));
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const editFormHandler = (row) => {
    scrollTo(0, 0);
    setEditModalData(row);
  };

  return (
    <>
      <CustomSection customClass="d-block">
        <MicroBox>
          <CustomTitle title="Blog Details" />
          <CustomForm
            isBanner={false}
            dynamicFields={metaFields}
            onSubmit={handleCreate}
            dataError={error}
            data={editModalData}
            onUpdate={handleEditSubmit}
          />
        </MicroBox>
        <MicroBox>
          <CustomTitle title="All Blogs" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={(row) => {
              editFormHandler(row);
            }}
            onDelete={handleDelete}
          />
        </MicroBox>
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </CustomSection>

      {/* {editModalData && (
        <CustomModal
          isOpen={!!editModalData}
          onClose={() => setEditModalData(null)}
          title="Edit Blog"
          className="modal_lg"
        >
          <CustomForm
            isBanner={false}
            dynamicFields={metaFields}
            defaultData={editModalData}
            onSubmit={handleEditSubmit}
          />
        </CustomModal>
      )} */}
    </>
  );
};

export default AdminBlog;
