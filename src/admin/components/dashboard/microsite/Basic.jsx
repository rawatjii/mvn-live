import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import { useParams } from "react-router-dom";

// Simulated backend response
const metaFields = [
  { name: "faq_question", label: "Question", type: "text", col: 12,isLeft : true  },
  { name: "faq_answer", label: "Answer", type: "textarea", col: 12,isLeft : true  },
  { name: "attachment", label: "Upload Attachment", type: "file", col: 6 ,isLeft : true },
];

const BasicMicroSite = () => {
  return (
    <CustomSection customClass="d-block">
      <MicroBox>
        <CustomTitle title="demo" />
        <CustomForm isBanner={false} dynamicFields={metaFields} />
      </MicroBox>
    </CustomSection>
  );
};

export default BasicMicroSite;
