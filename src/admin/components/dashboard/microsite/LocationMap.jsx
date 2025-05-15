import { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";

const LocationMap = () => {
  const [editData, setEditData] = useState(null);
  const [editlocationMapData, setEditlocationMapData] = useState(null);
  const [formType, setFormType] = useState("image");
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  // API endpoints
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const locationMapApi = generateApi("project-location-advantage");
  
  // CRUD hooks
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { 
    data: locationMapItems, 
    createItem: locationMapCreateItem, 
    editItem: locationMapEditItem, 
    deleteItem,
    getItems: fetchlocationMapItems
  } = useCrud(locationMapApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form fields
  const metaFields = [
    { name: "heading", label: "Heading", type: "text",placeholder:"Enter Heading", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text",placeholder:"Enter Sub Heading", col: 6 },
    { name: "image", label: "Image", type: "file", col: 6 },
    { name: "alternative_image", label: "Alternate Image", type: "file", col: 6 },
    { name: "alt", label: "Alt", type: "text", col: 12 ,placeholder:"Enter Alt",},
     { name: "description", label: "Description", type: "textarea",placeholder:"Enter Discription", col: 12 },
  ];

  const locationMapFields = [
        { name: "designation", label: "Designation", type: "text", col: 6,placeholder:"Enter Designation",isRequired:true },
        { name: "distance", label: "Distance", type: "text", col: 6,placeholder:"Enter Distance",isRequired:true },
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

  // Fetch locationMap items
  const fetchAlllocationMapItems = async () => {
    try {
      // Adjust parameters as needed for your API
      await fetchlocationMapItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching locationMap items:", error);
    }
  };

  // Handle metadata creation
  const handleCreateMeta = async (formData) => {
    try {
      formData.append("is_type", "image");
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

  // Handle locationMap item creation
  const handleCreatelocationMap = async (formData) => {
    try {
      formData.append("is_type", "locationMap");
      // formData.append("project_id", project_id);
      // formData.append("section_type", locationType);
      await locationMapCreateItem(formData);
      await fetchAlllocationMapItems();
      setEditlocationMapData(null);
    } catch (error) {
      console.error("Error creating locationMap item:", error);
    }
  };

  // Handle locationMap item edit
  const handleEditlocationMap = async (formData) => {
    try {
            formData.append("is_type", "locationMap");
      await locationMapEditItem(editlocationMapData.id, formData);
      await fetchAlllocationMapItems();
      setEditlocationMapData(null);
    } catch (error) {
      console.error("Error updating locationMap item:", error);
    }
  };

  // Handle delete
  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAlllocationMapItems();
    } catch (error) {
      console.error("Error deleting locationMap item:", error);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditlocationMapData(null);
  };

  // Initial data loading
  useEffect(() => {
    fetchMetadata();
    fetchAlllocationMapItems();
  }, []);

  // Table columns
  const columns = [
    { key: "", label: "S.No." },
    { key: "designation", label: "Designation", type: "text" },
    { key: "distance", label: "Distance", type: "text" },
  ];

  // Paginate data
  const paginatedData = locationMapItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
console.log(locationMapItems)
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
        <CustomTitle title={editlocationMapData ? "Edit floor Plans Details" : "Add floor Plans Details"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={locationMapFields}
          defaultData={editlocationMapData}
          onSubmit={editlocationMapData ? handleEditlocationMap : handleCreatelocationMap}
          submitButtonText={editlocationMapData ? "Update" : "Create"}
          cancelButton={editlocationMapData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="locationMap Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditlocationMapData(row);
            setFormType(row.is_type || "image");
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((locationMapItems?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default LocationMap;