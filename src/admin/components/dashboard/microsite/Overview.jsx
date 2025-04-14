import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import { Placeholder } from "react-bootstrap";

// Simulated backend response
const formFields = [
  {
    sectionName: "Info Details",
    sectionApi: "info_details",
    visible: true,
    fields: [
      {
        name: "project_status",
        label: "Project Status",
        type: "select",
        col: 12,
        isLeft:true ,
        options:[
          {
            label:'Ready To Move In',
            value:'ready_to_move_in',
          },
          {
            label:'Under Construction',
            value:'under_construction',
          }
        ]
      },
      {
        name: "rera_number",
        label: "RERA Number",
        type: "text",
        Placeholder:"Enter RERA Number",
        col: 12,
        isLeft:true ,
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        Placeholder:"Enter Price",
        col: 12,
        isLeft:true ,
      },
    ],
  },
  {
    sectionName: "Overview",
    sectionApi: "overview",
    visible: true,
    fields: [
      {
        name: "project_overview",
        label: "Project Overview",
        type: "textarea",
        Placeholder:"Enter Project Overview",
        col: 12,
        isLeft:true ,
      },
    ],
  },
];

const OverviewMicroSite = () => {
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

export default OverviewMicroSite;
