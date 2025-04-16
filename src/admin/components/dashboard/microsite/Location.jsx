import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {
  CustomSection,
  LeftArea,
  MicroBox,
  RightArea,
} from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

// Simulated backend response
const metaFields = [
  {
    name: "image",
    label: "Images",
    type: "file",
    info: "Images Size 800*500 Only",
    col: 12,
    isLeft: true,
  },
  {
    name: "yt_url",
    label: "Youtube Url",
    Placeholder: "Enter Youtube Location Url",
    type: "text",
    col: 12,
    isLeft: true,
  },
];

const columns = [
  { key: "price", label: "Price" },
  { key: "size", label: "Size" },
  { key: "type", label: "Type" },
];

const LocationMicrosite = () => {
  const aboutsApi = generateApi("blog"); // ✅ Adjust endpoint if needed
  const { data, loading, error, createItem, updateItem, deleteItem } =
    useCrud(aboutsApi);

  console.log(data, "data blog");

  const handleCreate = (formData) => createItem(formData);
  const handleEdit = (row) => updateItem(row.id, row);
  const handleDelete = (row) => deleteItem(row.id);
  const [currentPage, setCurrentPage] = useState(1);
  const [locationAdvantages, setLocationAdvantages] = useState([
    {km: "", location: "" },
  ]);
  const itemsPerPage = 5;

  const paginatedData = data.slice( 
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addInputHandler = () => {
    setLocationAdvantages([...locationAdvantages, {id:uuidv4(), size: "", location: "" }]);
  };

  const removeInputHandler = (id)=>{ 
    debugger
    const newLocationAdvantages = locationAdvantages.filter((item)=>{
      return item.id !== id;
    })

    setLocationAdvantages(newLocationAdvantages)
  }

  const locationChangeHandler = (e, inputId)=>{
    const { value } = e.target;

    const newLocationAdvantages = locationAdvantages.map((item)=>{
      if(item.id === inputId){
        return {
          ...item,
          location: value
        }
      }else{
        return item;
      }
    })
    setLocationAdvantages(newLocationAdvantages)
  }

  const sizeChangeHandler = (e, inputId)=>{
    const { value } = e.target;

    const newLocationAdvantages = locationAdvantages.map((item)=>{
      if(item.id === inputId){
        return {
          ...item,
          size: value
        }
      }else{
        return item;
      }
    })
    setLocationAdvantages(newLocationAdvantages)
  }

  return (
    <CustomSection customClass="">
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Location" />
          <CustomForm
            isBanner={false}
            dynamicFields={metaFields}
            onSubmit={handleCreate}
          />
        </MicroBox>
      </LeftArea>

      <RightArea>
        <MicroBox>
          <CustomTitle title="Location Advantage" />

          <div class="box">
            <div class="input-sec">
              <button onClick={addInputHandler}>
                <AiFillPlusCircle fontSize={24} className="me-2" />
                Add Location Advantage
              </button>
            </div>
            <div class="admin-text"></div>
          </div>

          <div class="locatio-box d-block">
            {locationAdvantages.length > 0 &&
              locationAdvantages.map((item, index) => (
                <div key={index} class="inner-location-box w-100">
                  <input
                    type="text"
                    class="form-control km-input border-dashed"
                    placeholder="Ex: 2.1 KM"
                    value={item.size}
                    onChange={(e)=>sizeChangeHandler(e, item.id)}
                  />
                  <input
                    type="text"
                    class="form-control border-dashed"
                    placeholder="Enter Location"
                    value={item.location}
                    onChange={(e)=>locationChangeHandler(e, item.id)}
                  />
                  {index !== 0 ? (
                    <div className="close d-flex align-items-center ms-1">
                      <IoClose onClick={()=>removeInputHandler(item.id)} fontSize={18} style={{ color: "#d74e34", cursor:"pointer" }} />
                    </div>
                  ) : (
                    <div className="close d-flex align-items-center ms-1">
                      <IoClose fontSize={18} style={{ color: "#d74e34", opacity:'0', visibility:'hidden' }} />
                    </div>
                  )}
                  
                </div>
              ))}
          </div>
        </MicroBox>
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </RightArea>
    </CustomSection>
  );
};

export default LocationMicrosite;
