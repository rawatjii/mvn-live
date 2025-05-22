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
  const sectionApi = generateApi(`page-section-list`);
  const singlePageApi = generateApi(`page-section/${pageName}`);
  const editData = generateApi(`page-section-list/contact-banner`);

  const {  data, loading, error, createItem, updateItem, editItem, deleteItem } = useCrud(singlePageApi);
  const [formSections, setFormSections] = useState([]);
  const {  data: sectionData, loading: sectionLoading, error: sectionError, createItem: sectionCreateItem, updateItem: sectionUpdateItem, editItem: sectionEditItem, deleteItem: sectionDeleteItem } = useCrud(sectionApi);
  const {  data: editSectionData} = useCrud(editData);
  
  const handleSectionSubmit = (formData, name) => {
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value instanceof File ? value.name : value);
    // }
    // console.log("✅ Form data processed successfully");
    formData.append("page", pageName);
    formData.append("page_section", name);
    return sectionCreateItem(formData);
  };

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
      };
    });

    setFormSections(processedSections);
  }, [data]);

  console.log('formSections',formSections);

  return (
    <CustomSection customClass="d-block">
      {formSections.map((section, index) => (
        <MicroBox key={`section-${index}`}>
          <CustomTitle title={section.name} />
          <CustomForm
            defaultData={editSectionData}
            dynamicFields={section.data}
            onSubmit={(formData) => handleSectionSubmit(formData, section.name)}
          />
        </MicroBox>
      ))}
    </CustomSection>
  );
};

export default SinglePage;
