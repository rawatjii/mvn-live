import React, { useEffect, useState } from "react";
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
import CustomModal from "./components/dashboard/utilities/custom-modal/CustomModal";
import { setDeleteId, toggleModal } from "../redux/commonSlice";
import { useDispatch, useSelector } from "react-redux";

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
  { name: "links", label: "Url", type: "text", col: 6, isLeft: true },
];

const columns = [
  { key: "", label: "S.No." },
  { key: "heading", label: "Title" },
  { key: "image", label: "Image", type: "file" },
];

const Verticals = () => {
  const [editModalData, setEditModalData] = useState(null);
  const dispatch = useDispatch();
  const verticalApi = generateApi("verticals");
  const { data, loading, error, createItem, editItem, deleteItem } =
    useCrud(verticalApi);
  const { isDeleteConfirm, deleteId } = useSelector(
    (state) => state.commonState
  );

  useEffect(() => {
    if (isDeleteConfirm) {
      deleteItem(deleteId);
      dispatch(toggleModal(false));
    }
  }, [isDeleteConfirm]);

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
          <CustomTitle title="Our Values Form" />
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
          <CustomTitle title="Our Values Table" />
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

export default Verticals;
