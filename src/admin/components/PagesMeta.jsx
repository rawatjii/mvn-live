import React, { useEffect, useState } from "react";
import {
  CustomSection,
  LeftArea,
  MicroBox,
  RightArea,
} from "./dashboard/utilities/CutomTags";
import CustomTitle from "./dashboard/utilities/CustomTitle";
import CustomForm from "./dashboard/utilities/CustomForm";
import CustomTable from "./dashboard/utilities/custom-table/CustomTable";
import CustomPagination from "./dashboard/utilities/pagination/CustomPagination";
import generateApi from "../api/generateApi";
import useCrud from "../hooks/useCrud";
import CustomModal from "./dashboard/utilities/custom-modal/CustomModal";

// Simulated backend response


const columns = [
  { key: "id", label: "S.No." },
  { key: "page_type", label: "Page" },
];

const PagesMeta = () => {
  const [editModalData, setEditModalData] = useState(null);
  const [pagesList, setPagesList] = useState([])

  const aboutsApi = generateApi("page-meta");
  const allPagesApi = generateApi("distinct-all-pages");
  const { data, loading, error, createItem, editItem, updateItem, deleteItem } = useCrud(aboutsApi);

  const { data:getAllPages } = useCrud(allPagesApi);

  const handleCreate = (formData) => createItem(formData);
  // const handleEdit = (row) => updateItem(row.id, row);
  const handleDelete = (row) => deleteItem(row.id);

  const handleEdit = (row) => {
    setEditModalData(row); // open modal
  };

  const handleEditSubmit = (formData) => {
    editItem(editModalData.id, formData);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(()=>{
    setPagesList(getAllPages?.map(page=>({label:page.name, value:page.slug})))
  }, [getAllPages])

  const metaFields = [
    { name: "page_type", label: "Select Page", type: "select", col: 12, isLeft: true, options:pagesList},
    { name: "meta_title", label: "Meta Title", type: "text", col: 12, isLeft: true },
    { name: "meta_keyword", label: "Meta Keyword", type: "text", col: 6, isLeft: true },
    { name: "meta_description", label: "Meta Description", type: "textarea", col: 12, isLeft: true, row:10 },
    { name: "head_data", label: "Head Scripts", type: "textarea", col: 12, isLeft: true, row:10 },
    { name: "footer_data", label: "Body Scripts", type: "textarea", col: 12, isLeft: true, row:10 },
  ];


  return (
    <CustomSection customClass="">
      {/* left box for form */}
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Page Meta Form" />
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
          <CustomTitle title="Page Meta Table" />
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
  );
};

export default PagesMeta;
