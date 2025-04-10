import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";

// Simulated backend response
const formFields = [
  {
    sectionName: "Meta Micro Site",
    sectionApi: "meta-micro-site",
    visible: true,
    fields: [
      { name: "meta_title", label: "Meta Title", Placeholder:"Enter Meta Title", type: "text", col: 12, isLeft:true },
      { name: "meta_keyword", label: "Meta Keyword", Placeholder:"Enter Meta Keyword", type: "text", col: 12, isLeft:true },
      { name: "meta_description", label: "Meta Description", Placeholder:"Enter Meta Description", type: "text", col: 12, isLeft:true },
      { name: "upload_brochure", label: "Upload Brochure", Placeholder:"Upload Brochure", type: "file", col: 6, isLeft:true },
    ],
  },
  {
    sectionName: "About overview",
    sectionApi: "about-overview",
    visible: true,
    fields: [
      { name: "faq_question", label: "Question", type: "text", col: 12, isLeft:true },
      { name: "faq_answer", label: "Answer", type: "textarea", col: 12, isLeft:true },
      { name: "attachment", label: "Upload Attachment", type: "file", col: 6, isLeft:true },
    ],
  },
  {
    sectionName: "About gallery",
    sectionApi: "about-gallery",
    visible: true,
    fields: [
      { name: "faq_question", label: "Question", type: "text", col: 12, isLeft:true },
      { name: "faq_answer", label: "Answer", type: "textarea", col: 12, isLeft:true },
      { name: "attachment", label: "Upload Attachment", type: "file", col: 6, isLeft:true },
    ],
  },
];

const BasicMicroSite = () => {
return (
  <CustomSection customClass="d-block">
    <div className="row">
      {formFields
          .filter((section) => section.visible)
          .map((section) => (
            <MicroBox className="col col-6" key={section.sectionName}>
              <CustomTitle title={section.sectionName} />
              <CustomForm
                dynamicFields={section.fields}
                isBanner={false} 
              />
            </MicroBox>
          ))}
    </div>
    
</CustomSection>
  );
};

export default BasicMicroSite;
