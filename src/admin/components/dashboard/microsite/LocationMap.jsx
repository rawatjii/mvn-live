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

const LocationMap = () => {
  const [editData, setEditData] = useState(null);
  const [editlocationMapData, setEditlocationMapData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const locationMapApi = generateApi("project-location-advantage");
  
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const {data: locationMapItems, createItem: locationMapCreateItem, editItem: locationMapEditItem, deleteItem,getItems: fetchlocationMapItems} = useCrud(locationMapApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const fetchAlllocationMapItems = async () => {
    try {
      await fetchlocationMapItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching locationMap items:", error);
    }
  };

  const handleCreateMeta = async (formData) => {
    try {
      formData.append("is_type", "image");
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

  const handleCreatelocationMap = async (formData) => {
    try {
      formData.append("is_type", "locationMap");
      await locationMapCreateItem(formData);
      await fetchAlllocationMapItems();
      setEditlocationMapData(null);
    } catch (error) {
      console.error("Error creating locationMap item:", error);
    }
  };

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

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAlllocationMapItems();
    } catch (error) {
      console.error("Error deleting locationMap item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditlocationMapData(null);
  };

  useEffect(() => {
    fetchMetadata();
    fetchAlllocationMapItems();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "designation", label: "Designation", type: "text" },
    { key: "distance", label: "Distance", type: "text" },
  ];

  const paginatedData = locationMapItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
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
        <CustomTitle title={editlocationMapData ? "Edit location map Details" : "Add location map Details"} />
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
        <CustomTitle title="location Map Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditlocationMapData(row);
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