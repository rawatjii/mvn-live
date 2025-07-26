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
  const constructionApi = generateApi(`project-gallery/${project_id}/construction`);
  const constructionApi1 = generateApi(`project-gallery`,0);
  
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { 
    data: construction, 
    fetchAll: fetchconstruction
  } = useCrud(constructionApi);

  const { 
    createItem: ConstructionCreateItem, 
    editItem: ConstructionEditItem, 
    deleteItem,
  } = useCrud(constructionApi1);
  
  const { getEditData } = useCrud(getEditDataApi);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [  
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    // { name: "short_description", label:"Title", type: "text", col: 12 },
    // { name: "video", label: "Upload Video", type: "file", col: 12 },
    // { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 }
  ];

  const keyHightlightsFields = [
    { name: "title", label: "Title", type: "text", col: 12,isRequired:true },
    { name: "image", label: "Banner", type: "file", col: 6 },
    { name: "alternative_image", label: "Banner Alternate Image", type: "file", col: 6 },
     { name: "sm_image", label: "Small Image", type: "file", col: 6 },
    {
      name: "sm_alternative_image",
      label: "Small Alternative Image",
      type: "file",
      col: 6,
    },
    {
      name: "alt",
      label: "Alt",
      type: "text",
      col: 12,
      placeholder: "Enter Alt text",
      isRequired: true,
    },
  ];

  const fetchMetadata = async () => {
    const formData = new FormData();
    formData.append("section_type", "construction-technology");
    formData.append("project_id", project_id);
    try {
      const data = await getEditData(formData);
      setEditData(data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

 
  const handleCreateMeta = async (formData) => {
    try {
      // formData.append("is_type", "construction");
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

  const handleCreateConstruction = async (formData) => {
    try {
      formData.append("is_type", "construction");
      await ConstructionCreateItem(formData, "true");
      await fetchconstruction();
      setEditkeyHightlightsData(null);
    } catch (error) {
      console.error("Error creating keyHightlights item:", error);
    }
  };

  const handleEditConstrucion = async (formData) => {
    try {
           
      formData.append("is_type", "construction");
      await ConstructionEditItem(editkeyHightlightsData.id, formData);
      await fetchconstruction();
      setEditkeyHightlightsData(null);
    } catch (error) {
      console.error("Error updating keyHightlights item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchconstruction();
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
    { key: "title", label: "Title", type: "text" },
    { key: "image", label: "image", type: "file" },
    { key: "alternative_image", label: "Alternative Imae", type: "file" },
  //{ key: "sm_image", label: "Mobile Image", type: "file" },
 // { key: "sm_alternative_image", label: "Mobile Alternative Image", type: "file" },
     { key: "alt", label: "Alt", type: "text" },
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
        <CustomTitle title={editkeyHightlightsData ? "Edit Construction" : "Add Construction"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={keyHightlightsFields}
          defaultData={editkeyHightlightsData}
          onSubmit={editkeyHightlightsData ? handleEditConstrucion : handleCreateConstruction}
          submitButtonText={editkeyHightlightsData ? "Update" : "Create"}
          cancelButton={editkeyHightlightsData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="Construction" />
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