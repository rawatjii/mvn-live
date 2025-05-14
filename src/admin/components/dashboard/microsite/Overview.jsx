import React, { useState, useEffect } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import generateApi from "../../../api/generateApi";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";

const OverviewMicroSite = () => {
  const [editData, setEditData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  const projectSectionApi = generateApi("projec-sections");
  const getEditDataApi= generateApi("show-by-project-with-sectionType",0);
  const {getEditData} = useCrud(getEditDataApi);
  const { createItem, editItem } = useCrud(projectSectionApi);




  const formFields = [{
    sectionName: "Info Details",
    visible: true,
    fields: [
      { name: "image", label: "Image", type: "file", col: 4 },
      { name: "alternative_image", label: "Alternative Image", type: "file", col: 4 },
      { name: "alt", label: "Alt text", type: "text", col: 4, isRequired: true },
      { name: "heading", label: "Heading", type: "text", placeholder: "Enter Heading", col: 6, isRequired: true },
      { name: "sub_heading", label: "Sub Heading", type: "text", placeholder: "Enter Sub Heading", col: 6 },
      { name: "additional_heading", label: "Additional Heading", type: "text", placeholder: "Enter Additional Heading", col: 6 },
      { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 6 }
    ]
  }];

  const fetchEditData = async () => {
    const formData = new FormData();
    formData.append("section_type", locationType);
    formData.append("project_id", project_id);
    try {
      const data = await getEditData(formData);
      setEditData(data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

  const handleCreate = async (formData) => {
    try {
      formData.append("is_type", "json");
      await createItem(formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEdit = async (formData) => {
    try {
      await editItem(editData.id, formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };
  useEffect(()=>{
    fetchEditData()
  },[]) 

  return (
    <CustomSection customClass="d-block">
      <div className="row">
        {formFields.filter(section => section.visible).map(section => (
          <div className="col col-12" key={section.sectionName}>
            <MicroBox>
              <CustomTitle title={section.sectionName} />
              <CustomFormMicrosite
                dynamicFields={section.fields}
                defaultData={editData}
                isBanner={false}
                  onSubmit={editData ? handleEdit : handleCreate}
              />
            </MicroBox>
          </div>
        ))}
      </div>
    </CustomSection>
  );
};

export default OverviewMicroSite;