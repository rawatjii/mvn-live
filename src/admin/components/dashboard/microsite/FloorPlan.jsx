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

const FloorPlans = () => {
  const [editData, setEditData] = useState(null);
  const [editfloorPlansData, setEditfloorPlansData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const floorPlansApi = generateApi(`project-floorplan/${project_id}`);
  
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { 
    data: floorPlansItems, 
    createItem: floorPlansCreateItem, 
    editItem: floorPlansEditItem, 
    deleteItem,
    getItems: fetchfloorPlansItems
  } = useCrud(floorPlansApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
  ];

  const floorPlansFields = [
        { name: "heading", label: "Title", type: "text", col: 6,isRequired:true },
        { name: "unit_type", label: "Unit Type", type: "text", col: 6,isRequired:true },
        { name: "area", label: "Area", type: "text", col: 6,isRequired:true },
        { name: "sizes", label: "Size", type: "text", col: 6,isRequired:true },
        { name: "image", label: "Image", type: "file", col: 6,isRequired:true },
        { name: "alternative_image", label: "Alternate Image", type: "file", col: 6 },
        { name: "alt", label: "Alt", type: "text", col: 6, placeholder: "Enter Alt text",isRequired:true },
  ];

  const fetchMetadata = async () => {
    const formData = new FormData();
    formData.append("section_type", "floor-plans");
    formData.append("project_id", project_id);
    try {
      const data = await getEditData(formData);
      setEditData(data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

  const fetchAllfloorPlansItems = async () => {
    try {
      await fetchfloorPlansItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching floorPlans items:", error);
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

  const handleCreatefloorPlans = async (formData) => {
    try {
      formData.append("is_type", "floorPlans");
      await floorPlansCreateItem(formData);
      await fetchAllfloorPlansItems();
      setEditfloorPlansData(null);
    } catch (error) {
      console.error("Error creating floorPlans item:", error);
    }
  };

  const handleEditfloorPlans = async (formData) => {
    debugger
    try {
      formData.append("is_type", "floorPlans");
      await floorPlansEditItem(editfloorPlansData.id, formData, '', "true");
      await fetchAllfloorPlansItems();
      setEditfloorPlansData(null);
    } catch (error) {
      console.error("Error updating floorPlans item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllfloorPlansItems();
    } catch (error) {
      console.error("Error deleting floorPlans item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditfloorPlansData(null);
  };

  useEffect(() => {
    fetchMetadata();
    fetchAllfloorPlansItems();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "heading", label: "Title", type: "text" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
  ];

  const paginatedData = floorPlansItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
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
        <CustomTitle title={editfloorPlansData ? "Edit floor Plans Details" : "Add floor Plans Details"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={floorPlansFields}
          defaultData={editfloorPlansData}
          onSubmit={editfloorPlansData ? handleEditfloorPlans : handleCreatefloorPlans}
          submitButtonText={editfloorPlansData ? "Update" : "Create"}
          cancelButton={editfloorPlansData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="floorPlans Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditfloorPlansData(row);
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((floorPlansItems?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default FloorPlans;