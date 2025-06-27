import React, { useEffect, useState } from "react";
import {
  CustomSection,
  MicroBox,
} from "../components/dashboard/utilities/CutomTags";
import CustomTitle from "../components/dashboard/utilities/CustomTitle";
import CustomForm from "../components/dashboard/utilities/CustomForm";
import { useParams } from "react-router-dom";
import generateApi from "../api/generateApi";
import useCrud from "../hooks/useCrud";

const SinglePage = () => {
  const { pageName } = useParams();
  const [editData, setEditData] = useState(null);

  const editSectionApi = generateApi(`distnict-page-section-list/${pageName}`,0);
  const singlePageApi = generateApi(`page-section/${pageName}`);

  const getEditDataApi = generateApi("page-section-list", 0);
  const {data} = useCrud(singlePageApi); //form
  const {data: editSectionData,getMultiEditdata} = useCrud(editSectionApi); //preflldata
  const { editItem:updateFormData,createItem } = useCrud(getEditDataApi); //update
  const [formSections, setFormSections] = useState([]);


  const fetchEditData = async () => {
    // alert("im")
    try {
      const data = await getMultiEditdata();
        setEditData(data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

  const handleCreate = async (formData,name) => {
    try {
      formData.append("page_section",name);
      formData.append("page",pageName)

      await createItem(formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEdit = async (name,formData) => {
    try {
      await updateFormData(name, formData);

      await fetchEditData();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };
  useEffect(()=>{
    fetchEditData()

  },[]) 
  useEffect(() => {
    if (!data) return;

    const processedSections = data.map((section, index) => {
      const sectionFields = JSON.parse(section.fields_name);
      const sectionPermissions = JSON.parse(section.section_permissions);
      const enabledPermissions = Object.entries(sectionFields).filter(
        ([key, value]) => {
          return sectionPermissions[key] == undefined || sectionPermissions[key] == "true";
        }
      ).map(([key, value]) => {
         return {
              name: key,
              label: value,
              type: key.includes("image") ? "file" : "text",
              col: 4,
              isRequired: true,
            };
      })

      return {
        name: section.name,
        data: enabledPermissions,
        type:section.name == "home-banner" && 'select'
      };
    });

    setFormSections(processedSections);
  }, [data]);

 
  return (
    <CustomSection customClass="d-block">
      {formSections.map((section, index) => 
      {
        const matchedEditSection = editData?.find((editSection)=>{
          return editSection.page_section == section.name;
        })

        const defaultValues = matchedEditSection;
        return <MicroBox key={`section-${index}`}>
          <CustomTitle title={section.name} />
            <CustomForm
              defaultData={defaultValues}
              dynamicFields={section.data}
              type={section.type}
              onSubmit={defaultValues ? (formData) => handleEdit(section.name,formData) : (formData) => handleCreate(formData,section.name)}
              editVia={true}
            />
          </MicroBox>
        
      })}
    </CustomSection>
  );
};

export default SinglePage;
