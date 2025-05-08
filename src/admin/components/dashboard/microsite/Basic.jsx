import React, { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import CustomTable from "../utilities/custom-table/CustomTable";



const BasicMicroSite = () => {
  const [platter,setplatter]=useState([]);
  const bannerApi = generateApi("project");

  useEffect(()=>{
    const platterApi = generateApi("platter");
    
    platterApi.get().then((itm)=>{
    setplatter(itm.data.data);
    })
  },[])

const formFields = 
  {
    sectionName: "Meta Micro Site",
    sectionApi: "meta-micro-site",
    visible: true,
    fields: [{label: "Platter",type: "select",col: 6, selectedVal:'select',  name: "platter_id", options:platter?.map((item,index)=>({value:item.id,label:item.name}))},
      { name: "meta_title", label: "Meta Title", Placeholder:"Enter Meta Title", type: "text", col: 6 },
      { name: "meta_keyword", label: "Meta Keyword", Placeholder:"Enter Meta Keyword", type: "text", col: 6 },
      { name: "meta_description", label: "Meta Description", Placeholder:"Enter Meta Description", type: "text", col: 6 },
      { name: "project_name", label: "Project Name", Placeholder:"Enter Project Name", type: "text", col: 6 },
      { name: "slug", label: "Project Slug", Placeholder:'project-slug', type: "text", col: 6 },
      { name: "image", label: "Project image",  Placeholder:"Enter Project Typology", type: "file", col: 6 },
      { name: "alternative_image", label: "Project image",  Placeholder:"Enter Project Typology", type: "file", col: 6 },
      { name: "phone_ivr", label: "Phone IVR", Placeholder:"xxxxxxxxxx", type: "text", col: 6 },
      { name: "rera_no", label: "RERA NO", Placeholder:"EX/MM/MM/MM", type: "text", col: 6 },
    ],
  };
 

  const { data,createItem, editItem, deleteItem } =useCrud(bannerApi);

  
const handleCreate = (formData) => {createItem(formData)};
const handleDelete = (row) => deleteItem(row.id);
const handleEditSubmit = (formData) => {
  editItem(editModalData.id, formData); 
  setEditModalData(null); 
};
const handleEdit = (row) => {
  setEditModalData(row); 
};


return (
  <CustomSection customClass="d-block">

          <MicroBox >
          <CustomTitle title={formFields.sectionName}  />
          <CustomForm
            dynamicFields={formFields.fields}
            isBanner={false} 
            onSubmit={handleCreate}
          />
        </MicroBox>
  
  </CustomSection>
  );
};

export default BasicMicroSite;
