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
import CustomModal from "../dashboard/utilities/custom-modal/CustomModal";

// Simulated backend response
const metaFields = [
  { name: "name", label: "Title", type: "text", col: 12, isLeft: true },
  { name: "year", label: "Year", type: "text", col: 12, isLeft: true },
  { name: "address", label: "Address", type: "text", col: 12, isLeft: true },
  { name: "alt", label: "Alt Tag", type: "text", col: 12, isLeft: true },
  { name: "image", label: "Image", type: "file", col: 6, isLeft: true },
  // {
  //   name: "alternative_image",
  //   label: "Alternative Image",
  //   type: "file",
  //   col: 6,
  //   isLeft: true,
  // },
];

const columns = [
  { key: "id", label: "S.No." },
  { key: "name", label: "Title" },
  { key: "year", label: "Year" },
  { key: "address", label: "Address" },
  { key: "image", label: "Image", type: "file" },
];

const Timeline = () => {
  const [editModalData, setEditModalData] = useState(null);

  const aboutsApi = generateApi("timeline");
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

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <CustomSection customClass="">
      {/* left box for form */}
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Qur Timeline From" />
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
          <CustomTitle title="Qur Timeline Table" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={handleEdit} // ✅
            onDelete={handleDelete}
          />
        </MicroBox>
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(data?.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />

        {/* Edit Modal */}
        {editModalData && (
          <CustomModal
            isOpen={!!editModalData}
            onClose={() => setEditModalData(null)}
            title="Edit Timeline"
          >
            <CustomForm
              isBanner={false}
              dynamicFields={metaFields}
              defaultData={editModalData}
              onSubmit={handleEditSubmit}
            />
          </CustomModal>
        )}
         {/* Edit Modal */}
        {editModalData && (
          <CustomModal
            isOpen={!!editModalData}
            onClose={() => setEditModalData(null)}
            title="Edit Timeline"
          >
            <CustomForm
              isBanner={false}
              dynamicFields={metaFields}
              defaultData={editModalData}
              onSubmit={handleEditSubmit}
            />
          </CustomModal>
        )}
      </RightArea>
    </CustomSection>
  );
};

export default Timeline;
