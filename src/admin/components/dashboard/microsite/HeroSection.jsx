import React, { useEffect } from "react";
import { useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomForm";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import CustomModal from "../utilities/custom-modal/CustomModal";

const HeroSection = () => {
    const bannerApi = generateApi("project-banner");
    const [editModalData, setEditModalData] = useState(null);
    const [value,setvalue]=useState('image');
    const { data,createItem, editItem, deleteItem } =useCrud(bannerApi);
    const [typeInput,setTypeInputs]=useState([]);

    useEffect(()=>{
      let updateFileTypes=[];
      switch(value){
        case "image": 
        updateFileTypes= [
          { 
            name: "image",
            label: "Image/ Video/ JSON",
            type: "file",
            col: 12,
            isLeft:true ,
            required:true
          },   
          { 
            name: "alternative_image",
            label: "Alternative Image",
            type: "file",
            col: 12,
            isLeft:true ,
            required:true
          },
          { 
            name: "alt",
            label: "Alt text",
            type: "text",
            col: 12,
            isLeft:true ,
            required:true
          },  
        ]
        break;
        case "iframe_link": 
        updateFileTypes= [
          {
            name: "iframe",
            label: "Iframe Link",
            type: "text",
            Placeholder:"Enter Iframe Link",
            col: 12,
            isLeft:true ,
            required:true
          }, 
        ]
        break;
         case "json": 
        updateFileTypes= [
          {
            name: "json",
            label: "Upload JSON",
            type: "file",
            col: 12,
            isLeft:true ,
            required:true
          }, 
        ]
        break;
        case "video": 
        updateFileTypes= [
          {
            name: "video",
            label: "Upload Video",
            type: "file",
            col: 12,
            isLeft:true,
            required:true
          }, 
        ]
        break;
      }

      setTypeInputs(updateFileTypes)
    },[value])


    const formFields = [
      {
        
        sectionName: "Upload Banner",
        sectionApi: "upload_banner",
        visible: true,
        fields: [ 
          {
            label: "File type",
            type: "select",
            col: 12,
            selectedVal:'image',
            name: "is_type",
            isLeft:true ,
            options:[
              {
                label:'Image',
                value:'image',
              },
              {
                label:'iframe link',
                value:'iframe_link',
              },
              {
                label:'JSON',
                value:'json',
              }
            ]
          },
          ...typeInput    
        ],
      },
     
    ];
    
    
    
    const columns = [
      { key: "", label: "S.No." },
      { key: "image", label: "image/video/json", type: "file" },
      { key: "alternative_image", label: "Alternative_image", type: "file" },
      { key: "alt", label: "Alt_text", type: "input" },
      { key: "iframe_link", label: "Iframe Link" },
    ];
    

    const handleCreate = (formData) => {
      formData.append("is _type", value);
      createItem(formData)};
    const handleDelete = (row) => deleteItem(row.id);
    const handleEditSubmit = (formData) => {
      editItem(editModalData.id, formData); 
      setEditModalData(null); 
    };
    const handleEdit = (row) => {
      setEditModalData(row); 
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const paginatedData = data?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
);


return (
  <CustomSection customClass={"d-block"}>
      {formFields
      .filter((section) => section.visible)
      .map((section) => (
       
          <MicroBox key={section.sectionName}>
          <CustomTitle title={section.sectionName} />
          <CustomForm
            dynamicFields={section.fields}
            isBanner={false} 
            setValueVia={setvalue}

            onSubmit={handleCreate}
          />
          </MicroBox>
          
      ))}
        <MicroBox>
          <CustomTitle title="Our Values Table" />
          <CustomTable
            columns={columns}
            data={paginatedData}

            onEdit={handleEdit} 
            onDelete={handleDelete}
          />
        </MicroBox>
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(data?.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {editModalData && (
            <CustomModal
            isOpen={!!editModalData}
            onClose={() => setEditModalData(null)}
            title="Edit Our Values"
          >
            <CustomForm
              isBanner={false}
              dynamicFields={formFields[0].fields}
              defaultData={editModalData}
              setValueVia={setvalue}
              onSubmit={handleEditSubmit}
            />
          </CustomModal>
        )}
</CustomSection>
  );
};

export default HeroSection;
