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
  const { project_id } = useParams();
  const [formType, setFormType] = useState("image");
  const [editModalData, setEditModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeInputs, setTypeInputs] = useState([]);
  const [editData, setEditData] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const itemsPerPage = 5;
  
  const bannerApi = generateApi(`project-banner/${project_id}/banner`, 0);
  const editDataApi = generateApi(`project-banner`, 0);

  const { 
    getMultiEditdata,    
  } = useCrud(bannerApi);
  
  const { editItem, deleteItem,createItem } = useCrud(editDataApi);

  useEffect(() => {
    const inputConfigs = {
      image: [
        { name: "image", label: "Image", type: "file", col: 12, isLeft: true },
        { name: "alternative_image", label: "Alternative Image", type: "file", col: 12, isLeft: true },
        { name: "alt", label: "Alt text", type: "text", col: 12, isLeft: true, isRequired: true },
      ],
      iframe: [
        { name: "iframe", label: "Iframe Link", type: "text", placeholder: "Enter Iframe Link", col: 12, isLeft: true, isRequired: true }
      ],
      json: [
        { name: "json", label: "Upload JSON", type: "file", col: 12, isLeft: true }
      ],
      video: [
        { name: "video", label: "Upload Video", type: "file", col: 12, isLeft: true }
      ]
    };
    
    setTypeInputs(inputConfigs[formType] || []);
  }, [formType]);

  const columns = [
    { key: "", label: "S.No." },
    { key: "is_type", label: "Type", type: "text" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
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
    setIsLoading(true);
    try {
      const tableData = await getMultiEditdata();
      if (tableData?.data) {
        setData(tableData.data);
      }
    } catch (error) {
      console.error("Error fetching edit data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = async (formData) => {
    setIsLoading(true);
    try {
      await createItem(formData);
      await fetchEditData();
      setEditData(null);
      setFormType("image");
    } catch (error) {
      console.error("Error creating project section:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (formData) => {
    if (!editData?.id) {
      console.error("No edit data ID available");
      return;
    }
    
    setIsLoading(true);
    try {
      await editItem(editData.id, formData);
      await fetchEditData();
      setEditData(null);
      setFormType("image");
    } catch (error) {
      console.error("Error updating project section:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = (row) => {
    window.scrollTo(0, 0);
    setEditData(row);
    setFormType(row.is_type || "image");
  };

  const handleDelete = async (row) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setIsLoading(true);
      try {
        await deleteItem(row.id);
        await fetchEditData();
      } catch (error) {
        console.error("Error deleting item:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditData(null);
    setFormType("image");
  };

  useEffect(() => {
    if (project_id) {
      fetchEditData();
    }
  }, [project_id]);

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  ) || [];

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  return (
    <CustomSection customClass="d-block">
      {formFields.map((section) =>
        section.visible && (
          <MicroBox key={section.sectionName}>
            <CustomTitle title={section.sectionName} />
            <CustomForm
              dynamicFields={section.fields}  
              defaultData={editData}
              setValueVia={setFormType}
              onSubmit={editData ? handleEdit : handleCreate}
              isLoading={isLoading}
            />
            {editData && (
              <button 
                type="button" 
                onClick={handleCancelEdit}
                className="btn btn-secondary mt-2"
                disabled={isLoading}
              >
                Cancel Edit
              </button>
            )}
          </MicroBox>
        )
      )}
      
      <MicroBox>
        <CustomTitle title="Banner Items" />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <CustomTable
              columns={columns}
              data={paginatedData}
              onEdit={handleEditClick}
              onDelete={handleDelete}
              startIndex={(currentPage - 1) * itemsPerPage}
            />
            {totalPages > 1 && (
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </MicroBox>
    </CustomSection>
  );
};

export default HeroSection;