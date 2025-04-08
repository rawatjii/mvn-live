import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import "./banner.css";
import CustomForm from "../utilities/CustomForm";
import { useParams } from "react-router-dom";

// Simulated backend response
const formConfig = [
  {
    sectionName: "About banner",
    sectionApi: "about-banner",
    visible: true,
    fields: {
      title: { visible: true, label: "Banner Title" },
      alt_tag: { visible: true, label: "Alt Text" },
      image: { visible: true, label: "Main Image" },
      alternative_image: { visible: true, label: "Alternative Image" },
      description: { visible: true },
    },
  },
  {
    sectionName: "About overview",
    sectionApi: "about-overview",
    visible: true,
    fields: {
      title: { visible: true, label: "Overview Title" },
      alt_tag: { visible: true, label: "Alt Tag" },
      image: { visible: true, label: "Overview Image" },
      alternative_image: { visible: true, label: "Alt Image" },
      description: { visible: true, label: "Overview Description" },
    },
  },
  {
    sectionName: "About gallery",
    sectionApi: "about-gallery",
    visible: true,
    fields: {
      title: { visible: true, label: "Overview Title" },
      alt_tag: { visible: true, label: "Alt Tag" },
      image: { visible: true, label: "Overview Image" },
      alternative_image: { visible: true, label: "Alt Image" },
      description: { visible: true, label: "Overview Description" },
    },
  },
];

const Banner = () => {
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
      {formConfig
        .filter((section) => section.visible)
        .map((section) => (
          <MicroBox key={section.sectionName}>
            <CustomTitle title={section.sectionName} />
            <CustomForm
              fieldVisibility={section.fields}
              onSubmit={(data) =>
                handleSectionSubmit(section.sectionApi, data)
              }
            />
          </MicroBox>
        ))}
    </CustomSection>
  );
};

export default Banner;
