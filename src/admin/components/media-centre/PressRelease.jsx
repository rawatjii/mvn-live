import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setDeleteId, toggleModal } from "../../../redux/commonSlice";

// Simulated backend response
const metaFields = [
    { name: "type", value:'press', label: "Type", type:'hidden', col: 12, isLeft: true },
    { name: "heading", label: "Heading", type: "text", col: 12, isLeft: true },
    { name: "date_at", label: "Date", type: "date", col: 12, isLeft: true },
    { name: "links", label: "Url", type: "text", col: 12, isLeft: true },
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
  { key: "heading", label: "Heading" },
  { key: "alt", label: "Alt Tag" },
  { key: "image", label: "Image", type: "file" },
];
const PressRelease = () => {
    const [editModalData, setEditModalData] = useState(null);
    const dispatch = useDispatch();
    const {isDeleteConfirm, deleteId} = useSelector(state=>state.commonState)
    const aboutsApi = generateApi("media-center?is_type=press");
    const { data, loading, error, createItem, editItem, updateItem, deleteItem } =
      useCrud(aboutsApi);

    useEffect(()=>{
      if(isDeleteConfirm){
        deleteItem(deleteId);
        dispatch(toggleModal(false));
      }
    }, [isDeleteConfirm])
  
    const handleCreate = (formData) => {
      formData.append("type","press")
      createItem(formData)
    };
    // const handleEdit = (row) => updateItem(row.id, row);
    const handleDelete = (row) => {
      dispatch(setDeleteId(row.id));
    dispatch(toggleModal(true));
    };
  
    const handleEdit = (row) => {
      setEditModalData(row); // open modal
    };
  
    const handleEditSubmit = (formData) => {
      editItem(editModalData.id, formData);
    };
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredData = data.filter((item)=>item.type == 'press').map(item=>({
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
        <CustomTitle title="Press Release Form" />
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
        <CustomTitle title="Press Release Table" />
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

    </RightArea>
  </CustomSection>
  )
}

export default PressRelease