import React, { useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import generateApi from "../../../api/generateApi";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import CustomTable from "../utilities/custom-table/CustomTable";
import useCrud from "../../../hooks/useCrud";
import CustomPagination from "../utilities/pagination/CustomPagination";

const OverviewMicroSite = () => {
  const projectSectionApi = generateApi("projec-sections");
  const { data, createItem, deleteItem, editItem } = useCrud(projectSectionApi);
  
  const [editModalData, setEditModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 5;
  
  // Form configuration
  const formFields = [
    {
      sectionName: "Info Details",
      visible: true,
      fields: [
        { 
          name: "image",
          label: "Image",
          type: "file",
          col: 4
        },   
        { 
          name: "alternative_image",
          label: "Alternative Image",
          type: "file",
          col: 4
        },
        { 
          name: "alt",
          label: "Alt text",
          type: "text",
          col: 4,
          isRequired: true
        },  
        {
          name: "heading",
          label: "Heading",
          type: "text",
          placeholder: "Enter Heading",
          col: 6,
          isRequired: true
        },
        {
          name: "sub_heading",
          label: "Sub Heading",
          type: "text",
          placeholder: "Enter Sub Heading",
          col: 6
        },
        {
          name: "additional_heading",
          label: "Additional Heading",
          type: "text",
          placeholder: "Enter Additional Heading",
          col: 6
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          placeholder: "Enter Description",
          col: 6
        }
      ]
    }
  ];
  
  // Table configuration
  const columns = [
    { key: "", label: "S.No", type: "" },
    { key: "heading", label: "Heading", type: "input" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternate Image", type: "file" }
  ];
  
  // Handler functions
  const handleCreate = (formData) => {
    formData.append("is_type", "image");
    createItem(formData);
  };
  
  const handleEdit = (row) => {
    scrollTo(0,0)
    setEditModalData(row);
  };
  
  const handleDelete = (row) => {
    deleteItem(row.id);
  };
  
  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <CustomSection customClass="d-block">
      <div className="row">
        {/* Form Section */}
        {formFields
          .filter(section => section.visible)
          .map(section => (
            <div className="col col-12" key={section.sectionName}>
              <MicroBox>
                <CustomTitle title={section.sectionName} />
                <CustomFormMicrosite
                  dynamicFields={section.fields}
                  defaultData={editModalData}
                  isBanner={false}
                  onSubmit={editModalData ? 
                    (formData) => {
                      editItem(editModalData.id, formData);
                      setEditModalData(null);
                    } : 
                    handleCreate
                  }
                />
              </MicroBox>
            </div>
          ))}
        
        {/* Table Section */}
        <div className="col col-12">
          <MicroBox>
            <CustomTitle title="Overview Items" />
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
        </div>
      </div>
    </CustomSection>
  );
};

export default OverviewMicroSite;