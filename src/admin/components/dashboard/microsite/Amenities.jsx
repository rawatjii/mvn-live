import React, { useState } from 'react'
import '../../../assets/css/microsite.css';
import { BsBuildingFillAdd } from "react-icons/bs";
import CustomForm from '../utilities/CustomForm'
import CustomTable  from '../utilities/CustomTable'
import { CustomSection, LeftArea, MicroBox, RightArea } from '../utilities/CutomTags';
import CustomTitle from '../utilities/CustomTitle';
import CustomButton from '../utilities/CutomButton';

const Amenities = () => {

    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const handleSave = () => {
      console.log("Saving from page:", selectedAmenities);
      
    };
  return (
    <>
      <CustomSection>

        {/* left area */}
          <LeftArea>
            <MicroBox>
            <CustomTitle icon={<BsBuildingFillAdd />} title="Add More Project AMenities" />
            <CustomForm />
            </MicroBox>
          </LeftArea>

          {/* right area */}
          <RightArea>
            <MicroBox>
            <CustomTitle icon={<BsBuildingFillAdd />} title="Select Amenities" />
              <CustomTable />
            </MicroBox>
            <CustomButton text="Save" onClick={handleSave}/>
          </RightArea>
      </CustomSection>
    </>
  );
}

export default Amenities