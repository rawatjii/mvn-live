import React, { useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation } from "react-router-dom";

const Elevation = () => {
  // States
  const [editData, setEditData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Location and API setup
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  const elevationApi = generateApi("project-elevate-galleries/elevation", 0);
  const galleryListApi = generateApi("project-elevate-galleries");
  const projectSectionsApi = generateApi("projec-sections");
  
  // CRUD operations
  const { createItem: createElevationItem } = useCrud(elevationApi);
  const { 
    data: galleryData = [], 
    deleteItem,
    editItem, 
    loading: galleryLoading 
  } = useCrud(galleryListApi);
  
  // Pagination
  const paginatedData = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Field configurations
  const metaFields = [
    { 
      name: "heading", 
      label: "Heading", 
      type: "text", 
      col: 12, 
      isRequired: true 
    },
  ];

  const mainFields = [
    { name: "image", label: "Banner", type: "file", col: 6 },
    { name: "alternative_image", label: "Banner Alternate Image", type: "file", col: 6 },
    { name: "sm_image", label: "Image", type: "file", col: 6 },
    { name: "sm_alternative_image", label: "Alternate Image", type: "file", col: 6 },
    { name: "alt", label: "Alt", placeholder: "Enter Alt", type: "text", col: 6 }
  ];

  const columns = [
    { key: "page", label: "S. NO." },
    { key: "image", label: "Banner Image", type: "file" },
    { key: "alternative_image", label: "Banner Alternate Image", type: "file" },
    { key: "sm_image", label: "Small Image", type: "file" },
    { key: "sm_alternative_image", label: "Small Alternate Image", type: "file" },
    { key: "alt", label: "Alt" }
  ];
  
  // Handler functions
  const handleCreateMeta = async (formData) => {
    try {
      formData.append("is_type", "image");
      await projectSectionsApi.create(formData);
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleFormSubmit = async (formData) => {
        formData.append("is_type", locationType);

    try {
      if (editData?.id) {
        // Edit mode: Update existing item
        await editItem(editData.id, formData);
        setEditData(null); // Clear edit mode after successful update
      } else {
        // Create mode: Create new item
        formData.append("is_type", locationType);
        await createElevationItem(formData);
      }
    } catch (error) {
      console.error("Error processing form:", error);
    }
  };

  const handleDelete = async (row) => {
    try {
      await deleteItem(row.id);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (row) => {
    setEditData(row); // Set the selected row data for editing
  };

  const handleCancelEdit = () => {
    setEditData(null); // Clear edit mode
  };

  return (
    <CustomSection>
      {/* Overview Section */}
      <MicroBox>
        <CustomTitle title="Overview" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={metaFields}
          onSubmit={handleCreateMeta}
        />
      </MicroBox>

      {/* Main Detail Section */}
      <MicroBox>
        <CustomTitle title={editData ? "Edit Elevation Item" : "Main Detail"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={mainFields}
          defaultData={editData}
          onSubmit={handleFormSubmit}
          submitButtonText={editData ? "Update" : "Create"}
          cancelButton={editData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>

      {/* Table Section */}
      <MicroBox>
        <CustomTitle title="Elevation Gallery" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={handleEdit}
          onDelete={handleDelete}
          loading={galleryLoading}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        
        {/* Pagination */}
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((galleryData?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};  

export default Elevation; 