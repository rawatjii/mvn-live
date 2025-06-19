import React, { useState } from "react";
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
import CustomModal from "./components/dashboard/utilities/custom-modal/CustomModal";// Simulated backend response

const metaFields = [
  { name: "heading", label: "Heading", type: "text", col: 12, isRequired: true, placeholder:"Enter Heading" },
  { name: "image", label: "Image", type: "file", col: 4, isRequired: true },
  { name: "alternative_image", label: "Alternative Image", type: "file", col: 4, isWebpAllowed: false, isRequired: true,  },
  { name: "alt", label: "Alt Tag", type: "text", col: 4, isRequired: true },
  {
    name: "description",
    label: "Description",
    type: "editor",
    col: 12,
    isRequired: true,
  },
];


const columns = [
  { key: "id", label: "S.No." },
  { key: "heading", label: "Heading" },
  { key: "description", label: "Description" },
  // { key: "date", label: "Date" },
  // { key: "image", label: "Image" },
  // { key: "mobile_image", label: "Mobile Image" },
];

const AdminCareer = () => {
  const aboutsApi = generateApi("work-culture"); // ✅ Adjust endpoint if needed
  const { data, loading, error, createItem, updateItem, editItem, deleteItem } = useCrud(aboutsApi);
  const [editModalData, setEditModalData] = useState(null);

  const handleCreate = (formData) => createItem(formData);

  const handleEditSubmit = (formData) => {
    setEditModalData(null)
    editItem(editModalData.id, formData); 
  };

  const handleDelete = (row) => deleteItem(row.id);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <CustomSection customClass="d-block">
        <MicroBox>
          <CustomTitle title="Careers Detail" />
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
          <CustomTitle title="All Careers" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={(row) => {
              scrollTo(0, 0)
              setEditModalData(row)
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

export default AdminCareer;
