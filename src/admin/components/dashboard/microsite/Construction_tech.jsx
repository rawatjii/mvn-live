import { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";

const ConstructionTechnology = () => {
  const [editData, setEditData] = useState(null);
  const [editkeyHightlightsData, setEditkeyHightlightsData] = useState(null);
  const [formType, setFormType] = useState("image");
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  // API endpoints
  const projectSectionsApi = generateApi("projec-sections");
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const keyHightlightsApi = generateApi("project-key-highlight");
  
  // CRUD hooks
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { 
    data: construction, 
    createItem: keyHightlightsCreateItem, 
    editItem: keyHightlightsEditItem, 
    deleteItem,
    getItems: fetchconstruction
  } = useCrud(keyHightlightsApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

    // Form fields
  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    { name: "video", label: "Upload Video", type: "file", col: 12 },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 }
  ];

  const keyHightlightsFields = [
    { name: "heading", label: "Heading", type: "text", col: 12,isRequired:true },
    { name: "description", label: "Description", type: "textarea", col: 12,isRequired:true },
  ];

  // Fetch metadata function
  const fetchMetadata = async () => {
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

  // Fetch keyHightlights items
  const fetchAllconstruction = async () => {
    try {
      // Adjust parameters as needed for your API
      await fetchconstruction({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching keyHightlights items:", error);
    }
  };

  // Handle metadata creation
  const handleCreateMeta = async (formData) => {
    try {
      formData.append("is_type", "video");
      // formData.append("project_id", project_id);
      // formData.append("section_type", locationType);
      await createItem(formData);
      await fetchMetadata();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  // Handle metadata edit
  const handleEditMeta = async (formData) => {
    try {
      await editItem(editData.id, formData);
      await fetchMetadata();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };

  // Handle keyHightlights item creation
  const handleCreatekeyHightlights = async (formData) => {
    try {
      formData.append("is_type", "keyHightlights");
      // formData.append("project_id", project_id);
      // formData.append("section_type", locationType);
      await keyHightlightsCreateItem(formData);
      await fetchAllconstruction();
      setEditkeyHightlightsData(null);
    } catch (error) {
      console.error("Error creating keyHightlights item:", error);
    }
  };

  // Handle keyHightlights item edit
  const handleEditkeyHightlights = async (formData) => {
    try {
            formData.append("is_type", "keyHightlights");
      await keyHightlightsEditItem(editkeyHightlightsData.id, formData);
      await fetchAllconstruction();
      setEditkeyHightlightsData(null);
    } catch (error) {
      console.error("Error updating keyHightlights item:", error);
    }
  };

  // Handle delete
  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllconstruction();
    } catch (error) {
      console.error("Error deleting keyHightlights item:", error);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditkeyHightlightsData(null);
  };

  // Initial data loading
  useEffect(() => {
    fetchMetadata();
    fetchAllconstruction();
  }, []);

  // Table columns
  const columns = [
    { key: "", label: "S.No." },
    { key: "title", label: "Heading", type: "text" },
    { key: "description", label: "Description", type: "file" },
  ];

  // Paginate data
  const paginatedData = construction?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
console.log(construction)
  return (
    <CustomSection>
      <MicroBox>
        <CustomTitle title="Overview" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={metaFields}
          defaultData={editData}
          onSubmit={editData ? handleEditMeta : handleCreateMeta}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title={editkeyHightlightsData ? "Edit key hightlights" : "Add key hightlights"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={keyHightlightsFields}
          defaultData={editkeyHightlightsData}
          onSubmit={editkeyHightlightsData ? handleEditkeyHightlights : handleCreatekeyHightlights}
          submitButtonText={editkeyHightlightsData ? "Update" : "Create"}
          cancelButton={editkeyHightlightsData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="Key hightlights" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditkeyHightlightsData(row);
            setFormType(row.is_type || "image");
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((construction?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default ConstructionTechnology;