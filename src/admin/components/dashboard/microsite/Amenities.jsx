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

const Amenities = () => {
  const [editData, setEditData] = useState(null);
  const [editamenitiesData, setEditamenitiesData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  // API endpoints
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const amenitiesApi = generateApi(`project/${project_id}/amenities`);
  const projectAmApi = generateApi(`project-amenities`);
  
  // CRUD hooks
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { 
    data: amenitiesItems, 
    createItem: amenitiesCreateItem, 
    editItem: amenitiesEditItem, 
    deleteItem,
    getItems: fetchamenitiesItems
  } = useCrud(amenitiesApi);
  const { 
    createItem: amCreateItem, 
  } = useCrud(projectAmApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 12 },
    { name: "description", label: "Description", type: "textarea", col: 12 },
  ];

  const amenitiesFields = [
    { name: "heading", label: "Heading", type: "text", col: 6,isRequired:true },
    { name: "image", label: "Image", type: "file", col: 6,isRequired:true },
    { name: "alternative_image", label: "Alternate Image", type: "file", col: 6 },
    { name: "alt", label: "Alt", type: "text", col: 6, placeholder: "Enter Alt text",isRequired:true },
    { name: "short_description", label: "Description", type: "textarea", col: 6,isRequired:true },

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



  const fetchAllamenitiesItems = async () => {
    try {
      await fetchamenitiesItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching amenities items:", error);
    }
  };

  const handleCreateMeta = async (formData) => {
    try {
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

  const handleCreateamenities = async (formData) => {
    try {
      formData.append("is_type", "amenities");
      await amCreateItem(formData);
      await fetchAllamenitiesItems();
      setEditamenitiesData(null);
    } catch (error) {
      console.error("Error creating amenities item:", error);
    }
  };

  const handleEditamenities = async (formData) => {
    try {
      formData.append("is_type", "amenities");
      await amenitiesEditItem(editamenitiesData.id, formData);
      await fetchAllamenitiesItems();
      setEditamenitiesData(null);
    } catch (error) {
      console.error("Error updating amenities item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllamenitiesItems();
    } catch (error) {
      console.error("Error deleting amenities item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditamenitiesData(null);
  };

  useEffect(() => {
    fetchMetadata();
    fetchAllamenitiesItems();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "heading", label: "Title", type: "text" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
  ];

  const paginatedData = amenitiesItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
  return (
    <CustomSection>
       <StatusOrder sectionId={editData?.id} editData={editData} fetchEditData={fetchMetadata}/>  
      <MicroBox>
        <CustomTitle title="Amenities" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={metaFields}
          defaultData={editData}
          onSubmit={editData ? handleEditMeta : handleCreateMeta}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title={editamenitiesData ? "Edit amenities Image" : "Add amenities Images"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={amenitiesFields}
          defaultData={editamenitiesData}
          onSubmit={editamenitiesData ? handleEditamenities : handleCreateamenities}
          submitButtonText={editamenitiesData ? "Update" : "Create"}
          cancelButton={editamenitiesData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="amenities Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditamenitiesData(row);
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((amenitiesItems?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default Amenities;