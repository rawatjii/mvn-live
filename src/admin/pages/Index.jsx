import React, { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../components/dashboard/utilities/CutomTags";
import CustomTitle from "../components/dashboard/utilities/CustomTitle";
import CustomForm from "../components/dashboard/utilities/CustomForm";
import { useParams } from "react-router-dom";
import generateApi from "../api/generateApi";
import useCrud from "../hooks/useCrud";

const SinglePage = () => {
  const { pageName } = useParams();
  const singlePageApi = generateApi(`page-section/${pageName}`);
  const { data } = useCrud(singlePageApi);
  const [formSections, setFormSections] = useState([]);

  const handleSectionSubmit = (formData) => {
        for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value instanceof File ? value.name : value);
    }
        console.log("✅ Form data processed successfully");
  };
  
  useEffect(() => {
    if (!data) return;
    
    const processedSections = data.map((section) => {
      const sectionPermissions = JSON.parse(section.section_permissions);
            const enabledPermissions = Object.entries(sectionPermissions)
        .filter(([_, value]) => value === 'true')
        .map(([key]) => {
          const formattedLabel = key.split('_').join(' ');
          
          return {
            name: key,
            label: formattedLabel,
            type: key.includes('image') ? 'file' : 'text',
            col: 4,
            isRequired: true
          };
        });
      
      return {
        name: section.name,
        data: enabledPermissions
      };
    });
    
    setFormSections(processedSections);
  }, [data]);

  return (
    <CustomSection customClass="d-block">
      {formSections.map((section, index) => (
        <MicroBox key={`section-${index}`}>
          <CustomTitle title={section.name} />
          <CustomForm
            dynamicFields={section.data}
            onSubmit={(formData) => handleSectionSubmit(section.name, formData)}
          />
        </MicroBox>
      ))}
    </CustomSection>
  );
};

export default SinglePage;