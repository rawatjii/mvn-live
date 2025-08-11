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
  const [isLoading, setIsLoading] = useState(true);
  const [formSections, setFormSections] = useState([]);

  const editSectionApi = generateApi(`distnict-page-section-list/${pageName}`, 0);
  const singlePageApi = generateApi(`page-section/${pageName}`);
  const getEditDataApi = generateApi("page-section-list", 0);

  const { data } = useCrud(singlePageApi); 
  const { data: editSectionData, getMultiEditdata } = useCrud(editSectionApi); 
  const { editItem: updateFormData, createItem } = useCrud(getEditDataApi); 

  // Fetch edit data
  const fetchEditData = async () => {
    try {
      setIsLoading(true);
      const response = await getMultiEditdata();
      setEditData(response.data || []);
    } catch (error) {
      console.error("Error fetching edit data:", error);
      setEditData([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle create form submission
  const handleCreate = async (formData, name) => {
    try {
      formData.append("page_section", name);
      formData.append("page", pageName);
      await createItem(formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  // Handle edit form submission
  const handleEdit = async (name, formData) => {
    try {
      await updateFormData(name, formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };

  // Fetch edit data when pageName changes
  useEffect(() => {
    fetchEditData();
  }, [pageName, data]);

  // Process form sections when data and editData are available
  useEffect(() => {
    if (!data || !editData) return;

    console.log('test data',data);
    

    const processedSections = data.map((section, index) => {
      const sectionFields = JSON.parse(section.fields_name || "{}");
      const sectionPermissions = JSON.parse(section.section_permissions || "{}");

      
      const enabledPermissions = Object.entries(sectionFields)
        .filter(([key]) => {
          return sectionPermissions[key] === undefined || sectionPermissions[key] === "true";
        })
        .map(([key, value]) => ({
          name: key,
          label: value,
          type: key.includes("image") ? "file" : "text",
          col: 4,
          isRequired: true,
        }));

      const matchedEditSection = editData.find(
        (editSection) => editSection?.page_section === section.name
      );

      console.log('enabledPermissions',enabledPermissions);

      if(section.name == 'disclaimer-details' || section.name == 'privacy-policy-details'){
        enabledPermissions.map((field, index)=>{
          if(field.name == 'heading' || field.name == 'alt'){
            field.hidden=true,
            field.label=''
          }
          if(field.name == 'description'){
            field.type = 'editor',
            field.col = 12
          }
        })
      }
      

      return {
        name: section.name,
        data: enabledPermissions,
        type: section.name === "home-banner" ? "select" : undefined,
        defaultValues: matchedEditSection || null, 
      };
    });

    setFormSections(processedSections);
  }, [data, editData]);

  // Render loading state
  if (isLoading || !data || !editData) {
    return <div>Loading...</div>;
  }

  return (
    <CustomSection customClass="d-block">
      {formSections?.map((section, index) => (
        <MicroBox key={`section-${index}`}>
          <CustomTitle title={section.name} />
          <CustomForm
            defaultData={section.defaultValues}
            dynamicFields={section.data}
            type={section.type}
            onSubmit={
              section.defaultValues
                ? (formData) => handleEdit(section.name, formData)
                : (formData) => handleCreate(formData, section.name)
            }
            editVia={true}
          />
        </MicroBox>
      ))}
    </CustomSection>
  );
};

export default SinglePage;