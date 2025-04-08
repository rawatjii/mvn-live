import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import { useParams } from "react-router-dom";

// Simulated backend response
const formConfig = [
  {
    sectionName: "Meta Micro Site",
    sectionApi: "meta-micro-site",
    visible: "true",
    fields: {
      title: { visible: "true", label: "Meta Title", isLeft: true },
      alt_tag: { visible: "true", label: "Alt Text", isLeft: true },
      image: { visible: "true", label: "Main Image", isLeft: true },
      alternative_image: { visible: "true", label: "Alternative Image", isLeft: true },
      description: { visible: "true", isLeft: true },
    },
  },
  {
    sectionName: "About overview",
    sectionApi: "about-overview",
    visible: "true",
    fields: {
      title: { visible: "true", label: "Overview Title" },
      alt_tag: { visible: "true", label: "Alt Tag" },
      image: { visible: "true", label: "Overview Image" },
      alternative_image: { visible: "true", label: "Alt Image" },
      description: { visible: "true", label: "Overview Description" },
    },
  },
  {
    sectionName: "About gallery",
    sectionApi: "about-gallery",
    visible: "true",
    fields: {
      title: { visible: "true", label: "Overview Title" },
      alt_tag: { visible: "true", label: "Alt Tag" },
      image: { visible: "true", label: "Overview Image" },
      alternative_image: { visible: "true", label: "Alt Image" },
      description: { visible: "true", label: "Overview Description" },
    },
  },
];

const BasicMicroSite = () => {
  const { pageName } = useParams(); 

  const handleSectionSubmit = (sectionApi, data) => {
    console.log(`🔽 Data from section [${sectionApi}] is already FormData`);
    console.log(`🟡 FormData content for [${sectionApi}]:`);
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value instanceof File ? value.name : value);
    }
  
    const endpoint = "https://dummyjson.com/test"; 
  
    fetch(endpoint, {
      method: "POST",
      body: data,
    })
      .then((res) => res.text()) // Webhook.site returns plain text
      .then((resData) => {
        console.log(`✅ Data submitted successfully`, resData);
      })
      .catch((err) => {
        console.error(`❌ Error in submit:`, err);
      });
  };


  return (
    <CustomSection customClass="d-block">
      <div class="left-area">
        {formConfig
          .filter((section) => section.visible)
          .map((section) => (
            <MicroBox key={section.sectionName}>
              <CustomTitle title={section.sectionName} />
              <CustomForm
                formType="block"
                fieldVisibility={section.fields}
                onSubmit={(data) =>
                  handleSectionSubmit(section.sectionApi, data)
                }
              />
            </MicroBox>
          ))}
      </div>
    </CustomSection>
  );
};

export default BasicMicroSite;
