import React, { useEffect } from "react";
import { useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import CustomModal from "../utilities/custom-modal/CustomModal";
import { useParams } from "react-router-dom";

const HeroSection = () => {
    const bannerApi = generateApi("project-banner");
    const [editModalData, setEditModalData] = useState(null);
    const [addFormType, setAddFormType] = useState('image'); 
    const [editFormType, setEditFormType] = useState('image');
    const { data, createItem, editItem, deleteItem } = useCrud(bannerApi);
    const [addTypeInputs, setAddTypeInputs] = useState([]); 
    const [editTypeInputs, setEditTypeInputs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
      let updateFileTypes = [];
      switch (addFormType) {
        case "image": 
          updateFileTypes = [
            { 
              name: "image",
              label: "Image",
              type: "file",
              col: 12,
              isLeft: true,
            },   
            { 
              name: "alternative_image",
              label: "Alternative Image",
              type: "file",
              col: 12,
              isLeft: true,
            },
            { 
              name: "alt",
              label: "Alt text",
              type: "text",
              col: 12,
              isLeft: true,
              isRequired: true
            },  
          ];
          break;
        case "iframe": 
          updateFileTypes = [
            {
              name: "iframe",
              label: "Iframe Link",
              type: "text",
              Placeholder: "Enter Iframe Link",
              col: 12,
              isLeft: true,
              isRequired: true
            }, 
          ];
          break;
        case "json": 
          updateFileTypes = [
            {
              name: "json",
              label: "Upload JSON",
              type: "file",
              col: 12,
              isLeft: true,
            }, 
          ];
          break;
        case "video": 
          updateFileTypes = [
            {
              name: "video",
              label: "Upload Video",
              type: "file",
              col: 12,
              isLeft: true,
            }, 
          ];
          break;
      }
      setAddTypeInputs(updateFileTypes);
    }, [addFormType]);

    useEffect(() => {
      let updateFileTypes = [];
      switch (editFormType) {
        case "image": 
          updateFileTypes = [
            { 
              name: "image",
              label: "Image",
              type: "file",
              col: 12,
              isLeft: true,
            },   
            { 
              name: "alternative_image",
              label: "Alternative Image",
              type: "file",
              col: 12,
              isLeft: true,
            },
            { 
              name: "alt",
              label: "Alt text",
              type: "text",
              col: 12,
              isLeft: true,
              isRequired: true
            },  
          ];
          break;
        case "iframe": 
          updateFileTypes = [
            {
              name: "iframe",
              label: "Iframe Link",
              type: "text",
              Placeholder: "Enter Iframe Link",
              col: 12,
              isLeft: true,
              isRequired: true
            }, 
          ];
          break;
        case "json": 
          updateFileTypes = [
            {
              name: "json",
              label: "Upload JSON",
              type: "file",
              col: 12,
              isLeft: true,
            }, 
          ];
          break;
        case "video": 
          updateFileTypes = [
            {
              name: "video",
              label: "Upload Video",
              type: "file",
              col: 12,
              isLeft: true,
            }, 
          ];
          break;
      }
      if (editModalData) {
        setEditTypeInputs(updateFileTypes);
      }
    }, [editFormType, editModalData]);

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
            selectedVal: addFormType,
            name: "is_type",
            isLeft: true,
            options: [
              { label: 'Image', value: 'image' },
              { label: 'iframe link', value: 'iframe' },
              { label: 'Video', value: 'video' },
              { label: 'JSON', value: 'json' },
            ]
          },
          ...addTypeInputs    
        ],
      },
    ];
    
    const editFormFields = [
      {
        sectionName: "Edit Banner",
        sectionApi: "upload_banner",
        visible: true,
        fields: [ 
          {
            label: "File type",
            type: "select",
            col: 12,
            selectedVal: editFormType,
            name: "is_type",
            isLeft: true,
            options: [
              { label: 'Image', value: 'image' },
              { label: 'iframe link', value: 'iframe' },
              { label: 'Video', value: 'video' },
              { label: 'JSON', value: 'json' },
            ]
          },
          ...editTypeInputs    
        ],
      },
    ];
    
    const columns = [
      { key: "", label: "S.No." },
      { key: "is_type", label: "image/json/video/Iframe", type: "file" },
      { key: "alternative_image", label: "Alternative_image", type: "file" },
      { key: "alt", label: "Alt_text", type: "input" },

    ];
    
    const handleCreate = (formData) => {
      createItem(formData);
    };
    
    const handleDelete = (row) => deleteItem(row.id);
    
    const handleEditSubmit = (formData) => {
      editItem(editModalData.id, formData); 
      setEditModalData(null); 
    };
    
    const handleEdit = (row) => {
      setEditModalData(row); 
      setEditFormType(row.is_type || 'image'); 
    };

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
                setValueVia={setAddFormType}
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
            startIndex={(currentPage - 1) * itemsPerPage}

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
              dynamicFields={editFormFields[0].fields}
              defaultData={editModalData}
              setValueVia={setEditFormType}
              onSubmit={handleEditSubmit}
            />
          </CustomModal>
        )}
      </CustomSection>
    );
};

export default HeroSection;