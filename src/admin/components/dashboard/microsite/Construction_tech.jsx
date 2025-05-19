import { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import StatusOrder from "../utilities/Status-order";

const ConstructionTechnology = () => {
  const [editData, setEditData] = useState(null);
  const [editkeyHightlightsData, setEditkeyHightlightsData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const keyHightlightsApi = generateApi("project-key-highlight");
  
  const { editItem, createItem, } = useCrud(projectSectionsApi);
  const { 
    data: construction, 
    createItem: keyHightlightsCreateItem, 
    editItem: keyHightlightsEditItem, 
    deleteItem,
    fetchAll: fetchconstruction
  } = useCrud(keyHightlightsApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [  
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    { name: "short_description", label:"Title", type: "text", col: 12 },
    { name: "video", label: "Upload Video", type: "file", col: 12 },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 }
  ];

  const keyHightlightsFields = [
    { name: "heading", label: "Heading", type: "text", col: 12,isRequired:true },
    { name: "short_description", label: "Description", type: "textarea", col: 12,isRequired:true },
  ];

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

  const fetchAllconstruction = async () => {
    try {
      await fetchconstruction({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching keyHightlights items:", error);
    }
  };


  const handleCreateMeta = async (formData) => {
    try {
      formData.append("is_type", "video");
      await createItem(formData);
      await fetchMetadata();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEditMeta = async (formData) => {
    try {
      await editItem(editData.id, formData);
      await fetchMetadata();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };

  const handleCreatekeyHightlights = async (formData) => {
    try {
      formData.append("is_type", "keyHightlights");
      await keyHightlightsCreateItem(formData);
      await fetchAllconstruction();
      setEditkeyHightlightsData(null);
    } catch (error) {
      console.error("Error creating keyHightlights item:", error);
    }
  };

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

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllconstruction();
    } catch (error) {
      console.error("Error deleting keyHightlights item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditkeyHightlightsData(null);
  };

  useEffect(() => {
    fetchMetadata();
    // fetchAllconstruction();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "heading", label: "Heading", type: "text" },
    { key: "short_description", label: "Description", type: "text" },
  ];

  const paginatedData = construction?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
  return (
    <CustomSection>
      <StatusOrder sectionId={editData?.id} editData={editData} fetchEditData={fetchMetadata}/>  
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