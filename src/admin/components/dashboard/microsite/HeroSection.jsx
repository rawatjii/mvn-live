import React, { useState, useEffect } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import { useParams } from "react-router-dom";

const HeroSection = () => {
  const {project_id} = useParams()
  const [formType, setFormType] = useState("image");
  const [editModalData, setEditModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeInputs, setTypeInputs] = useState([]);
  const itemsPerPage = 5;
  const bannerApi = generateApi(`project-banner/${project_id}/banner`);
  const editDataApi = generateApi(`project-banner`);
  const [editData, setEditData] = useState(null);

  const { 
    data, 
  } = useCrud(bannerApi);
  
  const {editItem, 
    createItem, 
    deleteItem,
    getEditData  } = useCrud(editDataApi);
// console.log()

  useEffect(() => {
    setTypeInputs(
      formType === "image"
        ? [
            { name: "image", label: "Image", type: "file", col: 12, isLeft: true },
            { name: "alternative_image", label: "Alternative Image", type: "file", col: 12, isLeft: true },
            { name: "alt", label: "Alt text", type: "text", col: 12, isLeft: true, isRequired: true },
          ]
        : formType === "iframe"
        ? [{ name: "iframe", label: "Iframe Link", type: "text", placeholder: "Enter Iframe Link", col: 12, isLeft: true, isRequired: true }]
        : formType === "json"
        ? [{ name: "json", label: "Upload JSON", type: "file", col: 12, isLeft: true }]
        : formType === "video"
        ? [{ name: "video", label: "Upload Video", type: "file", col: 12, isLeft: true }]
        : []
    );
  }, [formType]);

  const columns = [
    { key: "", label: "S.No." },
    { key: "is_type", label: "Type", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "input" },
  ];

  const formFields = [
    {
      sectionName: "Upload Banner",
      visible: true,
      fields: [
        {
          label: "File type",
          type: "select",
          col: 12,
          selectedVal: formType,
          name: "is_type",
          isLeft: true,
          options: [
            { label: "Image", value: "image" },
            { label: "Iframe link", value: "iframe" },
            { label: "Video", value: "video" },
            { label: "JSON", value: "json" },
          ],
        },
        ...typeInputs,
      ],
    },
  ];

  const fetchEditData = async () => {
    const formData = new FormData();
    formData.append("section_type", locationType);
    formData.append("project_id", project_id);
    try {
      const data = await getEditData(formData);
      setEditData(data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

  const handleCreate = async (formData) => {
    try {
      await createItem(formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEdit = async (formData) => {
    try {
      await editItem(editData.id, formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };
  useEffect(()=>{
    fetchEditData()
  },[]) 

  const paginatedData = data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <CustomSection customClass="d-block">
      {formFields.map(
        (section) =>
          section.visible && (
            <MicroBox key={section.sectionName}>
              <CustomTitle title={section.sectionName} />
              <CustomForm
                dynamicFields={section.fields}  
                defaultData={editData}
                setValueVia={setFormType}
                onSubmit={editData ? handleEdit : handleCreate}

                // onUpdate={handleEditSubmit}
              />
            </MicroBox>
          )
      )}
      <MicroBox>
        <CustomTitle title="Banner Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditData(row);
          }}
          onDelete={(row) => deleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((data?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default HeroSection;