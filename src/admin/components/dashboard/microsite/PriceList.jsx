import React, { useState } from "react";
import {
  CustomSection,
  LeftArea,
  MicroBox,
  RightArea,
} from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
// Simulated backend response
const metaFields = [
  { name: "heading", label: "Title", type: "text", col: 12, isLeft: true },
  { name: "alt", label: "Alt Tag", type: "text", col: 12, isLeft: true },
  { name: "image", label: "Image", type: "file", col: 6, isLeft: true },
  {
    name: "alternative_image",
    label: "Alternative Image",
    type: "file",
    col: 6,
    isLeft: true,
  },
];

const columns = [
  { key: "price", label: "Price" },
  { key: "size", label: "Size" },
  { key: "type", label: "Type" },
];

const PricelistMicrosite = () => {
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
    <CustomSection customClass="">
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Our Values From" />
          <CustomForm
            isBanner={false}
            dynamicFields={metaFields}
            onSubmit={handleCreate}
          />
        </MicroBox>
      </LeftArea>

      <RightArea>
        <MicroBox>
          <CustomTitle title="Edit/Delete Price List" />
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
      </RightArea>
    </CustomSection>
  );
};

export default PricelistMicrosite;
