import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import { Placeholder } from "react-bootstrap";

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
      { name: "upload_brochure", label: "Upload Brochure", Placeholder:"Upload Brochure", type: "file", col: 12, isLeft:true },
    ],
  },
  {
    sectionName: "Basic Details Micro Site",
    sectionApi: "basic-details-micro-site",
    visible: true,
    fields: [
      { name: "project_name", label: "Project Name", Placeholder:"Enter Project Name", type: "text", col: 12, isLeft:true },
      { name: "project_location", label: "Project Location", Placeholder:'Project Location', type: "text", col: 12, isLeft:true },
      { name: "project_sub_location", label: "Project Sub Location",  Placeholder:"Enter Project Sub Location", type: "text", col: 12, isLeft:true },
      { name: "project_typology", label: "Project Typology",  Placeholder:"Enter Project Typology", type: "text", col: 12, isLeft:true },
    ],
  },
  {
    sectionName: "Project Main Slider Image/Video",
    sectionApi: "project-main-slider",
    visible: true,
    fields: [
      {
        name: "select_slider_type",
        label: "Select Slider Type",
        type: "radioFields",
        col: 12,
        isLeft:true,
        options:[
          {
            label:'Images',
            value:'images',
          },
          {
            label:'JSON File',
            value:'json_file',
          }
        ]
      },
      { name: "Images", label: "Images", info:'Images Size 800*500 Only', type: "file", col: 12, isLeft:true },
      { name: "json", label: "JSON", type: "file", col: 12, isLeft:true },
    ],
  },
  {
    sectionName: "Project Mobile Slider Image/Video",
    sectionApi: "project-main-slider",
    visible: true,
    fields: [
      {
        name: "select_slider_type",
        label: "Select Slider Type",
        type: "radioFields",
        col: 12,
        isLeft:true,
        options:[
          {
            label:'Images',
            value:'images',
          },
          {
            label:'JSON File',
            value:'json_file',
          }
        ]
      },
      { name: "Images", label: "Images", info:'Images Size 800*500 Only', type: "file", col: 12, isLeft:true },
      { name: "json", label: "JSON", type: "file", col: 12, isLeft:true },
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
        <div className="col col-6">
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

export default BasicMicroSite;
