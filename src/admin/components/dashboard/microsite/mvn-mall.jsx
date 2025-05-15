import { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";

const MvnMall = () => {
  const [editData, setEditData] = useState(null);
  const [editmvnMallData, setEditmvnMallData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  // API endpoints
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const mvnMallApi = generateApi("project-elevate-galleries/elevation",0);
  const GalleryApi = generateApi("project-elevate-galleries",0);

    const getApi = generateApi("project-elevate-galleries/mvn-mall");

  // CRUD hooks
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { 
 data: mvnMallItem,
fetchAll: fetchmvnMallItems
  } = useCrud(getApi);
  const {    deleteItem,editItem: mvnMallEditItem,}=useCrud(GalleryApi);
  const { 
    createItem: mvnMallCreateItem, 
  } = useCrud(mvnMallApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form fields
  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 }
  ];

  const mvnMallFields = [
    { name: "image", label: "Image", type: "file", col: 6,isRequired:true },
    { name: "alternative_image", label: "Alternate Image", type: "file", col: 6 },
    { name: "sm_alternative_image", label: "Small Image", type: "file", col: 6,isRequired:true },
    { name: "sm_image", label: "Alternate Image", type: "file", col: 6 },
    { name: "alt", label: "Alt", type: "text", col: 6, placeholder: "Enter Alt text",isRequired:true },
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

  // Fetch mvnMall items
  const fetchAllmvnMallItems = async () => {
    try {
      // Adjust parameters as needed for your API
      await fetchmvnMallItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching mvnMall items:", error);
    }
  };

  // Handle metadata creation
  const handleCreateMeta = async (formData) => {
    try {
      // formData.append("is_type", "iframe");
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

  // Handle mvnMall item creation
  const handleCreatemvnMall = async (formData) => {
    try {
      formData.append("is_type", "mall_galleries");
      // formData.append("project_id", project_id);
      // formData.append("section_type", locationType);
      await mvnMallCreateItem(formData);
      await fetchAllmvnMallItems();
      setEditmvnMallData(null);
    } catch (error) {
      console.error("Error creating mvnMall item:", error);
    }
  };

  // Handle mvnMall item edit
  const handleEditmvnMall = async (formData) => {
    try {
            formData.append("is_type", "mall_galleries");
      await mvnMallEditItem(editmvnMallData.id, formData);
      await fetchAllmvnMallItems();
      setEditmvnMallData(null);
    } catch (error) {
      console.error("Error updating mvnMall item:", error);
    }
  };

  // Handle delete
  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllmvnMallItems();
    } catch (error) {
      console.error("Error deleting mvnMall item:", error);
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditmvnMallData(null);
  };

  // Initial data loading
  useEffect(() => {
    fetchMetadata();
    // fetchAllmvnMallItems();
  }, []);

  // Table columns
  const columns = [
    { key: "", label: "S.No." },
    // { key: "title", label: "Title", type: "text" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
  ];

  // Paginate data
  const paginatedData = mvnMallItem?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
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
        <CustomTitle title={editmvnMallData ? "Edit mvnMall Image" : "Add mvnMall Images"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={mvnMallFields}
          defaultData={editmvnMallData}
          onSubmit={editmvnMallData ? handleEditmvnMall : handleCreatemvnMall}
          submitButtonText={editmvnMallData ? "Update" : "Create"}
          cancelButton={editmvnMallData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="mvnMall Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditmvnMallData(row);
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((mvnMallItem?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default MvnMall;