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
  { name: "title", label: "Title", type: "text", col: 12, isLeft: true },
  { name: "description", label: "Description", type: "textarea", col: 12, isLeft: true },
  { name: "name", label: "Name", type: "text", col: 12, isLeft: true },
  { name: "image", label: "Image", type: "file", col: 12, isLeft: true },
  {name: "alternative_image", label: "Alternative Image", type: "file", col: 12, isLeft: true,},
  { name: "alt", label: "Alt Tag", type: "text", col: 12, isLeft: true },
];

const columns = [
  { key: "sno", label: "S.No." },
  { key: "name", label: "Name" },
  { key: "image", label: "Image", type: "file" },
  { key: "description", label: "Review" },
];

export default function Testimonials(){
  const [editModalData, setEditModalData] = useState(null);

  const aboutsApi = generateApi("testimonials");
  const { data, loading, error, createItem, editItem, deleteItem } =useCrud(aboutsApi);

  const handleCreate = (formData) => createItem(formData);
  const handleDelete = (row) => deleteItem(row.id);
  const handleEditSubmit = (formData) => {
    editItem(editModalData.id, formData);
  };
  const handleEdit = (row) => {
    setEditModalData(row); // open modal
  };


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data.map(item=>({
    ...item,
    is_type:'image'
  }));

  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <CustomSection customClass="">
      {/* left box for form */}
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Testimonials Form" />
          <CustomForm
            isBanner={false}
            dynamicFields={metaFields}
            defaultData={editModalData}
            onSubmit={handleCreate}
            onUpdate={handleEditSubmit}
            data={editModalData}
          />
        </MicroBox>
      </LeftArea>
      {/* right box for table */}
      <RightArea>
        <MicroBox>
          <CustomTitle title="Testimonials Table" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={handleEdit} 
            onDelete={handleDelete}
            textLength="6"
            // startIndex={(currentPage - 1) * itemsPerPage}
          />
        </MicroBox>
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(data?.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />

      </RightArea>
    </CustomSection>
  );
};

