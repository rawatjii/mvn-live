import React, { useState, useEffect } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import generateApi from "../../../api/generateApi";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import StatusOrder from "../utilities/Status-order";

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
    sectionName: "Overview Details",
    visible: true,
    fields: [
      { name: "heading", label: "Heading", type: "text", placeholder: "Enter Heading", col: 6, isRequired: true },
      { name: "sub_heading", label: "Sub Heading", type: "text", placeholder: "Enter Sub Heading", col: 6 },
      { name: "short_description", label: "Additional Heading", type: "text", placeholder: "Enter Additional Heading", col: 4 },
      { name: "alt", label: "Sizes Heading", type: "text", col: 4, placeholder: "Enter Sizes Heading",},
      { name: "iframe", label: "Sizes", type: "text", placeholder: "Enter Description", col: 4 },
      { name: "yt_url", label: "Youtube Url", type: "text", placeholder: "Enter Youtube Url", col: 4 },
      { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 8 },
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
        <StatusOrder sectionId={editData?.id} editData={editData} fetchEditData={fetchEditData}/>
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