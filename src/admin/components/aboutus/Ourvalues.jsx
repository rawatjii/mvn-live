import React, { useState } from "react";
import {
  CustomSection,
  LeftArea,
  MicroBox,
  RightArea,
} from "../dashboard/utilities/CutomTags";
import CustomTitle from "../dashboard/utilities/CustomTitle";
import CustomForm from "../dashboard/utilities/CustomForm";
import CustomTable from "../dashboard/utilities/custom-table/CustomTable";
import CustomPagination from "../dashboard/utilities/pagination/CustomPagination";
import generateApi from "../../api/generateApi";
import useCrud from "../../hooks/useCrud";

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
  { key: "id", label: "S.No." },
  { key: "heading", label: "Title" },
  { key: "image", label: "Image", type: "image" },
];

const Ourvalues = () => {
  const [editModalData, setEditModalData] = useState(null);

  const aboutsApi = generateApi("our-values");
  const { data, loading, error, createItem, updateItem, deleteItem } =
    useCrud(aboutsApi);

  const handleCreate = (formData) => createItem(formData);
  // const handleEdit = (row) => updateItem(row.id, row);
  const handleDelete = (row) => deleteItem(row.id);

  const handleEdit = (row) => {
    setEditModalData(row); // open modal
  };

  const handleEditSubmit = (formData) => {
    updateItem(editModalData.id, formData); // update data
    setEditModalData(null); // close modal
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <CustomSection customClass="">
      {/* left box for form */}
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
      {/* right box for table */}
      <RightArea>
        <MicroBox>
          <CustomTitle title="Our Values Table" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={handleEdit} // ✅
            onDelete={handleDelete}
          />
        </MicroBox>
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />

        {/* Edit Modal */}
        {editModalData && (
          <div
            className="ImageModalOverlay"
            onClick={() => setEditModalData(null)}
          >
            <div
              className="ImageModalContent"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "600px", width: "90%" }}
            >
              <h3>Edit Our Value</h3>
              <CustomForm
                isBanner={false}
                dynamicFields={metaFields}
                defaultData={editModalData} // ✅ pre-fill form
                onSubmit={handleEditSubmit}
              />
            </div>
          </div>
        )}
      </RightArea>
    </CustomSection>
  );
};

export default Ourvalues;
