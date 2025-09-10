import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import CustomCard from "../../Card";
import CustomSlider from "./CustomSlider";
import "./slidertypology.css";
import useFetchData from "../../../utils/apiHelper";

const SliderTypology = ({ data }) => {
  const { data:floorPlanData, loading } = useFetchData(`project/${data.project_id}/floor-plan`);
  const {heading, description} = data;

  return (
    <section className="section typology_section" aria-label="Typology Section">
      <div className="heading_div mb_60 mb_sm_30">
        <h4 className="title title_style1 text-center">{heading}</h4>
      </div>
      <Container>
        <Tabs defaultActiveKey="0" id="typology-tabs" className="mb-3 pb-0">
          {floorPlanData?.filter((item, index, self)=> index == self.findIndex(t=>t.unit_type == item.unit_type)).map((key, index) => (
            <Tab eventKey={index} title={key.unit_type} key={key}>
              <CustomSlider className="typology_slider" slides={floorPlanData?.filter((item)=>item.unit_type == key.unit_type)} />
            </Tab>
          ))}
        </Tabs>
      </Container>
      {description && (
        <Container>
        <div className="about">
          <CustomCard className="px-0 pb-0" desc={description} />
        </div>
      </Container>
      )}
      
    </section>
  );
};

export default SliderTypology;