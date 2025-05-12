import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import generateApi from "../../../api/generateApi";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import useCrud from "../../../hooks/useCrud";
import { useState } from "react";


const OverviewMicroSite = () => {
    const projectSectionApi = generateApi("projec-sections");
  const { data, loading, error, createItem, updateItem, deleteItem } =
    useCrud(projectSectionApi);
    const [addFormType, setAddFormType] = useState('image'); 


        const formFields = [
        {
        sectionName: "Info Details",
        sectionApi: "info_details",
        visible: true,
        fields: [
        { 
        name: "image",
        label: "Image",
        type: "file",
        col: 4,
        },   
        { 
        name: "alternative_image",
        label: "Alternative Image",
        type: "file",
        col: 4,
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
        Placeholder:"Enter Heading",
        col: 6,
        isRequired:true
        },
        {
        name: "sub_heading",
        label: "Sub Heading",
        type: "text",
        Placeholder:"Enter Sub Heading",
        col: 6,

        },

        {
        name: "Additional Heading",
        label: "Additional Heading",
        type: "text",
        Placeholder:"Enter Additional Heading",
        col: 6,

        },
        {
        name: "description",
        label: "Description",
        type: "textarea",
        Placeholder:"Enter Description",
        col: 6,
        },
        ],
        },

];
      
 const handleCreate = (formData) => {
      createItem(formData);
    };
    
    const handleDelete = (row) => deleteItem(row.id);
    
    const handleEditSubmit = (formData) => {
      editItem(editModalData.id, formData); 
      setEditModalData(null); 
    };
    
    const handleEdit = (row) => {
      setEditModalData(row); 
      setEditFormType(row.is_type || 'image'); 
    };

return (
  <CustomSection customClass="d-block">
    <div className="row">
      {formFields
      .filter((section) => section.visible)
      .map((section) => (
        <div className="col col-12">
          <MicroBox key={section.sectionName}>
          <CustomTitle title={section.sectionName} />
          <CustomFormMicrosite
                dynamicFields={section.fields}
                isBanner={false}
                setValueVia={setAddFormType}
                onSubmit={handleCreate}
          />
          </MicroBox>
        </div>
      ))}
    </div>
  </CustomSection>
  );
};

export default OverviewMicroSite;
