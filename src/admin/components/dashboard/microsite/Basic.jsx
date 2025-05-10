import React, { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useParams } from "react-router-dom";


const BasicMicroSite = () => {
  const [platter,setplatter]=useState([]);
  const user_id=useParams();
  let project_Id=user_id['project_id'];
  const editData = generateApi(`project/${project_Id}`);
  const basicApi = generateApi(`project`);

  const {data}=useCrud(editData);
  const { createItem,editItem, deleteItem,editGet } =useCrud(basicApi);

  useEffect(()=>{
    const platterApi = generateApi("platter");
    platterApi.get().then((itm)=>{
    setplatter(itm.data.data);
    })
  },[])

const formFields = 
  {
    sectionName: "Basic Details",
    sectionApi: "meta-micro-site",
    visible: true,
    fields: [
      {label: "Platter",type: "select",col: 6, selectedVal:'select',  name: "platter_id", options:platter?.map((item,index)=>({value:item.id,label:item.name})),isRequired:true},
      { name: "is_theme", label: "", Placeholder:"Enter Project Name", type: "hidden", col: 6,value:1 },
      { name: "name", label: "Project Name", Placeholder:"Enter Project Name", type: "text", col: 6,isRequired:true },
      { name: "slug", label: "Project Slug", Placeholder:'project-slug', type: "text", col: 6,isRequired:true },
      { name: "image", label: "Project image",  Placeholder:"Enter Project Typology", type: "file", col: 6, },
      { name: "alternative_image", label: "Project image",  Placeholder:"Enter Project Typology", type: "file", col: 6 },
      { name: "phone_ivr", label: "Phone IVR", Placeholder:"xxxxxxxxxx", type: "text", col: 6,isRequired:true },
      { name: "rera_no", label: "RERA NO", Placeholder:"EX/MM/MM/MM", type: "text", col: 6,isRequired:true },
      { name: "meta_title", label: "Meta Title", Placeholder:"Enter Meta Title", type: "text", col: 6},
      { name: "meta_keyword", label: "Meta Keyword", Placeholder:"Enter Meta Keyword", type: "text", col: 6},
      { name: "meta_description", label: "Meta Description", Placeholder:"Enter Meta Description", type: "text", col: 6},
    ],
  };
 
  
const handleCreate = (formData) => {
  
  createItem(formData,"basic")


};
const handleDelete = (row) => deleteItem(row.id);
const handleEditSubmit = (formData) => {
  editItem(project_Id,formData); 
};

if( project_Id && data.length==0){ 
  return
}

return (
  <CustomSection customClass="d-block">
          <MicroBox>
          <CustomTitle title={formFields.sectionName}  />
          <CustomForm
            dynamicFields={formFields.fields}
            isBanner={false} 
            onSubmit={project_Id?handleEditSubmit:handleCreate}
            defaultData={data}
            buttonLabel={project_Id?'Update':'Save'}
          />
        </MicroBox> 
  </CustomSection>
  );
};

export default BasicMicroSite;
