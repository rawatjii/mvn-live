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
  { name: "name", label: "Name", type: "text", col: 12, isLeft: true },
  { name: "designation", label: "Designation", type: "text", col: 12, isLeft: true },
  { name: "description", label: "Description", type: "text", col: 12, isLeft: true },
  { name: "image", label: "Image", type: "file", col: 6, isLeft: true },
  { name: "alt", label: "Alt Tag", type: "text", col: 12, isLeft: true },
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
  { key: "name", label: "Name" },
  { key: "designation", label: "Designation" },
  { key: "description", label: "description" },
  { key: "image", label: "Image", type: "file" },
];


const PeopleBehind = () => {
    const [editModalData, setEditModalData] = useState(null);

    const aboutsApi = generateApi("team");
    const { data, loading, error, createItem, editItem, updateItem, deleteItem } = useCrud(aboutsApi);
  
    const handleCreate = (formData) => createItem(formData);
    // const handleEdit = (row) => updateItem(row.id, row);
    const handleDelete = (row) => deleteItem(row.id);
  
    const handleEditSubmit = (formData) => {
      editItem(editModalData.id, formData);
    };

    const handleEdit = (row) => {
      setEditModalData(row); // open modal
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
          <CustomTitle title="Our People From" />
          <CustomForm
            isBanner={false}
            dynamicFields={metaFields}
            onSubmit={handleCreate}
            onUpdate={handleEditSubmit}
            data={editModalData}
          />
        </MicroBox>
      </LeftArea>
      {/* right box for table */}
      <RightArea>
        <MicroBox>
          <CustomTitle title="Our People Table" />
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

      </RightArea>
    </CustomSection>
  )
}

export default PeopleBehind