import React from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import { useParams } from "react-router-dom";

// Simulated backend response
const formConfig = [
  { visible: "true",name : "meta_name", label: "Meta Title", isLeft: true },
  { visible: "true",name : "title ", label: "Meta Title", isLeft: true },
  { visible: "true",name : "ame", label: "Meta Title", isLeft: true },
]

const BasicMicroSite = () => {
turn (
    <CustomSection customClass="d-block">
      <div class="left-area">
        
      <MicroBox>
              <CustomTitle title={'test'} />
              <CustomForm
                isBanner={false}
                dynamicFields={formConfig}
              />
            </MicroBox>
      </div>
    </CustomSection>
  );
};

export default BasicMicroSite;
