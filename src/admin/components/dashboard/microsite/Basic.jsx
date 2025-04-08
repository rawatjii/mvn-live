import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import { useParams } from "react-router-dom";

// Simulated backend response
const metaFields=[
  { name: "faq_question", label: "Question", type: "text", col: 12 },
  { name: "faq_answer", label: "Answer", type: "textarea", col: 12 },
  { name: "attachment", label: "Upload Attachment", type: "file", col: 6 },
];

const BasicMicroSite = () => {
return (
  <CustomSection customClass="d-block">
  
  <MicroBox>
        <CustomTitle title="demo" />
        <CustomForm
          dynamicFields={metaFields}
        />
      </MicroBox>
</CustomSection>
  );
};

export default BasicMicroSite;
