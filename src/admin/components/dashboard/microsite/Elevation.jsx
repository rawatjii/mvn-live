import React, { useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import CustomModal from "../utilities/custom-modal/CustomModal";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation } from "react-router-dom";

const metaFields = [
  { name: "heading", label: "Heading", type: "text", col: 12, isRequired: true },
];

const mainFields = [
  { name: "image", label: "Banner", type: "file", col: 6, },
  { name: "alternative_image", label: "Banner Alternate Image", type: "file", col: 6, },
  { name: "sm_image", label: "Image", type: "file", col: 6, },
  { name: "sm_alternative_image", label: "Alternate Image", type: "file", col: 6},
  { name: "alt", label: "Alt", placeholder: "Enter Alt", type: "text", col: 6 },
];

const columns = [
      { key: "page", label: "S. NO." },
  { key: "image", label: "Banner Image", type: "file" },
  { key: "alternative_image", label: "Banner Alternate Image", type: "file" },
  { key: "sm_image", label: "Small Image", type: "file" },
  { key: "sm_alternative_image", label: "Small Alternate Image", type: "file" },
    { key: "alt", label: "Alt" },

];

const Elevation = () => {
  const [editModalData, setEditModalData] = useState(null);
  const elevationApi = generateApi("project-elevate-galleries/elevation", 0);
  const gelistApi = generateApi("project-elevate-galleries");
  const projectSectionsApi = generateApi("projec-sections");
  const locationNav=useLocation();
  const locationPathname=locationNav.pathname.split("/").pop();

  const {createItem: createElevationItem,} = useCrud(elevationApi);
  const { data: galleryData = [],deleteItem,editItem, loading: galleryLoading,} = useCrud(gelistApi);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(galleryData.length / itemsPerPage); 
  const paginatedData = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCreateMeta = async (formData) => {
    try {
      formData.append("is_type","image")
      await projectSectionsApi.create(formData);
      console.log("Project section created successfully");
    } catch (err) {
      console.error("Error creating project section:", err);
    }
  };

  const handleCreateMain = async (formData) => {
    try {
      formData.append("is_type",locationPathname)

      await createElevationItem(formData);
      console.log("Elevation item created successfully");
    } catch (err) {
      console.error("Error creating elevation item:", err);
    }
  };

  const handleEditSubmit = async (formData) => {
    try {
      if (!editItem) {
        console.error("updateItem function is not defined");
        return;
      }
      
      await editItem(editModalData.id, formData);
      setEditModalData(null);
      console.log("Item updated successfully");
    } catch (err) {
      console.error("Error updating item:", err);
    }
  };

  const handleDelete = async (row) => {
    try {
      await deleteItem(row.id);
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <CustomSection>
      <MicroBox>
        <CustomTitle title="Overview" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={metaFields}
          onSubmit={handleCreateMeta}
        />
      </MicroBox>

      <MicroBox>
        <CustomTitle title="Main Detail" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={mainFields}
          onSubmit={handleCreateMain}
        />
      </MicroBox>

      <MicroBox>
        <CustomTitle title="Edit/Delete Price List" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => setEditModalData(row)}
          onDelete={handleDelete}
          loading={galleryLoading} // Fixed: Using galleryLoading instead of loading
        />
      </MicroBox>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {editModalData && (
        <CustomModal
          isOpen={!!editModalData}
          onClose={() => setEditModalData(null)}
          title="Edit Elevation"
        >
          <CustomFormMicrosite
            isBanner={false}
            dynamicFields={mainFields}
            defaultData={editModalData}
            onSubmit={handleEditSubmit}
          />
        </CustomModal>
      )}
    </CustomSection>
  );
};

export default Elevation;