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
  const singlePageApi = generateApi(`page-section/${pageName}`);
  const {  data, loading, error, createItem, updateItem, editItem, deleteItem } = useCrud(singlePageApi);
  const [formSections, setFormSections] = useState([]);

  const handleSectionSubmit = (formData, name) => {
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value instanceof File ? value.name : value);
    // }
    // console.log("✅ Form data processed successfully");
    formData.append("page", pageName);
    formData.append("page_type", name);
    return createItem(formData,);
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
              name: value,
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
            dynamicFields={section.data}
            onSubmit={(formData) => handleSectionSubmit(formData, section.name)}
          />
        </MicroBox>
      ))}
    </CustomSection>
  );
};

export default SinglePage;
