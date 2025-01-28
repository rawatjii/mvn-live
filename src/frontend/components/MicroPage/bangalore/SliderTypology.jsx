import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import CustomCard from "../../Card";
import CustomSlider from "./CustomSlider";
import "./slidertypology.css";

const SliderTypology = ({ data }) => {
  const {title, desc, tabs, tabs_name } = data;

  return (
    <section className="section typology_section">
      <div className="heading_div mb_60 mb_sm_30">
        <h4 className="title title_style1 text-center">{title}</h4>
      </div>
      <Container>
        <Tabs defaultActiveKey={tabs_name[0]} id="typology-tabs" className="mb-3 pb-0">
          {Object.keys(tabs).map((key, index) => (
            <Tab eventKey={tabs_name[index]} title={tabs_name[index]} key={key}>
              <CustomSlider slides={tabs[key]} />
            </Tab>
          ))}
        </Tabs>
      </Container>
      <Container>
        <div className="about">
          <CustomCard className="px-0 pb-0" desc={desc} />
        </div>
      </Container>
    </section>
  );
};

export default SliderTypology;