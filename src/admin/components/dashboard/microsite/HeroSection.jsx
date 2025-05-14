import React, { useState, useEffect } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";

const HeroSection = () => {
  const bannerApi = generateApi("project-banner");
  const { data, createItem, editItem, deleteItem } = useCrud(bannerApi);
  
  const [formType, setFormType] = useState("image");
  const [editModalData, setEditModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeInputs, setTypeInputs] = useState([]);
  
  const itemsPerPage = 5;
  
  // Update form inputs when type changes
  useEffect(() => {
    const getTypeInputs = () => {
      switch (formType) {
        case "image":
          return [
            { 
              name: "image",
              label: "Image",
              type: "file",
              col: 12,
              isLeft: true,
            },   
            { 
              name: "alternative_image",
              label: "Alternative Image",
              type: "file",
              col: 12,
              isLeft: true,
            },
            { 
              name: "alt",
              label: "Alt text",
              type: "text",
              col: 12,
              isLeft: true,
              isRequired: true
            }
          ];
        case "iframe":
          return [
            {
              name: "iframe",
              label: "Iframe Link",
              type: "text",
              placeholder: "Enter Iframe Link",
              col: 12,
              isLeft: true,
              isRequired: true
            }
          ];
        case "json":
          return [
            {
              name: "json",
              label: "Upload JSON",
              type: "file",
              col: 12,
              isLeft: true
            }
          ];
        case "video":
          return [
            {
              name: "video",
              label: "Upload Video",
              type: "file",
              col: 12,
              isLeft: true
            }
          ];
        default:
          return [];
      }
    };
    
    setTypeInputs(getTypeInputs());
  }, [formType]);
  
  // Table configuration
  const columns = [
    { key: "", label: "S.No." },
    { key: "is_type", label: "Type", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "input" }
  ];
  
  // Form configuration
  const formFields = [
    {
      sectionName: "Upload Banner",
      visible: true,
      fields: [
        {
          label: "File type",
          type: "select",
          col: 12,
          selectedVal: formType,
          name: "is_type",
          isLeft: true,
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Iframe link', value: 'iframe' },
            { label: 'Video', value: 'video' },
            { label: 'JSON', value: 'json' }
          ]
        },
        ...typeInputs
      ]
    }
  ];
  
  // Handler functions
  const handleCreate = (formData) => {
    createItem(formData);
  };
  
  const handleEdit = (row) => {
    scrollTo(0,0)
    setEditModalData(row);
    setFormType(row.is_type || 'image');
  };
  
  const handleDelete = (row) => {
    deleteItem(row.id);
  };
  
  // Pagination data
  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <CustomSection customClass="d-block">
      {formFields
        .filter(section => section.visible)
        .map(section => (
          <MicroBox key={section.sectionName}>
            <CustomTitle title={section.sectionName} />
            <CustomForm
              dynamicFields={section.fields}
              defaultData={editModalData}
              isBanner={false}
              setValueVia={setFormType}
              onSubmit={editModalData ? 
                (formData) => {
                  editItem(editModalData.id, formData);
                  setEditModalData(null);
                } : 
                handleCreate
              }
            />
          </MicroBox>
        ))}
      
      {/* Table Section */}
      <MicroBox>
        <CustomTitle title="Banner Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={handleEdit}
          onDelete={handleDelete}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        
        {/* Pagination */}
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((data?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default HeroSection;