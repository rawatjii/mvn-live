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
import CustomModal from "../dashboard/utilities/custom-modal/CustomModal";
import { setDeleteId, toggleModal } from "../../../redux/commonSlice";
import { useDispatch, useSelector } from "react-redux";

// Simulated backend response
const metaFields = [
  { name: "name", label: "Name", type: "text", col: 12, isLeft: true },
  // {
  //   name: "alternative_image",
  //   label: "Alternative Image",
  //   type: "file",
  //   col: 6,
  //   isLeft: true,
  // },
];

const columns = [
  { key: "", label: "S.No." },
  { key: "name", label: "Name" },
];

const Platter = () => {
  const [editModalData, setEditModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const aboutsApi = generateApi("platter");
  const { data, loading, error, createItem, editItem, deleteItem } =useCrud(aboutsApi);
  const {isDeleteConfirm, deleteId} = useSelector(state=>state.commonState)
  const dispatch = useDispatch();

  const handleCreate = (formData) => createItem(formData);
  const handleDelete = (row) => {
    dispatch(setDeleteId(row.id));
    dispatch(toggleModal(true));
    // deleteItem(row.id)
  };
  const handleEditSubmit = (formData) => {
    editItem(editModalData.id, formData);
  };
  const handleEdit = (row) => {
    setEditModalData(row); // open modal
  };

  useEffect(()=>{
    if(isDeleteConfirm){
      deleteItem(deleteId);
      dispatch(toggleModal(false));
    }
  }, [isDeleteConfirm])

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <CustomSection customClass="">
      {/* left box for form */}
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Platter Form" />
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
          <CustomTitle title="Platter Table" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={handleEdit} 
            onDelete={handleDelete}
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

export default Platter;
