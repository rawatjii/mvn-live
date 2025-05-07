import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";

// Simulated backend response
const formFields = [
  {
    sectionName: "Upload Banner",
    sectionApi: "upload_banner",
    visible: true,
    fields: [  
      { 
        name: "file",
        label: "Image/Video/JSON",
        type: "file",
        Placeholder:"Enter Heading",
        col: 12,
        isLeft:true ,
      },     
      {
        name: "iframe_link",
        label: "Link",
        type: "text",
        Placeholder:"Enter Link",
        col: 12,
        isLeft:true ,
      },  
    ],
  },
 
];

const HeroSection = () => {
return (
  <CustomSection customClass="d-block">
    <div className="row">
      {formFields
      .filter((section) => section.visible)
      .map((section) => (
        <div className="col col-12">
          <MicroBox key={section.sectionName}>
          <CustomTitle title={section.sectionName} />
          <CustomForm
            dynamicFields={section.fields}
            isBanner={false} 
          />
          </MicroBox>
        </div>
      ))}
    </div>
  </CustomSection>
  );
};

export default HeroSection;
