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
  { name: "type", value:"gallery", label: "Type", type: "hidden", col: 12, isLeft: true},
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
  { key: "alt", label: "ALT Tag" },
  { key: "image", label: "Image", type: "file" },
];

const OfflineMedia = () => {
  const [editModalData, setEditModalData] = useState(null);

  const offlineApi = generateApi("media-items");
  const { data, loading, error, createItem, editItem, deleteItem } =
    useCrud(offlineApi);

  const handleCreate = (formData) =>{
    formData.append("type","gallery")
    createItem(formData)};
  // const handleEdit = (row) => updateItem(row.id, row);
  const handleDelete = (row) => deleteItem(row.id);

  const handleEdit = (row) => {
    setEditModalData(row); // open modal
  };

  const handleEditSubmit = (formData) => {
    editItem(editModalData.id, formData); // update data
    // setEditModalData(null); // close modal
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data.filter((item)=>item.type == 'gallery').map(item=>({
    ...item,
    is_type:'image'
  }));

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <CustomSection customClass="">
      {/* left box for form */}
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Gallery Form" />
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
          <CustomTitle title="Offline Media Data" />
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
        
      </RightArea>
    </CustomSection>
  )
}

export default OfflineMedia