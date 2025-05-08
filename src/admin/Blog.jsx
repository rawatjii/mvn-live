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
// Simulated backend response
const metaFields = [
  { name: "heading", label: "Title", type: "text", col: 4 },
  { name: "date", label: "Date", type: "text", col: 4 },
  { name: "alt", label: "Alt Tag", type: "text", col: 4 },
  { name: "image", label: "Image", type: "file", col: 6 },
  { name: "mobile_image", label: "Mobile Image", type: "file", col: 6 },
  {
    name: "alternative_image",
    label: "Alternative Image",
    type: "file",
    col: 6,
    isWebpAllowed: false,
  },
  {
    name: "mobile_alternative_image",
    label: "Mobile Alternative Image",
    type: "file",
    col: 6,
    isWebpAllowed: false,
  },
  { name: "description", label: "Description", type: "textarea", col: 12 },
];

const columns = [
  { key: "id", label: "S.No." },
  { key: "heading", label: "Heading" },
  { key: "description", label: "Description" },
  { key: "date", label: "Date" },
  { key: "image", label: "Image" },
  { key: "mobile_image", label: "Mobile Image" },
];

const oldData = [
  { id: 1, title: "Enrich lives", image: "image1.jpg" },
  { id: 2, title: "Empower ambitions", image: "image2.jpg" },
  { id: 3, title: "Drive innovation", image: "image2.jpg" },
  { id: 4, title: "Inspire quality", image: "image2.jpg" },
];

const AdminBlog = () => {
  const aboutsApi = generateApi("blog"); // ✅ Adjust endpoint if needed
  const { data, loading, error, createItem, updateItem, deleteItem } =
    useCrud(aboutsApi);

  console.log(data, "data blog");

  const handleCreate = (formData) => createItem(formData);
  const handleEdit = (row) => updateItem(row.id, row);
  const handleDelete = (row) => deleteItem(row.id);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <CustomSection customClass="d-block">
      <MicroBox>
        <CustomTitle title="Our Values From" />
        <CustomForm
          isBanner={false}
          dynamicFields={metaFields}
          onSubmit={handleCreate}
          dataError={error}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="Our Values Table" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </MicroBox>
      <CustomPagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </CustomSection>
  );
};

export default AdminBlog;
